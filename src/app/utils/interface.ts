// GENERAL  
export interface Msg {
    summary: string;
    detail: string;
}

// CONDUCTOR

export interface ConductorConDatosPersonales {
    id: number;
    tipo_identificacion_id: number;
    nombre: string;
    cedula: string;
    email: string;
    sexo: string;
    direccion: string;
    celular: string;
    persona_id : number;
    licencia_conducir: string;
}



// CLIENTE
export interface ClienteConDatosPersonales {
    id: number;
    tipo_identificacion_id: number;
    nombre: string;
    cedula: string;
    email: string;
    sexo: string;
    direccion: string;
    celular: string;
    persona_id : number;
    tipo_cliente: string;
  }