"use client";
import {
  Dispatch,
  useContext,
  createContext,
  FC,
  ReactNode,
  useState,
  SetStateAction,
} from "react";

type TabsProps = {
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
};

const TabsContext = createContext<TabsProps>({
  activeTab: 1,
  setActiveTab: () => {},
});

export const TabsProvider: FC<{
  children: ReactNode;
  defaultIndex: number;
}> = ({ children, defaultIndex = 1 }) => {
  const [activeTab, setActiveTab] = useState(defaultIndex);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabsContext.Provider>
  );
};

export const useTabs = () => {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error("diluar yeh!!!");
  }

  return context;
};
