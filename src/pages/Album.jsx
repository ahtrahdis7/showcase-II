import { useEffect, useState, useMemo } from "react";
import { Text, Box, Image } from '@chakra-ui/react';

import { baseUrl } from '../_helpers';

function Album() {
    const [ photos, setPhotos ] = useState([]);

    const Folder = useMemo(() => {
        return window.location.pathname.split("/")[2];
    }, []);

    useEffect(() => {
        fetch(baseUrl + `/api/photos?folder=${Folder}`)
            .then(res => res.json())
            .then(data => {
                setPhotos(data);
                console.log(data);
            });
    }, [Folder]);

    return (
        <Box>
            <Text>{Folder}</Text>
            <Box>
                {photos.map((photo) => {
                    return (
                        <Box key={photo.id}>
                            <Image src={photo.url} alt={photo.title} height={250} width={400} />
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}

export default Album;