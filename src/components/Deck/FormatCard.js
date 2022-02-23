import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function FormatCard({ id, front, back, deckId }) {
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
                <Link to={`/decks/${id}`} class="btn btn-secondary">View</Link>
                <Link to={`/decks/${id}/study`} class="btn btn-primary">Study</Link>
                <button class="btn btn-danger">Trashbin</button>
            </div>
        );
    } else {
        return null;
    };
}

export default FormatCard;