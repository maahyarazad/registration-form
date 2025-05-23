import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    birthdate: Yup.date().required("Birthdate is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
    whatsappNumber: Yup.string().required("WhatsApp Number is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
});

const RegistrationForm = () => {
    const initialValues = {
        fullName: "",
        birthdate: "",
        phoneNumber: "",
        whatsappNumber: "",
        email: "",
    };

    const handleSubmit = (values) => {
        console.log("Form submitted:", values);
    };

    return (
        <div className="container registration-form-container ">
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {() => (
                    <Form>

                        <div className="row">
                            <div className="col">
                                <label htmlFor="fullName" className="text-start">Full Name</label>
                                <div className="">
                                    <Field name="fullName" type="text" className="form-control" />
                                    <ErrorMessage name="fullName" component="div" className="text-danger small mt-1" />
                                </div>
                            </div>

                            <div className="col">
                                <label htmlFor="birthdate" className="col-sm-3 col-form-label text-start">Birthdate</label>
                                <div className="col-sm-9">
                                    <Field name="birthdate" type="date" className="form-control" />
                                    <ErrorMessage name="birthdate" component="div" className="text-danger small mt-1" />
                                </div>
                            </div>

                        </div>

                        <div className="row">
                            <div className="col">
                                <label htmlFor="phoneNumber" className="col-sm-3 col-form-label text-start">Phone Number</label>
                                <div className="col-sm-9">
                                    <Field name="phoneNumber" type="tel" className="form-control" />
                                    <ErrorMessage name="phoneNumber" component="div" className="text-danger small mt-1" />
                                </div>
                            </div>


                            <div className="col">
                                <label htmlFor="whatsappNumber" className="col-sm-3 col-form-label text-start">WhatsApp Number</label>
                                <div className="col-sm-9">
                                    <Field name="whatsappNumber" type="tel" className="form-control" />
                                    <ErrorMessage name="whatsappNumber" component="div" className="text-danger small mt-1" />
                                </div>
                            </div>
                        </div>


                        <div className="row">

                            <div className="col">
                                <label htmlFor="email" className="col-sm-3 col-form-label text-start">Email</label>
                                <div className="col-sm-9">
                                    <Field name="email" type="email" className="form-control" />
                                    <ErrorMessage name="email" component="div" className="text-danger small mt-1" />
                                </div>
                            </div>
                        </div>






                        <div className="text-center mt-4">
                            <button type="submit" className="btn btn-primary w-100">Submit</button>
                        </div>
                    </Form>
                )}
            </Formik>

        </div>


    );
}
export default RegistrationForm;
