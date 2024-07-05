"use client";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

type AppContextType<T extends any = any> = {
  state: {
    isModalOpen: boolean;
  };
  setState: Dispatch<SetStateAction<any>>;
  mutateState: (stateChunk?: Partial<T>) => void;
};

const AppDataContext = createContext<AppContextType>({
  state: {
    isModalOpen: false,
  },
  setState: () => {},
  mutateState: () => {},
});

export const useAppDataContext = () => {
  return useContext(AppDataContext);
};

export const AppDataContextProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState({
    isModalOpen: false,
  });

  return (
    <AppDataContext.Provider
      value={{
        state,
        setState,
        mutateState: (data) => setState((st) => ({ ...st, ...data })),
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
};
