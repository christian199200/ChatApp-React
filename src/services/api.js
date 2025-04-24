export const sendMessage = async (username, question) => {
    const response = await fetch("https://localhost:7161/api/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, question })
    });

    if (!response.ok) {
        throw new Error("Failed to fetch from backend");
    }

    const data = await response.json();
    return data; // Expected to be { answer: "..." }
};
