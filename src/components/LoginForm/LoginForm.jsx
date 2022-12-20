import React from 'react';
import style from './LoginForm.module.css';
import Button from '../../UI/Button';
import {useForm} from 'react-hook-form';
import {Navigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
// import {redirect} from 'react-router-dom';
import {authRequestAsync} from '../../store/auth/authAction';


export const LoginForm = props => {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const auth = useSelector(state => state.auth.token);
  const error = useSelector(state => state.auth.error);

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(authRequestAsync(data));
  };


  if (auth) {
    return <Navigate to="/profile"/>;
  }

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.title}>Вход в аккаунт</div>
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={style.item}>
            <div className={style.item_title}>Логин</div>
            <input className={style.input}
              type="text"
              {...register('login', {
                required: 'Login is required',
                pattern: {
                  value: /^[A-Z]+$/gi,
                  message: 'Используйте латиницу без пробелов'
                },
                minLength: {
                  value: 6,
                  message: 'Минимум 6 символов'
                }
              })}
            />
            {errors.login &&
             <p className={style.error}>{errors.login.message}</p>}
          </div>
          <div className={style.item}>
            <div className={style.item_title}>Пароль</div>
            <input className={style.input}
              type="password"
              {...register('password', {
                required: 'Password is required',
                pattern: {
                  value: /^[A-Z]+$/gi,
                  message: 'Только латиница, числа и без пробелов'
                },
                minLength: {
                  value: 6,
                  message: 'Минимум 6 символов'
                }
              })}
            />
            {errors.password &&
             <p className={style.error}>{errors.password.message}</p>}
          </div>
          <Button text='Войти' type='default'/>
        </form>
        {error && <div className={style.entry_error}>{error}</div>}
      </div>
    </div>
  );
};
