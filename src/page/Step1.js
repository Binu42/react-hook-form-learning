import { Typography } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Form } from '../component/Form';
import { MainContainer } from '../component/MainContainer';
import { PrimaryButton } from '../component/PrimaryButton';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '../component/Input';
import { useData } from '../DataContext';

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required('This field is Required')
    .matches(/^([^0-9]*)$/, 'First name should not contain numbers'),
  lastName: yup
    .string()
    .required('This field is Required')
    .matches(/^([^0-9]*)$/, 'Last name should not contain numbers')
});

const Step1 = () => {
  const { data, setValues } = useData();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      firstName: data.firstName,
      lastName: data.lastName
    },
    resolver: yupResolver(schema)
  });
  const history = useHistory();

  const onSubmit = (data) => {
    setValues(data);
    history.push('/step2');
  };

  return (
    <MainContainer>
      <Typography component='h2' variant='h5'>
        🦄 Step 1
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('firstName')}
          id='firstName'
          type='text'
          label='First Name'
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
        />
        <Input
          {...register('lastName')}
          id='lastName'
          type='text'
          label='Last Name'
          error={!!errors.lastName}
          helperText={errors?.lastName?.message}
        />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};

export default Step1;
