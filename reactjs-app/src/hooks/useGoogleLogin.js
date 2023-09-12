import { useEffect } from 'react';

export function useGoogleLogin(handleCredentialResponse) {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://accounts.google.com/gsi/client";
		script.async = true;
		script.onload = () => {

            /*global google*/
            /*eslint no-undef: "error"*/
			google.accounts.id.initialize({
				client_id: process.env.REACT_APP_GOOGLE_CLIENTE_ID,
				callback: handleCredentialResponse
			})
		};
		
		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		}
	}, [])
}