import { ErrorMessage, useField } from "formik"

interface InputProps {
    name: string;
    label: string;
    [key: string]: any
}

export const MySelect = ({ name, ...props }: InputProps) => {
    const [field] = useField(name);
    // console.log({ field, meta,props });
    return (
        <>
            <label htmlFor={props.id || props.name}>{props.label}</label>
            <select {...field} {...props} />
            <ErrorMessage name={name} component="span" />
            {/* {meta.touched && meta.error && (
                <span className="error">{meta.error}</span>
            )
            } */}
        </>
    )
}
