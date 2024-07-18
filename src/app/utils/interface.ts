// GENERAL  
export interface Msg {
    summary: string;
    detail: string;
}

// PERSONA
export interface Persona {
    id: number;
    tipo_identificacion_id: number;
    nombre: string;
    cedula: string;
    email: string;
    sexo: string;
    direccion: string;
    celular: string;
}

// CONDUCTOR
export interface Conductor {
    id: number;
    persona_id: number;
    estado_id: number;
    licencia_conducir: string;
    hacer_user: boolean;
    estado: Estado;
    persona: Persona;
}
// export interface ConductorConDatosPersonales {
//     id: number;
//     tipo_identificacion_id: number;
//     nombre: string;
//     cedula: string;
//     email: string;
//     sexo: string;
//     direccion: string;
//     celular: string;
//     persona_id : number;
//     licencia_conducir: string;
// }

// ESTADO
export interface Estado {
    id: number;
    nombre: string;
}


// CLIENTE
export interface Cliente {
    id: number;
    persona_id: number;
    tipo_cliente: string;
    persona: Persona;
}
// export interface ClienteConDatosPersonales {
//     id: number;
//     tipo_identificacion_id: number;
//     nombre: string;
//     cedula: string;
//     email: string;
//     sexo: string;
//     direccion: string;
//     celular: string;
//     persona_id : number;
//     tipo_cliente: string;
// }

// VEHÍCULO
export interface Vehiculo {
    tipo_vehiculo_id: number;
    estado_id: number;
    placa: string;
    marca: string;
    modelo: string;
    anio: number;
    tipo_contrato: string;
    capacidad: number;
}