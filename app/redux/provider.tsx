// src/app/providers.tsx
'use client';

import React, { ReactNode } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import store from '@/app/redux/store';

import { QueryClient, QueryClientProvider } from 'react-query';

interface ProvidersProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </ReduxProvider>
  );
};

export default Providers;
