import React from 'react'
import styled from 'styled-components';
import IPageProps from '../interfaces/page';

import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarIcon from '@material-ui/icons/Star';
import {Link} from 'react-router-dom';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { IconButton } from '@material-ui/core';

const AppButtoms : React.FunctionComponent<IPageProps> = () => {
    return (
        <ButtomsContainer>
<Link to="/" onClick={() => window.location.reload()} style={{ color: '#A4A4A4' }}>
        <IconButton>
            <ButtomsRelay fontSize='large' />
        </IconButton>
</Link>
     
        <IconButton>
            <ButtomsClose fontSize='large'/>
        </IconButton>

        <IconButton >
            <ButtomsStar fontSize='large'/>
        </IconButton>

        <IconButton>
            <ButtomsFlash fontSize='large'/>
        </IconButton>
    </ButtomsContainer>     
      );
  }
   
  export default AppButtoms; 

  // -------------------  Styles  ----------------------------
  
const ButtomsContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    position: fixed;
    bottom: 1vh;
    top: 40vw;
    justify-content: space-evenly;
    background-color: #1E1E1E;
    border-radius: 20px;
`
const ButtomsRelay = styled(ReplayIcon)`
transform: scale(1.8);
color: #ffffff; 
background-color: #1d3cec71;
border-radius: 50%;
padding: 10px; 
&:hover{
    box-shadow: 3px 3px 3px  #2dabff;
}
  `
const ButtomsClose = styled(CloseIcon)`
transform: scale(1.8);
color: #ffffff; 
background-color: #1d3cec71;
border-radius: 50%;
padding: 10px; 
&:hover{
    box-shadow: 3px 3px 3px  #2dabff;
}
  `
const ButtomsStar = styled(StarIcon)`
transform: scale(1.8);
color: #ffffff; 
background-color: #1d3cec71;
border-radius: 50%;
padding: 10px; 
&:hover{
box-shadow: 3px 3px 3px  #2dabff;
}
  `
    

const ButtomsFlash = styled(FlashOnIcon)`
  transform: scale(1.8);
color: #ffffff; 
background-color: #1d3cec71;
border-radius: 50%;
padding: 10px; 
&:hover{
    box-shadow: 3px 3px 3px  #2dabff;
}
`