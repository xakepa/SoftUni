function toggle() {
    const btn = document.getElementsByClassName('button')[0];
    const extra = document.getElementById('extra');

    if (btn.textContent === 'More') {
        btn.textContent = 'Less';
        extra.style.display = 'block';
    } else {
        btn.textContent = 'More';
        extra.style.display = 'none';
    }
}