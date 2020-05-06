function listOfProducts(array) {
    let listed = array.sort()
        .map((product, index) => (index + 1) + '.' + product)
        .forEach(product => {
            console.log(product);
        });
}
listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"])