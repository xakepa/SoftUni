$(() => {
    makeTemplate()

    async function makeTemplate() {
        const src = await fetch(`http://127.0.0.1:5500/03.%20Popular%20Monkeys/temp.hbs`)
            .then(response => response.text());

        const handlebarsTemplate = Handlebars.compile(src);
        const data = { monkeys }
        const htmlContent = handlebarsTemplate(data);
        document.getElementById('monkeys').innerHTML = htmlContent
    }
})