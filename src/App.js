import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Header } from "./component/Header";
import Result from "./page/Result";
import Step1 from "./page/Step1";
import Step2 from "./page/Step2";
import Step3 from "./page/Step3";
// import DynamicForm from "./DynamicForm";
// import Form from "./NestedForm/Form";
// import RegisterForm from "./RegisterForm";
// import ResetForm from "./ResetForm";
// import SimpleForm from "./SimpleForm";
import "./styles/App.scss";
// import ValidationForm from "./ValidationForm";
// import { useForm, FormProvider } from "react-hook-form";
// import ImageForm from "./ImageForm";

function App() {
  // const methods = useForm();
  return (
    // <div className="App">
    //   <div className="container py-5">
    //     <div className="border-0 shadow p-4 w-100 mx-auto">
    //       {/* <DynamicForm /> */}
    //       {/* <SimpleForm /> */}
    //       {/* <ValidationForm /> */}
    //       {/* <RegisterForm /> */}
    //       {/* <ResetForm /> */}
    //       {/* <FormProvider {...methods}>
    //         <Form methods={methods} />
    //       </FormProvider> */}
    //       {/* <ImageForm /> */}
    //     </div>
    //   </div>
    // </div>
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Step1} />
          <Route exact path="/step2" component={Step2} />
          <Route exact path="/step3" component={Step3} />
          <Route exact path="/result" component={Result} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
