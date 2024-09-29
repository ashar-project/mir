import { complete, Delete } from '@/assets/icon';
import { styled, Typography } from '@mui/material';
import React from 'react';

export const MobileCard = ({item}) => {
  return (
    <Card key={item}>
      <BlockAvatat>
        <Img src={'src/assets/icon/Gogle.svg'} />
        <div>
          <Typography fontWeight={400} fontSize={'17px'}>
            Ахатджанов Даниел
          </Typography>
          <Typography color="#959393" fontWeight={400} fontSize={'13px'}>
            tanya.hill@example.com
          </Typography>
        </div>
      </BlockAvatat>
      <BlockPrice>
        <Typography
          color="#959393"
          fontWeight={400}
          fontSize={'32px'}
          lineHeight={20}
          fontFamily="'Nunito', sans-serif"
        >
          1 000 000 сом
        </Typography>
      </BlockPrice>
      <BlockActions>
        <DeleteIcon src={Delete} />
        <CompleteIcon src={complete} />
      </BlockActions>
    </Card>
  );
};


const Card = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'none',
  [theme.breakpoints.down('sm')]: {
    width: '95%',
    minHeight: '150px',
    margin: '20px auto',
    display: ' flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '6px',
    boxShadow: '0px 7px 8px 0px rgba(34, 60, 80, 0.2)',
  },
}));

const BlockAvatat = styled('div')(({ theme }) => ({
  width: '50%',

  [theme.breakpoints.down('sm')]: {
    width: '95%',
    height: '73px',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'end',
    gap: '10px',
  },
}));

const Img = styled('img')(({ theme }) => ({
  width: '50%',
  height: '50%',
  borderRadius: '50%',

  [theme.breakpoints.down('sm')]: {
    width: '70px',
    height: '70px',
  },
  cursor: 'pointer',
}));

const BlockPrice = styled('div')(({ theme }) => ({
  width: '50%',
  // height: '50%',

  [theme.breakpoints.down('sm')]: {
    width: '90%',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10px',
  },
}));

const BlockActions = styled('div')(({ theme }) => ({
  width: '100%',
  // height: '50%',

  [theme.breakpoints.down('sm')]: {
    width: '95%',
    minHeight: '60px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 10px',
  },
}));

const DeleteIcon = styled('img')(({ theme }) => ({}));
const CompleteIcon = styled('img')(({ theme }) => ({}));
