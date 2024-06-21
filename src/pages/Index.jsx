import React, { useState } from "react";
import { Container, VStack, Input, Button, Text, Box, HStack, IconButton } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [apiKey, setApiKey] = useState("");
  const [apiKeys, setApiKeys] = useState([]);

  const handleAddKey = () => {
    if (apiKey.trim() !== "") {
      setApiKeys([...apiKeys, apiKey]);
      setApiKey("");
    }
  };

  const handleDeleteKey = (keyToDelete) => {
    setApiKeys(apiKeys.filter((key) => key !== keyToDelete));
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">API Key Storage</Text>
        <HStack width="100%">
          <Input
            placeholder="Enter your API key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
          <Button onClick={handleAddKey} colorScheme="teal">
            Add Key
          </Button>
        </HStack>
        <VStack spacing={2} width="100%">
          {apiKeys.map((key, index) => (
            <Box key={index} p={2} borderWidth="1px" borderRadius="md" width="100%" display="flex" justifyContent="space-between" alignItems="center">
              <Text isTruncated>{key}</Text>
              <IconButton
                aria-label="Delete key"
                icon={<FaTrash />}
                colorScheme="red"
                onClick={() => handleDeleteKey(key)}
              />
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;