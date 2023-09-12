import React, { useEffect, useState } from "react";

import { getSalesRequest } from "../api/services/Sales";
import { Loader, Message, ResultTable } from "../components";

export default function Consolidated() {
	const [loading, setLoading] = useState(false);
	const [totalized, setTotalized] = useState();
	const [msgs, setMsgs] = useState();

	useEffect(() => {
		setLoading(true)
		getSalesRequest().then((response) => {
			setLoading(false)
			setMsgs(response.msgs)
			if (response.data) setTotalized(response.data)
		})
	}, [])

	return (	
		<div className="d-flex flex-column w-100  align-items-center gap-4">
			{msgs && <Message className={''} msgs={msgs} />}

			<div className="d-flex flex-column w-100 justify-content-center align-items-center ">
				{loading && <Loader />}
				{totalized && <ResultTable items={totalized}/>}
			</div>
		</div>
	);
}