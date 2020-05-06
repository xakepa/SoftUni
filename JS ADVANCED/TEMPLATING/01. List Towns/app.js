(function () {
    document.getElementById('btnLoadTowns')
        .addEventListener('click', async function () {
            const towns = document.getElementById('towns')
                .value.split(', ');
            try {
                const src = await fetch(`http://127.0.0.1:5500/01.%20List%20Towns/towns.hbs`)
                    .then(responce => responce.text());

                const temp = Handlebars.compile(src);
                const context = { towns };
                const html = temp(context);

                if (context.towns[0] !== '') {
                    document.getElementById('root').innerHTML = html;
                }

                document.getElementById('towns')
                    .value = '';

            } catch (error) {
                alert(error);
            }
        })
}())