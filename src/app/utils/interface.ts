// GENERAL  API
export interface Msg {
    summary: string;
    detail: string;
}

// USER LOGIN
export interface User {
    id: number;
    rol_id: number;
    departamento_id: number;
    nombre_usuario: string;
    nombre: string;
    email: string;
    contrasena: string;
}

export interface DataUser {
    usuario: User;
    rol: number;
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

// VEHÍCULO
export interface Vehiculo {
    id: number;
    tipo_vehiculo_id: number;
    estado_id: number;
    placa: string;
    marca: string;
    modelo: string;
    anio: number;
    tipo_contrato: string;
    capacidad: number;
    estado: Estado;
}

// TIPO VEHICULO
export interface TipoVehiculo {
    id: number;
    nombre: string;
}


// MANTENIMIENTO DETALLE
export interface MantenimientoDetalle {
    id: number;
    descripcion: string;
    observacion: string;
}

// TIPO MANTENIMIENTO
export interface TipoMantenimiento {
    id: number;
    nombre: string;
}

// TIPO INTERVALO
export interface TipoIntervalo {
    id: number;
    nombre: string;
}

// MANTENIMIENTO
export interface Mantenimiento {
    id: number;
    vehiculo_id : number;
    mantenimiento_detalle_id : number;
    tipo_mantenimiento_id : number;
    tipo_intervalo_id: number;
    fecha_mantenimiento: Date;
    costo_mantenimiento: number;
    intervalo_numero: number;
    vehiculo : Vehiculo;
    mantenimiento_detalle : MantenimientoDetalle;
    tipo_mantenimiento : TipoMantenimiento;
    tipo_intervalo: TipoIntervalo;
}

// UBICACION DESTINO

export interface UbicacionDestino {
    id: number;
    nombre: string;
    latitud: number;
    longitud: number;
}

// UBICACION ORIGEN
export interface UbicacionOrigen {
    id: number;
    nombre: string;
    latitud: number;
    longitud: number;
}


// RUTA
export interface Ruta {
    id: number;
    ubicacion_origen_id: number;
    ubicacion_destino_id: number;
    distancia: string;
    duracion: string;
    ubicacion_origen: UbicacionOrigen;
    ubicacion_destino: UbicacionDestino;
}

// CONDUCTOR VEHICULO
export interface ConductorVehiculo {
    id: number;
    conductor_id: number;
    vehiculo_id: number;
}

// ASIGNACION
export interface Asignacion {
    id: number;
    ruta_id: number;
    conductor_vehiculo_id: number;
    fecha: Date;
    conductor_vehiculo: ConductorVehiculo;
}


// Servicios
export interface Servicio {
    id: number;
    nombre: string;
}

// ENVIOS
export interface Pedido {
    id: number;
    cliente_id: number;
    asignacion_id: number;
    servicio_id: number;
    estado_id: number;
    descripcion: string;
    peso_mercancia: string;
    fecha_recogida: Date;
    fecha_entrega: Date;
    prioridad: string;
    cliente: Cliente;
    asignacion: Asignacion;
    servicio: Servicio;
    estado: Estado;
}

export interface Directions {
    id: number;
    ubicacion_origen_id: number;
    ubicacion_destino_id: number;
    distancia: string;
    durecion: string;
}
