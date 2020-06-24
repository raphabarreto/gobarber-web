import React from 'react';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

import GlobalStyle from './styles/global';

import AuthContext from './context/AuthContent';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Raphael' }}>
      <SignIn />
    </AuthContext.Provider>
    <GlobalStyle />
  </>
);

export default App;
