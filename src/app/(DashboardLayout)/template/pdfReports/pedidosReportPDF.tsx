import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Pedido } from '@/app/utils/interface';

interface EmpresaInfo {
  nombre: string;
  direccion: string;
  telefono: string;
  logo: string; 
}

const GeneralReportPDF = (pedidos: Pedido[], empresaInfo: EmpresaInfo) => {
  const generatePDF = () => {
    const doc = new jsPDF();
    const timestamp = Date.now();

    const logoWidth = 40; 
    const logoHeight = 20; 
    const logoX = 14;
    const logoY = 10;
    const companyInfoX = logoX + logoWidth + 10; 
    const companyInfoY = 10;
    const companyInfoRightX = 200; 

    if (empresaInfo.logo) {
      doc.addImage(empresaInfo.logo, 'PNG', logoX, logoY, logoWidth, logoHeight); // Añadir el logo
    }

    doc.setFontSize(14);
    doc.setFontSize(10);
    doc.text(`${empresaInfo.nombre}`, companyInfoRightX, companyInfoY + 10, { align: 'right' });
    doc.text(`Dirección: ${empresaInfo.direccion}`, companyInfoRightX, companyInfoY + 17, { align: 'right' });
    doc.text(`Teléfono: ${empresaInfo.telefono}`, companyInfoRightX, companyInfoY + 24, { align: 'right' });

    // Título y descripción centrados
    doc.setFontSize(18);
    const title = 'Reporte General de Pedidos';
    const titleWidth = doc.getTextWidth(title);
    const titleX = (doc.internal.pageSize.width - titleWidth) / 2;
    doc.text(title, titleX, 45);

    doc.setFontSize(12);
    const description = 'Este reporte muestra un resumen de todos los pedidos actuales.';
    const descriptionWidth = doc.getTextWidth(description);
    const descriptionX = (doc.internal.pageSize.width - descriptionWidth) / 2;
    doc.text(description, descriptionX, 55);

    // Tabla de pedidos
    const tableColumn = ["Cliente", "Servicio", "Prioridad", "Fecha de Entrega", "Estado"];
    const tableRows = pedidos.map(pedido => [
      pedido.cliente.persona.nombre,
      pedido.servicio.nombre,
      pedido.prioridad,
      new Date(pedido.fecha_entrega).toLocaleDateString(),
      pedido.estado.nombre
    ]);

    autoTable(doc, {
      startY: 70,
      head: [tableColumn],
      body: tableRows,
      headStyles: { fillColor: [100, 100, 255] }, 
    });

    // Pie de página
    const pageCount = doc.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(10);
      const pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
      doc.text(`Reporte generado el ${new Date().toLocaleString()} por el sistema`, 14, pageHeight - 10);
      doc.text(`Página ${i} de ${pageCount}`, doc.internal.pageSize.width - 40, pageHeight - 10);
    }

    doc.save(`reportePedidos${timestamp}.pdf`);
  };

  return generatePDF;
};

export default GeneralReportPDF;
