//element to hold grid
const container = document.createElement('div');
container.setAttribute('class', 'container');
const mainPanel = document.querySelector('.mainPnl');
//generating function with default row/column number
function game(n = 16){
    
    //loop to create rows/cells
    mainPanel.appendChild(container);
    for (let j = 0; j < n; j++) {

        var row = document.createElement('div');
        row.style.cssText = 'display: flex; flex: 1'
        container.appendChild(row);
    
        //loop to create cells within row
        for (let i = 0; i < n * .75; i++) {
            var cell = document.createElement('div');
            cell.setAttribute('class', 'cell');
            //cell.textContent = i + 1 + j * n; //adding numbers to cells
            cell.style.cssText = 'flex: 1; border: 1px solid #dcdcdc;'
            row.appendChild(cell);
        }; 
    }
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.addEventListener('mouseover', () => {
        cell.classList.add('msOver');
    }))
    const eraser = document.querySelector('.clear');
    eraser.addEventListener('click', () => {
        cells.forEach(cell => cell.classList.remove('msOver'));
    })
}
game()

const listSize = document.querySelector('ul');
const sizer = document.querySelector('.size');
sizer.addEventListener('click', () => {
    listSize.style.display = 'block';
})
const li16 = document.querySelector('.m_16');
li16.addEventListener('click', () => {
    listSize.style.display = 'none';
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }game(n = 16);
})
const li32 = document.querySelector('.m_32');
li32.addEventListener('click', () => {
    listSize.style.display = 'none';
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }game(n = 32);
})
const li48 = document.querySelector('.m_48');
li48.addEventListener('click', () => {
    listSize.style.display = 'none';
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }game(n = 48);
})

function myColor() {
    let a = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let c = Math.floor(Math.random() * 255);
    return rgb(a, b, c);
}