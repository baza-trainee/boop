/* eslint-disable no-unused-vars */
'use client';

import React, { useState, useContext, createContext, ReactNode } from 'react';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';

interface ModalContextProps {
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextProps | null>(null);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  useBodyScrollLock(isOpen);

  const openModal = (content: ReactNode) => {
    setModalContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalContent(null);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-customOverlay">
          <div className="relative mx-5 w-full max-w-[800px] rounded-lg bg-purple-100 p-6 text-xl">
            <button
              className="absolute right-6 top-6 text-2xl font-bold text-black"
              onClick={closeModal}
            >
              ✕
            </button>
            {modalContent}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
