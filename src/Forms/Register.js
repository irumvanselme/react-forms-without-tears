import React from "react";
import { Formik, Form } from "formik";
import TextField from "../Components/TextField";

export default function RegisterFrom() {
	return (
		<Formik
			initialValues={{
				firstName: "",
				lasttName: "",
				username: "",
				email: "",
				password: "",
			}}
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
						name="p assword"
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
