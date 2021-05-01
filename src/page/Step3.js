import { Typography } from '@material-ui/core'
import React from 'react'
import { Form } from '../component/Form'
import { MainContainer } from '../component/MainContainer'
import { PrimaryButton } from '../component/PrimaryButton'
import { FileInput } from '../component/FileInput'
import { useHistory } from 'react-router-dom'
import { useData } from '../DataContext'
import { useForm } from 'react-hook-form'

const Step3 = () => {
  const history = useHistory();
  const { data, setValues } = useData();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      files: data.files,
    },
  });

  const onSubmit = (data) => {
    history.push("./result");
    setValues(data);
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        🦄 Step 3
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FileInput name="files" control={control} />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  )
}

export default Step3
