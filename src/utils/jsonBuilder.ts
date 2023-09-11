const createJsonBotAction = (actionType: string, messageText: string) => {

    if (actionType === 'Send Message') {
        return {
			"id": "20",
			"type": "send_message",
			"action_on_success": "21",
			"action_on_failure": "21",
			"message": {
				"type": "text",
				"text": messageText
			}
		}
    }
}

export {
    createJsonBotAction
}
