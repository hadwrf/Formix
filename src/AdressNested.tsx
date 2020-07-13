import * as React from 'react';
import { Formik, Field } from 'formik';

const NestedForm = () => {
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                mobilePhone: '',
                homeAddress: {
                    type: 'home',
                    street_address: '',
                    city: '',
                    state: '',
                    zipcode: '',
                },
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 500);
            }}>
            {(formik) => {
                return (
                    <>
                        <h4>Required</h4>
                        <Field
                            name="firstName"
                            className={'mb24 mt12'}
                            onChange={formik.handleChange}
                            placeholder={'First name'}
                        />
                        <Field
                            name="lastName"
                            className={'mb24 mt12'}
                            onChange={formik.handleChange}
                            placeholder={'Last name'}
                        />
                        <Field
                            name="email"
                            className={'mb24 mt12'}
                            onChange={formik.handleChange}
                            placeholder={'Email'}
                        />
                        <Field
                            name="mobilePhone"
                            className={'mb24 mt12'}
                            onChange={formik.handleChange}
                            placeholder={'Mobile phone'}
                        />
                        <br />
                        <Formik
                        initialValues={{sd: ""}}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 500);
                        }}
                        >
                            {(subformik) => {
                                return (
                                    <section>
                                        <div>
                                            <h4>Home address</h4>
                                            <Field
                                                name="homeAddress.street_address"
                                                className={'mb24 mt12'}
                                                onChange={formik.handleChange}
                                                placeholder={'street address'}
                                            />
                                            <Field
                                                name="homeAddress.city"
                                                className={'mb24 mt12'}
                                                onChange={formik.handleChange}
                                                placeholder={'city'}
                                            />
                                            <Field
                                                name="homeAddress.state"
                                                className={'mb24 mt12'}
                                                onChange={formik.handleChange}
                                                placeholder={'state'}
                                            />
                                            <Field
                                                name="homeAddress.zipcode"
                                                className={'mb24 mt12'}
                                                onChange={formik.handleChange}
                                                placeholder={'zipcode'}
                                            />
                                        </div>
                                        <button
                                            color="primary"
                                            onClick={() => formik.handleSubmit()}>
                                            Submit
                                        </button>
                                    </section>
                                );
                            }}
                        </Formik>
                    </>
                );
            }}
        </Formik>
    );
};

export default NestedForm;