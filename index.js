const express = require('express')
const postRoutes = require('./Routes/postRoutes');
const commentRoutes = require('./Routes/commentRoutes');
const helmet = require('helmet');
const app = express()
const port = 3000


//Custom routes
app.use(helmet()); //Just in case to protect my self
app.use(express.json());

/**
 * Api pathways
 */
app.use('/api', postRoutes);
app.use('/api', commentRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})