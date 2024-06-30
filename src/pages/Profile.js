import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Spinner } from '@chakra-ui/react';
import Detalhes from '../components/Detalhes';
import CryptoJs from "crypto-js"

const PUBLIC_KEY = 'c0f6f2188cc44792ace40395eff2f235';
// const API_URL = `https://gateway.marvel.com/v1/public/characters`;

const Details = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [privKey] = useState("3d2d0ee5e4e7232a2e46a79beda27153187adda1")

    const generateMD5Hash = (input) => {
        return CryptoJs.MD5(input).toString();
    }

    useEffect(() => {
        const hash = generateMD5Hash(`1${privKey}${PUBLIC_KEY}`)
        const apiUrl = `http://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=${PUBLIC_KEY}&hash=${hash}`

        const fetchCharacter = async () => {
            try {
                const response = await axios.get(apiUrl);

                setCharacter(response.data.data.results[0]);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching character details:", error);
            }
        };

        fetchCharacter();
    }, [id]);

    if (loading) {
        return <Spinner />;
    }

    return (
        <Detalhes character={character} />
    );
};

export default Details;
