import React from 'react';
import Result from '../Result/Result';
import styles from './Results.scss';



const Results = (props) => {
    return (
      <div className={styles.component}>
        {
          props.city.sort((a, b) =>b.count - a.count)
            .map(
            (item, c) => <div key={c}>  <Result results={item}/> 
          
            </div>
        )
          
        }
       
      </div>
      
    );
}
  export  default Results;