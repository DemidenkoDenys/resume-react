import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link, withRouter } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { changeLanguage } from '../actions/actions.js';

const Test = () => {

		return(
			
		    <div>
		   		<Links />

		      <hr />

		      <Route exact path="/" render={() => <Home list={[1, 2, 3]} /> } />
		      <Route path="/about" component={About} />
		      <Route path="/topics" component={Topics} />
		    </div>
		)
}

export default Test;

const mapStateToProps = state => {
	return { language: state.app.language }
};

const actionsStateToProps = dispatch => ({
   	onChangeLanguage: bindActionCreators(changeLanguage, dispatch)
});

const Home = connect(mapStateToProps, actionsStateToProps)((props) => {

		console.log(props);

		const changeLanguage = () => {
			props.onChangeLanguage('en');
		}

		return(
	  		<div>
	    		<h2>Home</h2>
	    		<button onClick={ () => { props.onChangeLanguage('en'); } }>EN</button>
	    		<button onClick={ () => { props.onChangeLanguage('uk'); } }>UK</button>
	  		</div>
		)
});

const mapStateToPropsAbout = state => {
	return { language: state.app.language }
};

const About = connect(mapStateToPropsAbout)((props) => {
	return(
	  <div>
	    <h2>{ props.language }</h2>
	  </div>
	);
});

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => {
  return (<div>
    <h3>{match.params.topicId}</h3>
    <Link to='/'>Home</Link>
  </div>);
};

const Links = () => { return (
		      <ul>
		        <li>
		          <Link to="/">Home</Link>
		        </li>
		        <li>
		          <Link to="/about">About</Link>
		        </li>
		        <li>
		          <Link to="/topics">Topics</Link>
		        </li>
		      </ul>
);
}