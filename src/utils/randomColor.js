export default function randomColor() {
    let a = Math.random() * 16777215;
    let b = Math.random() * 16777215;
    return (Math.floor((a + b) / 2)).toString(16);
}