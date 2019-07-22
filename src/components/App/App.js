import React, { Component } from "react";
//import logo from "./logo.svg";
import { connect } from "react-redux";
import * as actions from "../../actions";
import "./App.css";
import logo from "../../netflix_logo.png";
import Header from "../Header";
import PictureCell from "../PictureCell";

class App extends Component {
  componentDidMount() {
    this.props.getData();
    console.log("recommendations: " + this.props.recommendations);
  }
  handleRemove = id => {
    this.props.removeItem(id);
  };

  handleAdd = id => {
    this.props.addItem(id);
  };

  render() {
    const { list, recommendations } = this.props;

    return (
      <div className="App">
        <img className="logo" src={logo} alt="netflixlogo" />

        <Header name="My List" />
        <div className="list">
          {list === undefined
            ? null
            : list.map((ele, index) => {
                return (
                  <PictureCell
                    title={ele.title}
                    key={index}
                    img={ele.img}
                    alt={ele.id}
                    handler={() => this.handleRemove(index)}
                    btn="Remove"
                  />
                );
              })}
        </div>
        <Header name="Recommendations" />
        <div className="recommendations">
          {recommendations === undefined
            ? null
            : recommendations.map((ele, index) => {
                return (
                  <PictureCell
                    title={ele.title}
                    key={index}
                    img={ele.img}
                    alt={ele.id}
                    handler={() => this.handleAdd(index)}
                    btn="Add"
                  />
                );
              })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.list,
    recommendations: state.recommendations
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getData: () => {
      dispatch(actions.getData());
    },
    addItem: id => {
      dispatch(actions.addItemToList(id));
    },
    removeItem: id => {
      dispatch(actions.removeItemFromList(id));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
