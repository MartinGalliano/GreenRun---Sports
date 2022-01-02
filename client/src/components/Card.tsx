import Sports from '../interfaces/api';
import styled from 'styled-components';

const Cardcontainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 350px;  
    width: 90%;
    margin:30px;
    height: auto;
    border-radius: 20px;
    position: relative;
    border: 2px solid rgba(255, 255, 255, 0);
    padding: 10px;
    padding-bottom: 15px;
    box-shadow: 5px 5px 12px 5px rgba(0,0,0,0.24);
    -webkit-box-shadow: 5px 5px 12px 5px rgba(0,0,0,0.24);
    -moz-box-shadow: 5px 5px 12px 5px rgba(0,0,0,0.24);
    transition: all 0.25s;
`


interface SportData {
    typeSport:Sports
}


const SportCard= (props:SportData) => {
    return (
        <Cardcontainer>
           <div>
               <img src={props.typeSport.image} alt=""/>
                <h2>{props.typeSport.name}</h2>
           </div>
        </Cardcontainer>
    );
}

export default SportCard;
 
