import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, VStack, Alert } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Preencha todos os campos');
      return;
    }
    if (password.length < 8) {
      setError('A senha deve ter no mínimo 8 caracteres');
      return;
    }
    navigate('/list');
  };

  return (
    <Box w="100vw" h="100vh" display="flex" justifyContent="center" alignItems="center" backgroundColor="#8e1a23">
      <VStack as="form" onSubmit={handleSubmit} spacing={4} style={{ backgroundColor: "#FFF", padding: "50px 100px", borderRadius: "25px" }}>
        {error && <Alert status="error">{error}</Alert>}
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input
            border="1px solid #6c6c6c"
            backgroundColor="#CCC"
            width="300px"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Senha</FormLabel>
          <Input
            border="1px solid #6c6c6c"
            backgroundColor="#CCC"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button type="submit" style={{ width: "100%" }} colorScheme="blue">Login</Button>
      </VStack>
    </Box>
  );
};

export default Login;
