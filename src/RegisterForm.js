import classNames from 'classnames';
import React from 'react'
import { useForm } from 'react-hook-form'

const RegisterForm = () => {
  const { register, formState: { errors }, getValues, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(errors)

  const FormValidationMsg = ({ name }) => {
    return (
      <>
        {
          errors[name] && (
            <div className='form-text text-danger'>{errors[name].message}</div>
          )
        }
      </>
    )
  }

  return (
    <div className="card shadow">
      <div className="card-header">Create New Account</div>
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              type="text"
              className={classNames("form-control", {
                "is-invalid": errors.email
              })}
              placeholder="Enter Your E-mail Address"
              {...register('email', {
                required: "this field is required.",
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "please enter a valid e-mail address."
                }
              })}
            />
            <FormValidationMsg name="email" />
          </div>
          <div className="form-group">
            <input
              type="password"
              className={classNames("form-control", {
                "is-invalid": errors.password
              })}
              placeholder="Enter Your Password"
              {...register("password", {
                required: "this field required."
              })}
            />
            <FormValidationMsg name="password" />
          </div>
          <div className={classNames("form-group")}>
            <input
              type="password"
              className={classNames("form-control", {
                "is-invalid": errors.confirm_password
              })}
              placeholder="Confirm Your Password"
              {...register('confirm_password', {
                required: "this field required.",
                validate: (value) =>
                  value === getValues("password") || "password doesn't match."
              })}
            />
            <FormValidationMsg name="confirm_password" />
          </div>
          <button className="btn btn-primary" type="submit">
            Create Account
          </button>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm
