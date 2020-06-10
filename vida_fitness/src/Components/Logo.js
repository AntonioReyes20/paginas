import React from 'react';
import './Estilos.css';
import Box from '@material-ui/core/Box';

const Logo = (config) => {
    return (
        <div>
            <img src={'Pictures/logo.png'} className={'Logo'}/>
            <Box component="span" className={'TextLogo'}>
                {config.systemName} 
            </Box>
        </div>
    );
};

export default Logo;