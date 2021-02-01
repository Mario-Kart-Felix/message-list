import React from 'react';
import { render } from 'react-dom';

import './style.css';

import MessageProvider from './message.provider';

import MessageList from './message-list.component';

function App() {  
  return (
    <MessageProvider>
      <MessageList />
    </MessageProvider>
  );
}

render(<App />, document.getElementById('root'));
