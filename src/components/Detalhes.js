import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

const Detalhes = ({ character }) => {
  return (
    <Box p={5} style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <Image src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        width={500} style={{ borderRadius: "25px" }}
        alt={character.name} />
      <Text fontSize="2xl" fontWeight="bold">{character.name}</Text>
      <Text mt="2" color="gray.600" fontSize="md" style={{ width: "500px" }}>
        {character.description || 'No description available'}
      </Text>
    </Box >
  );
};

export default Detalhes;
