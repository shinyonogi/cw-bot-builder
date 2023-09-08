import { useState } from "react";
import { motion } from "framer-motion";

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


    const keywords = ['Send Message', 'Send Message with Button (Callback)', 'Send Message with Button (Link)', 'Send Message with document', 'Send Message with image'
    , 'Send Message with video', 'Set Label', 'Set Atrributes', 'Wait for User Input'];
    const [suggestKeywords, setSuggestKeywords] = useState<string[]>([]);
    const [botAction, setBotAction] = useState<string>("");

    const handleSearchChange = (value: string) => {
        setBotAction(value);
        const matches = keywords.filter(k => k.includes(value));
        setSuggestKeywords(matches);
    }

    const selectKeyword = (keyword: string) => {
        setBotAction(keyword);
        setSuggestKeywords([]);
    }


    const handleBotSubmit = () => {
        //console.log(botName, channelID, triggerKeyword);
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
                        value={botAction}
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
                </div>
            </div>
        </div>
    )
}

export default Builder;
