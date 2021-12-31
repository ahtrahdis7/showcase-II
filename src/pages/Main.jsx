import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { baseUrl } from '../_helpers';

function Main() {
    const [ folders, setFolders ] = useState([]); 

    useEffect(() => {
        fetch(baseUrl + "/collections")
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            setFolders(res);
        })
    }, []);

    return (
        <div>
            <h3>Main Page Jsx</h3>
            <div>
                {folders.map((folder) => {
                    return (
                        <div key={folder.name}>
                            <Link to={`/albums/${folder.name}`}><h4>{folder.name}</h4></Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Main;