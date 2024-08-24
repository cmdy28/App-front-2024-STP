'use client'
import { useState, useEffect } from 'react';
import { LinearProgress } from "@mui/material";

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500); // Actualiza la barra cada 500ms

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ width: '100%', position: 'fixed', top: 0, zIndex: 2000 }}>
      <LinearProgress   variant="determinate" value={progress} sx={{ height: 4 }} />
    </div>
  );
}

export default Loading;
