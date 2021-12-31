const express = require('express')
const app = express()
const cors = require('cors');
require('dotenv')

const { cloudinary } = require('./cloudinary');
const PORT = process.env.PORT

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

// app.get('/api/collections', (req, res) => {
//   // cloudinary call to retrieve all collections
//   try {
//     cloudinary.api.root_folders((error, _f) => {
//         res.json(_f.folders);
//     });
//   } catch (e) {
//     res.status(errorMessage.statusCode).send(errorMessage.message);
//   }
//   // end of cloudinary call
// })

app.get('/api/collections', (req, res) => {
  try {
    cloudinary.api.root_folders((error, _f) => {
      let queryString = '';
      _f.folders.map(folder => {
        queryString += `tags=${folder.name} OR`;
      });
      queryString = queryString.slice(0, -3);
      cloudinary.search
      .expression(queryString)
      .execute().then(result => {
        const resp = result.resources.map(r => { return { name: r.filename, url: r.secure_url } });
        // console.log(resp)
        res.json(resp);
      });
    });
  } catch (e) {
    res.status(errorMessage.statusCode).send(errorMessage.message);
  }
})

// query contains folder name : req.query.folder
app.get('/api/photos', (req, res) => {
  const folder = req.query.folder;

  // cloudinary call to get all photos in collection
  try {
    cloudinary.search
    .expression(`folder=${folder}`)
    .execute().then(result => {
      const resp = result.resources.map(r => r.secure_url);
      // console.log(resp);
      res.json(resp);
    });
  } catch(e) {
    res.status(errorMessage.statusCode).send(errorMessage.message);
  }
  // end of cloudinary call
})

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
})