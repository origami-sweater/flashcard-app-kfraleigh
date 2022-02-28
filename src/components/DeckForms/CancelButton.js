import React from "react";
import { Link } from "react-router-dom";

function CancelButton() {
    return (
        <Link to="/" class="btn btn-secondary">Cancel</Link>
    );
}

export default CancelButton;