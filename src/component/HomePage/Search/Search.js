import React, { Component } from 'react';
import axios from 'axios';

import List from '../List/List';
import Details from '../Details/Details';
import './Search.css'

class Search extends Component {
  state = {
    search: {
      searchData: [],
      searchInp: '',
    },
    selectedItem: null,
    data: [],
  }

  componentDidMount(){
    this.fetchSearch()
  }
  
  fetchSearch = async () =>{
    const response = await axios.get("http://localhost:8000/dishes");
    this.setState({ data: response.data })
  } 

  find = () => {
    const searchData = this.state.data.filter(item => {
      return new RegExp(this.state.search.searchInp,'gi').test(item.name) && this.state.search.searchInp !== ""
    });
    const search = {...this.state.search, searchData}
    this.setState({ search })
  }

  onSearch = async (e) => {
    await this.setState({search: { ...this.state.search, searchInp: e.target.value }})
    this.find()
  }

  setItem = item => {
    this.setState({ selectedItem: item })
  }

  render() {
    // console.log(this.state.data, "______")
    return (
      <div className="search">
        <input 
          onChange = { this.onSearch }
          value = {this.state.search.searchInp}
          placeholder = "например: 'пепперони'"
        />
        {this.state.selectedItem === null ? 
          <List 
            type = "search"
            data = {this.state.search.searchData}
            onChange = {this.setItem}
          />
          :
          <Details 
            type = "search"
            goBack = {this.setItem}
            data = {this.state.selectedItem}
          />
        }
        {/* <ul>
          {this.state.search.searchData.map( item => (
            <li key={`dish_${item.id}`}>
              {item.name}
            </li>
          ))}
        </ul> */}
      </div>
    );
  }
}

export default Search;
