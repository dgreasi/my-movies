import React from 'react';
import { Box, Text } from '~components';

interface Props {
  rating: string;
  votes: string;
}

const EntityRating = ({ rating, votes }: Props) => {
  return (
    <Box flexDirection="row" justifyContent="space-between" alignItems="center" marginTop="s" marginBottom="m">
      <Text>IMDB Rating: {rating}</Text>
      {votes?.length > 0 && <Text>Votes: {votes}</Text>}
    </Box>
  );
};

export default EntityRating;
