import { complete, Delete, Gogle } from '@/assets/icon';
import { styled, Typography } from '@mui/material';
import React from 'react';

export const MobileCard = ({ item }) => {
  console.log(item);
  return item.map(el => (
    <Card key={el}>
      <BlockAvatat>
        <Delete />
        <div>
          <Typography fontWeight={400} fontSize={'17px'}>
            {el?.userName || 'Ахатджанов Даниел'}
          </Typography>
          <Typography color="#959393" fontWeight={400} fontSize={'13px'}>
            {el?.email || 'tanya.hill@example.com'}
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
          {`${el?.goal} сом` || '1 000 000 сом'}
        </Typography>
      </BlockPrice>
      {/* <BlockActions>
        <DeleteIcon src={Delete} alt="Delete" />
        <CompleteIcon src={complete} alt="Complete" />
      </BlockActions> */}
    </Card>
  ));
};

const Card = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'none',
  [theme.breakpoints.down('sm')]: {
    width: '95%',
    minHeight: '150px',
    margin: '20px auto',
    display: 'flex',
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
  [theme.breakpoints.down('sm')]: {
    width: '90%',
    height: '50px',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    marginTop: '10px',
  },
}));

const BlockActions = styled('div')(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    width: '95%',
    minHeight: '60px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 10px',
  },
}));

const DeleteIcon = styled('img')({});
const CompleteIcon = styled('img')({});
