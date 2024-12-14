const colors = [ 'red', 'green', 'blue', 'pink', 'indigo', 'yellow', 'orange', 'brown', 'cyan']

const boxes = [
    {
        id: 1,
        color: 'red'
    },
    {
        id: 2,
        color: 'green'
    },
    {
        id: 3,
        color: 'blue'
    },
    {
        id: 4,
        color: 'pink'
    },
    {
        id: 5,
        color: 'indigo'
    },
    {
        id: 6,
        color: 'yellow'
    },
    {
        id: 7,
        color: 'orange'
    },
    {
        id: 8,
        color: 'brown'
    },
    {
        id: 9,
        color: 'cyan'
    }
]




boxes.forEach(box => {
    const div = document.createElement('div')
    const gameBoard = document.getElementById('gameBoard')
    div.classList.add('box')
    
    div.setAttribute("id", `box-${box.id}`)
    div.style.width = '200px'
    div.style.height = '200px'
    div.style.backgroundColor = box.color

    console.log(div)

    gameBoard.appendChild(div)

    div.addEventListener('click', ()=> {
        // console.log('clicked')
        div.style.backgroundColor = getRandomColor()
    })
})

function getRandomColor() {
    const randomColor = Math.floor(Math.random() * colors.length)
    return colors[randomColor]
}

// work on countDisplay tmr