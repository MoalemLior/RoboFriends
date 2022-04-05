import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'
import { Component } from "react";
import './App.css'


class App extends Component{

    constructor() {
        super();
        this.state = 
        {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}))
    }

    onSearchChange = (event) => {
        this.setState({ searchField:event.target.value })
    }

    render(){
        const {robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        if(robots.length)
        {
            return (
    
                <div className="tc">
                    <h1>RoboFriends</h1>
                    <div className="pa2">
                        <SearchBox searchChange={this.onSearchChange}/>
                    </div>
                    <div className="ma3">
                        <Scroll>
                            <ErrorBoundry>
                                <CardList robots={filteredRobots}/>
                            </ErrorBoundry>
                        </Scroll>
                    </div>
                </div>
            );
        }
        else
        {
            return(
                <div className="tc">
                    <h1>RoboFriends</h1>
                    <div className="pa2">
                        <SearchBox searchChange={this.onSearchChange}/>
                    </div>
                    <h2>Loading...</h2>
                </div>
            );
        }
    }
}

export default App;