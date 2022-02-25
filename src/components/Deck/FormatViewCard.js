import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
                    <Link to={`/decks/${id}`} class="btn btn-secondary ml-3 mb-3">View</Link>
                    <Link to={`/decks/${id}/study`} class="btn btn-primary ml-2 mb-3">Study</Link>
                    <button class="btn btn-danger ml-2 mb-3">Delete</button>
                </div>
            </div>
        );
    } else {
        return null;
    };
}

export default FormatViewCard;