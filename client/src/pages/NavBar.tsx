import React from 'react';
import { Link} from 'react-router-dom';
import IPageProps from '../interfaces/page';
import styled from 'styled-components';




const Title = styled.p`
  font-size: 1.5em;
  text-align: center;
  padding: 1em;
  
  `



 const NavBar : React.FunctionComponent<IPageProps> = props => {
    return (
        <>
            <div>
                <div>
                    <Title>
                        Welcome to GreenRun sports 
                    </Title>
                      <div>  
                        <Link to='/logout'>Logout</Link>.
                    <p>
                        Change your password <Link to="/change">here</Link>.
                    </p>
                 </div>
                </div>
            </div>
        </>
    );
}

export default NavBar;