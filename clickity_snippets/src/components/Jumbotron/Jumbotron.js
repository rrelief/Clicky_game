//sets up the reusable Jumbotron component
import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
	<header className = "header">
		<h1>Clickity Snippets Car Edition!</h1>
		<h2>Click on any image to earn a point and start the game. </h2>
		<h2>Click the same pic twice and you lose! But click all 10 pics, and you win.</h2>
	</header>
);

export default Jumbotron;