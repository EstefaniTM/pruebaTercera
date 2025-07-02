// SimpleCarousel.jsx
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface SimpleCarouselProps {
  images: string[];
}

export default function SimpleCarousel({ images }: SimpleCarouselProps) {
  // Estado para guardar el índice de la imagen actual
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Función para ir a la imagen anterior
  const goToPrevious = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  
  // Función para ir a la siguiente imagen
  const goToNext = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  // Cambio automático de imágenes cada 5 segundos
  useEffect(() => {
    const intervalId = setInterval(goToNext, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box sx={{ 
      position: 'relative', 
      width: '100%', 
      height: 300,
      overflow: 'hidden',
      borderRadius: '4px',
      boxShadow: 3,
    }}>
      {/* Imagen actual del carrusel */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />
      
      {/* Botón para imagen anterior */}
      <IconButton
        onClick={goToPrevious}
        size="large"
        sx={{
          position: 'absolute',
          left: 10,
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0,0,0,0.3)',
          color: 'white',
          '&:hover': { backgroundColor: 'rgba(0,0,0,0.5)' }
        }}
      >
        <NavigateBeforeIcon />
      </IconButton>
      
      {/* Botón para siguiente imagen */}
      <IconButton
        onClick={goToNext}
        size="large"
        sx={{
          position: 'absolute',
          right: 10,
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0,0,0,0.3)',
          color: 'white',
          '&:hover': { backgroundColor: 'rgba(0,0,0,0.5)' }
        }}
      >
        <NavigateNextIcon />
      </IconButton>
      
      {/* Indicadores de posición (puntos abajo) */}
      <Box sx={{
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        gap: 1,
      }}>
        {images.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentIndex(index)}
            sx={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              bgcolor: currentIndex === index ? 'primary.main' : 'grey.500',
              cursor: 'pointer',
              '&:hover': { bgcolor: currentIndex === index ? 'primary.dark' : 'grey.700' }
            }}
          />
        ))}
      </Box>
    </Box>
  );
}