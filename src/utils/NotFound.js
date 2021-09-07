import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            This Page Is Not Found
             <p>
                <Link to="/">Go home</Link>
            </p>
        </div>
    )
}

export default NotFound