
import dataJson from '../../db.json';
import { Button } from '../Button';
import { Subtitle } from '../SubTitle';
import { Card } from './Card';

export const Avaliacao = () => {
  const { profissionais } = dataJson;

  return (
    <>
      <Subtitle>Dezembro/22</Subtitle>
      <Card profissionais={profissionais} />
      <Button>Ver mais</Button>
    </>
  );
}
