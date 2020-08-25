function getRandomChinese(length) {
    return new Promise((resolve) => {
        let step = 50;
        let word = [];
        let recentTime = Date.now();
        for(let i = 0; i < length; i++) {
            let number = String(recentTime).slice(-5);
            number = String.fromCharCode(number);
            word.push(number);
            recentTime++;
        }
        word = word.join('');
        setTimeout(() => resolve(word), length * step);
    });
}

const button = document.getElementById('btn');
const area = document.getElementById('area');
button.addEventListener('click', () => {
    getRandomChinese(4).then((word) => {
        area.innerHTML = word;
    });
});