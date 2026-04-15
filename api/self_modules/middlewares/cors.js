var whitelist = [
  'http://localhost:8080',
  'http://localhost:3000',
  'http://localhost:3001',
  'https://capable-jalebi-067730.netlify.app'
]

module.exports = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || origin === undefined) {
      callback(null, { origin: true, credentials: true })
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
