import { keywords } from '../constants/'

const searchSuggestKeywords = (value: string) => { return keywords.filter(k => k.includes(value)); };

export {
    searchSuggestKeywords
};
