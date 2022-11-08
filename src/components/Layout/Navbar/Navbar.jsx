import Image from 'next/image';

// Libs
import { Navbar, Link } from '@nextui-org/react';
import React from 'react';
import styles from './Navbar.module.scss';

// Assets
import logo from '../../../static/img/ecovivienda-color.png';
import govLogo from '../../../static/img/logogov.png';

const NavBar = () => {
  const collapseItems = ['Inicio', 'Nosotros', 'Información', 'Avances'];

  return (
    <>
      <Navbar>
        <Navbar.Brand>
          <Image src={logo} alt="" width={120} height={100} />
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn="xs">
          <Navbar.Link href="#" isActive>
            Inicio
          </Navbar.Link>
          <Navbar.Link href="#">Nosotros</Navbar.Link>
          <Navbar.Link href="#">Información</Navbar.Link>
          <Navbar.Link href="#">Avances</Navbar.Link>
        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem key={item}>
              <Link
                color="inherit"
                css={{
                  minWidth: '100%',
                }}
                href="#">
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
        <Navbar.Toggle aria-label="toggle navigation" />
      </Navbar>
      <section className={styles.header_section}>
        <div className={styles.header_top}>
          <a href="https://www.gov.co" target="_blank" rel="noreferrer">
            <Image src={govLogo} alt="gov" height={40} width={90} />
          </a>
        </div>
      </section>
    </>
  );
};

export default NavBar;
