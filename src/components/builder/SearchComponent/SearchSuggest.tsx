interface SearchSuggestProps {
    value: string;
    onChange: (value: string) => void;
    suggestKeywords: string[];
    onSelectKeyword: (keyword: string) => void;
};

const SearchSuggest: React.FC<SearchSuggestProps> = ({value, onChange, suggestKeywords, onSelectKeyword}) => {
    return (
        <div className="search-suggest-element">
            <h2 className="search-question">What do you want to add?</h2>
                <input
                    className="input-question input"
                    value={value}
                    onChange={(e) => { onChange(e.target.value);} }
                    placeholder="z.B. Send Message"
                />
            {suggestKeywords.length > 0 && (
                <ul className="list-suggestion">
                    {suggestKeywords.map(k => (
                        <li key={k} onClick={() => onSelectKeyword(k)}>{k}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchSuggest;
