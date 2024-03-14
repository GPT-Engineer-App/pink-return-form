import React, { useState } from "react";
import { Box, Heading, Text, VStack, FormControl, FormLabel, Input, Textarea, Button, useToast } from "@chakra-ui/react";

const ReturnForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState("");
  const [reason, setReason] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    toast({
      title: "Return Submitted",
      description: "Your return request has been submitted successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    setName("");
    setEmail("");
    setOrderId("");
    setReason("");
  };

  return (
    <Box bg="pink.50" minH="100vh" py={8}>
      <VStack spacing={8} align="center">
        <Heading as="h1" size="2xl" color="pink.600">
          Report a Return
        </Heading>
        <Text fontSize="xl" color="gray.600" textAlign="center" maxW="md">
          If you need to return an item, please fill out the form below and we will process your return request.
        </Text>
        <Box bg="white" p={8} borderRadius="lg" boxShadow="md" maxW="lg" w="100%">
          <form onSubmit={handleSubmit}>
            <VStack spacing={6}>
              <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="orderId" isRequired>
                <FormLabel>Order ID</FormLabel>
                <Input type="text" value={orderId} onChange={(e) => setOrderId(e.target.value)} />
              </FormControl>
              <FormControl id="reason" isRequired>
                <FormLabel>Reason for Return</FormLabel>
                <Textarea value={reason} onChange={(e) => setReason(e.target.value)} />
              </FormControl>
              <Button type="submit" colorScheme="pink" size="lg" w="100%">
                Submit Return
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </Box>
  );
};

export default ReturnForm;
