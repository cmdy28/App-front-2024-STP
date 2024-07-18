// import {Typography, Box, Table, Divider, Link, TableBody, Breadcrumbs, TableCell, TableHead, TableRow, Chip, IconButton, Button, ButtonGroup} from '@mui/material';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import EditIcon from '@mui/icons-material/Edit';
// import DashboardCard from '@/app/(DashboardLayout)//components/shared/DashboardCard';
// import { useState, useEffect } from 'react';
// // tabler icons
// import {IconEdit, IconFileTypePdf, IconTrash} from "@tabler/icons-react";
// // API
// import { get } from '@/app/utils/api';
// import {Msg, ConductorConDatosPersonales} from '@/app/utils/interface';

// interface ApiResponse {
//   msg : Msg;
//   data: ConductorConDatosPersonales;
// }

// const handleClick = (modulo: string) => {
// // Aquí va el código que quieres ejecutar cuando se hace clic en el botón
// console.log('Botón clickeado ' + modulo);
// };

// const ConductorList = () => {
//   const [conductores, setConductores] = useState<ConductorConDatosPersonales[]>([]);

//   useEffect(() => {
//     const fetchConductoresConDatosPersonales = async () => {
//       try {
//         //lista de conductores
//         const responseConductores = await get<ApiResponse>('/conductor');
//         const conductoresData = Object.values(responseConductores.data.data);
//         console.log(conductoresData);

//         // Obtener los datos personales para cada conductor
//         const conductoresConDatosPersonales = await Promise.all(
//           conductoresData.map(async (conductor) => {
//             const responsePersona = await get<ApiResponse>(`/persona/${conductor.persona_id}`);
//             const datosPersonales = responsePersona.data.data;

//             // unificar la info de los datos personales con cada conductor
//             const conductorConDatosPersonales = {
//               ...conductor,
//               nombre : datosPersonales.nombre,
//               email : datosPersonales.email,
//               tipo_identificacion_id: datosPersonales.tipo_identificacion_id,
//               cedula: datosPersonales.cedula,
//               sexo: datosPersonales.sexo,
//               direccion: datosPersonales.direccion,
//               celular: datosPersonales.celular
//             };

//             // console.log('Conductor con Datos Personales:', conductorConDatosPersonales); // Para depuración

//             return conductorConDatosPersonales;
//           })
//         );

//         setConductores(conductoresConDatosPersonales);
//         console.log(conductoresConDatosPersonales);
//       } catch (error) {
//         console.error('Error fetching conductores con datos personales:', error);
//       }
//     };

//     fetchConductoresConDatosPersonales();
//   }, []);

//   return (
//     <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' }}}>
//         <Table size='small'
//             aria-label="simple table"
//             sx={{
//                 whiteSpace: "nowrap",
//                 mt: 1
//             }}
//         >
//             <TableHead>
//                 <TableRow>
//                     <TableCell>
//                         <Typography variant="subtitle2" fontWeight={600}>
//                             Id
//                         </Typography>
//                     </TableCell>
//                     <TableCell>
//                         <Typography variant="subtitle2" fontWeight={600}>
//                             Nombre
//                         </Typography>
//                     </TableCell>
//                     <TableCell>
//                         <Typography variant="subtitle2" fontWeight={600}>
//                             Cédula
//                         </Typography>
//                     </TableCell>
//                     <TableCell>
//                         <Typography variant="subtitle2" fontWeight={600}>
//                             Información de contacto
//                         </Typography>
//                     </TableCell>
//                     <TableCell>
//                         <Typography variant="subtitle2" fontWeight={600}>
//                             # Licencia
//                         </Typography>
//                     </TableCell>
//                     <TableCell>
//                         <Typography variant="subtitle2" fontWeight={600}>
//                             Opciones
//                         </Typography>
//                     </TableCell>
//                 </TableRow>
//             </TableHead>
//             <TableBody>
//                 {conductores.map((conductor) => (
//                     <TableRow key={conductor.id}>
//                         <TableCell>
//                             <Typography
//                                 sx={{
//                                     fontSize: "15px",
//                                     fontWeight: "500",
//                                 }}
//                             >
//                                 {conductor.id}
//                             </Typography>
//                         </TableCell>
//                         <TableCell>
//                             <Typography
//                                 sx={{
//                                     fontSize: "15px",
//                                     fontWeight: "500",
//                                 }}
//                             >
//                                 {conductor.nombre}
//                             </Typography>
//                         </TableCell>
//                         <TableCell>
//                             <Typography
//                                 sx={{
//                                     fontSize: "15px",
//                                     fontWeight: "500",
//                                 }}
//                             >
//                                 {conductor.cedula}
//                             </Typography>
//                         </TableCell>
//                         <TableCell>
//                             <Box
//                                 sx={{
//                                     display: "flex",
//                                     alignItems: "center",
//                                 }}
//                             >
//                                 <Box>
//                                     <Typography variant="subtitle2" fontWeight={600}>
//                                         Email: {conductor.email}
//                                     </Typography>
//                                     <Typography
//                                         color="textSecondary"
//                                         sx={{
//                                             fontSize: "13px",
//                                         }}
//                                     >
//                                         Dirección: {conductor.direccion}
//                                     </Typography>
//                                     <Typography
//                                         color="textSecondary"
//                                         sx={{
//                                             fontSize: "13px",
//                                         }}
//                                     >
//                                         Teléfono: {conductor.celular}
//                                     </Typography>
//                                 </Box>
//                             </Box>
//                         </TableCell>
//                         <TableCell>
//                             <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
//                                 {conductor.licencia_conducir}
//                             </Typography>
//                         </TableCell>
//                         <TableCell>
//                             <IconButton color="default" aria-label="add an alarm" onClick={() => handleClick('edit')}>
//                                 <IconEdit stroke={1} height={30}/>
//                             </IconButton>
//                             <IconButton aria-label="delete" color="error" onClick={() => handleClick('delete')}>
//                                 <IconTrash stroke={1} height={30}/>
//                             </IconButton>
//                         </TableCell>
//                     </TableRow>
//                 ))}
//             </TableBody>
//         </Table>
//     </Box>
//   );
// };

// export default ConductorList;
