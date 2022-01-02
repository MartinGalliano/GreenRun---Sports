import { FC, useState, useEffect } from 'react'
import axios, { AxiosResponse } from "axios";
import NavBar from '../components/NavBar';
import Sports  from '../interfaces/api';
import styled from 'styled-components';
import TarjetaPersona from 'react-tinder-card';

const AllSports: FC<Sports> = () => {
    const [sports, setSports] = useState<Array<Sports>>([]);
    useEffect(() => {
     let ISports:Array<Sports> = []; 
    axios.get('https://www.thesportsdb.com/api/v1/json/2/all_sports.php')
     .then((response: AxiosResponse) => {
       response.data.sports.forEach((element:any) => {
        ISports.push({
          id: element.idSport,
          name: element.strSport,
        image: element.strSportThumb,
        description: element.strSportDescription,
        format: element.strFormat, 
        nide: element.strSportIconGreen
      })
        });
        setSports(ISports);
      })
      .catch((error: any) => {
        console.log(error);
      });
    }, []);


const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5vh;
`
const Swipe = styled(TarjetaPersona)`
 position: absolute;
`
const Card = styled.div`
 position: relative;
    width: 50em;
    padding: 20px;
    max-width: 85vw;
    height: 50vh;
    border-radius: 20px;
    background-size: cover;
    background-position: center;
    box-shadow: 0 20px 25px 0 rgba(0, 0, 0, 0.356);
`
const CardText = styled.div`
position: absolute;
    bottom: 10px;
    color: white;
`

 return (
    <> 
   <NavBar name = {""} botonRetroceder= {""} />
      <CardContainer> 

       {sports.length>0 && sports.map((item:Sports,index:number) => (
         <Swipe
           key={item.name}
           preventSwipe={['up', 'down']}
         >
           <Card
           style={{backgroundImage: `url(${item.image})`}}
           >
             <CardText>
               <h2> 
               {item.name},
               </h2>
             <h4> 
               {item.format}
             </h4>
             </CardText>
           </Card>
         </Swipe>
       ))} 
          </CardContainer>
    </>
       
 )
}
export default AllSports


