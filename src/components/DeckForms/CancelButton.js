import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function CancelButton() {
    const { deckId } = useParams();

    if (deckId) {
        return (
            <Link to={`/decks/${deckId}`} className="btn btn-secondary">Cancel</Link>
        )
    } else {
        return (
            <Link to="/" className="btn btn-secondary">Cancel</Link>
        )
    };
}

export default CancelButton;