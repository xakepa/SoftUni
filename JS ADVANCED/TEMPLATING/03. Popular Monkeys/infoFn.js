function info(e) {
    const info = e.parentNode.childNodes[7];

    if (info.style.display == 'none') {
        info.style.display = 'block';
    } else {
        info.style.display = 'none'
    }
}