import React, { FC, useState, useEffect } from 'react'
import axios, { AxiosResponse } from "axios";
import NavBar from './NavBar';
import Sports  from '../interfaces/api';
import SportCard from '../components/Card';

const AllSports: FC<Sports> = () => {
    const [sports, setSports] = useState<Array<Sports>>([]);
    const [loading, setLoading] = useState<boolean>(false);
  
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


 return (

    <>
    <NavBar name = {""} />
      <div>
       {sports.length>0 && sports.map((item:Sports,index:number) => {
return (
  <SportCard key={index} typeSport={item} />
          ) 
          })} 
      </div>
      </>    
 )
}
export default AllSports


