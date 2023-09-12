import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { sendSalesFile } from "../api/services/Sales";
import {Loader, Message, ResultTable} from "../components";

export default function SendFile() {
	const { register, handleSubmit } = useForm();
	const [loading, setLoading] = useState(false);
	const [totalized, setTotalized] = useState();
	const [msgs, setMsgs] = useState();

	const onSubmit = async (data) => {
		setLoading(true)
		const formData = new FormData();
		formData.append("sales", data.file[0]);

		sendSalesFile(formData).then(response => {
			setLoading(false)
			setMsgs(response.msgs)
			if (response.data) setTotalized(response.data)
		})
	};

	return (
		<div className="d-flex flex-column w-100 align-items-center gap-4">
			{msgs && <Message msgs={msgs} />}

			<div className="d-flex flex-column w-100 justify-content-center align-items-center gap-4">
				
				<form onSubmit={handleSubmit(onSubmit)}>
					<input type="file" {...register("file")} />
					<input type="submit" value="Process file"/>
				</form>

				{loading && <Loader />}
				{totalized && <ResultTable items={totalized}/>}
			</div>
		</div>
	);
}