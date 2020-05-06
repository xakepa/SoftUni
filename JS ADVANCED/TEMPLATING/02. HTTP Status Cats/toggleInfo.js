function toggle(e) {

    e.textContent = e.textContent === 'Show status code' ? 'Hide status code' : 'Show status code';
    const status = e.parentNode.getElementsByClassName('status')[0];
    status.style.display = status.style.display === 'none' ? 'block' : 'none';
}