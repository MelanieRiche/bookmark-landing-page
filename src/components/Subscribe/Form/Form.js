import { useState } from 'react';
import FormTemplate from './FormTemplate';

const emailValidation = email => {
  const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  if (!re.test(email) || email.trim() === '') {
    return true;
  }

  return false;
};

const Form = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState();

  const handleChange = e => {
    setValue(e.target.value);
    if (error) {
      setError(emailValidation(value) ? true : false);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validate = emailValidation(value);
    setError(validate ? true : false);

    if (!validate) {
      setError(false);
      alert(JSON.stringify(value, null, 5));
      setValue('');
    }
  };

  return (
    <>
      <FormTemplate
        onChange={handleChange}
        onSubmit={handleSubmit}
        value={value}
        error={error}
      />
    </>
  );
};

export default Form;
