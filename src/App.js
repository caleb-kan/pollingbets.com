import React from 'react';
import { Box, Flex, Heading, Button, Container, Link } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Feed from './components/Feed';
import HostPoll from './components/HostPoll';

function App() {
  return (
    <Router>
      <Box>
        <Flex bg="blue.500" p={4} color="white" alignItems="center" justifyContent="space-between">
          <Heading size="lg">Polling Bets</Heading>
          <Flex>
            <Link href="/" color="white" mx={2}>Feed</Link>
            <Link href="/host" color="white" mx={2}>Host a Poll</Link>
          </Flex>
        </Flex>
        <Container mt={4}>
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/host" element={<HostPoll />} />
          </Routes>
        </Container>
      </Box>
    </Router>
  );
}

export default App;
