var controls = document.querySelectorAll('.controls input')

let handleUpdate = function () {
    var suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

controls.forEach(input => {
    input.addEventListener('change', handleUpdate);
    input.addEventListener('mousemove', handleUpdate);
});