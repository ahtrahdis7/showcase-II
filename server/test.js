const { cloudinary } = require('./cloudinary');

async function getAllCollections() {
    const resp = await cloudinary.api.root_folders((error, _f) => {
        return _f.folders;
    });

    console.log(resp.folders.map(f => f.name));

    const folders = resp.folders

    folders.map( folder => {
        console.log(folder);
        cloudinary.search
        .expression(`tags=${folder.name}`)
        .execute().then(result => console.log(result));
    })
}

getAllCollections();