'use client';
import { Breadcrumbs, Link, Typography } from "@mui/material";
import PageContainer from "../../components/container/PageContainer";
import MapComponent from "../components/mapComponent";
import DashboardCard from "../../components/shared/DashboardCard";
import NewButton from "../../components/shared/button";

const MapPage: React.FC = () => {
  return (
    <PageContainer title="Crear Ruta" description="Index Ruta">
        <div role="presentation" >
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            INICIO
          </Link>
          <Typography color="text.primary">OPERATIVO</Typography>
          <Link
            underline="hover"
            color="inherit"
            href="/rutas"
          >
            RUTAS
          </Link>
          <Typography color="text.primary">NUEVO</Typography>
        </Breadcrumbs>
      </div>
      <br />
      <DashboardCard title="Nueva Ruta" action={<NewButton href="/rutas" text="Regresar" />}>
      <div>
        <br></br>
        <MapComponent />
      </div>
      </DashboardCard>
    </PageContainer>
  );
};

export default MapPage;