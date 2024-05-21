import { Container } from './components/Container/styled';
import styled from 'styled-components';
import { Header } from './components/Header';
import { Title } from './components/Title';
import { Footer } from './components/Footer';
import { Tabela } from './components/Table';
import { Grafico } from './components/Grafico';
import { Avaliacao } from './components/Avaliacao';

const Teste = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
`
export const App = () => {
  
        return(
    <Teste>
      <Header />
      <Container>
        <Title>Area Administrativa</Title>
        <Tabela/>
        
        <Grafico/>

        <Title>Avaliações</Title>
        

        <Avaliacao />
        

        
        
      </Container>
      <Footer/>
    </Teste>
  );
}