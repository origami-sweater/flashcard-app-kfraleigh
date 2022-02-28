import React from "react";
import { Link } from "react-router-dom";

function ViewDeckBreadcrumb({ apiDeck }) {
    return (
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                <li class="breadcrumb-item active" aria-current="page">{apiDeck.name}</li>
            </ol>
        </nav>
    );
}

export default ViewDeckBreadcrumb;