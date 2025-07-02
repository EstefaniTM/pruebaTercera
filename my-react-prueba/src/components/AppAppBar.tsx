// WelcomePage.jsx
import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SimpleCarousel from './carrusel';

const carouselImages = [
  'https://fastly.picsum.photos/id/1071/800/300.jpg?hmac=ENaGL7KwWZK5fHZ4AUq1JHMzb__tGrAMC26CUwGULNA',
  'https://fastly.picsum.photos/id/1065/800/300.jpg?hmac=cE_2tACjPz5PuXzYnGN5vFu_DGGMMcNY59UZWRasJYM',
  'https://fastly.picsum.photos/id/1060/800/300.jpg?hmac=Ul1hM6d2ZnlsATmBJPksBo_mOUGLkhUJB1EHdb3OYlY',
];

export default function WelcomePage() {
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
          maxWidth: 800,
          display: 'flex',
          flexDirection: 'column',
        }}>
          <Paper sx={{ 
            p: 3, 
            mb: 3, 
            textAlign: 'center',
            bgcolor: '#eaecef',
            borderRadius: '12px',
            boxShadow: 2,
          }}>
            <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
              Bienvenido a la Gestión de Categorías
            </Typography>
            <Typography variant="h6" color="textSecondary">
              Sistema para crear categorías y realizar cálculos
            </Typography>
          </Paper>

          <Box sx={{ mb: 4 }}>
            <SimpleCarousel images={carouselImages} />
          </Box>

          <Paper sx={{ 
            p: 3,
            bgcolor: 'white',
            borderRadius: '12px',
            boxShadow: 2,
            flex: 1, 
          }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
              Funcionalidades principales
            </Typography>
            
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12} md={6}>
                <Paper sx={{ 
                  p: 2, 
                  bgcolor: '#e3f2fd', 
                  borderRadius: '8px',
                  height: '100%',
                }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    Gestión de Categorías
                  </Typography>
                  <Typography>
                    • Crear y editar categorías<br />
                    • Organizar por jerarquías<br />
                    • Asignar propiedades personalizadas
                  </Typography>
                </Paper>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Paper sx={{ 
                  p: 2, 
                  bgcolor: '#e8f5e9', 
                  borderRadius: '8px',
                  height: '100%',
                }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    Herramientas de Cálculo
                  </Typography>
                  <Typography>
                    • Cálculos geométricos<br />
                    • Gestión de impuestos (IVA)<br />
                    • Generación de reportes
                  </Typography>
                </Paper>
              </Grid>
              
              <Grid item xs={12}>
                <Paper sx={{ 
                  p: 2, 
                  bgcolor: '#fff3e0', 
                  borderRadius: '8px',
                  mt: 1,
                }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    Experiencia de Usuario
                  </Typography>
                  <Typography>
                    • Interfaz intuitiva y moderna<br />
                    • Acceso rápido a funciones frecuentes<br />
                    • Diseño responsivo para todos los dispositivos
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
          
          <Box sx={{ 
            mt: 4, 
            py: 2, 
            textAlign: 'center',
            color: 'text.secondary',
          }}>
            <Typography>© 2023 Sistema de Gestión de Categorías</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}