import { Component } from 'react';

import MessageContext from './message.context';

import { messages } from './data.json';

import { filterMessages } from './utils';

class MessageProvider extends Component {
    state = {
        messages: filterMessages(messages),
        sortOrder: '',
    };

    render() {
        return (
            <MessageContext.Provider
                value={{
                    messages: this.state.messages,
                    sortMessagesAsc: () => {
                        const sortedMessages = this.state.messages.sort((a, b) => {
                            return (a.sentAt > b.sentAt) ? -1 : 1;
                        });
                        this.setState({
                            messages: sortedMessages,
                            sortOrder: 'asc',
                        });
                    },
                    sortMessagesDesc: () => {
                        const sortedMessages = this.state.messages.sort((a, b) => {
                            return (a.sentAt > b.sentAt) ? 1 : -1;
                        });
                        this.setState({
                            messages: sortedMessages,
                            sortOrder: 'desc',

                        });
                    },
                    deleteMessage: (uuid, content) => {
                        const filteredMessages = this.state.messages.filter(
                            message => message.uuid !== uuid && message.content !== content
                        );
                        this.setState({
                            messages: filteredMessages,
                        });
                    },
                    sortOrder: this.state.sortOrder,
                }}
            >
                {this.props.children}
            </MessageContext.Provider>
        );
    };
};

export default MessageProvider;
