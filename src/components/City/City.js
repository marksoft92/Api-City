import React from "react";
import Search from "../Search/Search";
import Results from "../Results/Results";
import styles from "./City.scss";


const ITEMS_PER_PAGE = "100";
class City extends React.Component {
  state = {
    value:"",
    city: [],
    totalItems: 1,
    isLoading: false
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  handleSort = (e) => {
    this.setState({ 
      sort: e.target.value});
  };

  handleTitleSubmit = e => {
    e.preventDefault();

    this.setState({ city: [] });
   
    this.fetchCity();
    
  };
componentDidMount(){
  this.fetchCity()
  
}
  fetchCity = () => {

    
    const  getApi = ()=>{
if (!this.state.value ){
return(
  'https://api.openaq.org/v1/locations?'
)
}
else {
  return(`https://api.openaq.org/v1/locations?page=1&limit=${ITEMS_PER_PAGE}&metadata=true&country[]=${this.state.value}`)

}
    }
    const API=getApi();
    
    this.setState({ isLoading: true });
    return fetch(API)
      .then(res => res.json())
      .then(data =>
        this.setState(prevState => ({
          city: [...prevState.city, ...(data.results || [])],
          totalItems: data.totalItems,
          isLoading: false,
          
        }))
      );
      
  };
  
  

  render() {
    return (
      <section className={styles.component}>
        <Search
          data={this.state}
          value={this.state.value}
          change={this.handleInputChange}
          submit={this.handleTitleSubmit}
          sort={this.state.sort}
          changee={this.handleSort}
        />

        
          <Results city={this.state.city} />
       
      </section>
    );
  }
}
export default City;