function encodeAndDecodeMessages() {
    const buttons = document.getElementsByTagName('button');
    const textAreas = document.getElementsByTagName('textarea');

    const encrypt = () => {
        const encodeMessage = textAreas[0].value;

        const newMessage = encodeMessage.split('')
            .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
            .join('');

        textAreas[0].value = '';
        textAreas[1].value = newMessage;
    }

    const decrypt = () => {
        const decodeMessage = textAreas[1].value;

        const originalMessage = decodeMessage.split('')
            .map(char => String.fromCharCode(char.charCodeAt(0) - 1))
            .join('');

        textAreas[1].value = originalMessage;
        textAreas[0].value = '';
    }
    buttons[0].addEventListener('click', encrypt);
    buttons[1].addEventListener('click', decrypt);
}