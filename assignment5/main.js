function initializePage() {
    document.getElementById('top').innerText = 'Welcome to the Forum';
}
window.onload = initializePage;

let postCount = 0;

function postFunction() {
    const message = document.getElementById('message').value;
    if (message.trim() === '') {
        return;
    }

    switch (postCount) {
        case 0:
            document.getElementById('topic').innerText = message;
            break;
        case 1:
            document.getElementById('reply1').innerText = message;
            break;
        case 2:
            document.getElementById('reply2').innerText = message;
            break;

    }

    postCount++;
    
    document.getElementById('message').value = '';
}

function clearFunction() {
    document.getElementById('topic').innerText = '';
    document.getElementById('reply1').innerText = '';
    document.getElementById('reply2').innerText = '';

    postCount = 0;

    document.getElementById('message').value = '';
}

