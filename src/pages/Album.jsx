import { useEffect, useState, useMemo } from "react";

import { baseUrl } from '../_helpers';

function Album() {
    const [ photos, setPhotos ] = useState([]);

    const Folder = useMemo(() => {
        return window.location.pathname.split("/")[2];
    }, []);

    useEffect(() => {
        fetch(baseUrl + `/photos?folder=${Folder}`)
            .then(res => res.json())
            .then(data => {
                setPhotos(data);
                console.log(data);
            });
    }, [Folder]);

    return (
        <div>
            <h1>{Folder}</h1>
            <div>
                {photos.map((photo) => {
                    return (
                        <div key={photo.id}>
                            <img src={photo.url} alt={photo.title} height={250} width={400} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Album;