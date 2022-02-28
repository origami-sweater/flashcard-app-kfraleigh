import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function NewCardBreadcrumb({ apiDeck }) {

    return (
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                <li class="breadcrumb-item"><Link to={`/decks/${apiDeck.id}`}>{apiDeck.name}</Link></li>
                <li class="breadcrumb-item active" aria-current="page">Add Card</li>
            </ol>
        </nav>
    );
}

export default NewCardBreadcrumb;