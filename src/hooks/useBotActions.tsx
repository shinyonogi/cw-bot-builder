import { useState } from "react";

import { searchSuggestKeywords } from '../utils/keywordSearch';
import { createJsonBotAction } from "../utils/jsonBuilder";

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

    const handleSearchChange = (userInputBotAction: string) => {
        setBotActionType(userInputBotAction);
        setSuggestKeywords(searchSuggestKeywords(userInputBotAction));
    };

    const selectKeyword = (userInputKeyword: string) => {
        setBotActionType(userInputKeyword);
        setSuggestKeywords([]);
    };

    const handleBotActionSubmit = () => {
        const newWorkFlow = createJsonBotAction(botActionType, messageText);
        setWorkFlow(prevWorkFlow => [...prevWorkFlow, newWorkFlow]);
    };

    return {
        botName, setBotName,
        channelID, setChannelID,
        triggerKeyword, setTriggerKeyword,
        suggestKeywords, setSuggestKeywords,
        botActionType, setBotActionType,
        needMessageText, setNeedMessageText,
        messageText, setMessageText,
        workFlow, setWorkFlow,
        handleSearchChange,
        selectKeyword,
        handleBotActionSubmit
    }

};

export default useBotActions;
