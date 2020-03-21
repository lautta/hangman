const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }
}

const getCountry = async (countryCode) => {
    const response = await fetch(`http://restcountries.eu/rest/v2/all`)
    if (response.status === 200) {
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new Error('Error getting country')
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    const country = await getCountry(location.country)
    return country
}

const getLocation = async () => {
    const response = await fetch(`https://ipinfo.io/json?3a8b8d19337544`)
    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error('Could not get location')
    }
}

// const getCountry = (countryCode) => {
//     return fetch(`http://restcountries.eu/rest/v2/all`).then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('Error getting country')
//         }
//     }).then((data) => {
//         return data.find((country) => country.alpha2Code === countryCode)
//     })
// }

// const getLocation = () => {
//     return fetch('https://ipinfo.io/json?3a8b8d19337544').then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('Could not get location')
//         }
//     })
// }

// const getPuzzle = (wordCount) => {
//     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('Error getting puzzle')
//         }
//     }).then((data) => {
//         return data.puzzle
//     })
// }

// const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             resolve(data.puzzle)
//         } else if (e.target.readyState === 4) {
//             reject('An error occured')
//         }
//     })

//     request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//     request.send()
// })

// const getCountry = (countryCode) => new Promise ((resolve, reject) => {
//     const req = new XMLHttpRequest()
//     req.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             const country = data.find((country) => country.alpha2Code === countryCode)
//             resolve(country)
//         } else if (e.target.readyState === 4) {
//             reject('An error occurred')
//         }
//     })
//     req.open('GET', 'http://restcountries.eu/rest/v2/all')
//     req.send()
// })
