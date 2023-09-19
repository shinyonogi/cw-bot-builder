import { jsonToNormal } from "../../../utils/actionNameConverter";
import { toHtmlString } from "../../../utils/toHtmlString";

interface CreatedFlowElementProps {
    workFlow: any[];
};

const CreatedFlowElement: React.FC<CreatedFlowElementProps> = ( { workFlow }) => {

    return (
        <div className="flow-element-container">
            {workFlow.map((workFlowElement, index) => (
                <div className="workflow-element">
                    <h1 className="workflow-step">Step: {index + 1}</h1>
                    <div className="workflow-action-type">
                        <h3>Action Type:</h3>
                        <h2>{jsonToNormal(workFlowElement.type)}</h2>
                    </div>
                    <h2>Content: </h2>
                    <h2 className="workflow-content" dangerouslySetInnerHTML = {toHtmlString(workFlowElement.message.text)}></h2>
                </div>
            ))}
        </div>
    );
};

export default CreatedFlowElement;
