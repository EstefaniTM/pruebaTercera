import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface ActionButtonsProps {
  onShowList: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ onShowList }) => {
  return (
    <Box sx={{ 
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'row' },
      justifyContent: 'center',
      alignItems: 'center',
      gap: 3,
      mt: 3,
      width: '100%',
      flexWrap: 'wrap',
    }}>
      {/* Botón 1 */}
      <Button 
        variant="contained" 
        onClick={onShowList}
        sx={{ 
          py: 3,
          px: 2,
          minWidth: 100,
          bgcolor: 'white', 
          fontWeight: 'bold',
          fontSize: '1.1rem',
          flex: '1 1 auto',
          textAlign: 'left',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, textAlign: 'left', color: 'black' }}>
            Listado de Categorías
          </Typography>
          <Typography variant="body2" sx={{ textAlign: 'left', color: 'black' }}>
            Consulta todas las categorías existentes.
          </Typography>
        </Box>
      </Button>
      
      {/* Botón 2 */}
      <Button 
        variant="contained" 
        sx={{ 
          py: 3,
          px: 2,
          minWidth: 100,
          bgcolor: 'white', 
          fontWeight: 'bold',
          fontSize: '1.1rem',
          flex: '1 1 auto',
          textAlign: 'left',
        }}
      >
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          width: '100%',
        }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, textAlign: 'left', color: 'black' }}>
            Crear Categoría
          </Typography>
          <Typography variant="body2" sx={{ textAlign: 'left', color: 'black' }}>
            Agrega nuevas categorías matemáticas o temáticas
          </Typography>
        </Box>
      </Button>
      
      {/* Botón 3 */}
      <Button 
        variant="contained" 
        onClick={onShowList}
        sx={{ 
          py: 3,
          px: 2,
          minWidth: 100,
          bgcolor: 'white', 
          fontWeight: 'bold',
          fontSize: '1.1rem',
          flex: '1 1 auto',
          textAlign: 'left',
        }}
      >
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          width: '100%',
        }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, textAlign: 'left', color: 'black' }}>
           Cálculos Básicos
          </Typography>
          <Typography variant="body2" sx={{ textAlign: 'left', color: 'black' }}>
            Realiza áreas y cálculo de IVA.
          </Typography>
        </Box>
      </Button>
    </Box>
  );
};

export default ActionButtons;