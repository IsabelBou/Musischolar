import { useState, useEffect } from "react";

// gets MEI score from URL and saves it as plain text
export function useScore(url) {
    const [score, setScore] = useState([]);

    useEffect(() => {
        async function retrieveScore() {
            const score = await fetch (url)
                .then((response) => response.text());
            setScore(score);
        }

    retrieveScore();
    }, [url]);

    return score;
}