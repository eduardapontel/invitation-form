
document.getElementById('file-input').addEventListener('change', function (event) {
    const fileInput = event.target;
    const fileNameSpan = document.getElementById('file-name');
    const errorMessage = document.getElementById('file-input-error');

    if (fileInput.files.length > 0) {
        fileNameSpan.textContent = fileInput.files[0].name;
        errorMessage.style.display = 'none';
        fileInput.classList.remove('error');
    }
});

function validateInput(input) {
    const errorMessage = input.nextElementSibling;

    if (!input.value.trim()) {
        input.classList.add('error');
        errorMessage.style.display = 'flex';
    } else {
        input.classList.remove('error');
        errorMessage.style.display = 'none';
    }
}

document.querySelectorAll('input[type="text"], textarea').forEach((input) => {
    input.addEventListener('blur', () => validateInput(input));
    input.addEventListener('input', () => validateInput(input));
});

document.getElementById('file-input').addEventListener('blur', function (event) {
    const fileInput = event.target;
    const fileErrorMessage = document.getElementById('file-input-error');

    if (fileInput.files.length === 0) {
        fileInput.classList.add('error');
        fileErrorMessage.style.display = 'flex';
    } else {
        fileInput.classList.remove('error');
        fileErrorMessage.style.display = 'none';
    }
});

document.getElementById('invite').addEventListener('submit', function (event) {
    event.preventDefault();

    const inputs = document.querySelectorAll('input[type="text"], textarea');
    inputs.forEach((input) => validateInput(input));

    const fileInput = document.getElementById('file-input');
    const fileErrorMessage = document.getElementById('file-input-error');
    if (fileInput.files.length === 0) {
        fileInput.classList.add('error');
        fileErrorMessage.style.display = 'flex';
    } else {
        fileInput.classList.remove('error');
        fileErrorMessage.style.display = 'none';
    }
});
