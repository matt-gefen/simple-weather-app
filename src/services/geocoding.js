const getGeocode = (searchTerm) => {
  return fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchTerm}&limit=5&appid=2cdd8aa148aacc4fe14cf6ed893e8b72`)
  .then(response => response.json())
  .then(data => data)
}
// const getGeocode = () => {
//   return fetch(`http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=2cdd8aa148aacc4fe14cf6ed893e8b72`)
//   .then(response => response.json())
//   .then(data => data)
// }

export default getGeocode