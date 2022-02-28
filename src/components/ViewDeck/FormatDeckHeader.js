import React from "react";
import { Link } from "react-router-dom";
import DeleteDeckButton from "../HomePage/DeleteDeckButton";

function FormatDeckHeader({ id, name, description }) {
    if (id) {
        return (
            <div key={id}>
                <div className="mb-3">
                    <h4>{name}</h4>
                    <p className="card-text">{description}</p>
                    <Link to={`/decks/${id}/edit`} className="btn btn-secondary mr-2">Edit</Link>
                    <Link to={`/decks/${id}/study`} className="btn btn-primary mr-2">Study</Link>
                    <Link to={`/decks/${id}/cards/new`} className="btn btn-primary mr-2">+Add Cards</Link>
                    <DeleteDeckButton deckId={id}/>
                </div>
            </div>
        );
    } else {
        return null;
    };
}

export default FormatDeckHeader;