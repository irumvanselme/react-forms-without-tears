import React from "react";
import { ErrorMessage, useField } from "formik";

export default function TextField({ label, ...props }) {
	const [field, meta] = useField(props);

	return (
		<div className="form-group">
			<label htmlFor={props.name}>{label}</label>
			<input
				id={props.name}
				name={props.name}
				className={`form-control ${
					meta.touched && meta.error ? "is-invalid" : "is-valid"
				}`}
				autoComplete="off"
				type="text"
				{...props}
				{...field}
			/>
			<ErrorMessage
				name={field.name}
				component="div"
				className="invalid-feedback"
			/>
		</div>
	);
}
