import React, {createContext, useState, useEffect} from 'react';
import { ToastContainer } from 'react-toastify';
import Layout from './components/Layout/Layout';

export const MyContext = createContext("");

function App() {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [userId] = useState(-1);
  const [statusUser] = useState(-1)

  return(
    <div>
      <MyContext.Provider
        value={{
          email,
          setEmail,
          pass,
          setPass
        }}
      >
      <Layout/>
      <ToastContainer
        position='top-center'
        closeOnClick
        theme='light'
      />
      </MyContext.Provider>
    </div>
  );
}

export default App;
