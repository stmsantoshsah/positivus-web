import React from 'react';
import { useFormik } from 'formik';

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.message) {
    errors.message = 'Required';
  } else if (values.name.length > 15) {
    errors.message = 'Invalid message';
  }

  return errors;
};

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      message:''
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className='contactform py-[60px] pl-[100px] w-full max-w-[50%] w-full'>
      <div className='flex flex-col gap-2 mb-5'>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          placeholder='Name'
        />
      </div>
      {formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
    
      <div  className='flex flex-col gap-2 mb-5'>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder='Email'
        />
      </div>
      {formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
      <div  className='flex flex-col gap-2 mb-5'>
        <label htmlFor="message">Message</label>
        <input
          id="message"
          name="message"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.message}
          placeholder='Message'
        />
      </div>
      {formik.errors.message ? <div className='error'>{formik.errors.message}</div> : null}
      <button type="submit" className='primary-btn w-full'>Submit</button>
    </form>
  );
};
export default ContactForm