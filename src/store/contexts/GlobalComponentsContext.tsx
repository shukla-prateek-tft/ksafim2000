import React, { createContext, ReactNode, useState } from 'react';

type RenderedComponentType = React.FC | null;

interface GlobalComponentsContextType {
  GlobalRenderedComponent: RenderedComponentType;
  setGlobalRenderedComponent: React.Dispatch<React.SetStateAction<RenderedComponentType>>;
}

export const GlobalComponentsContext = createContext<GlobalComponentsContextType>({
  GlobalRenderedComponent: null,
  setGlobalRenderedComponent: () => {}
});

interface Props {
  children: ReactNode;
}

function GlobalComponentsContextWrapper({ children }: Props) {
  const [GlobalRenderedComponent, setGlobalRenderedComponent] =
    useState<RenderedComponentType>(null);

  const ctxData: GlobalComponentsContextType = {
    GlobalRenderedComponent,
    setGlobalRenderedComponent
  };

  return (
    <GlobalComponentsContext.Provider value={ctxData}>{children}</GlobalComponentsContext.Provider>
  );
}

export default GlobalComponentsContextWrapper;
