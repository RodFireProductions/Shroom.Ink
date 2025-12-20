
let preview = document.getElementById('preview');
let button = document.getElementById('generate');
let code = document.getElementById('generated')

button.addEventListener("click", generate);

function generate() {
    let shroom = document.querySelector('input[name="shroomType"]:checked').value;
    let siteName = document.getElementById('siteName').value;

    preview.src = `/guard.html/?site=${siteName}&shroom=${shroom}`;
    code.innerHTML = `&#60;iframe src="https://shroom.ink/guard.html/?site=${siteName}&shroom=${shroom}" height="250px" width="200px" scrolling="no" frameborder="0"&#62;&#60;/iframe&#62;`;
}
