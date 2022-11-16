import React from 'react';
import Main from '../components/main/main'
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient()
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  );
};



export default App;


