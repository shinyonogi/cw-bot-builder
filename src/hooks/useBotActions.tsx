import { useState } from "react";

const useBotActions = () => {

    const [botName, setBotName] = useState<string>("");
    const [channelID, setChannelID] = useState<string>("");
    const [triggerKeyword, setTriggerKeyword] = useState("");

    const [suggestKeywords, setSuggestKeywords] = useState<string[]>([]);
    const [botActionType, setBotActionType] = useState<string>("");
    //const [messageActionType, setMessageActionType] = useState<string>("");

    const [needMessageText, setNeedMessageText] = useState<boolean>(false);

    const [messageText, setMessageText] = useState<string>("");

    const [workFlow, setWorkFlow] = useState<any[]>([]);

    return {
        botName, setBotName,
        channelID, setChannelID,
        triggerKeyword, setTriggerKeyword,
        suggestKeywords, setSuggestKeywords,
        botActionType, setBotActionType,
        needMessageText, setNeedMessageText,
        messageText, setMessageText,
        workFlow, setWorkFlow
    }

};

export default useBotActions;
