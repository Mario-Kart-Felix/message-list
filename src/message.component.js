import React from 'react';

import MessageContext from './message.context';

import { formatTimeStamp } from './utils';

function Message({content, sentAt, senderUuid, uuid}) {
    const confirmWarning = 'Are you sure you want to delete this message?';

    return (
        <li className='message'>
            <p>
                <span className='message-section-heading'>Content: </span>
                {content}
            </p>
            <p>
                <span className='message-section-heading'>Sender UUID: </span>
                {senderUuid}
            </p>
            <p>
                <span className='message-section-heading'>Sent At: </span>
                {formatTimeStamp(sentAt)}
            </p>
            <MessageContext.Consumer>
                {context => (
                    <a
                        aria-label="Delete message"
                        className="link-button close"
                        onClick={() => {
                            if (window.confirm(confirmWarning)) {
                                context.deleteMessage(uuid, content)
                            }
                        }}
                        role="button"
                    />
                )}
            </MessageContext.Consumer>
        </li>
    )
};

export default Message;
