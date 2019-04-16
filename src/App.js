import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";
import "./App.css";

class App extends Component {
    state = {
        robots: robots,
        searchfield: ""
    };

    onSearchChange = event => {
        this.setState({
            searchfield: event.target.value
        });
    };
    render() {
        const filterRobots = this.state.robots.filter(robot => {
            return robot.name
                .toLowerCase()
                .includes(this.state.searchfield.toLowerCase());
        });
        console.log(filterRobots);
        return (
            <div className="tc">
                <h1>RoboFriends App</h1>
                <SearchBox
                    searchChange={this.onSearchChange}
                    searchfield={this.state.searchfield}
                />
                <CardList robots={filterRobots} />
            </div>
        );
    }
}

export default App;
