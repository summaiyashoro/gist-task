
import styled from 'styled-components'
import Header from "./components/common/Header";
import GlobalStyles from "./GlobalStyle";
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppContextProvider } from './context/AppContextProvider';
import GistList from './components/GistList';

const App = () => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <Wrapper className="App" data-testid="app">
          <Header />
          <GistList />
          <GlobalStyles />
        </Wrapper>
        <ToastContainer />
      </AppContextProvider>
    </QueryClientProvider>
  );
}

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;
