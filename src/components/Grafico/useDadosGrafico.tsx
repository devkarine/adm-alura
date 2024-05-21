

export interface IDados {
  nome: string;
  consultas: number;
}

export interface IProfissional {
  nome: string;
  especialidade: string;
}

export interface IConsulta {
  id: number;
  data: string;
  horario: string;
  profissional: IProfissional[];
  paciente: string;
  modalidade: string;
}

interface Props {
  profissionais: IProfissional[] | null;
  consultas: IConsulta[] | null;
}

export const useDadosGrafico = ({ profissionais, consultas }: Props) => {

  let dados: Array<IDados> = [];

  if (profissionais && consultas) {
    dados = profissionais.map(profissional => ({
      nome: profissional.nome,
      consultas: consultas.filter(consulta =>
        consulta.profissional.some(prof => prof.nome === profissional.nome)
      ).length
    }));
  }

  return dados;
};

