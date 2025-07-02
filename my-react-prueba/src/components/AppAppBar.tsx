import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import SimpleCarousel from './carrusel';
import ActionButtons from './botones';
import CategoryList from './CategoryList';

const carouselImages = [
  'https://fastly.picsum.photos/id/1071/800/300.jpg?hmac=ENaGL7KwWZK5fHZ4AUq1JHMzb__tGrAMC26CUwGULNA',
  'https://fastly.picsum.photos/id/1065/800/300.jpg?hmac=cE_2tACjPz5PuXzYnGN5vFu_DGGMMcNY59UZWRasJYM',
  'https://fastly.picsum.photos/id/1060/800/300.jpg?hmac=Ul1hM6d2ZnlsATmBJPksBo_mOUGLkhUJB1EHdb3OYlY',
];

export default function WelcomePage() {
  const [showList, setShowList] = useState(false);

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh', 
      bgcolor: 'white',
      width: '100vw', 
    }}>
      <Box sx={{
        flex: 1, 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center', 
        width: '100%',
        p: 2, 
      }}>
        <Box sx={{ 
          width: '100%',
          maxWidth: '80%',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <Paper sx={{ 
            p: { xs: 2, sm: 4, md: 5 }, 
            mb: 4, 
            textAlign: 'left',
            bgcolor: '#eaecef', 
            borderRadius: '12px',
            boxShadow: 2,
          }}>
            <Typography variant="h4" component="h1" gutterBottom sx={{ 
              fontWeight: 'bold',
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } 
            }}>
              Bienvenido a la Gestión de Categorías
            </Typography>
            <Typography variant="h6" color="textSecondary" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
              Sistema para crear categorías y realizar cálculos
            </Typography>
          </Paper>

          <Box sx={{ mb: 4 }}>
            <SimpleCarousel images={carouselImages} />
          </Box>
          
          <Paper sx={{ 
            p: { xs: 1, sm: 2, md: 3 },
            mb: 4,
            bgcolor: 'white',
            borderRadius: '12px',
            boxShadow: 2,
            overflow: 'hidden', 
          }}>
            <ActionButtons onShowList={() => setShowList(true)} /> 
          </Paper>

          {/* Mostrar la lista solo si showList es true */}
          {showList && (
            <Paper sx={{ mt: 2, p: 2 }}>
              <CategoryList />
            </Paper>
          )}
        </Box>
      </Box>
      <Box sx={{ 
          mt: 4, 
          py: 2, 
          textAlign: 'center',
          color: 'white',
          bgcolor: '#28a845',
          borderRadius: '4px',
        }}>
          <Typography sx={{ fontWeight: '500', fontSize: { xs: '0.8rem', sm: '1rem' } }}>
            © 2025 - Sistema de Categorías - Taller Académico
          </Typography>
      </Box>
    </Box>
  );
}