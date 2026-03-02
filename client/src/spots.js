import '@picocss/pico/css/pico.min.css'

const header = document.querySelector('header')

//creates the div for the whole header
const headerContainer = document.createElement('div')
headerContainer.className = "header-container"

const headerTitle = document.createElement('h1')
headerTitle.textContent = "Start of body"

headerContainer.appendChild(headerTitle)

header.appendChild(headerContainer)