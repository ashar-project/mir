import { Avatar } from '@/assets/image';
import { Button, Input, ReusableModal, Select } from '@/components';
import { useEffect, useState } from 'react';
import { AdminPaymentTable } from './AdminTable/AdminTable';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  getReceivedUser,
  postReceivedUserPayment,
  procentUser,
} from '@/store/admin/adminReceived/adminReceivedThunk';
import { Spinner } from '@/components/Spinner/Spinner';
import {
  ButtomSlies,
  Container,
  BlockOne,
  ImgBlock,
  Img,
  TypographyStyled,
  BlockTwo,
  TableInfo,
  ModalBox,
  BlockS,
  InputLabelStyled,
  options,
  Class,
} from './AdminInnerReceivedPage';

export const AdminInnerReceivePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { receivedUser, isLoading } = useSelector(state => state.adminReceived);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('Ожидание.');
  const [sum, setText] = useState('');

  const handleChange = event => setStatus(event.target.value);
  const openModal = () => setOpen(prev => !prev);

  useEffect(() => {
    dispatch(procentUser(id));
  }, [dispatch]);

  const hanlder = e => {
    e.preventDefault();
    const value = {
      sum,
      status,
    };
    dispatch(postReceivedUserPayment({ userId: id, value, navigate })).then(
      () => {
        openModal();
        dispatch(getReceivedUser());
      }
    );
    setStatus('Ожидание.');
    setText('');
  };

  return (
    <>
      <ButtomSlies>
        <Button onClick={() => navigate(-1)}>Назад</Button>
      </ButtomSlies>
      {isLoading && <Spinner />}
      <Container>
        <BlockOne>
          <ImgBlock>
            <Img src={receivedUser.photoUrl || Avatar} alt="Profile" />
            <TypographyStyled
              variant="h5"
              fontFamily={'Montserrat,sans-serif'}
              fontWeight={400}
            >
              {receivedUser.userName}
            </TypographyStyled>
          </ImgBlock>
        </BlockOne>
        <BlockTwo>
          <TableInfo>
            <AdminPaymentTable
              variants={'admin'}
              value={receivedUser}
              onClick={openModal}
            />
          </TableInfo>
        </BlockTwo>
      </Container>
      <ReusableModal open={open} onClose={openModal}>
        <ModalBox>
          <TypographyStyled variant="h4">Введите сумму</TypographyStyled>
          <BlockS>
            <InputLabelStyled fullWidth htmlFor="amount">
              Сумма
              <Input
                onChange={e => setText(e.target.value)}
                size="small"
                fullWidth
                value={sum}
              />
            </InputLabelStyled>
            <Select
              style={{ width: '100%' }}
              label="Статус"
              fullWidth
              value={status}
              onChange={handleChange}
              options={options}
            />
          </BlockS>
          <Class>
            <Button onClick={openModal} variant="outlined">
              Отменить
            </Button>
            <Button type="submit" onClick={hanlder}>
              Подтвердить
            </Button>
          </Class>
        </ModalBox>
      </ReusableModal>
    </>
  );
};
