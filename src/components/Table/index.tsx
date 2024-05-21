import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import dataJson from '../../db.json';

export const Tabela = () => {
  const { consultas } = dataJson;
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="tabela-customizada">
          <TableHead>
            <TableRow>
              <TableCell>Data</TableCell>
              <TableCell>Horário</TableCell>
              <TableCell>Profissional</TableCell>
              <TableCell>Especialidade</TableCell>
              <TableCell>Paciente</TableCell>
              <TableCell>Modalidade</TableCell>
            </TableRow>
          </TableHead>

          {consultas.map((linha) => {
            return (
              <TableBody key={linha.id}>
                <TableCell component="th" scope="row">
                 {new Date(linha.data).toLocaleDateString()}
                </TableCell>
                <TableCell>{linha.horario}</TableCell>
                <TableCell>{linha.profissional[0].nome}</TableCell>
                <TableCell>{linha.profissional[0].especialidade}</TableCell>
                <TableCell>{linha.paciente}</TableCell>
                <TableCell>{linha.modalidade}</TableCell>
              </TableBody>
            );
          })}
        </Table>
      </TableContainer>
    </>
  );
};
