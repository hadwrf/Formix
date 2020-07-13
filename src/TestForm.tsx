import React from "react";
import {FieldArray, Formik} from "formik";
import "./styles.css";
import {IdentifierFormElement} from "./IdentifierForm";
import * as yup from "yup";

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

export const TestForm = () => {

    return (
        <Formik
            initialValues={{identifierEntity: {}, identifierList: [{value: "", organization: "", id: "" + Math.random()}]}}
            onSubmit={data => {alert(JSON.stringify(data, null, 2))}}
            validationSchema={validationSchema}
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
