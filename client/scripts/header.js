import '@picocss/pico/css/pico.min.css'

const header = document.querySelector('header')

//creates the div for the whole header
const headerContainer = document.createElement('div')
headerContainer.className = "header-container"

//creates a div for the text+catchline
const headerTextContainer = document.createElement('div')
headerTextContainer.className = "headerText"

//title
const title = document.createElement('h1')
title.textContent = "SpotFinder"

//catchline
const catchLine = document.createElement('h6')
catchLine.textContent = "Your one stop shop for car photo spots"

//background image
const bgImage = document.createElement('img')
bgImage.src = "/carBg.jpeg"
bgImage.style.height = "100%"
bgImage.style.width = "auto"
bgImage.style.display = "block"

headerTextContainer.appendChild(title)
headerTextContainer.appendChild(catchLine)

headerContainer.appendChild(headerTextContainer)
headerContainer.appendChild(bgImage)

header.appendChild(headerContainer)