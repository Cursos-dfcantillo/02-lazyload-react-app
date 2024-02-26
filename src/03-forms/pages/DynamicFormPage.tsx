import { Formik, Form } from 'formik';
import formJson from '../data/custom-form.json';
import { MyInputText, MySelect } from '../components';
import * as yup from 'yup';

const initialValues: { [key: string]: any } = {};
const validationsForm: { [key: string]: any } = {};

formJson.forEach(({ name, value,validations, type }) => {
  initialValues[name] = value;
  if(validations?.length){
    let schema =  yup.string();
    validations.map((validation)=>{
      if(validation.type === "required"){
        schema = schema.required("is required");
      }
      if(validation.type === "min"){
        const value = validation?.minValue ||2;
        schema = schema.min(value,`Minimum ${value} characters`);
      }
      if(validation.type === "email"){
        schema = schema.email("Invalid email address");
      }
    })
    validationsForm[name] =  schema


  }
});

export const DynamicFormPage = () => {

console.log(validationsForm);

  return (
    <div>
      <h1> Dynamic FormPage </h1>
      <Formik 
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={yup.object(validationsForm)}
        >
        {() => (
          <Form noValidate>
            {
              formJson.map(({ name, label, placeholder, type, options }) => {
                if (type === "input" || type === "email" || type === "password") {
                  return <MyInputText key={name} name={name} label={label} placeholder={placeholder} type={(type as any)} />
                }

                if (type === "select") {
                  return <MySelect key={name} name={name} label={label}>
                    <option value="">Pick somenthing</option>
                    {options?.map(({ id, label }) => (<option key={id} value={id}>{label}</option>))}
                  </MySelect>
                }

                throw new Error(`Type ${type} is not supported`);
              })

            }
            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>



    </div>
  )
}
