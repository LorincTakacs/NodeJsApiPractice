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

app.use((req, res)=>{
    res.status(404).json({
        message: "Ismeretlen kérés"
    })
});


app.listen(port, () => {
  console.log(`OK - PORT: ${port}`)
})