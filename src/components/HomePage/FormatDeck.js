import React from "react";
import { Link } from "react-router-dom";
import DeleteDeckButton from "./DeleteDeckButton";

function FormatDeck({ id, name, description, cards }) {
    
    if (id) {
        return (
            <div key={id} className="card mb-3">
                <div className="card-body">
                    <h5>{name}</h5>
                    <p className="text-end">{cards.length} cards</p>
                    <p className="card-text">{description}</p>
                    <Link to={`/decks/${id}`} className="btn btn-secondary mr-2">View</Link>
                    <Link to={`/decks/${id}/study`} className="btn btn-primary mr-2">Study</Link>
                    <DeleteDeckButton deckId={id}/>
                </div>
            </div>
        );
    } else {
        return null;
    };
}

export default FormatDeck;