// src/hooks/usePresentationSession.js
import { useState } from "react";

export default function usePresentationSession() {
    const [participantCount] = useState(13);
    const [maxParticipants, setMaxParticipants] = useState(50);
    const [sessionId] = useState(() =>
        Math.random().toString(36).substr(2, 9).toUpperCase()
    );
    const [features, setFeatures] = useState({
        emoji: true,
        qa: true,
        ai: true,
    });

    const toggleFeature = (key) =>
        setFeatures((prev) => ({ ...prev, [key]: !prev[key] }));

    return {
        participantCount,
        maxParticipants,
        setMaxParticipants,
        sessionId,
        features,
        toggleFeature,
    };
}
