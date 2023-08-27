import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';

import Login from '../src/component/Login'
import RegistrationTeam from '../src/component/RegistrationTeam'
import Chat from '../src/component/Chat'

import { fetchMe, isAuth } from '../src/redux/slice/AuthSlice';

import './App.css';

function App() {

  const dispatch = useDispatch()
  const isUserAuth = useSelector(isAuth)

  useEffect(() => {
    dispatch(fetchMe());
  }, [])

  return (
    <div className="App">
      <Routes>

        {isUserAuth ? (<Route path='/chat' element={<Chat/>}/>) : 
          (<Route path='/login' element={<Login/>}/>)}

        {isUserAuth ? (<Route path='/chat/:id' element={<Chat/>}/>) : 
          (<Route path='/login' element={<Login/>}/>)}

        <Route path='/login' element={<Login/>}/>

        <Route path='/registration/team' element={<RegistrationTeam/>}/>

        <Route path='/' element={<Login/>}/>

      </Routes>
    </div>
  );
}

export default App;
