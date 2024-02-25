import '../styles/styles.css'

import { FormikErrors, useFormik } from 'formik';
import { isEmail } from 'validator';


interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikBasicPage = () => {

    const validate = ({ firstName, lastName, email }: FormValues) => {
        const errors: FormikErrors<FormValues> = {};
        if (!firstName) { errors.firstName = "Required"; }
        else if (firstName.length > 15) {
            errors.firstName = "Must be 15 characters or less";
        }

        if (!lastName) { errors.lastName = "Required"; }
        else if (lastName.length > 10) {
            errors.lastName = "Must be 10 characters or less";
        }

        if (!email) { errors.email = "Required"; }
        else if (!isEmail(email)) {
            errors.email = "No email address valid";
        }

        return errors;
    }

    const { handleSubmit, handleChange, values,errors,touched,handleBlur } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: (values) => {
            console.log(values);

        }
        , validate
    })

    
    return (
        <div>
            <h1>Base tutorial</h1>
            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor="firstName"> First Name</label>
                <input type='text' name="firstName" placeholder='First Name'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstName}
                />
                  {touched.firstName && errors.firstName && <span>{errors.firstName }</span>}

                <label htmlFor="lastName"> Last Name</label>
                <input type='text' name="lastName" placeholder='Last Name'
                   onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.lastName}
                />
                {touched.lastName && errors.lastName && <span>{errors.lastName }</span>}

                <label htmlFor="Email"> Email</label>
                <input type='email' name="email" placeholder='email'
                   onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                />
               {touched.email &&  errors.email && <span>{errors.email }</span>}
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}