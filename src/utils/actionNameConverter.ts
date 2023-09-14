const jsonToNormal = (actionJson : string) => {

    if (actionJson === 'send_message') {
        return 'Send Message';
    }else if (actionJson === 'set_label') {
        return 'Set Label';
    }else {
        return 'Error converting json Action Name to Normal';
    }

};

export {
    jsonToNormal
};
