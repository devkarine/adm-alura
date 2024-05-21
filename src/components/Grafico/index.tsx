import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { IDados, useDadosGrafico } from './useDadosGrafico';
import dataJson from '../../db.json';
import {SecaoEstilizada} from './style'


export const Grafico = () => {
  const { consultas, profissionais } = dataJson;
  const dados: Array<IDados> = useDadosGrafico({ profissionais, consultas });

  return (
    <SecaoEstilizada>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          layout="vertical"
          data={dados}
          margin={{ top: 25, right: 40, bottom: 20 }}
        >
          <XAxis type="number"></XAxis>
          <YAxis type="category" dataKey='nome' fontSize={10}></YAxis>
          <Bar dataKey="consultas" fill="#083860" barSize={30}></Bar>
        </BarChart>
      </ResponsiveContainer>
    </SecaoEstilizada>
  );
};
