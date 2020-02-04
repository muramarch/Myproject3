import React from "react";
import axios from "axios";
import './Directory.css';


class Directory extends React.Component {
  state = {
    categoryList: []
  }

  componentDidMount() {
    this.fetchCategories()
  }

  fetchCategories = async () => {
    const response = await axios.get('http://localhost:8000/category');

    this.setState({
      categoryList: response.data
    })
  }

  handleClickCategory = category => {
    this.props.onChange(category)
  }

  render() {
    return (
      <div>
          <div className="category">
            {this.state.categoryList.map(item => {
            return (
              <div href="#" key={item.id} onClick={() => this.handleClickCategory(item.name)}>
                  <img className="directory_img" src={item.image} alt={item.name}></img> 
                  <div className="Text-dir">{item.name}</div> 
              </div>
            )
            })}
          </div>
      </div>
    );
  }
}

export default Directory;