import React, { useState } from "react";
import { Box, Heading, Text, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";
import TermsAndConditions from "../components/TermsAndConditions";
import ReturnForm from "../components/ReturnForm";

const Index = () => {
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [isReturnFormOpen, setIsReturnFormOpen] = useState(false);

  const handleReturnClick = () => {
    setIsTermsAccepted(false);
    setIsReturnFormOpen(true);
  };

  const handleTermsAccept = () => {
    setIsTermsAccepted(true);
  };

  const handleReturnFormClose = () => {
    setIsReturnFormOpen(false);
  };

  return (
    <Box bg="pink.50" minH="100vh" py={8}>
      <Heading as="h1" size="2xl" color="pink.600" textAlign="center" mb={8}>
        Products
      </Heading>
      <Text fontSize="xl" color="gray.600" textAlign="center" mb={8}>
        Browse our amazing products!
      </Text>
      <Box textAlign="center">
        <Button colorScheme="pink" size="lg" onClick={handleReturnClick}>
          Return an Item
        </Button>
      </Box>

      <Modal isOpen={isReturnFormOpen} onClose={handleReturnFormClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Return an Item</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{!isTermsAccepted ? <TermsAndConditions onAccept={handleTermsAccept} /> : <ReturnForm />}</ModalBody>
          <ModalFooter>
            <Button colorScheme="pink" mr={3} onClick={handleReturnFormClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Index;
