import { ErrorMessage, Field } from "formik"

interface InputProps {
    name:string, label:string
}

export const MyInputTextDiego = ({name,label}:InputProps) => {
    return (
        <>
            <label htmlFor={name}> {label}</label>
            <Field name={name}type="text" placeholder={label} />
            {/* <input {...getFieldProps("firstName")} type="text" placeholder="FirstName" /> */}
            <ErrorMessage name={name} component="span" />
        </>
    )
}
