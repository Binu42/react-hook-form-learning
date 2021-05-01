import { FormControlLabel, Typography, Checkbox } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Form } from '../component/Form';
import { MainContainer } from '../component/MainContainer';
import { PrimaryButton } from '../component/PrimaryButton';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../component/Input';
import { useData } from '../DataContext';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

const schema = yup.object().shape({
  email: yup
    .string()
    .required('This field is Required')
    .email('Please enter valid email.'),
});

const normalizedPhoneNumber = (value) => {
  const phoneNumber = parsePhoneNumberFromString(value);
  if (!phoneNumber)
    return value;
  return phoneNumber.formatInternational();
}

const Step2 = () => {
  const { data, setValues } = useData();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: data.email,
      hasPhone: data.hasPhone,
      phoneNumber: data.phoneNumber,
    },
    resolver: yupResolver(schema),
  });
  const history = useHistory();

  const onSubmit = (data) => {
    setValues(data);
    history.push('/step3');
    console.log(data);
  };

  const hasPhone = watch('hasPhone');
  console.log(hasPhone, errors);

  return (
    <MainContainer>
      <Typography component='h2' variant='h5'>
        🦄 Step 2
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('email')}
          id='email'
          type='email'
          label='Email Address'
          error={!!errors.email}
          helperText={errors?.email?.message}
        />
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked={hasPhone}
              color='primary'
              inputProps={register("hasPhone")}
            />
          }
          label='Do you have a phone'
        />

        {hasPhone && (
          <Input
            {...register('phoneNumber')}
            id='phoneNumber'
            type='tel'
            label='Phone Number'
            error={!!errors.phoneNumber}
            helperText={errors?.phoneNumber?.message}
            onChange={(e) => {
              e.target.value = normalizedPhoneNumber(e.target.value)
            }}
          />
        )}
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};

export default Step2;
