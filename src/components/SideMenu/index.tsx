import classNames from 'classnames';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

interface ISideMenuProps {
  open: boolean;
  onClose: () => void;
}

const SideMenu = ({ open, onClose }: ISideMenuProps) => (
  <aside className={classNames(styles.sidenav, { [styles.opened]: open })}>
    <button type="button" className={styles.closebtn} onClick={onClose}>
      &times;
    </button>
    <nav>
      <Link to="/home" onClick={onClose}>
        Home
      </Link>
      <Link to="/schedules" onClick={onClose}>
        Agendamentos
      </Link>
    </nav>
  </aside>
);

export default SideMenu;
