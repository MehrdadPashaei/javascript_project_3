

let text = [];
function letterOpration(myDream) {
    for (let i = 0; i < myDream.length; i++) {
        if (myDream[i] !==" "){
            text.push(myDream[i]);
        }
    }
    return text.reduce((prev, cur) => {
        if (!prev[cur]) {
            prev[cur] = 1;
        } else {
            prev[cur] += 1;
        }
        return prev;
    }, {});

}

console.log(letterOpration("A World Full of Kindness And Love"));