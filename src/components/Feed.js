import React, { useEffect, useState } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import axios from 'axios';

function Feed() {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/polls')
      .then(response => {
        setPolls(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the polls!', error);
      });
  }, []);

  return (
    <Box>
      <Heading as="h2" size="lg" mb={4}>Polls</Heading>
      {polls.length > 0 ? (
        <ul>
          {polls.map(poll => (
            <Box key={poll.id} mb={2}>
              <Text fontSize="lg">{poll.title}</Text>
            </Box>
          ))}
        </ul>
      ) : (
        <Text>No polls available</Text>
      )}
    </Box>
  );
}

export default Feed;
