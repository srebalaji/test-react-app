import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class Sidenav extends Component {

	constructor(props) {
		super(props);
		this.state = {}
	}

	

	componentWillMount() {
    this.Apicall();
  }

  Apicall() {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://api.github.com/users/srebalaji/repos?sort=pushed', false);  
    request.send(null);
    if (request.status === 200) {
      let response = JSON.parse(request.response);
      let reposs = [];
      for(let i=0; i<response.length; i++) {
        reposs.push(<Repo name={response[i].name}  />);
      }
      this.setState({repos: reposs});
      
    }
  }

  render() {
  	return (
  		<div id="mySidenav" className="sidenav">
	      {
	      	 this.state.repos
	      }
	    </div>
  	);
  }
}

class Repo extends Component {
  constructor(props) {
    super(props);
  }

  single_repo(e) {
    console.log(this.props.name);
    ReactDOM.render(<Profile />, document.getElementById('root'));
  }
  
  render() {
    return (
      <p onClick={this.single_repo.bind(this)}> {this.props.name}</p>
    );
  }
}

class Profile extends Component {
	render() {
		return (
			<div>
				<p>srebalaji</p>
			</div>
		)
	}
}

export default Sidenav;
