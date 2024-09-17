import { useDispatch, useSelector } from 'react-redux';
import { toggleOpen as toggleOpenAction } from '../store';

export const useSidebar = () => {
  const open = useSelector(state => state.sidebar.isOpen);
  const dispatch = useDispatch();

  const toggleOpen = () => {
    dispatch(toggleOpenAction());
  };

  return { open, toggleOpen };
};
