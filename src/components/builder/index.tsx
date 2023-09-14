import { useEffect } from "react";
import { motion } from "framer-motion";

import useBotActions from "../../hooks/useBotActions";

import InputGeneral from "./InputComponents/InputGeneral";
import InputMessageText from "./InputComponents/InputMessageText";
import SearchSuggest from "./SearchComponent/SearchSuggest";
import CreatedFlowElement from "./FlowComponents/CreatedFlowElements";

function Builder() {

    const {
        botName, setBotName,
        channelID, setChannelID,
        triggerKeyword, setTriggerKeyword,
        suggestKeywords,
        botActionType,
        needMessageText, setNeedMessageText,
        messageText, setMessageText,
        workFlow,
        handleSearchChange,
        selectKeyword,
        handleBotActionSubmit
    } = useBotActions();

    const handleBotSubmit = () => {
        console.log(workFlow);
    };

    useEffect( () => {
        if (botActionType === 'Send Message') {
            setNeedMessageText(true);
        }else {
            setNeedMessageText(false);
        }
    }, [botActionType, setNeedMessageText]);

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
                <CreatedFlowElement workFlow={workFlow}/>
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
    );
};

export default Builder;
