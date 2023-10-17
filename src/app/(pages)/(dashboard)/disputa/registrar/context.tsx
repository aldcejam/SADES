'use client';
import { createContext, ReactNode, useContext, useState } from 'react';
import { ToggleWhenSportAndCourseIsSelected } from './@core/utils/toggleWhenSportAndCourseIsSelected';
import { ToggleWhenAllCategoriesIsSelected } from './@core/utils/toggleWhenAllCategoriesIsSelected';

interface PageContextProps {
  modalSelectCategories: {
    state: boolean;
    Toggle: () => void;
  };
  modalToConfigGame: {
    state: boolean;
    Toggle: () => void;
  };
}

const PageContext = createContext<PageContextProps>({} as PageContextProps);

export const PageContextProvider = ({ children }: { children: ReactNode }) => {
  const [modalSelectCategories, setModalSelectCategories] = useState(false);
  const [modalToConfigGame, setModalToConfigGame] = useState(false);

  const ToggleModalSelectCategories = ToggleWhenSportAndCourseIsSelected({
    state: modalSelectCategories,
    setState: setModalSelectCategories,
  });

  const ToggleModalToConfigGame = ToggleWhenAllCategoriesIsSelected({
    state: modalToConfigGame,
    setState: setModalToConfigGame,
  });

  return (
    <PageContext.Provider
      value={{
        modalSelectCategories: {
          state: modalSelectCategories,
          Toggle: ToggleModalSelectCategories,
        },
        modalToConfigGame: {
          state: modalToConfigGame,
          Toggle: ToggleModalToConfigGame,
        },
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

export const usePageRegistrarDisputa = () => {
  return useContext(PageContext);
};
