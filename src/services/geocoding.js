const getGeocode = (apiKey, searchTerm) => {
  return fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchTerm}&limit=5&appid=${apiKey}`)
  .then(response => response.json())
  .then(data => data[0])
}

const getCurrentWeather = async (apiKey, searchTerm) => {
  try {
    const geoResponse = await getGeocode(apiKey, searchTerm)
    const lon = geoResponse.lon
    const lat = geoResponse.lat
    const response = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    return (await response).json()
  } catch(error) {
    throw error
  }
}

export {getGeocode, getCurrentWeather}