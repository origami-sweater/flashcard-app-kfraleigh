import { useHistory } from "react-router-dom";

function RestartPrompt({ apiCards, cardId, setCardId }) {
    const history = useHistory();
    
    if (apiCards.length > 0 && apiCards.length===cardId) {
        if (window.confirm("Restart cards?\nClick 'cancel' to return to the Home page.")) {
            setCardId(0);
            history.go(0)
        } else {
            history.push("/");
            history.go(0);
        };
    };
    return null;   
}

export default RestartPrompt;