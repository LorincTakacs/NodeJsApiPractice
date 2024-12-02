const express = require('express')
const path = require('path');
const postRoutes = require('./Routes/postRoutes');
const commentRoutes = require('./Routes/commentRoutes');
const helmet = require('helmet');
const app = express()
const port = 3000


//Custom routes
app.use(helmet()); //Just in case to protect my self
app.use(express.json());

//Static files
app.use('/scripts', express.static(path.join(__dirname, 'scripts')));
app.use('/styles', express.static(path.join(__dirname, 'styles')));

//Api pathways
app.use('/api', postRoutes);
app.use('/api', commentRoutes);

//Default case
app.get('*', (req, res) => {
  if (!req.path.startsWith('/api')) {
      res.sendFile(path.join(__dirname, 'index.html'));
  } else {
      res.status(404).json({
          message: "Ismeretlen kérés vagy útvonal",
      });
  }
});


app.listen(port, () => {
  console.log(`OK - PORT: ${port}`)
})