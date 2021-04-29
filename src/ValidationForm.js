import React from 'react';
import { useForm } from 'react-hook-form';
import className from 'classnames';

const ValidationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const FieldErrorMsg = ({ name }) => {
    return (
      <>
        {errors[name] && (
          <div className='form-text text-danger'>{errors[name].message}</div>
        )}
      </>
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='form-group'>
        <div className='form-group'>
          <label htmlFor='fullname'>Full Name</label>
          <input
            type='text'
            className={className('form-control', {
              'is-invalid': errors.fullName,
            })}
            id='fullname'
            {...register('fullName', {
              required: 'This Field is Required',
              minLength: { value: 4, message: 'fullName must be of length 4' },
            })}
          />
          <FieldErrorMsg name='fullName' />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email address</label>
          <input
            type='email'
            className={className('form-control', {
              'is-invalid': errors.email,
            })}
            id='email'
            {...register('email', {
              required: 'This Field is Required', pattern: {
                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "please enter valid email address"
              }
            })}
          />
          <FieldErrorMsg name='email' />
        </div>
        <div className='form-group'>
          <label htmlFor='phone'>Phone Number</label>
          <input
            type='text'
            className={className('form-control', {
              'is-invalid': errors.phone,
            })}
            id='phone'
            {...register('phone', {
              required: 'This Field is Required', pattern: {
                value: /^\d{10}$/,
                message: "please enter valid phone number"
              }
            })}
          />
          <FieldErrorMsg name='phone' />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            className={className('form-control', {
              'is-invalid': errors.password,
            })}
            id='password'
            {...register('password', {
              required: 'This Field is Required', pattern: {
                value: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                message: "UpperCase, LowerCase, Number/SpecialChar and min 8 Chars"
              }
            })}
          />
          <FieldErrorMsg name='password' />
        </div>
        <div className='form-group'>
          <label htmlFor='state'>Select Your State</label>
          <select
            className={className('form-control', {
              'is-invalid': errors.state,
            })}
            id='state'
            {...register('state', { required: 'This Field is Required' })}
          >
            <option value=''>Select Your State</option>
            <option value='Jharkhand'>Jharkhand</option>
            <option value='Bihar'>Bihar</option>
            <option value='Assam'>Assam</option>
            <option value='Goa'>Goa</option>
            <option value='Manipur'>Manipur</option>
          </select>
          <FieldErrorMsg name='state' />
        </div>

        <div className='form-check form-check-inline'>
          <input
            className='form-check-input'
            type='radio'
            id='male'
            value='male'
            {...register('gender', { required: 'please select your gender' })}
          />
          <label className='form-check-label' htmlFor='male'>
            male
          </label>
        </div>
        <div className='form-check form-check-inline'>
          <input
            className='form-check-input'
            type='radio'
            id='female'
            value='female'
            {...register('gender', { required: 'please select your gender' })}
          />
          <label className='form-check-label' htmlFor='female'>
            female
          </label>
        </div>
        <div className='form-check form-check-inline'>
          <input
            className='form-check-input'
            type='radio'
            id='other'
            value='other'
            {...register('gender', { required: 'please select your gender' })}
          />
          <label className='form-check-label' htmlFor='other'>
            other
          </label>
          <FieldErrorMsg name='gender' />
        </div>
        <br />
        <div className='form-check form-check-inline'>
          <input
            className='form-check-input'
            type='checkbox'
            id='terms'
            value='agree'
            {...register('term_and_condition', {
              required: 'please accept for it',
            })}
          />
          <label className='form-check-label' htmlFor='terms'>
            I agree all terms and conditons
          </label>
          <FieldErrorMsg name='term_and_condition' />
        </div>
        <div className='form-check form-check-inline'>
          <input
            className='form-check-input'
            type='checkbox'
            id='updates'
            {...register('send_me_updates', {
              required: 'please accept for it',
            })}
          />
          <label className='form-check-label' htmlFor='updates'>
            send me latest Bootstrap updates
          </label>
          <FieldErrorMsg name='send_me_updates' />
        </div>
      </div>
      <button className='btn btn-primary'>Create New Account</button>
    </form>
  );
};

export default ValidationForm;
