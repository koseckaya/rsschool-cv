const acc = document.getElementById('acc')
const accBody = document.querySelector('.code-body')
const accArr = document.querySelector('.code__arrow')



function openCodeHandler () {
    this.classList.toggle("active");
    accBody.classList.toggle("active");
}
acc.addEventListener('click', openCodeHandler);
accArr.addEventListener('click', openCodeHandler);
