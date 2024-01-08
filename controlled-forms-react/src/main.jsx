import React from 'react'
import ReactDOM from 'react-dom/client'
import Form from './Form';
import SignupForm from './SignupForm';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Form />
    <hr/>
    <SignupForm/>
  </React.StrictMode>,
)
