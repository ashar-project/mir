import { InstagramLogo, TelegramLogo, WhatsappLogo } from '@/assets/icon';
import { Typography, styled } from '@mui/material';
import React from 'react';

export const Support = () => {
  return (
    <StyledContainer>
      <StyledTyphograpyText>По Вопросам</StyledTyphograpyText>
      <StyledSocialNetworks>
        <StyledIconWrapper>
          <WhatsappLogo />
        </StyledIconWrapper>
        <StyledIconWrapper>
          <InstagramLogo />
        </StyledIconWrapper>
        <StyledIconWrapper>
          <TelegramLogo />
        </StyledIconWrapper>
      </StyledSocialNetworks>
      <StyledLoremTextBox>
        <StyledLoremText>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ab consectetur earum ex, modi excepturi
          id. Consequatur nam porro culpa praesentium sunt, fuga a sit, eum,
          harum nisi quibusdam. Quod, aspernatur. In omnis tempore minus quaerat
          libero velit doloribus, perferendis, aspernatur unde facere nisi,
          nostrum cum ex possimus excepturi repellat id. Dignissimos provident
          deserunt quasi optio repellat fugit voluptas ex suscipit.
        </StyledLoremText>
      </StyledLoremTextBox>
    </StyledContainer>
  );
};

const StyledContainer = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: '1087px',
  height: '681px',
  margin: '20px auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxSizing: 'border-box',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '270px',
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '300px',
  },
}));

const StyledTyphograpyText = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontWeight: '600',
  fontSize: '24px',
  marginBottom: '20px',
  fontFamily: 'Montserrat, sans-serif',
  [theme.breakpoints.down('sm')]: {
    fontSize: '18px',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '22px',
  },
}));

const StyledSocialNetworks = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: '300px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '211px',
  },
  [theme.breakpoints.down('lg')]: {
    maxWidth: '240px',
  },
}));

const StyledIconWrapper = styled('div')({
  width: '72px',
  height: '72px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
});

const StyledIcon = styled('img')({
  width: '48px',
  height: '48px',
});

const StyledLoremTextBox = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: '1087px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 20px',
  boxSizing: 'border-box',
  [theme.breakpoints.down('sm')]: {
    width: '300px',
  },
  [theme.breakpoints.down('lg')]: {
    width: '380px',
  },
}));

const StyledLoremText = styled('p')(({ theme }) => ({
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '18px',
  fontWeight: '400',
  textAlign: 'center',
  maxWidth: '60%',
  overflowWrap: 'break-word',
  lineHeight: '28px',
  marginTop: '0px',
  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
    lineHeight: '24px',
    maxWidth: '100%',
    textAlign: 'center',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '20px',
    lineHeight: '28px',
    maxWidth: '100%',
    textAlign: 'center',
  },
}));
