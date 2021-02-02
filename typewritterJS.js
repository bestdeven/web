const text_1 = 'Welcome!';
const text_2 = 'Discover Trends & Interactively Shop!';
const text_3 = 'Join the private waitlist to get access';
const text_4 = 'We let you see the items people you follow purchase!';
const text_5 = 'Get discounts just buy logging in';
const text = [text_1, text_2, text_3, text_4, text_5];
const typingText = document.getElementById('typing-text');
var i = 0,
    b = 0,
    j;
const typeInHault = 400;
const typeOutHault = 3000;
const typeInSpeed = 20;
const typeOutSpeed = 40;

var displaycomplete = false;
const typein = () => {
    if (!displaycomplete && i < text[b].length) {
        typingText.innerHTML += text[b][i];
        i++;
    } else if (i === text[b].length) {
        i = 0;
        displaycomplete = true;
        j = text[b].length;
        driver();
        return undefined;
    }
    const timein = setTimeout(typein, typeInSpeed);
};

const typeout = () => {
    if (j > 0) {
        typingText.innerHTML = typingText.innerHTML.slice(0, --j);
        const timeout = setTimeout(typeout, typeOutSpeed);
    } else if (j == 0) {
        displaycomplete = false;
        driver();
        if (b === 4) {
            b = 0;
        } else {
            b++;
        }
        return undefined;
    }
};
function driver() {
    if (typingText.innerHTML.length === 0) {
        setTimeout(typein, typeInSpeed);
    } else if (displaycomplete) {
        setTimeout(typeout, typeOutHault);
    }
    return undefined;
}
const id = setTimeout(driver, typeInHault);
