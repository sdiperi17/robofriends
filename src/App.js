import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import "./App.css";

class App extends Component {
    state = {
        robots: [],
        searchfield: ""
    };

    async componentDidMount() {
        // fetch is a method on window object
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
        console.log("check");
        this.setState({});
    }

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

        return this.state.robots.length === 0 ? (
            "Loading..."
        ) : (
            <div className="tc">
                <h1>RoboFriends App</h1>
                <SearchBox
                    searchChange={this.onSearchChange}
                    searchfield={this.state.searchfield}
                />
                <Scroll>
                    <CardList robots={filterRobots} />
                </Scroll>
            </div>
        );
    }
}

export default App;
