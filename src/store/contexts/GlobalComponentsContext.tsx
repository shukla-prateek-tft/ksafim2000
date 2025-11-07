import React, { createContext, useState, ReactNode, useCallback, Suspense, lazy } from 'react';

type RenderedComponentType = React.FC | null;

interface GlobalComponentsContextType {
  GlobalRenderedComponent: RenderedComponentType;
  setGlobalRenderedComponent: React.Dispatch<React.SetStateAction<RenderedComponentType>>;
  renderComponent: (componentName: string, props?: any) => void;
  closeComponent: () => void;
}

export const GlobalComponentsContext = createContext<GlobalComponentsContextType>({
  GlobalRenderedComponent: null,
  setGlobalRenderedComponent: () => {},
  renderComponent: () => {},
  closeComponent: () => {}
});

interface Props {
  children: ReactNode;
}
// Lazy-load all components here
const COMPONENT_REGISTRY: Record<string, any> = {
  MCFS0600: lazy(
    () =>
      import('@/pages/systemManagement/listOfSuppliersFilters/ListOfSuppliersFilters.controller')
  ),
  MCFS0641:lazy(
    () =>
      import('@/pages/payments/paymentVoucherCancellationSection/PaymentVoucherCancellationSection.controller')
  )
};

const GlobalComponentsContextWrapper = ({ children }: Props) => {
  const [GlobalRenderedComponent, setGlobalRenderedComponent] =
    useState<RenderedComponentType>(null);

  const renderComponent = useCallback((componentName: string, props = {}) => {
    const Component = COMPONENT_REGISTRY[componentName];
    if (!Component) return console.error(`${componentName} not found in registry!`);

    setGlobalRenderedComponent(() => () => (
      <Suspense fallback={<div>Loading {componentName}...</div>}>
        <Component {...props} />
      </Suspense>
    ));
  }, []);

  const closeComponent = useCallback(() => setGlobalRenderedComponent(null), []);
console.log('Rerneder');

  return (
    <GlobalComponentsContext.Provider
      value={{
        GlobalRenderedComponent,
        setGlobalRenderedComponent,
        renderComponent,
        closeComponent
      }}
    >
      {children}{GlobalRenderedComponent &&
      <div dir="rtl"><GlobalRenderedComponent /></div> }
    </GlobalComponentsContext.Provider>
  );
};

export default GlobalComponentsContextWrapper;
