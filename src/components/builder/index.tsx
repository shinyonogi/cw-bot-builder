import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { searchSuggestKeywords } from './keywordSearch';
import { createJsonBotAction } from "./jsonBuilder";

function Builder() {

    const [botName, setBotName] = useState<string>("");
    const [channelID, setChannelID] = useState<string>("");
    const [triggerKeyword, setTriggerKeyword] = useState("");

    const handleGeneralInputChange = (target: EventTarget & HTMLInputElement) => {
        const {name, value} = target;
        if (name === "botName") { setBotName(value); }
        else if (name === "channelID") { setChannelID(value) }
        else if (name === "triggerKeyword") { setTriggerKeyword(value); }
    }

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

    const handleMessageTextChange = (userInputMessageText: string) => {
        setMessageText(userInputMessageText);
    }


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
                <div className="input-element">
                    <h2>Bot Name</h2>
                    <input
                        className="input-field-necessary input"
                        type="text"
                        placeholder="z.B. Recruiting Bot"
                        name="botName"
                        value={botName}
                        onChange={(e) => handleGeneralInputChange(e.target)}
                    />
                </div>
                <div className="input-element">
                    <h2>Channel ID</h2>
                    <input
                        className="input-field-necessary input"
                        type="text"
                        placeholder="Channel ID"
                        name="channelID"
                        value={channelID}
                        onChange={(e) => handleGeneralInputChange(e.target)}
                    />
                </div>
                <div
                    className="input-element">
                    <h2>Trigger Keyword</h2>
                    <input
                        className="input-field-necessary input"
                        type="text"
                        placeholder="z.B. #welcome"
                        name="triggerKeyword"
                        value={triggerKeyword}
                        onChange={(e) => handleGeneralInputChange(e.target)}
                    />
                </div>
                <motion.button
                    className="button-submit button"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    onClick={handleBotSubmit}
                >
                Submit
                </motion.button>
            </div>
            <div className="flow-container">
                <h1 className="title-workflow">Bot Workflow</h1>
                <div className="flow-element">

                </div>
                <div className="search-container">
                    <h2 className="search-question">What do you want to add?</h2>
                    <input
                        className="input-question input"
                        value={botActionType}
                        onChange={(e) => handleSearchChange(e.target.value)}
                        placeholder="z.B. Send Message"
                    />
                    {suggestKeywords.length > 0 && (
                        <ul className="list-suggestion">
                            {suggestKeywords.map(k => (
                                <li key={k} onClick={() => selectKeyword(k)}>{k}</li>
                            ))}
                        </ul>
                    )}
                    {needMessageText && (
                        <textarea
                            className="input-message-text input"
                            placeholder="z.B. Hallo, Test Text hier."
                            value={messageText}
                            onChange={(e) => handleMessageTextChange(e.target.value)}
                        ></textarea>
                    )}
                    <div className="button-container">
                        <motion.button
                            className="button-choose-action button"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            onClick={handleBotActionSubmit}
                        >
                        Choose Bot Action
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Builder;
