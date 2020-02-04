import React from "react";
import "./HelloPage.css";
// import pictures from "./pictures.jpeg";

class HelloPage extends React.Component {
  render() {
    return (
      <div>
        <div className="content">
          <p className="hello-text">Приветствуем вас на нашем кулинарном сайте,
           <br/> 
           здесь собрана большая коллекция интересных и оригинальных <br/>кулинарных рецептов от знаменитых шеф-поваров со всего мира</p>
        </div>
      </div>
    );
  }
}

export default HelloPage;
