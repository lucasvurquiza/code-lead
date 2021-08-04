import { createContext } from 'react';

interface IModalContext {
  openPopupEdit: boolean;
  setOpenPopupEdit: (value: boolean) => void;
}

export const ModalContext = createContext({} as IModalContext);
