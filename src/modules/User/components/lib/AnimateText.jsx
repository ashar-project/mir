import { styled, Typography } from '@mui/material';
import { Fragment } from 'react';

const getRandomColor = () => {
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A8', '#A833FF'];
  return colors[Math.floor(Math.random() * colors.length)];
};

export const AnimatedText = ({ text, style }) => {
  return (
    <Typography variant="h5" component="div" style={style}>
      {text.split('').map((char, index) => (
        <Fragment key={index}>
          <AnimatedLetter delay={index * 0.1}>{char}</AnimatedLetter>
        </Fragment>
      ))}
    </Typography>
  );
};

const AnimatedLetter = styled('span')(({ delay }) => ({
  display: 'inline-block',
  animation: 'jump 0.6s ease-in-out infinite',
  animationDelay: `${delay}s`,
  opacity: 0,
  color: getRandomColor(),

  '@keyframes jump': {
    '0%': { opacity: 0, transform: 'translateY(0px)' },
    '50%': {
      opacity: 1,
      transform: 'translateY(-20px)',
      color: getRandomColor(),
    },
    '100%': { opacity: 0, transform: 'translateY(0px)' },
  },
}));
