import { ChangeEvent, useEffect, useState } from "react";

export interface Validators {
    name: string,
    isValid: (value: any) => boolean,
    message: string
}

interface ErrorValidate {
     [key: string]: {invalid:boolean,message:string}
}

export const useForm = <T>(initialState: T, validators?: Validators[]) => {
    const [formData, setFormData] = useState(initialState)
    const [isValidForm, setIsValidForm] = useState(false);
    const [errorValidate, setErrorValidate] = useState<ErrorValidate>({});


    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    useEffect(() => {
        if (validators) {
            const newErrors: ErrorValidate = {};
            let nameValid = "";
            validators.forEach(validator => {
                nameValid = `${validator.name}Valid`;
                const value = formData[validator.name];
                const isNotValid = !validator.isValid(value);
                newErrors[nameValid] = {invalid: isNotValid, message: validator.message};
                // newErrors.message = "Correo in"
            });
            const data:any = {...errorValidate,...newErrors} ;
            if(!newErrors[nameValid].invalid){
                delete data[nameValid]
            }
            setErrorValidate(data);
        }
    }, [formData, validators]);

    


    const reset = () => {
        setFormData(initialState);
    }

    return {
        ...formData,
        formData,
        //Methods
        onChange,
        reset,errorValidate
    }
}