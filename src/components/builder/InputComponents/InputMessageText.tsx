interface InputMessageTextProps {
    value: string;
    onChange: (value: string) => void;
}

const InputMessageText: React.FC<InputMessageTextProps> = ({ value: messageText, onChange }) => {
    return (
        <textarea
            className="input-message-text input"
            placeholder="z.B. Hallo, Test Text hier."
            value={messageText}
            onChange={(e) => onChange(e.target.value)}
        ></textarea>
    )
}

export default InputMessageText;
