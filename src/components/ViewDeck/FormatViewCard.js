import React from "react";
import { Link } from "react-router-dom";
import DeleteCardButton from "./DeleteCardButton";

function FormatViewCard({ id, front, back, deckId }) {
    if (deckId) {
        return (
            <div key={id} class="card">
                <div class="row">
                    <div class="card-body col-md-6 text-secondary">
                        <p>{front}</p>
                    </div>
                    <div class="card-body col-md-6 text-secondary">
                        <p>{back}</p>
                    </div>
                </div>
                <div>
                    <Link to={`/decks/${deckId}/cards/${id}/edit`} class="btn btn-secondary ml-3 mb-3 mr-2">Edit</Link>
                    <DeleteCardButton id={id} />
                </div>
            </div>
        );
    } else {
        return null;
    };
}

export default FormatViewCard;