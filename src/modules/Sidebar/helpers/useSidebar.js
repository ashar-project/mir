import { useDispatch, useSelector } from 'react-redux';
import {
  toggleOpen as toggleOpenAction,
  setOpen as setOpenAction,
} from '../store';

export const useSidebar = () => {
  const open = useSelector(state => state.sidebar.isOpen);
  const dispatch = useDispatch();

  const toggleOpen = () => {
    dispatch(toggleOpenAction());
  };

  const setOpen = state => {
    dispatch(setOpenAction(state));
  };

  return { open, toggleOpen, setOpen };
};
