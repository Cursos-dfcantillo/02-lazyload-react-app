import '../styles/styles.css'
import * as yup from 'yup';
import { Formik,Form} from 'formik';
import { MyInputText, MyInputTextDiego } from '../components';

export const RegisterFormikPage = () => {

  const validationSchema = yup.object({
    name: yup.string().max(15, "Must be 15 characters or less").min(2, "Minimum 3 characters").required("Required"),
    email: yup.string().email("Ivalid email address").required("Required"),
    password: yup.string().min(6, "Must be minumuns 6 characters or more").required("Required"),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "Is confirm password no equal").required("Required")
    .test("valid-campo","El valor del campo no puede ser: 123456",(value)=>{
        if(value === "123456")return false;
        return true;
    }),
  });

  

  return (
    <div>
      <h1>Register Formik Page</h1><br />
      <Formik initialValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      }} onSubmit={(values) => {
        console.log(values);
      }} validationSchema={validationSchema}>
        {({ handleReset }) => (

          <Form>
            <MyInputTextDiego name='name' label='Name'/>

            <MyInputText name='email' label='Email' type='email' placeholder='test@test.com'/>

            <MyInputText name='password' label='Password' type='password' placeholder="Password"/>

            <MyInputText name='confirmPassword' label='Confirm password' type='password' placeholder='Confirm password'/>
            <button type="submit">Create</button>
            <button type="button" onClick={handleReset}>Reset</button>

          </Form>
          // <form noValidate onSubmit={handleSubmit}>
          //   <input type="text" placeholder="Name" {...getFieldProps("name")} />
          //   <ErrorMessage name='name' component="span" />

          //   <input type="email" className={`${!isEmail(errors?.email || ""  ) && 'has-error'}`} placeholder="Email"  {...getFieldProps("email")} />
          //   <ErrorMessage name='email' component="span" />

          //   <input type="password" placeholder="Password"  {...getFieldProps("password")} />
          //   <ErrorMessage name='password' component="span" />
            
          //   <input type="password" placeholder="Confirm password"  {...getFieldProps("confirmPassword")} />
          //   <ErrorMessage name='confirmPassword' component="span" />
          
          //   <button type="submit">Create</button>
          //   <button type="button" onClick={handleReset}>Reset</button>

          // </form>
        )}

      </Formik>

    </div>
  )
}
