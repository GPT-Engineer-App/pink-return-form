import React from "react";
import { Box, Heading, Text, Button, HStack } from "@chakra-ui/react";

const TermsAndConditions = ({ onAccept, onDecline }) => {
  return (
    <Box p={8}>
      <Heading as="h2" size="xl" mb={4}>
        Terms and Conditions
      </Heading>
      <Text mb={8}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at velit vel sapien bibendum ullamcorper. Phasellus euismod, nulla sit amet aliquam lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl. Nullam auctor, nisl eget aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.</Text>
      <HStack justify="flex-end">
        <Button variant="ghost" onClick={onDecline}>
          Decline
        </Button>
        <Button colorScheme="pink" onClick={onAccept}>
          Accept and Continue
        </Button>
      </HStack>
    </Box>
  );
};

export default TermsAndConditions;
