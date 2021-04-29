import React from "react";
import DynamicForm from "./DynamicForm";
import SimpleForm from "./SimpleForm";
import "./styles/App.scss";
import ValidationForm from "./ValidationForm";

function App() {
  return (
    <div className="App">
      <div className="container py-5">
        <div className="border-0 shadow p-4 w-100 mx-auto">
          {/* <DynamicForm /> */}
          {/* <SimpleForm /> */}
          <ValidationForm />
        </div>
      </div>
    </div>
  );
}

export default App;
