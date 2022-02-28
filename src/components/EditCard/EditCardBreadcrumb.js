import React from "react";
import { Link } from "react-router-dom";

function EditCardBreadcrumb({ apiDeck, apiCard }) {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to={`/decks/${apiDeck.id}`}>{apiDeck.name}</Link></li>
                <li className="breadcrumb-item active" aria-current="page">{`Edit Card ${apiCard.id}`}</li>
            </ol>
        </nav>
    );
}

export default EditCardBreadcrumb;