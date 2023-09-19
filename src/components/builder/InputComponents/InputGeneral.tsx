interface InputProps {
    value: string,
    placeholder?: string;
    name?: string;
    onChange: (value: string) => void;
};

const InputGeneral: React.FC<InputProps> = ({ value, placeholder, name, onChange }) => {
    return (
        <div className="input-element">
            <h2>{name}</h2>
            <input
                className="input-field-necessary input"
                name={name}
                type="text"
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};

export default InputGeneral;
