function attachEvents() {
    const domElements = {
        catch: {
            angler: () => document.querySelector('#addForm input.angler'),
            weight: () => document.querySelector('#addForm input.weight'),
            species: () => document.querySelector('#addForm input.species'),
            location: () => document.querySelector('#addForm input.location'),
            bait: () => document.querySelector('#addForm input.bait'),
            captureTime: () => document.querySelector('#addForm input.captureTime'),
        },
        addBtn: () => document.querySelector('#addForm button.add'),
        loadBtn: () => document.querySelector('.load'),
        catches: () => document.getElementById('catches'),
        domCatches: () => document.querySelector('div.catch')
    }

    domElements.addBtn().addEventListener('click', addCatch);
    domElements.loadBtn().addEventListener('click', loadCatches);

    function addCatch() {
        const angler = domElements.catch.angler().value;
        const weight = domElements.catch.weight().value;
        const species = domElements.catch.species().value;
        const location = domElements.catch.location().value;
        const bait = domElements.catch.bait().value;
        const captureTime = domElements.catch.captureTime().value;

        catches.post({ angler, weight, species, location, bait, captureTime })
            .then(data => console.log())
            .catch(err => console.log(err))
    }

    function loadCatches() {
        domElements.catches().innerHTML = '';

        catches.get()
            .then(showAllCatches)
            .catch(console.log())

        function showAllCatches(allCatches) {

            Object.keys(allCatches).forEach(id => {
                const copy = domElements.domCatches().cloneNode(true);
                copy.setAttribute('data-id', id)

                Object.keys(domElements.catch).forEach(element => {
                    copy.querySelector(`input.${element}`).value = allCatches[id][element]
                });

                domElements.catches().appendChild(copy);
            });
            [...document.querySelectorAll('button.delete')].forEach(b => b.addEventListener('click', (e) => {
                const id = e.currentTarget.parentNode.getAttribute('data-id');
                catches.del(id)
                    .then(showAllCatches)
            }));
            domElements.domCatches().remove();
        }
    }
}
attachEvents();

