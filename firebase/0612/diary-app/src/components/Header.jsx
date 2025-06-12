import React from 'react';
import styles from './Header.module.css';
import logo from '../img/logo.svg';
import { Link, useLocation, useRouteLoaderData } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

export default function Header() {
  const {logout} = useLogout();
  const {user} = useAuthContext();
  const location = useLocation();

  return (
    <header>
      <div className={styles["header-wrap"]}>
        <h1>
          <Link href="./">
            <img className={styles.logo} src={logo} alt="두근두근 비밀일기" />
          </Link>
        </h1>
        <div>
          {!user && (
            <>
              {
                location.pathname === '/signup' ? (
                  <Link to="/login" className="btn-login">로그인</Link>
                ) : (
                  <Link to="/signup" className="btn-join">회원가입</Link>
                )
              }
            </>
          )}
          {user &&
            <>
              <p className="hello">환영합니다 <strong>{user.displayName}</strong>님!</p>
              <Link href="./" className="btn-logout" onClick={logout}>로그아웃</Link>
            </>
          }
        </div>
      </div>
    </header>
  );
}
