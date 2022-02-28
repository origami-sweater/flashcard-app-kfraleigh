import React from "react";
import DeleteCardButton from "./DeleteCardButton";
import { Link } from "react-router-dom";

function CardList({ apiCards }) {
    //checks to see if enough cards
    if (apiCards.length > 0) {
        const list = apiCards.map((card) => {
            const { id, front, back, deckId } = card;
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
        });
        return (
            <div>
                <h5>Cards</h5>
                {list}
            </div>
        )
    } else {
        return (
            <div>
                <h5>No cards found. Please add cards.</h5>
            </div>
        )
    }
}

export default CardList;