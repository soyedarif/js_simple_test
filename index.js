// Solve 1:
const stringReversed = str => {
    const string = str.split('');
    let reversed = [];
    for (let i = string.length - 1; i >= 0; i--) {
        const char = string[i];
        reversed.push(char);
    }
    return (reversed.join(''))
};

const reversedString=stringReversed("hello world");