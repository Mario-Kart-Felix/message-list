import React from 'react';

import MessageContext from './message.context';

function MessageListSort() {
    return (
        <MessageContext.Consumer>
            {context => (
                <div className="messages-sort">
                    <button
                        aria-label="Sort messages in descending order"
                        aria-pressed={context.sortOrder === "desc" ? "true" : "false"}
                        className={`link-button desc ${context.sortOrder === 'desc' ? 'active' : ''}`}
                        onClick={context.sortMessagesDesc}
                    />
                    <button
                        aria-label="Sort messages in ascending order"
                        aria-pressed={context.sortOrder === "asc" ? "true" : "false"}
                        className={`link-button asc ${context.sortOrder === 'asc' ? 'active' : ''}`}
                        onClick={context.sortMessagesAsc}
                    />
                </div>
            )}
        </MessageContext.Consumer>
    )
}

export default MessageListSort;
