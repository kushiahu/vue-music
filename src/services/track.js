import platziMusicService from './platzi-music'

const trackService = {}

trackService.search = function (q) {
  const type = 'track'
  return platziMusicService.get('/search', {
    params: { q, type } // params: { q: q, type: type } ecmaScript permite minimizar al ser igual los nombres de las variables
  })
    .then(res => res.data)
}
/*
factorizamos la funcion como una arrow function
.then(function (res) {
  return res.data
})
--- otro ---
.then((res) => res.data)
*/

export default trackService
