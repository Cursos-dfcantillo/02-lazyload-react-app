import { ErrorMessage, useField } from "formik"

interface InputProps {
    name: string;
    label: string;
    [key: string]: any
}

export const MyCheckbox  = ({ name, ...props }: InputProps) => {
    const [field] = useField({name, type: 'checkbox' });
    // console.log({ field, meta,props });
    return (
        <>
       <label>
         <input type="checkbox" {...field} {...props} />
         {props.label}
       </label>
       <ErrorMessage name={name} component="span" />
       {/* {meta.touched && meta.error && (
         <span className="error">{meta.error}</span>
       ) } */}
     </>
    )
}
