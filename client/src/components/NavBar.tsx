import React,{ useContext }  from 'react';
import { Link, useHistory } from 'react-router-dom';
import IPageProps from '../interfaces/page';
import styled,{ ThemeContext }  from 'styled-components';
import GreenRunLogo from '../Imgs/GreenRunLogo.png';

import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Brightness4Icon from '@mui/icons-material/Brightness4';


 const NavBar : React.FunctionComponent<IPageProps> = ({IconsButtings,toggleTheme}) => {
  const history = useHistory();
  return (
        <>
            <NavContainer>
           {IconsButtings ? (
               <IconButton onClick={() => history.replace(IconsButtings)} >
                    <ArrowBackIosIcon fontSize="large" />
               </IconButton>
               ) : (
                <IconButton
                onClick={toggleTheme}>
            
                    <BrightnessIcon fontSize="large"/>
                </IconButton>
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



//------------------------ Styled Time  =) ------------------------------

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background: ${props => props.theme.colors.primary};
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
