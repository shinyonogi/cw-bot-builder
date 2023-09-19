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
                        <h2>Action Type:</h2>
                        <h3>{jsonToNormal(workFlowElement.type)}</h3>
                    </div>
                    <div className="workflow-content">
                        <h2>Content: </h2>
                        <h3 dangerouslySetInnerHTML = {toHtmlString(workFlowElement.message.text)}></h3>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CreatedFlowElement;
