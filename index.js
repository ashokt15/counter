let count = 0;
const handler = () => {
    count++;
    document.getElementById("counter").innerHTML = count;
}
const reset = () => {
    count = 0;
    document.getElementById("counter").innerHTML = count;
}
const decrement = () => {
    if (count == 0){return}
    count--;

    document.getElementById("counter").innerHTML = count;
}