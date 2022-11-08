import Image from 'next/image';

// Libs
import { Navbar, Button, Link, Text } from '@nextui-org/react';
import React from 'react';

// Assets
import logo from '../../../static/img/ecovivienda-color.png';

const NavBar = () => {
  const collapseItems = ['Inicio', 'Nosotros', 'Información', 'Avances'];

  return (
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
  );
};

export default NavBar;
