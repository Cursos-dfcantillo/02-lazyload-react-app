import '../styles/styles.css'

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

// interface FormValues {
//     firstName: string;
//     lastName: string;
//     email: string;
// }

export const FormikComponent = () => {
    const validationSchema = yup.object({
        firstName: yup.string().max(15, "Must be 15 characters or less").required("Required"),
        lastName: yup.string().max(15, "Must be 15 characters or less").required("Required"),
        email: yup.string().email("Ivalid email address").required("Required"),
        terms: yup.boolean().isTrue("Accept terms, please"),
        jobType: yup.string().notOneOf(["It-Junior"],"It-Junior not valid").required("Required")

    });


    return (
        <div>
            <h1>Formik Components</h1>
            <Formik
                initialValues={{ firstName: '', lastName: '', email: '', terms: false, jobType: "" }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={validationSchema}
            >
                {({ /*Propiedades de la función*/ }) => (


                    <Form noValidate >
                        <label htmlFor="firstName"> First Name</label>
                        <Field name="firstName" type="text" placeholder="FirstName" />
                        {/* <input {...getFieldProps("firstName")} type="text" placeholder="FirstName" /> */}
                        <ErrorMessage name='firstName' component="span" />

                        <label htmlFor="lastName"> Last Name</label>
                        <Field name="lastName" type="text" placeholder="LastName" />
                        <ErrorMessage name='lastName' component="span" />

                        <label htmlFor="email"> Email</label>
                        <Field name="email" type="text" placeholder="Email" />
                        <ErrorMessage name='email' component="span" />

                        <label htmlFor="jobType"> Job Type</label>
                        <Field name="jobType" as="select">

                            <option value="">Pick somenthing</option>
                            <option value="Developers">Developers</option>
                            <option value="Designer">Designer</option>
                            <option value="It-Senior">It Senior</option>
                            <option value="It-Junior">It Junior</option>
                            <option value="Testing">Testing</option>
                        </Field>
                        <ErrorMessage name='jobType' component="span" />

                        <label> Terms and conditions
                            <Field name="terms" type="checkbox" />
                        </label>
                        <ErrorMessage name='terms' component="span" />



                        <button type='submit'>Submit</button>
                    </Form>
                )}

            </Formik>

        </div>
    )
}
