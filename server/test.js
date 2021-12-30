const { cloudinary } = require('./cloudinary');

async function getAllCollections() {
    const resp = await cloudinary.api.root_folders((error, _f) => {
        return _f.folders;
    });

    console.log(resp.folders);

    const folders = resp.folders;

    folders.map( folder => {
        console.log(folder.name);
        
    })
}

getAllCollections();