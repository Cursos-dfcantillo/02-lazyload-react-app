import '../styles/styles.css'

import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { MyInputTextDiego,MyInputText,MySelect,MyCheckbox } from '../components';

export const FormikAbstraction = () => {
    const validationSchema = yup.object({
        firstName: yup.string().max(15, "Must be 15 characters or less").required("Required"),
        lastName: yup.string().max(15, "Must be 15 characters or less").required("Required"),
        email: yup.string().email("Ivalid email address").required("Required"),
        terms: yup.boolean().isTrue("Accept terms, please"),
        jobType: yup.string().notOneOf(["It-Junior"],"It-Junior not valid").required("Required")

    });


    return (
        <div>
            <h1>Formik Abstraction</h1>
            <Formik
                initialValues={{ firstName: '', lastName: '', email: '', terms: false, jobType: "" }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={validationSchema}
            >
                {({ /*Propiedades de la función*/ }) => (


                    <Form noValidate >
                        <MyInputTextDiego label='First Name' name='firstName'/>

                        <MyInputText label='Last Name' name='lastName' placeholder='Last Name'/>

                        <MyInputText label='Email' name='email' placeholder='Email' type='email'/>

                        <MySelect name="jobType" label='Job Type'>
                        <option value="">Pick somenthing</option>
                            <option value="Developers">Developers</option>
                            <option value="Designer">Designer</option>
                            <option value="It-Senior">It Senior</option>
                            <option value="It-Junior">It Junior</option>
                            <option value="Testing">Testing</option>
                        </MySelect>

                        <MyCheckbox name="terms" label='Terms and conditions'/>
                       


                        <button type='submit'>Submit</button>
                    </Form>
                )}

            </Formik>

        </div>
    )
}
