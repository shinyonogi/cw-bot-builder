const keywords = [
    'Send Message',
    'Send Message with Button (Callback)',
    'Send Message with Button (Link)',
    'Send Message with document',
    'Send Message with image',
    'Send Message with video',
    'Set Label',
    'Set Atrributes',
    'Wait for User Input'
];

const searchSuggestKeywords = (value: string) => {
    return keywords.filter(k => k.includes(value));
}

export {
    searchSuggestKeywords
}
