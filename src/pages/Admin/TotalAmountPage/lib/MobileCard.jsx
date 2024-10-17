import { Delete } from '@/assets/icon';
import { Avatar } from '@/assets/image';
import { styled, Typography } from '@mui/material';
import React from 'react';

export const MobileCard = ({ item, handlerId }) => {
  console.log(item);

  return (
    <>
      {item?.map(el => (
        <Card key={el.id} onClick={() => handlerId(el.id)}>
          <BlockAvatat>
            <img
              style={{ width: '60px', height: '60px', borderRadius: '100%' }}
              src={el.photoUrl || Avatar}
              alt=""
            />
            <div>
              <Typography fontWeight={400} fontSize={'17px'}>
                {el.userName || 'Ахатджанов Даниел'}
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
              fontFamily="'Nunito', sans-serif"
            >
              {`${new Intl.NumberFormat('ru-RU').format(el?.userTotalSum) || new Intl.NumberFormat('ru-RU').format(el.totalSum)} сом` ||
                '1 000 000 сом'}
            </Typography>
          </BlockPrice>
        </Card>
      ))}
    </>
  );
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
