import React from "react";

const Message = ({msgs, className}) => {
    return (
        msgs && (
            <div className={`w-100 ${className}`}>
                <ul className="list-group">
                    {msgs.map((msg) => <li className="list-group-item text-bg-dark p-3">{msg}</li>)}
                </ul>
            </div>
        )
    )
}

export default Message