import React, { useState, useRef, useCallback } from 'react';

import MessageContext from './message.context';

import MessageListSort from './message-list-sort.component';
import Message from './message.component';

function MessageList({messages}) {
    const MESSAGES_PER_PAGE = 5
    const [limit, setLimit] = useState(5)
    
    const observer = useRef()
    const endOfMessagesRef = useCallback(node => {
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setLimit(currentLimit => {
                    return currentLimit + MESSAGES_PER_PAGE
                })
            }
        })
        if (node) observer.current.observe(node)
    }, [limit])

    return (
        <MessageContext.Consumer>
            {context => (
                <div className="messages-container">
                    <div className="messages-header-container">
                        <h1>Messages</h1>
                        <MessageListSort />
                    </div>
                    <div className="message-list-container">
                        <ul className="message-list">
                            {context.messages.slice(0, limit).map((message) => {
                                const messageKey = `${message.uuid}_${message.content}`
                                return <Message key={messageKey} {...message} />
                            })}
                        </ul>
                        {limit < context.messages.length &&
                            <div ref={endOfMessagesRef}></div>
                        }
                    </div>
                </div>
            )}
        </MessageContext.Consumer>
    )
}

export default MessageList
