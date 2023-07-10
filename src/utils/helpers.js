// fetch from local storage
export const fetchFromLocalStorage = (itemName) => {
    let basket = localStorage.getItem(itemName);
    if(basket) return JSON.parse(localStorage.getItem(itemName));
    else return [];
}

// store in local storage
export const storeInLocalStorage = (data, itemName) => {
    localStorage.setItem(itemName, JSON.stringify(data));
}