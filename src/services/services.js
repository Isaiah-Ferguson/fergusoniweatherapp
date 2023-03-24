function saveToLocalStorageByName(city) {
  
    let favorites = getLocalStorage();

    if(!favorites.includes(city)){
        favorites.push(city);
    }

    localStorage.setItem('Favorites', JSON.stringify(favorites));
}

function getLocalStorage(){
    

    let localStorageData = localStorage.getItem('Favorites');
    
    if (localStorageData == null) {
        return [];
    }
    return JSON.parse(localStorageData);
}

function removeFromLocalStorage(city){
    let favorites = getLocalStorage();

    // find the index of the name in local storage

    let nameindex = favorites.indexOf(city);

    //remove the name from the array using the splice method.
    favorites.splice(nameindex, 1);

    // save updated array to local storage
    localStorage.setItem('Favorites', JSON.stringify(favorites));
}


export {saveToLocalStorageByName, getLocalStorage, removeFromLocalStorage}