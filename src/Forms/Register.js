import React from "react";
import { Formik, Form } from "formik";
import TextField from "../Components/TextField";
import * as Yup from "yup";

export default function RegisterFrom() {
	const validate = Yup.object({
		firstName: Yup.string()
			.min(3, "Minimum of 3 characters")
			.max(15, "Maximum of 15 characters")
			.required("Required"),
		lastName: Yup.string()
			.min(3, "Minimum of 3 characters")
			.max(15, "Maximum of 15 characters")
			.required("Required"),
		userName: Yup.string()
			.min(5, "Minimum of 3 characters")
			.max(15, "Maximum of 15 characters")
			.required("Required"),
		email: Yup.string()
			.email()
			.min(3, "Minimum of 3 characters")
			.max(15, "Maximum of 15 characters")
			.required("Required"),
		password: Yup.string()
			.min(8, "Minimum of 3 characters")
			.max(15, "Maximum of 15 characters")
			.required("Required"),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref("password")], "Passwords must match")
			.required("Password is required"),
	});

	return (
		<Formik
			initialValues={{
				firstName: "",
				lastName: "",
				userName: "",
				email: "",
				password: "",
				confirmPassword: "",
			}}
			validationSchema={validate}
		>
			{(formik) => (
				<Form>
					<h1 className="font-weight-bolder mb-5">Sign up form</h1>
					{console.log(formik.values)}
					<TextField
						label="First Name"
						name="firstName"
						type="text"
					/>
					<TextField label="Last Name" name="lastName" type="text" />
					<TextField label="User Name" name="userName" type="text" />
					<TextField label="Email" name="email" type="email" />
					<TextField
						label="Password"
						name="password"
						type="password"
					/>
					<TextField
						label="Confirm password"
						name="confirmPassword"
						type="password"
					/>
					<div className="mt-5">
						<button
							className="btn btn-info px-4 mr-5"
							type="submit"
						>
							Sign Up
						</button>
						<button className="btn btn-danger px-4" type="reset">
							Clear
						</button>
					</div>
				</Form>
			)}
		</Formik>
	);
}
