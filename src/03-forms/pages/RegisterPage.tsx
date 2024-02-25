import { FormEvent } from 'react'
import '../styles/styles.css'
import { Validators, useForm } from '../hooks';
import { isEmail, equals } from 'validator';

interface RegisterForm {
    name: string,
    email: string,
    password: string,
    confirmPassword: string
}




const validator: Validators[] = [
 {name:"email", isValid: (value:string)=> isEmail(value),message:"This email no is valid"},
 {name:"name", isValid: (value:string)=> value.length > 0, message:"Is required"},
]
export const RegisterPage = () => {
  const { onChange, reset, formData: registerData, name, email, password, confirmPassword,errorValidate } = useForm<RegisterForm>({
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
  },validator)


console.log(errorValidate);


  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(registerData);

  }

  return (
    <div>
      <h1>Register Pages</h1><br />
      <form noValidate onSubmit={onSubmit}>
        <input type="text" placeholder="Name" name="name" value={name} onChange={onChange} />
        <input type="email" className={`${!isEmail(email) && 'has-error'}`} placeholder="Email" name="email" value={email} onChange={onChange} />
        {!isEmail(email) && <span>This email no is valid</span>}
        <input type="password" placeholder="Password" name="password" value={password} onChange={onChange} />
        <input type="password" placeholder="Confirm password" name="confirmPassword" value={confirmPassword} onChange={onChange} />
        {(!equals(password, confirmPassword) && confirmPassword.trim().length > 0) && <span>Is confirm password no equal</span>}
        <button type="submit">Create</button>
        <button type="button" onClick={reset}>Reset</button>

      </form>
    </div>
  )
}
