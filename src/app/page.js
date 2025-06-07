'use client';

import { Container, Typography, Box } from '@mui/material';
import LetterGrid from './components/LetterGrid';
import WordInput from './components/WordInput';

// Example 9-letter word: "TARGETING"
const GAME_WORD = "TARGETING";
const letters = GAME_WORD.split('');
const centerLetter = letters[4]; // Middle letter

export default function Home() {
  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Word Puzzle
        </Typography>
        <Typography variant="subtitle1" gutterBottom sx={{ mb: 4 }}>
          Find words using these letters. Each word must use the center letter.
        </Typography>

        <LetterGrid letters={letters} centerLetter={centerLetter} />
        <WordInput centerLetter={centerLetter} />
      </Box>
    </Container>
  );
}
