// // http-proxy-middleware is used to connect Express to React

// const proxy = require('http-proxy-middleware');

// module.exports = function(app) {
//     app.use('/api', proxy({
//       // specifically targets the React port
//       target: 'http://localhost:3000',
//       //changes the host header to the target url
//       changeOrigin: true,
//     }));
//   };