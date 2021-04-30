import React from "react";
import DynamicForm from "./DynamicForm";
import Form from "./NestedForm/Form";
import RegisterForm from "./RegisterForm";
import ResetForm from "./ResetForm";
import SimpleForm from "./SimpleForm";
import "./styles/App.scss";
import ValidationForm from "./ValidationForm";
import { useForm, FormProvider } from "react-hook-form";
import ImageForm from "./ImageForm";

function App() {
  const methods = useForm();
  return (
    <div className="App">
      <div className="container py-5">
        <div className="border-0 shadow p-4 w-100 mx-auto">
          {/* <DynamicForm /> */}
          {/* <SimpleForm /> */}
          {/* <ValidationForm /> */}
          {/* <RegisterForm /> */}
          {/* <ResetForm /> */}
          {/* <FormProvider {...methods}>
            <Form methods={methods} />
          </FormProvider> */}
          <ImageForm />
        </div>
      </div>
    </div>
  );
}

export default App;
