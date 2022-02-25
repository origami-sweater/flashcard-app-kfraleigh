import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { readDeck } from "../utils/api";
import DeleteDeckButton from "./DeleteDeckButton";

function FormatDeck({ id, name, description, cards }) {
    
    if (id) {
        return (
            <div key={id} class="card mb-3">
                <div class="card-body">
                    <h5>{name}</h5>
                    <p class="text-end">{cards.length}{id}</p>
                    <p class="card-text">{description}</p>
                    <Link to={`/decks/${id}`} class="btn btn-secondary mr-2">View</Link>
                    <Link to={`/decks/${id}/study`} class="btn btn-primary mr-2">Study</Link>
                    <DeleteDeckButton deckId={id}/>
                </div>
            </div>
        );
    } else {
        return null;
    };
}

export default FormatDeck;