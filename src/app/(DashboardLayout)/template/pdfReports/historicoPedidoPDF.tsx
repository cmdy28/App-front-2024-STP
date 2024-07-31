import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Pedido } from '@/app/utils/interface';

interface EmpresaInfo {
  nombre: string;
  direccion: string;
  telefono: string;
}

const HistoricoReportPDF = (pedido: Pedido, empresaInfo: EmpresaInfo) => {
  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Título y descripción
    doc.setFontSize(18);
    doc.text(`Histórico del Pedido ${pedido.id}`, 14, 20);
    doc.setFontSize(12);
    doc.text('Este reporte muestra el historial completo del pedido.', 14, 30);
    
    // Información de la empresa
    doc.setFontSize(14);
    doc.text('Información de la Empresa:', 14, 45);
    doc.setFontSize(10);
    doc.text(`Nombre: ${empresaInfo.nombre}`, 14, 55);
    doc.text(`Dirección: ${empresaInfo.direccion}`, 14, 62);
    doc.text(`Teléfono: ${empresaInfo.telefono}`, 14, 69);
    
    // Información del cliente
    doc.setFontSize(14);
    doc.text('Información del Cliente:', 14, 85);
    doc.setFontSize(10);
    doc.text(`Nombre: ${pedido.cliente.persona.nombre}`, 14, 95);
    
    // Tabla de historial
    const tableColumn = ["Fecha", "Estado", "Descripción"];
    const tableRows = [
      [new Date(pedido.fecha_recogida).toLocaleDateString(), "Recogida", "Pedido recogido"],
      [new Date(pedido.fecha_entrega).toLocaleDateString(), pedido.estado.nombre, "Estado actual"]
    ];

    autoTable(doc, {
      startY: 110,
      head: [tableColumn],
      body: tableRows,
    });

    doc.save(`historico_pedido_${pedido.id}.pdf`);
  };

  return generatePDF;
};

export default HistoricoReportPDF;
