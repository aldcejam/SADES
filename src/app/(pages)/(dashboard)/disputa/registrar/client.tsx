'use client';
import { Provider as ProviderRedux } from 'react-redux';
import { Store } from './@core/entities/config/store';
import { PageContextProvider } from './context';

const Client = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProviderRedux store={Store}>
      <PageContextProvider>{children}</PageContextProvider>
    </ProviderRedux>
  );
};

export { Client };
