import { useEffect, useState, useMemo } from "react";
import { Text, Box, Image } from '@chakra-ui/react';

import { baseUrl } from '../_helpers';
// const HEIGHT = window.innerHeight

function Album() {
    const [ photos, setPhotos ] = useState([]);

    const Folder = useMemo(() => {
        return window.location.pathname.split("/")[2].toUpperCase();
    }, []);

    useEffect(() => {
        fetch(baseUrl + `/api/photos?folder=${Folder.toLowerCase()}`)
            .then(res => res.json())
            .then(data => {
                setPhotos(data);
            });
    }, [Folder]);

    return (
        <>
            <Box style={{
                display: 'flex',
                justifyContent: 'center',
                height: 200,
                alignItems: 'center',
            }}>
                <Text color="blue.200" fontSize={24} fontWeight={600}>{Folder}</Text>
            </Box>
            <Box marginTop={2} bg="blue.700">
                <Box m={2} mt={2} p={2} style={{display: 'table'}}>
                    {photos.map((photo, index) => {
                        return (
                            <Box key={index} style={{float: 'left'}}>
                                <Image borderRadius={2} m={1} src={photo} alt={photo} height={250} width={400} />
                            </Box>
                        )
                    })}
                </Box>
            </Box>
        </>
    )
}

export default Album;