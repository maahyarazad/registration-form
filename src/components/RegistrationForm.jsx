import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from "axios";

const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    birthdate: Yup.date().required("Birthdate is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
    whatsappNumber: Yup.string().required("WhatsApp Number is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    consent: Yup.boolean().oneOf([true], "You must confirm that you have a valid proof of identification")
});

const RegistrationForm = () => {
    const [submitted, setSuccess] = useState(false);
    const server_api = import.meta.env.VITE_SERVER_API
    const handleSubmit = async (values) => {

        console.log(values);


        const trimmedValues = Object.fromEntries(
            Object.entries(values).map(([key, val]) => [key, typeof val === 'string' ? val.trim() : val])
        );

        try {
            const response = await axios.post(`${server_api}/api/forum-registration`, trimmedValues);
            setSuccess(true)
        } catch (error) {
            console.error(error);
            setMessage('Failed to submit registration.');
        }

    };
    const initialValues = {
        fullName: "",
        birthdate: "",
        phoneNumber: "",
        whatsappNumber: "",
        email: "",
        consent: false
    };


    return (
        <>
            <div className={`thank-you-message ${submitted ? "show" : ""} `}>
                <h2 style={{ paddingBottom: "1em" }}>Thank you for registering!</h2>
                <h4 style={{ paddingBottom: "1em" }}>
                    Your registration for the German Forum 2025 has been successfully received. We appreciate your interest and look forward to your participation.
                </h4>
                <h4 className="text-success">
                    Please remember to bring a valid ID card with you on the day of the forum for verification purposes.
                </h4>
            </div>
            <div className={`container-fluid registration-form-container ${submitted ? "hide" : ""}`}>

                <h1 className="mb-4 text-start">Participant Registration – German Forum 2025</h1>
                <h4 className="mb-4 text-start">Date: 17th June 2025</h4>
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-10"> {/* Full width on desktop, padded on smaller screens */}
                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                            {({ values, setFieldValue, errors, touched }) => (
                                <Form>
                                    {/* Full Name */}
                                    <div className="row mb-3 align-items-center">
                                        <label htmlFor="fullName" className="col-sm-3 col-form-label text-start">Full Name</label>
                                        <div className="col-sm-9">
                                            <Field name="fullName" type="text"
                                                className={`form-control ${errors.fullName && touched.fullName ? 'input-error' : ''}`} />
                                            <div style={{ minHeight: "22px" }} className="text-start">

                                                <ErrorMessage name="fullName" component="div" className="text-danger small" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Birthdate */}
                                    <div className="row mb-3 align-items-center">
                                        <label htmlFor="birthdate" className="col-sm-3 col-form-label text-start">Birthdate</label>
                                        <div className="col-sm-9">
                                            {/* <Field name="birthdate" type="date" className="form-control" /> */}

                                            <DatePicker
                                                id="birthdate"
                                                selected={values.birthdate ? new Date(values.birthdate) : null}
                                                onChange={(date) => {
                                                    const formattedDate = date ? date.toISOString().split("T")[0] : "";
                                                    setFieldValue("birthdate", formattedDate);
                                                }}
                                                dateFormat="yyyy-MM-dd"
                                                placeholderText="yyyy-MM-dd"
                                                className={`form-control ${errors.fullName && touched.fullName ? 'input-error' : ''}`}
                                                maxDate={new Date()}
                                                showMonthDropdown
                                                showYearDropdown

                                                dropdownMode="select"
                                            />
                                            <div style={{ minHeight: "22px" }} className="text-start">

                                                <ErrorMessage name="birthdate" component="div" className="text-danger small" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Phone Number */}
                                    <div className="row mb-3 align-items-center">
                                        <label htmlFor="phoneNumber" className="col-sm-3 col-form-label text-start">Phone Number</label>
                                        <div className="col-sm-9">
                                            <Field name="phoneNumber" type="tel"
                                                className={`form-control ${errors.fullName && touched.fullName ? 'input-error' : ''}`}
                                                pattern="^(\+?[0-9]{1,3}-)?[0-9]{3}-[0-9]{3}-[0-9]{4}$"
                                                title="Phone number must be in the format: +1-123-456-7890 or 123-456-7890" />
                                            <div style={{ minHeight: "22px" }} className="text-start">

                                                <ErrorMessage name="phoneNumber" component="div" className="text-danger small" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* WhatsApp Number */}
                                    <div className="row mb-3 align-items-center">
                                        <label htmlFor="whatsappNumber" className="col-sm-3 col-form-label text-start">WhatsApp Number</label>
                                        <div className="col-sm-9">
                                            <Field name="whatsappNumber" type="tel" className={`form-control ${errors.fullName && touched.fullName ? 'input-error' : ''}`} 
                                                pattern="^(\+?[0-9]{1,3}-)?[0-9]{3}-[0-9]{3}-[0-9]{4}$"
                                                title="Phone number must be in the format: +1-123-456-7890 or 123-456-7890" />
                                            <div style={{ minHeight: "22px" }} className="text-start">

                                                <ErrorMessage name="whatsappNumber" component="div" className="text-danger small" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="row mb-3 align-items-center">
                                        <label htmlFor="email" className="col-sm-3 col-form-label text-start">Email</label>
                                        <div className="col-sm-9">
                                            <Field name="email" type="email" className={`form-control ${errors.fullName && touched.fullName ? 'input-error' : ''}`} />
                                            <div style={{ minHeight: "22px" }} className="text-start">

                                                <ErrorMessage name="email" component="div" className="text-danger small" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Proof of Identification Consent */}
                                    <div className="row mb-3 align-items-center">
                                        <div style={{ minHeight: "22px" }} className="text-start">
                                            <ErrorMessage name="consent" component="div" className="text-danger small" />
                                        </div>
                                        <label htmlFor="email" className="col-sm-9 col-form-label text-start">
                                            I confirm that I have a valid proof of identification and consent to present it at the venue.

                                        </label>

                                        <div className="col-sm-3">
                                            <div className="d-flex justify-content-end">

                                                <Field
                                                    className={`form-check-input ${errors.fullName && touched.fullName ? 'input-error' : ''}`}
                                                    name="consent"
                                                    type="checkbox"

                                                    id="consent"
                                                />
                                            </div>

                                        </div>
                                    </div>


                                    {/* Submit */}
                                    <div className="text-end mt-4">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </>


    );
}
export default RegistrationForm;
