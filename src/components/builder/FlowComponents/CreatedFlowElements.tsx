import { jsonToNormal } from "../../../utils/actionNameConverter";

interface CreatedFlowElementProps {
    workFlow: any[];
};

const CreatedFlowElement: React.FC<CreatedFlowElementProps> = ( { workFlow }) => {
    return (
        <div>
            {workFlow.map((workFlowElement, index) => (
                <div className="workflow-element">
                    <h1>Step: {index + 1}</h1>
                    <h2>{jsonToNormal(workFlowElement.type)}</h2>
                    <h2>{workFlowElement.message.text}</h2>
                </div>
            ))}
        </div>
    )
};

export default CreatedFlowElement;
