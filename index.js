function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data)
        const newElement = document.createElement('p')
        newElement.textContent = data.id
        document.body.appendChild(newElement)
    })
    .catch(function(error) {
        const errorMessage = document.createElement('p')
        errorMessage.textContent = error.message
        document.body.appendChild(errorMessage)
        console.log(error.message)
    })
}