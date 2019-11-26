import React from 'react';
import styles from './Search.scss';


const Search = props =>{
    return(
        <form
        
         className={styles.component}
         onSubmit={props.submit}>
<input className={styles.input} 
type="text" 
value={props.value}
onChange={props.change}
placeholder="Write Country" 
list="country"/>
<datalist id="country">
    <option value="FR" label="FRANCE"></option>
    <option value="PL" label="Poland"></option>
    <option value="DE" label='Germany'></option>
    <option value="ES" label="Spain"></option>
</datalist>

<button className={styles.button}>Search Country</button>


        </form>

    )
}
export default Search;