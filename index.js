require("dotenv").config()
const express = require('express')
const app = express()
const port = process.env.port || 4000;

// app.get('/', (req, res) => {
//     res.send('Server is ready')
//   });

// get a list of 2 jokes
app.get('api/jocks', (req, res)=>{
    const jokes = [
      {
        id:1,
        title: 'First joke',
        content: 'This is first joke'
      },
      {
        id: 2,
        title: 'Second joke',
        content: 'This is second joke'
      }
    ];
    res.send(jokes);
})
  
  app.listen(`${port}`, () => {
    console.log(`Serve at http://localhost:${port}`)
  });