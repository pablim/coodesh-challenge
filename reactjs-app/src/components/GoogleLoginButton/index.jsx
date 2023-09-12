import React from "react"

const GoogleLoginButton = ({clientId}) => {
    return (
        <div>
            <div id="g_id_onload"
                data-client_id={clientId}
                data-context="signin"
                data-ux_mode="popup"
                data-login_uri="http://localhost:3000/home"
                data-auto_select="true"
                data-itp_support="true">
            </div>
            <div className="g_id_signin"
                data-type="standard"
                data-shape="pill"
                data-theme="filled_blue"
                data-text="signin_with"
                data-size="large"
                data-logo_alignment="left"
                data-width="400">
            </div>
        </div>
    )
}

export default GoogleLoginButton