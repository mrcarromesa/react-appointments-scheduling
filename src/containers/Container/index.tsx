import { PropsWithChildren, useState } from 'react';
import Header from 'src/components/Header';
import SideMenu from 'src/components/SideMenu';

import styles from './styles.module.scss';

const Container = ({ children }: PropsWithChildren) => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  return (
    <div className={styles.container}>
      <Header openSideBar={() => setSideMenuOpen(true)} />
      <SideMenu open={sideMenuOpen} onClose={() => setSideMenuOpen(false)} />
      {children}
    </div>
  );
};

export default Container;
