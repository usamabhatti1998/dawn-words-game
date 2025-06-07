'use client';

import { Container, Typography, Box } from '@mui/material';
import LetterGrid from './components/LetterGrid';
import WordInput from './components/WordInput';

const GAME_CONFIG = {
  word: 'TARGETING',
  centerIndex: 4,
  minWordLength: 4,
};

export default function Home() {
  const letters = GAME_CONFIG.word.split('');
  const centerLetter = letters[GAME_CONFIG.centerIndex];

  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Dawn Word Puzzle
        </Typography>
        <Typography variant="subtitle1" gutterBottom sx={{ mb: 4, color: 'text.secondary' }}>
          Find words using these letters. Each word must include the center letter.
        </Typography>

        <LetterGrid letters={letters} centerLetter={centerLetter} />
        <WordInput 
          centerLetter={centerLetter} 
          minWordLength={GAME_CONFIG.minWordLength}
        />
      </Box>
    </Container>
  );
}
