import React, { useEffect } from 'react';
import { Box, Image, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Personagens = ({ character }) => {

  useEffect(() => {
    console.log(character);
  }, [character]);

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Text fontWeight="bold" textTransform="uppercase" fontSize="sm" color="teal.600">
            {character.name}
          </Text>
        </Box>
        <Box>
          <Text mt="2" color="gray.600" fontSize="sm">
            {character.description || 'No description available'}
          </Text>
          <Link to={`/details/${character.id}`}>
            <Button mt="4" colorScheme="teal">Ver Detalhes</Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Personagens;
