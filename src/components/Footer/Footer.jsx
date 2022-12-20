import React from 'react';
import Logo from '../../UI/Logo';
import Layout from '../Layout';
import style from './Footer.module.css';

export const Footer = props => {
  console.log();
  return (
    <footer className={style.footer}>
      <Layout>
        <div className={style.footer_content}>
          <Logo/>
          <div className={style.copyright}>© C-Money, 2022</div>
        </div>
      </Layout>
    </footer>
  );
};
