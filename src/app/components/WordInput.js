'use client';

import { useState } from 'react';
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

export default function WordInput({ centerLetter, onSubmit }) {
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
    setSnackbar({ ...snackbar, open: false });
  };

  const showMessage = (message, severity = 'error') => {
    setSnackbar({
      open: true,
      message,
      severity
    });
  };

  const isValidWord = (input) => {
    return (
      input.length >= 4 &&
      input.toLowerCase().includes(centerLetter.toLowerCase()) &&
      !foundWords.includes(input.toLowerCase())
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation first
    if (!word.trim()) {
      showMessage('Please enter a word');
      return;
    }

    if (word.length < 4) {
      showMessage('Word must be at least 4 letters long');
      return;
    }

    if (!word.toLowerCase().includes(centerLetter.toLowerCase())) {
      showMessage('Word must include the center letter');
      return;
    }

    if (foundWords.includes(word.toLowerCase())) {
      showMessage('You have already found this word');
      return;
    }

    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word.toLowerCase()}`
      );
      const data = await response.json();

      if (response.ok) {
        setFoundWords([...foundWords, word.toLowerCase()]);
        setDefinitions(data);
        setScore(score + 1);
        setWord('');
        showMessage('Word found! Well done!', 'success');
        onSubmit?.(word);
      } else {
        showMessage('Not a valid English word');
      }
    } catch (err) {
      showMessage('Error checking word. Please try again.');
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
          Words Found: {score}
        </Typography>
        <List dense>
          {foundWords.map((word, index) => (
            <ListItem key={index}>
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
              <div key={index}>
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