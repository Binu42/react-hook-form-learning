import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form'

const UserForm = ({ register, control }) => {
  const { append, remove, fields } = useFieldArray({
    control,
    name: "users"
  });
  console.log(fields);
  return (
    <div className="card mt-4">
      <div className="card-header">User Info</div>
      <div className="card-body">
        {
          fields.map((item, i) => {
            return (
              <div key={item.id} className="form-row form-group">
                <div className="col">
                  <input type="text" className="form-control" placeholder="Enter Your First name" {...register(`users[${i}].firstName`)} defaultValue={item.firstName} />
                </div>
                <div className="col">
                  <input type="text" className="form-control" placeholder="Enter Your Last name"  {...register(`users[${i}].lastName`)} defaultValue={item.lastName} />
                </div>
                <div className="col">
                  <input type="text" className="form-control" placeholder="Enter Your E-mail Address" {...register(`users[${i}].email`)} defaultValue={item.email} />
                </div>
                <div className="col">
                  <label htmlFor="state">Select Your State</label>
                  <select className="form-control" id="state" {...register(`users[${i}].state`)} defaultValue={item.state}>
                    <option value="">Select Your State</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Assam">Assam</option>
                    <option value="Goa">Goa</option>
                    <option value="Manipur">Manipur</option>
                  </select>
                </div>
                <button className="btn btn-danger" onClick={() => remove(i)}>Delete</button>
              </div>
            )
          })
        }
        <button className="btn btn-primary" type="button" onClick={() => append({ firstName: "", lastName: "", email: "", state: "" })}>Add user</button>
      </div>
    </div>
  )
}

const DynamicForm = () => {
  const { register, handleSubmit, control } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }
  const BasicForm = (
    <div className="card">
      <div className="card-header">Basic Information</div>
      <div className="card-body">
        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input type="text" className="form-control" id="fullname" {...register("fullName")} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" {...register("lastName")} />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="text" className="form-control" id="phone" {...register("phone")} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" {...register("password")} />
        </div>
      </div>
    </div>
  )
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {BasicForm}
      <UserForm register={register} control={control} />
      <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  )
}

export default DynamicForm
