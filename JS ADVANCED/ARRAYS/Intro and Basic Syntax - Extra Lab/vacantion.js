function vacantion(peopleNumber, groupType, dayOfWeek) {
    let price = 0;

    switch (groupType) {
        case 'Students':
            if (dayOfWeek == 'Friday') {
                price = 8.45;
            } else if (dayOfWeek == 'Saturday') {
                price = 9.8;
            } else if (dayOfWeek == 'Sunday') {
                price = 10.46;
            }
            break;
        case 'Business':
            if (dayOfWeek == 'Friday') {
                price = 10.9;
            } else if (dayOfWeek == 'Saturday') {
                price = 15.6;
            } else if (dayOfWeek == 'Sunday') {
                price = 16;
            }
            break;
        case 'Regular':
            if (dayOfWeek == 'Friday') {
                price = 15;
            } else if (dayOfWeek == 'Saturday') {
                price = 20;
            } else if (dayOfWeek == 'Sunday') {
                price = 22.5;
            }
    }
    let totalPrice = price * peopleNumber;
    let discount = 0;
    if (groupType == 'Students') {
        if (peopleNumber >= 30) {
            discount = totalPrice * 0.15;
        }
    } else if (groupType == 'Business') {
        if (peopleNumber >= 100) {
            discount = 10 * price;
        }
    } else if (groupType == 'Regular') {
        if (peopleNumber >= 10 && peopleNumber < 21) {
            discount = totalPrice * 0.05;
        }
    }
    console.log('Total price: ' + (totalPrice - discount).toFixed(2));
}
vacantion(40, 'Regular', 'Saturday');