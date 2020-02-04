import React from "react";
import axios from "axios";

import Details from "../Details/Details";
import Directory from "../Directory/Directory";
import List from "../List/List";
import HelloPage from "../HelloPage/HelloPage";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Search from "../Search/Search"

class Feed extends React.Component {
  state = {
    category: "",
    currentPage: "hello-page",
    foodList: [],
    details: {
      id: 0,
      name: "",
      category: "",
      recipe: "",
      ingredients: "",
      image: ""
    }
  };

  handleDirectory = category => {
    this.setState(
      {
        category,
        currentPage: "list"
      },
      () => this.fetchFoodList()
    );
  };

  handleList = (details, page = "details") => {
    this.setState({
      details,
      currentPage: page
    });
  };

  fetchFoodList = async () => {
    const response = await axios.get("http://localhost:8000/dishes", {
      params: {
        category: this.state.category
      }
    });

    this.setState({ foodList: response.data });
  };

  render() {
    const currentPage = this.state.currentPage;

    return (
      <div>
        <NavBar goTo={this.handleList} />
        <Search 
        
        />
        <Directory onChange={this.handleDirectory} />
        {currentPage === "hello-page" ? <HelloPage /> : null}
        {currentPage === "list" ? (
          <List data={this.state.foodList} onChange={this.handleList} />
        ) : null}
        {currentPage === "details" ? (
          <Details data={this.state.details} onChange={this.handleList} />
        ) : null}
        <Footer />
      </div>
    );
  }
}

export default Feed;