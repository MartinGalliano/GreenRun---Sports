import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import IPageProps from '../interfaces/page';
import styled from 'styled-components';
import GreenRunLogo from '../Imgs/GreenRunLogo.png';

import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Brightness4Icon from '@mui/icons-material/Brightness4';

const NavContainer = styled.div`
 display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #fbfbfb;
   padding: 15px;
`
const Img = styled.img`
 height: 70px;
 padding: 15px;
 object-fit: contain;
`
//------------------Icons styles ----------------------
const PersonIconstyled = styled(PersonIcon)`
transform: scale(1.8);
color: #ffffff; 
background-color: #1d3cec71;
border-radius: 50%;
padding: 10px; 
&:hover{
    box-shadow: 3px 3px 3px  #2dabff;
}
`
const BrightnessIcon  = styled(Brightness4Icon)`
transform: scale(1.8);
color: #ffffff; 
background-color: #1d3cec71;
border-radius: 50%;
padding: 10px; 
&:hover{
    box-shadow: 3px 3px 3px  #2dabff;
}
`



 const NavBar : React.FunctionComponent<IPageProps> = ({botonRetroceder}) => {
  const history = useHistory();
  return (
        <>
            <NavContainer>
          {/*   {botonRetroceder  ? (
               <IconButton onClick={() => history.replace(botonRetroceder)} >
                     <RedLightbulbFill fontSize="large"/>
                </IconButton>
            ) : (

              <IconButton>
              <RedLightbulbFill  fontSize="large"/>
          </IconButton>
     )}

                {< Img src={GreenRunLogo} alt="" />}
                    
                     {/* 
                        <Link to='/logout'>o</Link>
                 
                        <Link to="/change">here</Link> */}  
   {/*              
                 <IconButton > 
                <RedLightbulbFill fontSize="large"/>
                </IconButton>  */}
              
           {botonRetroceder ? (
               <IconButton onClick={() => history.replace(botonRetroceder)} >
                    <ArrowBackIosIcon fontSize="large" />
               </IconButton>
           
               ) : (

                <Link to="/chats">
                <IconButton>
                    <BrightnessIcon fontSize="large"/>
                </IconButton>
            </Link>
            
           )}
            
                <Img src={GreenRunLogo} alt="" />

            <Link to="/profile">
                <IconButton>
                    <PersonIconstyled fontSize="large"/>
                </IconButton>
            </Link>
            </NavContainer>
        </>
    );
}
 
export default NavBar; 

