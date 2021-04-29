import React from "react";
import DynamicForm from "./DynamicForm";
import SimpleForm from "./SimpleForm";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <div className="container py-5">
        <div className="border-0 shadow text-center p-4 w-50 mx-auto">
          <DynamicForm />
          {/* <SimpleForm /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
