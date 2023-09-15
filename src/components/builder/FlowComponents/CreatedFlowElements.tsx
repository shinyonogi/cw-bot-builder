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
                    <h1>Step: {index + 1}</h1>
                    <h2>Action Type: {jsonToNormal(workFlowElement.type)}</h2>
                    <h2>Content</h2>
                    <h2 dangerouslySetInnerHTML = {toHtmlString(workFlowElement.message.text)}></h2>
                </div>
            ))}
        </div>
    );
};

export default CreatedFlowElement;
