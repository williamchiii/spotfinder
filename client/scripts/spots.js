const renderSpots = async () => {
    //fetch the data
    const response = await fetch("/spots")
    const data = await response.json()

    const mainContent = document.getElementById("main-content")
    
    //if there is data
    if (data){
        data.forEach(spotData => {
            const card = document.createElement('article')
        //    card.classList.add('card')
            
            //top container (image)
            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')
            topContainer.style.backgroundImage = `url(${spotData.image})`

            //bottom container (the text and button)
            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')
            
            const title = document.createElement('h3')
            title.textContent = spotData.title
            bottomContainer.appendChild(title)

            const cityState = document.createElement('h6')
            cityState.textContent = spotData.cityState
            bottomContainer.appendChild(cityState)

            const coordinates = document.createElement('h6')
            coordinates.textContent = spotData.coordinates
            bottomContainer.appendChild(coordinates)

            const desciption = document.createElement('h6')
            desciption.textContent = spotData.desciption
            bottomContainer.appendChild(desciption)

            const link = document.createElement('a')
            link.textContent = 'More Info >'
            link.setAttribute('role', 'button')
            link.href = `/spots/${spotData.id}`
            bottomContainer.appendChild(link)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer)
            mainContent.appendChild(card)

        })
    }
    else{
        const message = document.createElement('h2')
        message.textContent = "No spots have been added yet"
        mainContent.appendChild(message)
        
    }
}

//add checking if valid link here, if not link to 404.html 

//This gets the id. For example, localhost:5173/spots/3, it would get "3"
const requestedUrl = window.location.href.split('/').pop()
if (requestedUrl){
    window.location.href = '../404Page.html'
}
else{
    renderSpots()
}