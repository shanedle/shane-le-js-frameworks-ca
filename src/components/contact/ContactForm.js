import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, Button, Col, Form } from "react-bootstrap";
import ContactError from "./ContactError";

const schema = yup.object().shape({
    firstName: yup
        .string()
        .required("First name is required.")
        .min(2, "First name must be at least 2 characters!"),
    lastName: yup
        .string()
        .required("Last name is required.")
        .min(2, "Last name must be at least 2 characters!"),
    email: yup
        .string()
        .required("Email is required.")
        .email("Email must be entered!"),
    message: yup
        .string()
        .required("Message is required.")
        .min(10, "Message must be at least 10 characters!")
});

const Contact = () => {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    const [validate, setValidate] = useState(false);

    const onSubmit = (data, e) => {
        console.log("data", data);
        setValidate(true);
        e.target.reset();
    }

    return (
        <Form className="contact-form my-3" onSubmit={handleSubmit(onSubmit)}>
            {validate &&
                <Alert variant="success" onClose={() => setValidate(false)} dismissible className="my-3">
                    <Alert.Heading>Thank you!</Alert.Heading>
                    <p>Your message has been successfully sent. We will contact you very soon!</p>
                </Alert>
            }
            <Form.Row>
                <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>First name*</Form.Label>
                    <Form.Control name="firstName" placeholder="Enter your first name" ref={register} />
                    {errors.firstName && <ContactError>{errors.firstName.message}</ContactError>}
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Last name*</Form.Label>
                    <Form.Control name="lastName" placeholder="Enter your last name" ref={register} />
                    {errors.lastName && <ContactError>{errors.lastName.message}</ContactError>}
                </Form.Group>
            </Form.Row>

            <Form.Group>
                <Form.Label>Your email address*</Form.Label>
                <Form.Control name="email" placeholder="Enter your email" ref={register} />
                {errors.email && <ContactError>{errors.email.message}</ContactError>}
            </Form.Group>

            <Form.Group>
                <Form.Label>Please describe your issue*</Form.Label>
                <Form.Control name="message" as="textarea" placeholder="Enter your message" ref={register} />
                {errors.message && <ContactError>{errors.message.message}</ContactError>}
            </Form.Group>

            <Button type="submit" size="lg" className="contact-form__button" block>Submit</Button>
        </Form>
    );
}

export default Contact;