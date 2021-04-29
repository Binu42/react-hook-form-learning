import React from 'react'
import { useForm } from 'react-hook-form'

const SimpleForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <div className="card">
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <div className="form-group">
          <label htmlFor="state">Select Your State</label>
          <select className="form-control" id="state" {...register("state")}>
            <option value="">Select Your State</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Bihar">Bihar</option>
            <option value="Assam">Assam</option>
            <option value="Goa">Goa</option>
            <option value="Manipur">Manipur</option>
          </select>
        </div>

        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" id="male" value="male" {...register("gender")} />
          <label className="form-check-label" htmlFor="male">male</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" id="female" value="female" {...register("gender")} />
          <label className="form-check-label" htmlFor="female">female</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" id="other" value="other" {...register("gender")} />
          <label className="form-check-label" htmlFor="other">other</label>
        </div>

        <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" id="terms" value="agree" {...register("term_and_condition")} />
          <label className="form-check-label" htmlFor="terms">I agree all terms and conditons</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" id="updates" {...register("send_me_updates")} />
          <label className="form-check-label" htmlFor="updates">send me latest Bootstrap updates</label>
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SimpleForm
