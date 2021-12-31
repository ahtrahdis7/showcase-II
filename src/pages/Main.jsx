import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Text, Box, Image } from '@chakra-ui/react';

import { baseUrl } from '../_helpers';

const HEIGHT = window.innerHeight
function Main() {
    const [ folders, setFolders ] = useState([]); 

    useEffect(() => {
        fetch(baseUrl + "/api/collections")
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            setFolders(res);
        })
    }, []);

    const onClickImage = () => {
        window.href.location = "";
    }

    return (
        <Box height={HEIGHT - 200} bg="blue.700">
            <Box m={4} p={4}>
                {folders.map((folder) => {
                    return (
                        <Box m={2} p={2} borderRadius={2} key={folder.name} bg="blue.50" style={{float: 'left'}}>
                            <Image borderRadius={2} src={folder.url} height={250} width={400} alt={folder.name} />
                            <Link to={`/albums/${folder.name}`}><Text fontSize={24} textAlign={'center'} color="blue.900">{folder.name?.toUpperCase()}</Text></Link>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}

export default Main;