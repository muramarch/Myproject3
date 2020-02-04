import React from "react";
import './List.css';

class List extends React.Component {
  handleClick = data => {
    this.props.onChange(data);
  };

  
  render() {
    return (
      <div className={this.props.type === "search" ? "list-search-container" : "list-container"}>
        {this.props.data.map(item => {
          return (
            <div key={item.id} onClick={() => this.handleClick(item)}>
              {/* <div className="list-name">{item.name}</div> <br/> */}
              <img className="list-img" src={item.image} alt={item.image}/>
            </div>
          );
        })}
      </div>
    );
  }
}

export default List;