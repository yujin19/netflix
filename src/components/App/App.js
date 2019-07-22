import React, { Component } from "react";
//import logo from "./logo.svg";
import { connect } from "react-redux";
import * as actions from "../../actions";
import "./App.css";
import logo from "../../netflix_logo.png";
import MovieList from "../MovieList";
import Loading from "../Loading";

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
    const { list, recommendations, loading } = this.props;

    return (
      <div className="App">
        <img className="logo" src={logo} alt="netflixlogo" />
        {loading ? (
          <Loading msg="Loading..." />
        ) : (
          <div>
            <MovieList
              data={list}
              name="My List"
              handler={this.handleRemove}
              btn="Remove"
            />
            <MovieList
              data={recommendations}
              name="Recommendations"
              handler={this.handleAdd}
              btn="Add"
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.list,
    recommendations: state.recommendations,
    loading: state.loading
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
