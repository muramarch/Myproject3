import React from "react";
import "./Details.css";

class Details extends React.Component {
  fetchText(text){
    return text.split(/\n/g).map(item=><div key={item}>{item}<br/></div>)
  }
  handleList = () => {
    this.props.onChange({}, "list")
  }
  goBack = ()=>{
    this.props.goBack(null)
  }
  render() {
    const item = this.props.data;
    // console.log(this.props.data);
    return (
      <div>
        <div className="contain">
        <button className="btn"
         onClick={this.props.type === "search" ? this.goBack : this.handleList}>Cancel</button>
        {/* <div className="details_title">{item.name}</div><br/> */}
        <div className="img-contain">
            <img className="details-img" src={item.image} alt={item.image}/>
          <div className="mat">
            <div className="ingredients_title">
             Ингредиенты:
            </div>
            <div className="details_ingredients">
              {this.fetchText(item.ingredients)}
            </div>
          </div>

        </div>
         <div className="details_recipe">{item.recipe}</div><br/>
      </div>
      </div>
      // return <div>Details</div>;
    );
  }
}

export default Details;