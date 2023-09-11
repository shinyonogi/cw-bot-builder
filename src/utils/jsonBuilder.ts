const createJsonBotAction = (actionType: string, messageText: string, value: string) => {

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
    }else if (actionType === 'Set Label') {
		return {
			"id": "01",
			"type": "set_label",
			"action_on_success": "022",
			"action_on_failure": "022",
			"value": "CampaingDemo22"
		}
	};
};

export {
    createJsonBotAction
}
