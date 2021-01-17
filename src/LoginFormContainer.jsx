import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './LoginForm';
import LogoutForm from './LogoutForm';

import {
  requestLogin,
  changeLoginFields,
  logout,
} from './actions';

import { deleteItem } from './services/storage';

import { get } from './utils';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const fields = useSelector(get('loginFields'));
  const accessToken = useSelector(get('accessToken'));

  function handleSubmit() {
    dispatch(requestLogin());
  }

  function handleChange({ name, value }) {
    dispatch(changeLoginFields({ name, value }));
  }

  function handleClickLogout() {
    dispatch(logout());

    deleteItem('accessToken');
  }

  return (
    <>
      { accessToken
        ? (<LogoutForm onClick={handleClickLogout} />)
        : (
          <LoginForm
            fields={fields}
            onSubmit={handleSubmit}
            onChange={handleChange}
          />
        )}
    </>
  );
}