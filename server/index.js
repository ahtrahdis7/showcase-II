const express = require('express')
const app = express()
const cors = require('cors');

const { cloudinary } = require('./cloudinary');
const port = 5001


const errorMessage = {
    message: 'Something went wrong',
    statusCode: 400

}

// it server bundled react code from the build folder
app.use(express.static("../build"));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, "../build", "index.html"));
// })

// to enable cors
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/collections', (req, res) => {
  // cloudinary call to retrieve all collections
  try {
    cloudinary.api.root_folders((error, _f) => {
        res.json(_f.folders);
    });
  } catch (e) {
    res.status(errorMessage.statusCode).send(errorMessage.message);
  }
  // end of cloudinary call
})

// query contains folder name : req.query.folder
app.get('/photos', (req, res) => {
  const folder = req.query.folder;

  // cloudinary call to get all photos in collection
  try {
    cloudinary.search
    .expression(`folder=${folder}`)
    .execute().then(result => res.json(result.resources));
  } catch(e) {
    res.status(errorMessage.statusCode).send(errorMessage.message);
  }
  // end of cloudinary call
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})