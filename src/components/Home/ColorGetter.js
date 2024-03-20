const myColors = [
    "#f25a16",
    "#007f87",
    "#006076",
    "#7a5677"
]

export function getRandomColor()
{
    let listLength =  myColors.length;
    return myColors[getRandomInt(0, (listLength-1))];
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
