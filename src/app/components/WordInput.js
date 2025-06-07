'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
  Button,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
  Snackbar,
  Alert,
} from '@mui/material';

const DICTIONARY_API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en';

export default function WordInput({ centerLetter, minWordLength = 4, onSubmit }) {
  const [word, setWord] = useState('');
  const [definitions, setDefinitions] = useState([]);
  const [foundWords, setFoundWords] = useState([]);
  const [score, setScore] = useState(0);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'error'
  });

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  const showMessage = (message, severity = 'error') => {
    setSnackbar({
      open: true,
      message,
      severity
    });
  };

  const validateWord = (input) => {
    if (!input.trim()) {
      throw new Error('Please enter a word');
    }

    if (input.length < minWordLength) {
      throw new Error(`Word must be at least ${minWordLength} letters long`);
    }

    if (!input.toLowerCase().includes(centerLetter.toLowerCase())) {
      throw new Error('Word must include the center letter');
    }

    if (foundWords.includes(input.toLowerCase())) {
      throw new Error('You have already found this word');
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      validateWord(word);
      
      const response = await fetch(`${DICTIONARY_API_URL}/${word.toLowerCase()}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error('Not a valid English word');
      }

      setFoundWords(prev => [...prev, word.toLowerCase()]);
      setDefinitions(data);
      setScore(prev => prev + word.length);
      setWord('');
      showMessage('Word found! Well done!', 'success');
      onSubmit?.(word);
    } catch (err) {
      showMessage(err.message);
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 2 }}>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <TextField
            fullWidth
            value={word}
            onChange={(e) => setWord(e.target.value.toUpperCase())}
            label="Enter word"
            variant="outlined"
            autoComplete="off"
            autoFocus
          />
          <Button
            variant="contained"
            type="submit"
            disabled={!word.trim()}
            sx={{ minWidth: 100 }}
          >
            Submit
          </Button>
        </Box>
      </form>

      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Score: {score} ({foundWords.length} words)
        </Typography>
        <List dense>
          {foundWords.map((word, index) => (
            <ListItem key={`${word}-${index}`}>
              <ListItemText primary={word.toUpperCase()} />
            </ListItem>
          ))}
        </List>
      </Paper>

      {definitions.length > 0 && (
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Latest Word: {definitions[0].word.toUpperCase()}
          </Typography>
          <List>
            {definitions[0].meanings.map((meaning, index) => (
              <div key={`${meaning.partOfSpeech}-${index}`}>
                <ListItem>
                  <ListItemText
                    primary={meaning.partOfSpeech}
                    secondary={meaning.definitions[0].definition}
                  />
                </ListItem>
                {index < definitions[0].meanings.length - 1 && <Divider />}
              </div>
            ))}
          </List>
        </Paper>
      )}

      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={3000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

WordInput.propTypes = {
  centerLetter: PropTypes.string.isRequired,
  minWordLength: PropTypes.number,
  onSubmit: PropTypes.func,
}; 