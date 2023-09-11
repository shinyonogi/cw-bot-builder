import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { searchSuggestKeywords } from '../../utils/keywordSearch';
import { createJsonBotAction } from "../../utils/jsonBuilder";

import InputGeneral from "./InputComponents/InputGeneral";
import InputMessageText from "./InputComponents/InputMessageText";
import SearchSuggest from "./SearchComponent/SearchSuggest";

function Builder() {

    const [botName, setBotName] = useState<string>("");
    const [channelID, setChannelID] = useState<string>("");
    const [triggerKeyword, setTriggerKeyword] = useState("");

    const [suggestKeywords, setSuggestKeywords] = useState<string[]>([]);
    const [botActionType, setBotActionType] = useState<string>("");
    //const [messageActionType, setMessageActionType] = useState<string>("");

    const handleSearchChange = (userInputBotAction: string) => {
        setBotActionType(userInputBotAction);
        setSuggestKeywords(searchSuggestKeywords(userInputBotAction));
    }

    const selectKeyword = (keyword: string) => {
        setBotActionType(keyword);
        setSuggestKeywords([]);
    }

    const [needMessageText, setNeedMessageText] = useState<boolean>(false);

    useEffect( () => {
        if (botActionType === 'Send Message') {
            setNeedMessageText(true);
        }else {
            setNeedMessageText(false);
        }
    }, [botActionType])

    const [messageText, setMessageText] = useState<string>("");

    const [workFlow, setWorkFlow] = useState<any[]>([]);

    const handleBotActionSubmit = () => {
        const newWorkFlow = createJsonBotAction(botActionType, messageText);
        setWorkFlow(prevWorkFlow => [...prevWorkFlow, newWorkFlow]);
    }

    const handleBotSubmit = () => {
        console.log(workFlow);
    }

    return (
        <div className="builder-container">
            <div className="input-container">
                <InputGeneral value={botName} placeholder="z.B. Recruiting Bot" name="Bot Name" onChange={setBotName} />
                <InputGeneral value={channelID} placeholder="Channel ID" name="Channel ID" onChange={setChannelID} />
                <InputGeneral value={triggerKeyword} placeholder="z.B. #welcome" name="Trigger Keyword" onChange={setTriggerKeyword} />
                <motion.button
                    className="button-submit button"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    onClick={handleBotSubmit}
                >Submit
                </motion.button>
            </div>
            <div className="flow-container">
                <h1 className="title-workflow">Bot Workflow</h1>
                <div className="flow-element"></div>
                <div className="search-container">
                    <SearchSuggest
                        value={botActionType}
                        onChange={handleSearchChange}
                        suggestedKeywords={suggestKeywords}
                        onSelectKeyword={selectKeyword}
                    />
                    {needMessageText && (
                        <InputMessageText
                            value={messageText}
                            onChange={setMessageText}
                        />
                    )}
                    <motion.button
                        className="button-choose-action button"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        onClick={handleBotActionSubmit}
                    >Choose Bot Action
                    </motion.button>
                </div>
            </div>
        </div>
    )
}

export default Builder;
