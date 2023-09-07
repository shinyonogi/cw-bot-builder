import { useState } from "react";
import { motion } from "framer-motion";

function Builder() {

    const [botName, setbotName] = useState<string>("");
    const [channelID, setchannelID] = useState<string>("");
    const [triggerKeyword, settriggerKeyword] = useState("");

    const handleInputChange = (target: EventTarget & HTMLInputElement) => {
        const {name, value} = target;
        if (name === "botName") { setbotName(value); }
        else if (name === "channelID") { setchannelID(value) }
        else if (name === "triggerKeyword") { settriggerKeyword(value); }

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
                        onChange={(e) => handleInputChange(e.target)}
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
                        onChange={(e) => handleInputChange(e.target)}
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
                        onChange={(e) => handleInputChange(e.target)}
                    />
                </div>
                <motion.button
                    className="button-submit button"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    <h2>Submit</h2>
                </motion.button>
            </div>
        </div>
    )
}

export default Builder;
