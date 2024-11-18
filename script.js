const text = "مرحبا بك في عالم البرمجة!";
const textContainer = document.getElementById('text');

let index = 0;

function type() {
    if (index < text.length) {
        textContainer.textContent += text.charAt(index);
        index++;
        setTimeout(type, 300); // الزمن بين كل حرف والآخر
    }
}

type();
@keyframes colorChange {
    0% { background-color: red; }
    100% { background-color: black; }
}
    