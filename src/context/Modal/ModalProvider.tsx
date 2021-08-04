import React, { useState } from "react";
import {ModalContext} from './ModalContext';

export const ModalProvider: React.FC = ({ children }) => {
  const [openPopupEdit, setOpenPopupEdit] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        openPopupEdit,
        setOpenPopupEdit
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}