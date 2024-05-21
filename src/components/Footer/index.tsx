import facebook from "./assets/facebook.png";
import instagran from "./assets/instagram.png";
import google from "./assets/google.png";
import whatsapp from "./assets/whatsapp.png";
import { FooterContent, ItemContent, ListFooterContent } from "./styled";

export const Footer = () => {
  return (
    <>
      <FooterContent>
        <ListFooterContent>
          <ItemContent>
            <a href="#">
              <img src={facebook} alt="logo do facebook" />
            </a>
          </ItemContent>
          <ItemContent>
            <a href="#">
              <img src={instagran} alt="logo do instagran" />
            </a>
          </ItemContent>
          <ItemContent>
            <a href="#">
              <img src={google} alt="logo do google" />
            </a>
          </ItemContent>
          <ItemContent>
            <a href="#">
              <img src={whatsapp} alt="logo do whatsapp" />
            </a>
          </ItemContent>
        </ListFooterContent>
        
          <p>
            2023 © Desenvolvido por Alura | Projeto fictício sem fins
            comerciais.
          </p>
        
      </FooterContent>
    </>
  );
};
