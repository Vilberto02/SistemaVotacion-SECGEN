export interface Asambleista {
  idasambleista: number,
  nombre: string,
  apellido: string,
  ha_votado: boolean,
}

// Modificar la interfaz Candidato para incluir el código de facultad
export interface Candidato {
  id: string
  nombre: string
  categoria: Categoria
  votos: number
  codigoFacultad: string // Código de facultad (01-20)
}

export type Categoria = "Docentes Principales" | "Docentes Asociados" | "Docentes Auxiliares" | "Estudiantes"

export interface Voto {
  asambleistaId: string
  candidatosIds: string[] // Ahora es un array de IDs
  categoria: Categoria
}

export const limitesPorCategoria: Record<
  Categoria,
  { minimo: number; maximo: number }
> = {
  "Docentes Principales": {minimo: 1, maximo:3},
  "Docentes Asociados": {minimo: 1, maximo:2},
  "Docentes Auxiliares": {minimo: 1, maximo: 1},
  Estudiantes: {minimo: 1, maximo: 3},
};


export interface LoginFields {
  username: string;
  password: string;
}

/* TIPADO */
export interface AsambleistaBack {
  idasambleista: number,
  nombre: string,
  apellido: string,
  ha_votado: boolean,
}

export interface CandidatoBack {
  idcandidato: number,
  nombre: string,
  categoria: string, // Choices
  codigo_facultad: string,
}

export interface RankingBack {
  categoria: string,
  idcandidato: number,
  nombre_candidato: string,
  codigo_facultad: string,
  total_votos: string
}


export interface VotoCategoria {
  categoria: string,
  idcandidatos?: number[],
  abstencion?: boolean,
}

export interface VotosBack {
  idasambleista: number,
  votos: VotoCategoria[],
}