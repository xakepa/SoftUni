class Kitchen {
    constructor(budget, menu = {}, productsInStock = {}, actionsHistory = []) {
        this.budget = +budget;
        this.menu = menu;
        this.productsInStock = productsInStock;
        this.actionsHistory = actionsHistory;
    }

    loadProducts(products) {

        for (const product of products) {
            const [productName, productQuantity, price] = product.split(' ');
            const moneyCost = +price;
            if (this.budget >= moneyCost) {
                this.budget -= moneyCost;

                if (this.productsInStock.hasOwnProperty(productName)) {
                    this.productsInStock[productName] += +productQuantity;
                } else {
                    this.productsInStock[productName] = +productQuantity;
                }
                this.actionsHistory.push(`Successfully loaded ${productQuantity} ${productName}`)
            } else {
                this.actionsHistory.push(`There was not enough money to load ${productQuantity} ${productName}`)
            }
        }
        return this.actionsHistory.join('\n').trim() + '\n';
    }

    addToMenu(meal, neededProducts, price) {
        if (!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = [neededProducts, price];
            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`
        } else {
            return `The ${meal} is already in our menu, try something different`;
        }
    }

    showTheMenu() {
        if (Object.keys(this.menu).length == 0) {
            return 'Our menu is not ready yet, please come later...';
        }

        const arr = [];

        for (const key in this.menu) {
            if (this.menu.hasOwnProperty(key)) {
                const price = this.menu[key][1];
                arr.push(`${key} - $ ${price}`);
            }
        }
        return arr.join('\n').trim();
    }

    makeTheOrder(meal) {
        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        } else {
            for (let pair of this.menu[meal][0]) {
                let [product, quantity] = pair.split(' ');
                quantity = +quantity;
                if (this.productsInStock[product] >= quantity) {
                    this.productsInStock[product] -= quantity
                } else {
                    return `For the time being, we cannot complete your order ${meal}, we are very sorry...`;
                }
            }
            this.budget += +this.menu[meal][1];
            return `Your order ${meal} will be completed in the next 30 minutes and will cost you ${this.menu[meal][1]}`
        }
    }
}

let kitchen = new Kitchen(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.showTheMenu());
console.log(kitchen.makeTheOrder('frozenYogurt'));