import { useState } from 'react';
import { sendMessage } from '../services/api';

const Chat = ({ addMessage, messages }) => {
    const [username, setUsername] = useState('');
    const [question, setQuestion] = useState('');

    const handleSend = async () => {
        if (
            username.length >= 3 && username.length <= 100 &&
            question.length >= 5 && question.length <= 500
        ) {
            // Add user's message first
            addMessage(username, question);

            try {
                const response = await sendMessage(username, question);
                addMessage('Chatbot', response.answer);
            } catch (error) {
                console.error('Error sending message:', error);
                alert("Something went wrong. Please try again.");
            }
        } else {
            alert('Validation failed. Check username and question length.');
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="text"
                placeholder="Question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
            />
            <button onClick={handleSend}>Send</button>

            <div>
                {messages.map((msg, index) => (
                    <div key={index}>
                        <strong>{msg.user}:</strong> {msg.text}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Chat;
