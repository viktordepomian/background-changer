const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    changeColor();
});

function changeColor(){
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`;
};