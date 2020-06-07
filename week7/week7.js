fetch('https://swapi.dev/api/people/1/')
    .then(response => response.json())
    .then(person => {
        document.querySelector('main').innerHTML +=
            `<h1>${person.name}</h1>
            <h2>Films</h2>
            <ul></ul>`
    })