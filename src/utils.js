export function formatTimeStamp(timestamp) {
    const date = new Date(timestamp)
    return `${date.toLocaleDateString('en-US', 
        { weekday: 'long', month: 'long', year: 'numeric', day: 'numeric' }
    )} at ${date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`
};

export function filterMessages(messages) {
    const contentLookup = {}

    return messages.filter(message => {
        if (contentLookup[message.uuid] && contentLookup[message.uuid].includes(message.content)) {
            return false
        } else if (!contentLookup[message.uuid]) {
            contentLookup[message.uuid] = [message.content]
        } else {
            contentLookup[message.uuid].push(message.content)
        }
        return true
    })
};
