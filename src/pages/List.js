import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, SimpleGrid, Spinner, Button } from '@chakra-ui/react';
import Personagens from '../components/Personagens';
import CryptoJs from "crypto-js"

const PUBLIC_KEY = 'c0f6f2188cc44792ace40395eff2f235';
//const API_URL = `https://gateway.marvel.com/v1/public/characters?apikey=${PUBLIC_KEY}`;

const List = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [privKey] = useState("3d2d0ee5e4e7232a2e46a79beda27153187adda1")

    const generateMD5Hash = (input) => {
        return CryptoJs.MD5(input).toString();
    }

    useEffect(() => {
        const hash = generateMD5Hash(`1${privKey}${PUBLIC_KEY}`)
        const apiUrl = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${PUBLIC_KEY}&hash=${hash}`

        const fetchCharacters = async () => {
            try {
                const response = await axios.get(`${apiUrl}&limit=10&offset=${(page - 1) * 10}`);
                // console.log(response.data.data.results)
                setCharacters(response.data.data.results);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching characters:", error);
                setLoading(false);
            }
        };

        fetchCharacters();
    }, [page, privKey, PUBLIC_KEY]);

    if (loading) {
        return <Spinner />;
    }

    return (
        <Box p={5}>
            <SimpleGrid columns={3} spacing={10}>
                {characters.map((character) => (
                    <Personagens key={character.id} character={character} />
                ))}
            </SimpleGrid>
            <Box mt="5" display="flex" justifyContent="space-between">
                <Button disabled={page === 1} onClick={() => setPage(page - 1)}>Anterior</Button>
                <Button onClick={() => setPage(page + 1)}>Próximo</Button>
            </Box>
        </Box>
    );
};

export default List;
