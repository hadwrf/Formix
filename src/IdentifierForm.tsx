import React from "react";
import {useField} from "formik";


export const IdentifierFormElement = ({...props }: any) => {
    const [field, meta] = useField(props);
    return (
        <div className="bordered">

            <div>Identifier Form Element</div>
            <label>
                Value
                <input {...field} {...props} name={field.name + ".value"} value={field.value.value}/>
            </label>

            <label>
                Organization
                <input {...field} {...props}  name={field.name + ".organization"} value={field.value.organization}/>
            </label>

        </div>
    );
};
