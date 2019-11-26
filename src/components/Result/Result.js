import React, { Component } from 'react';
import styles from './Result.scss'

const Result = (props) => {
    
    const {city, country,count,locations} = props.results;
   
const param = props.results.countsByMeasurement.map((counts) =>{
  const {parameter, count} = counts;
  return(
<p key={parameter}>Parameter: {parameter} Count: {count}</p>)


});





    return (
    
       
      <div className={styles.component} >
      
        <div>
          <h2>Country: {country}</h2>
    <h3 className={styles.author}>city: {city} </h3>
<h3 className={styles.author}>locations: {locations}</h3>
          <p>sum of impurities: {count}</p>
          <p>{param}</p>
        </div>
        
        
      </div>
      
      
    );}
  export default Result;