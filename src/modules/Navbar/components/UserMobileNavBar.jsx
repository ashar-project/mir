import {
  FinichedIcon,
  GaveUpIcon,
  ReceivedIcon,
  WorldPageicon,
} from '@/assets/icon';
import { Box, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const UserMobileNavBar = () => {
  return (
    <MobileSideBarStyled>
      <Block>
        <StyledNavLink to={'/admin'}>
          <WorldPageicon />
        </StyledNavLink>
      </Block>
      <Block>
        <StyledNavLink to={'worlds-page'}>
          <ReceivedIcon />
        </StyledNavLink>
      </Block>
      <Block>
        <StyledNavLink to={'received-page'}>
          <GaveUpIcon />
        </StyledNavLink>
      </Block>
      <Block>
        <StyledNavLink to={'graduated-page'}>
          <FinichedIcon />
        </StyledNavLink>
      </Block>
      <Block>
        <StyledNavLink to={'gave-page'}>
          <WorldPageicon />
        </StyledNavLink>
      </Block>
    </MobileSideBarStyled>
  );
};

const MobileSideBarStyled = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    width: '100%',
    height: '80px',
    borderTop: '1px solid #ccc',
    position: 'fixed',
    bottom: 0,
    left: 0,
    zIndex: 1000,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
}));

const Block = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '60px',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'background-color 0.3s ease',
    borderRadius: '6px',
  },
}));

const StyledNavLink = styled(NavLink)(() => ({
  color: 'inherit',
  textDecoration: 'none',
  padding: '10px',
  borderRadius: '4px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'background-color 0.3s ease, color 0.3s ease',

  '& img': {
    width: '24px',
    height: '24px',
    transition: 'filter 0.3s ease',
  },

  '&.active': {
    backgroundColor: '#637E7E',

    '& svg': {
      filter: 'brightness(0) invert(1)',
    },
  },
}));
