var fs = require('fs');

export function readFilesFromAFolder(){
    return new Promise((resolve, reject) => {
        fs.readdir('./src/assets/img/', (err, files) => {
            if (err) {
                reject(err);
            }
            resolve(files);
        });
    });
}