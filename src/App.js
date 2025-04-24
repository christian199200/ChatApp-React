import React, { useState } from 'react';
import Chat from './components/Chat';

const App = () => {
    const [messages, setMessages] = useState([]);

    const addMessage = (user, text) => {
        setMessages(prev => [...prev, { user, text }]);
    };

    return (
        <div>
            <h1>ChatApp</h1>
            <Chat addMessage={addMessage} messages={messages} />
        </div>
    );
};

export default App;
