import { ErrorMessage, useField } from "formik"

interface InputProps {
    name: string;
    label: string;
    type?: "text" | "email" | "password";
    placeholder?: string;
    [key: string]: any
}

export const MyInputText = ({ name, ...props }: InputProps) => {
    const [field] = useField(name);
    // console.log({ field, meta });

    return (
        <>
            <label htmlFor={props.id || name}> {props.label}</label>
            <input className="text-input"  {...field} {...props} />
            <ErrorMessage name={name} component="span" />
            {/* {meta.touched && meta.error && (
                <span className="error">{meta.error}</span>
            )
            } */}
        </>
    )
}
