const toHtmlString = (input: string) => { return { __html: input.replace(/\n/g, '<br />') }; };

export {
    toHtmlString
};
