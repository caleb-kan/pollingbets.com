import React from 'react';
import { Box, Heading, Textarea, Button } from '@chakra-ui/react';

function HostPoll() {
  return (
    <Box>
      <Heading as="h2" size="lg" mb={4}>Host a Poll</Heading>
      <Textarea placeholder="Enter your poll question" mb={4} />
      <Button colorScheme="teal">Submit</Button>
    </Box>
  );
}

export default HostPoll;
