import React, { Component } from "react";
import CardList from "./Components/Card-LIst/CardList";
import "./App.css";
import SearchBox from "./Components/SearchBox/SearchBox";
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Monster: [],
      searchField: "",
    };
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((user) => this.setState({ Monster: user }));
  }

  handleChange(e){
 
      this.setState({ searchField: e.target.value })
      }


  render() {
    const { searchField, Monster } = this.state;
    const filterMethod = Monster.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div>
        <h1 className="Text_header">Monoster Rolodex</h1>
        <SearchBox
          handleChange={this.handleChange}
        />
        <CardList Monster={filterMethod}> </CardList>
      </div>
    );
  }
}
