import{ useSession, signIn, signOut } from 'next-auth/react';
import styles from "./styles.module.scss";
import Link from "next/link";

export function Header() {

const {data: session, status} = useSession();

  return (
    <header className={styles.header}>
      <section className={styles.content}>
        <nav className={styles.nav}>
          <Link href="/">
            <h1 className={styles.logo}>
              Tarefas<span>+</span>
            </h1>
          </Link>
          <Link href="/painel" className={styles.link}>
            Meu Painel
          </Link>
        </nav>

          {status === 'loading'?(
            <></>
          ) : session ?(
            <button className={styles.loginButton} onClick={() => signOut()}>
              Olá meu rei {session?.user?.name}
            </button>) :(       <button className={styles.loginButton} onClick={() => signIn("google")}>
              Acess
            </button>)}
      </section>
    </header>
  );
}
