import { Rating, useMediaQuery } from '@mui/material';
import { Container, CardEstilizado, ImagemEstilizada, ListaItem  } from './style'



interface Profissional {
  id: number;
  imagem: string;
  nome: string;
  especialidade: string;
  nota: number;
}

interface CardProps {
  profissionais: Profissional[];
}

export const Card: React.FC<CardProps> = ({ profissionais }) => {
  const isLargeScreen = useMediaQuery('(min-width:600px)');
  return (
    <Container>
      {profissionais.map(profissional => (
        <CardEstilizado>
          <ListaItem>
            <ImagemEstilizada
              src={profissional.imagem}
              alt={profissional.nome}
            />
            <div>
              <p>{profissional.nome}</p>
              <p>{profissional.especialidade}</p>
            </div>
          </ListaItem>

          <div>
            <Rating
              name="simple-controlled"
              value={profissional.nota}
              readOnly={true}
              size={isLargeScreen ? 'large' : 'medium'}
            />
          </div>
        </CardEstilizado>
      ))}
    </Container>
  );
};
