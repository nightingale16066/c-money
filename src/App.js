import style from './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
// import {useDispatch} from 'react-redux';
// import {authSlice} from './store/auth/authSlice';
// import {getToken} from './hooks/useAuth';

function App() {
  // const dispatch = useDispatch();
  // dispatch(authSlice.actions.updateToken(getToken()));

  return (
    <>
      <Header className={style.header}/>
      <Main className={style.main}/>
      <Footer className={style.footer}/>
    </>
  );
}

export default App;
