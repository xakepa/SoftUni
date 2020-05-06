(() => {
    renderCatTemplate();

    async function renderCatTemplate() {

        const src = await fetch(`http://127.0.0.1:5500/02.%20HTTP%20Status%20Cats/templates/cats-template.hbs`)
            .then(response => response.text())

        const template = Handlebars.compile(src);
        const context = { cats: window.cats };
        const catsHtml = template(context);
        document.getElementById('allCats').innerHTML = catsHtml;
    }
})()
