import { Avatar, Negr } from '@/assets/image';
import { upload as Upload } from '@/assets/icon';
import { Button, Input } from '@/components';
import { Box, styled, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import {
  addFileAWS3,
  updateProfile,
} from '@/store/slice/profileSlice/profileThunk';
import { Spinner } from '@/components/Spinner/Spinner';

export const UserEditPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    profile,
    isLoading,
    file: Files,
  } = useSelector(state => state.profile);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: profile?.name || '',
      goal: profile?.goal || '',
      phoneNumber: profile?.phoneNumber || '',
      photoUrl: profile?.photoUrl || '',
    },
  });

  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    reset(profile);
    setValue('photoUrl', Files.link);
  }, [profile]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: acceptedFiles => {
      const file = acceptedFiles[0];
      if (file) {
        const objectUrl = URL.createObjectURL(file);
        setSelectedFile(objectUrl);

        dispatch(addFileAWS3(file))
          .unwrap()
          .then(uploadedFile => {
            const { link } = uploadedFile;
            setValue('photoUrl', link);
          })
          .catch(error => {
            console.error('Ошибка загрузки файла:', error);
            URL.revokeObjectURL(objectUrl);
          });
      }
    },
  });

  useEffect(() => {
    return () => {
      if (selectedFile) {
        URL.revokeObjectURL(selectedFile);
      }
    };
  }, [selectedFile]);

  const handlerSubmitValue = data => {
    const { id, ...value } = data;

    dispatch(updateProfile({ value, navigate }));
  };

  return (
    <>
      {isLoading && <Spinner />}
      <Button style={{ margin: '10px' }} onClick={() => navigate(-1)}>
        Назад
      </Button>
      <Main onSubmit={handleSubmit(handlerSubmitValue)}>
        <Container>
          <BlockOne {...getRootProps()}>
            <Div>
              {!Files && !profile.photoUrl && <Upload />}
              <input {...getInputProps()} />
            </Div>
            {Files ? (
              <Img src={Files.link} />
            ) : (
              <Img src={profile.photoUrl || Avatar} alt="Profile" />
            )}
          </BlockOne>
          <BlockTwo>
            <Block>
              <TypographyStyled>ФИО:</TypographyStyled>
              <TextField
                fullWidth
                size="small"
                {...register('name', {
                  required: 'Имя обязательно для заполнения',
                })}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            </Block>
            <Block>
              <TypographyStyled>Цель:</TypographyStyled>
              <TextField
                fullWidth
                size="small"
                {...register('goal', {
                  required: 'Цель обязательна для заполнения',
                })}
                error={!!errors.goal}
                helperText={errors.goal?.message}
              />
            </Block>
            <Block>
              <TypographyStyled>Номер:</TypographyStyled>
              <TextField
                fullWidth
                size="small"
                {...register('phoneNumber', {
                  required: 'Номер телефона обязателен для заполнения',
                  pattern: {
                    value: /^[\d\+]{10,15}$/,
                    message: 'Введите корректный номер телефона',
                  },
                })}
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber?.message}
              />
            </Block>
          </BlockTwo>
        </Container>
        <ButtonBlock>
          <Button
            type="button"
            variant="outlined"
            style={{ borderRadius: '10px' }}
            onClick={() => navigate(-1)}
            fullWidth
          >
            Назад
          </Button>
          <Button style={{ borderRadius: '10px' }} fullWidth type="submit">
            Изменить
          </Button>
        </ButtonBlock>
      </Main>
    </>
  );
};

const Container = styled(Box)(({ theme }) => ({
  width: '800px',
  height: '320px',
  margin: '20px auto',
  display: 'flex',
  alignItems: 'center',
  gap: '20px',

  [theme.breakpoints.down('sm')]: {
    width: '85%',
    margin: '10px auto',
    height: '500px',
    borderRadius: '0.375em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
    gap: '30px',
    padding: '0.625em',
    boxShadow: '0px 7px 20px -1px rgba(199,193,199,1)',
  },
}));

const Main = styled('form')(({ theme }) => ({
  width: '1000px',
  height: '610px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'start',
  margin: '50px auto',
  boxShadow: '0px 7px 20px -1px rgba(199,193,199,1)',
  borderRadius: '6px',

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    margin: '0 auto',
    boxShadow: 'none',
  },
}));

const ButtonBlock = styled('div')(({ theme }) => ({
  width: '60%',
  display: 'flex',
  gap: '20px',
  [theme.breakpoints.down('sm')]: {
    width: '85%',
    margin: '0 auto',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
  },
}));

const BlockOne = styled(Box)(({ theme }) => ({
  width: '80%',
  height: '18.75em',
  position: 'relative',

  [theme.breakpoints.down('sm')]: {
    width: 'clamp(14.5em, 50vw, 21.875em)',
    height: 'clamp(14.5em, 50vw, 21.875em)',
    borderRadius: '0.375em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Div = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}));

const Img = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: '100%',
  },
}));

const BlockTwo = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px',

  [theme.breakpoints.down('sm')]: {
    height: '9.375em',
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
}));

const Block = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  alignItems: 'center',

  [theme.breakpoints.down('sm')]: {
    width: '14rem',
    display: 'flex',
    flexDirection: 'column',
  },
}));

const TypographyStyled = styled(Typography)(({ theme }) => ({
  width: '90px',

  [theme.breakpoints.down('sm')]: {
    fontSize: '1.063em',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 500,
    textAlign: 'center',
  },
}));
