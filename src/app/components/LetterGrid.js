'use client';

import PropTypes from 'prop-types';
import { Paper, Grid, Typography } from '@mui/material';

export default function LetterGrid({ letters, centerLetter }) {
  return (
    <Grid 
      container 
      spacing={2} 
      sx={{ 
        maxWidth: 300, 
        margin: '0 auto', 
        mb: 4,
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 2,
        perspective: 1000,
      }}
    >
      {letters.map((letter, index) => {
        const isCenterLetter = letter === centerLetter;
        return (
          <Paper
            key={`${letter}-${index}`}
            elevation={3}
            sx={{
              height: 80,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: isCenterLetter ? 'primary.main' : 'background.paper',
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                cursor: 'pointer',
                transform: 'scale(1.05) rotateX(5deg)',
                boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
              },
            }}
          >
            <Typography
              variant="h4"
              component="span"
              sx={{
                color: isCenterLetter ? 'white' : 'text.primary',
                fontWeight: 'bold',
                userSelect: 'none',
              }}
            >
              {letter}
            </Typography>
          </Paper>
        );
      })}
    </Grid>
  );
}

LetterGrid.propTypes = {
  letters: PropTypes.arrayOf(PropTypes.string).isRequired,
  centerLetter: PropTypes.string.isRequired,
}; 