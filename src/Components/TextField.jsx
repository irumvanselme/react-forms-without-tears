import { useField } from "formik";
import React from "react";

export default function TextField({ label, ...props }) {
	const [field, meta] = useField(props);

	return (
		<div className="form-group">
			<label htmlFor={props.name}>{label}</label>
			<input
				id={props.name}
				name={props.name}
				className="form-control"
				autoComplete="off"
				type="text"
				{...props}
				{...field}
			/>
		</div>
	);
}
