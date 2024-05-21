
import logo from "./assets/logo.png";
import profile from "./assets/perfil.png";

import {HeaderContent, Container, LinkContent} from './styled'

export const Header = () => {
  return (
    <HeaderContent>
      <img src={logo} alt="Logo" />
      <Container>
        <img src={profile} alt="Profile" />

        <LinkContent href="#">Sair</LinkContent>
      </Container>
    </HeaderContent>
  );
};
