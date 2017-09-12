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
    request.open('GET', 'https://api.github.com/users/nixme/repos?sort=pushed', false);  
    request.send(null);
    if (request.status === 200) {
      let response = JSON.parse(request.response);
      let reposs = [];
      for(let i=0; i<response.length; i++) {
        reposs.push(<Repo name={response[i].name} issues_url={response[i].issues_url} />);
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
    ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    this.GetApi(this.props.issues_url);
  }
  
  GetApi(issues_url) {
    issues_url = issues_url.substring(0, issues_url.indexOf('{'));
    ReactDOM.render(<Profile issues={issues_url} />, document.getElementById('root'));
    
  }

  render() {
    return (
      <p onClick={this.single_repo.bind(this)}> {this.props.name}</p>
    );
  }
}

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {
    let issues = this.props.issues;
    var request = new XMLHttpRequest();
    request.open('GET', issues, false);  
    request.send(null);
    if (request.status === 200) {
      let response = JSON.parse(request.response);
      let issues = [];
      for(let i=0; i<response.length; i++) {
        issues.push(<p>{response[i].title}</p>);
      }
      this.setState({issues: issues});
    }
  }

  componentWillReceieveProps(nextProps) {
    console.log(nextProps);
    debugger
    this.setState({issues: nextProps.issues});
  }

	render() {
		return (
			<div>
				{this.state.issues}
			</div>
		)
	}
}

export default Sidenav;
