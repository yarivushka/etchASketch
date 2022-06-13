//element to hold grid
const container = document.querySelector('.container');
for (let j = 0; j < 5; j++) {
    const row = document.createElement('div');
    row.style.cssText = 'display: flex; flex: 1'
    container.appendChild(row);
    
    for (let i = 0; i < 5; i++) {
        var cell = document.createElement('div');
        cell.setAttribute('id', `_${[i]+[j]*10}`);
        cell.textContent = cell.id;
        const cells = document.querySelector(`_${[i]+[j]*10}`)
        cell.style.cssText = 'flex: 1; border: 1px solid red; margin: 2px;'
        row.appendChild(cell);
    }; 
}

