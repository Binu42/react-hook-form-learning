import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';

const ResetForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    reset({
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    })
  }, [])
  return (
    <div className="card shadow">
      <div className="card-header">Update User</div>
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              {...register("name")}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your User Name"
              {...register("username")}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Your E-mail Address"
              {...register("email")}
            />
          </div>
          <div className="form-group form-row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Street"
                {...register("address.street")}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Suite"
                {...register("address.suite")}
              />
            </div>
          </div>
          <div className="form-group form-row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="City"
                {...register("address.city")}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Zipcode"
                {...register("address.zipcode")}
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Phone Number"
              {...register("phone")}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Website Name"
              {...register("website")}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Company Name"
              {...register("company.name")}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Company catch phrase"
              {...register("company.catchPhrase")}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Company bs"
              {...register("company.bs")}
            />
          </div>
          <button className="btn btn-warning" type="submit">
            Update User
          </button>
        </form>
      </div>
    </div>
  )
}

export default ResetForm
