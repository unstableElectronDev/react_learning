import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError(); // Captures the error details

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error occurred.</p>
            <p>
                <strong>Error:</strong> {error.statusText || error.message}
            </p>
        </div>
    );
};

export default ErrorPage;
