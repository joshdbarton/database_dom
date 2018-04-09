const loadDatabase = function (localStorageKey) { 
    return JSON.parse(localStorage.getItem(localStorageKey))
}

const database = loadDatabase("HomeInventory");
const targArt = document.getElementById('myStuff');

for (k in database) {
    const newSec = document.createElement('section');
    newSec.className = 'section';
    newSec.textContent = k;
    targArt.appendChild(newSec);
    for (i in database[k]) {
        const rule = document.createElement('hr');
        newSec.appendChild(rule);
        for (j in database[k][i]) {
            const newItem = document.createElement('p');
            newItem.className = 'item';
            newItem.textContent = `${j}: ${database[k][i][j]}`;
            newSec.appendChild(newItem);
        }   
    }
}