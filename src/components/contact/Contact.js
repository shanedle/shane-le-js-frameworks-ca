import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import ErrorMessage from './ErrorMessage';

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

function Contact() {
	const { register, handleSubmit, errors } = useForm({
		    resolver: yupResolver(schema),
	});

	function onSubmit(data) {
		console.log("data", data);
	}

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<Form.Row>
				<Form.Group as={Col} controlId="formGridFirstName">
					<Form.Label>First Name</Form.Label>
					<Form.Control name="firstName" placeholder="Enter your first name" ref={register} />
					{errors.firstName && <ErrorMessage>{errors.firstName.message}</ErrorMessage>}
				</Form.Group>

				<Form.Group as={Col} controlId="formGridLastName">
					<Form.Label>Last Name</Form.Label>
					<Form.Control name="lastName" placeholder="Enter your last name" ref={register} />
					{errors.lastName && <ErrorMessage>{errors.lastName.message}</ErrorMessage>}
				</Form.Group>
			</Form.Row>

			<Form.Group>
				<Form.Label>Email</Form.Label>
				<Form.Control name="email" placeholder="Enter your email" ref={register} />
				{errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
			</Form.Group>

			<Form.Group>
				<Form.Label>Message</Form.Label>
				<Form.Control name="message" as="textarea" placeholder="Enter your message" ref={register} />
				{errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
			</Form.Group>

			<Button type="submit" variant="dark" size="lg" block>Submit</Button>
		</Form>
	);
}

export default Contact;