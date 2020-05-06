function notify(message) {
    const notification = document.getElementById('notification');
    notification.style.display = 'block';
    notification.textContent = message;

    setTimeout(function dissapear() {
        notification.style.display = 'none';
        notification.textContent = '';
    }, 2000);
}