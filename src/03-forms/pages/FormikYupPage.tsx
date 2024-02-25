import '../styles/styles.css'

import { useFormik } from 'formik';
import * as yup from 'yup';

// interface FormValues {
//     firstName: string;
//     lastName: string;
//     email: string;
// }

export const FormikYupPage = () => {

        const { handleSubmit,errors,touched, getFieldProps } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: (values) => {
            console.log(values);

        }
        , validationSchema : yup.object({
            firstName: yup.string().max(15,"Must be 15 characters or less").required("Required"),
            lastName: yup.string().max(15,"Must be 15 characters or less").required("Required"),
            email: yup.string().email("Ivalid email address").required("Required")
        })
    })

     
    return (
        <div>
            <h1>Formik YUP</h1>
            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor="firstName"> First Name</label>
                <input type='text'placeholder='First Name' {...getFieldProps("firstName")} />
                  {touched.firstName && errors.firstName && <span>{errors.firstName }</span>}

                <label htmlFor="lastName"> Last Name</label>
                <input type='text' placeholder='Last Name' {...getFieldProps("lastName")} />
                {touched.lastName && errors.lastName && <span>{errors.lastName }</span>}

                <label htmlFor="Email"> Email</label>
                <input type='email' placeholder='email' {...getFieldProps("lastName")}  />
               {touched.email &&  errors.email && <span>{errors.email }</span>}

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
