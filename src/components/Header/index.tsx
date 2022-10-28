import styles from './styles.module.scss';

interface IHeaderProps {
  openSideBar: () => void;
}

const Header = ({ openSideBar }: IHeaderProps) => (
  <header className={styles.container}>
    <button
      type="button"
      className={styles.openSideMenuButton}
      onClick={openSideBar}
    >
      &#9776;
    </button>
  </header>
);

export default Header;
