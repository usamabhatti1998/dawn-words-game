'use client';

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
        gap: 2
      }}
    >
      {letters.map((letter, index) => (
        <Paper
          key={index}
          elevation={3}
          sx={{
            height: 80,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: letter === centerLetter ? 'primary.main' : 'background.paper',
            '&:hover': {
              cursor: 'pointer',
              transform: 'scale(1.05)',
              transition: 'transform 0.2s',
            },
          }}
        >
          <Typography
            variant="h4"
            component="span"
            sx={{
              color: letter === centerLetter ? 'white' : 'text.primary',
              fontWeight: 'bold',
            }}
          >
            {letter}
          </Typography>
        </Paper>
      ))}
    </Grid>
  );
} 