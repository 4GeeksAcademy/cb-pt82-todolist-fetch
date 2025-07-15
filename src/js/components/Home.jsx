import React, { useEffect, useState } from "react";

// const URI = 'https://playground.4geeks.com/todo'
// const USERNAME = 'carlosb'

//create your first component
const Home = () => {
	let [userName, setUserName] = useState('Dan28')

	useEffect(() => {
		createUser(userName);
		getUsersTodoList();
	}, [])


	function createUser(username) {
		fetch("https://playground.4geeks.com/todo/users/" + username, {
			method: "POST",
			body: JSON.stringify([]),
			headers: {
			"Content-Type": "application/json"
			}
		})
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			console.log(data) 
		})
		.catch((error) => {
			console.log(error)
		})
	}

	function getUsersTodoList() {
		fetch('https://playground.4geeks.com/todo/users/' + userName)
		.then((response) => {
			return response.json()
		})
		.then((data) => {
			console.log("This is the data for carlosb:", data)
			// different stuff
			// do stuff this data (DISPLAY IT)
		})
		.catch((error) => {
			console.log(error)
		})
	}


	return (
		<div className="text-center">
			<h1>Todo List with Fetch</h1>
			<input
				type="text"
				placeholder="Enter your todo here..."
			/>
			<button>Submit</button>
			<ul>
				<li>Todo 1</li>
				<li>Todo 2</li>
				<li>Todo 3</li>
			</ul>
            
		</div>
	);
};

export default Home;