import React from "react";
import {FieldArray, Formik} from "formik";
import "./styles.css";
import {IdentifierFormElement} from "./IdentifierForm";
import * as yup from "yup";
import {IFacility} from "./types/types";

const validationSchema = yup.object({
    identifierEntity: yup.object({
        value:yup.string().required().max(10)
    }),
    identifierList: yup.array().of(
        yup.object({
            value: yup.string().required(),
            organization: yup.string().required()
        })
    )
});

interface FacilityFormProps {
    initialValues: IFacility
}

export const FacilityForm = ({initialValues}: FacilityFormProps) => {
    return (
        <Formik
            initialValues={initialValues || {identifierEntity: {value: "dwd"}, identifierList: [{value: "", organization: "", id: "" + Math.random()}]}}
            onSubmit={data => {alert(JSON.stringify(data, null, 2))}}
            validationSchema={validationSchema}
            validateOnChange={false}
        >
            {formik => (
                <>
                    <IdentifierFormElement name="identifierEntity" type="text"/>

                    <FieldArray
                        name="identifierList"
                        validateOnChange
                        render={arrayHelpers => (
                            <div>
                                {formik.values.identifierList.map((identifier, index) => (
                                    <div key={identifier.id}>
                                        <IdentifierFormElement name={`identifierList[${index}]`} type="text"/>
                                        <button type="button" onClick={() => arrayHelpers.remove(index)}>-</button>
                                    </div>
                                ))}
                                <button type="button" onClick={() => arrayHelpers.push({value: "", organization: "", id: "" + Math.random()})}>+</button>
                            </div>
                        )}
                    />

                    <button type="submit">Submit</button>
                    <pre>{JSON.stringify(formik.values, null, 2)}</pre>
                    <pre>{JSON.stringify(formik.errors, null, 2)}</pre>

                </>
            )}

        </Formik>
    );
};
