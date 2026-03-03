const renderSpot = async () => {
    const requestedId = parseInt(window.location.href.split('/').pop())
    const response = await fetch('/spots')
    const data = await response.json()
    const spotContent = document.getElementById('spot-content')
    //check each spot, if its id === requestedId, return it
    const spot = data.find(spot => spot.id === requestedId)
    if (data){
        document.getElementById('img').src = spot.image
        document.getElementById('title').textContent = spot.title
        document.getElementById('description').textContent = spot.description
        document.getElementById('cityState').textContent = spot.cityState
        document.getElementById('coordinates').textContent = "Coordinates: " + spot.coordinates
        document.getElementById('submittedBy').textContent = "Submitted By: " + spot.submittedBy
        const preFormattedDate = new Date(spot.submittedOn)
        const formattedDate = preFormattedDate.toLocaleDateString()
        document.getElementById('submittedOn').textContent = "Submmited On: " + formattedDate
        document.title = 'Spot'
    } else{
        const message = document.createElement('h2')
        message.textContent = "No Spot Available :("
        spotContent.appendChild(message)
    }
}
renderSpot()