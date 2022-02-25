import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FlipButton from "./FlipButton";
import NextButton from "./NextButton";

function FormatStudyCard({ apiCards, flipped, setFlipped, cardId, setCardId }) {
    if (apiCards.length > 2) {
        const formattedCard = apiCards.map((card) => {
            const { id, front, back, deckId } = card;
            if (flipped===false) {
                return (
                    <div key={id} class="card">
                        <div class="card-body text-secondary">
                            <h3>{`${cardId + 1} of ${apiCards.length}`}</h3>
                            <p>{front}</p>
                        </div>
                        <FlipButton flipped={flipped} setFlipped={setFlipped}/>
                    </div>
                );
            } else if (flipped) {
                return (
                    <div key={id} class="card">
                        <div class="card-body text-secondary">
                            <h3>{`${cardId + 1} of ${apiCards.length}`}</h3>
                            <p>{back}</p>
                        </div>
                        <NextButton cardId={cardId} setCardId={setCardId} setFlipped={setFlipped}/>
                    </div>
                );
            }
        });
        return formattedCard[cardId];
    } else {
        return null;
    };    
}

export default FormatStudyCard;