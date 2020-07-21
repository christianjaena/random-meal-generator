import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const AppWrapper = styled.div`
	-webkit-box-shadow: 10px 10px 23px -5px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 10px 10px 23px -5px rgba(0, 0, 0, 0.75);
	box-shadow: 10px 10px 23px -5px rgba(0, 0, 0, 0.75);
	background-color: white;
	width: 70vw;
	text-align: center;
	border-radius: 15px;
	margin-top: 15px;
`;
function App() {
	const [state, setState] = useState(null);
	const [ingredients, setIngredients] = useState([]);
	const [isFetching, setFetching] = useState(true);
	const fetchMeal = async () => {
		setFetching(false);
		const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
		const fetchMealApi = await fetch(url);
		const response = await fetchMealApi.json();
		setState(response.meals[0]);
		setIngredients([]);
		setFetching(true);
	};

	useEffect(() => {
		if (state) {
			for (let i = 1; i <= 20; i++) {
				setIngredients(ingredients => [
					...ingredients,
					<li
						key={i}
						style={
							state[`strIngredient${i}`]
								? { display: 'block' }
								: { display: 'none' }
						}
					>
						{state[`strIngredient${i}`]} - {state[`strMeasure${i}`]}
					</li>,
				]);
			}
		}
	}, [state]);

	return (
		<div>
			<AppWrapper>
				<h1>Feeling Hungry?</h1>
				<h2>Get a random meal by clicking below</h2>
				<button onClick={fetchMeal}>Get Meal🍔</button>
			</AppWrapper>

			{isFetching ? (
				<AppWrapper style={state ? { display: 'block' } : { display: 'none' }}>
					<img src={state?.strMealThumb} alt='meal' width='100%' height='600px' />
					<div>
						<div style={{ display: 'flex' }}>
							<div style={{ height: 'auto', width: 'auto' }}></div>
							<div>
								<p>{state?.strMeal}</p>
								<p>Category: {state?.strCategory}</p>
								<p>Area: {state?.strArea}</p>
								<ul>{ingredients}</ul>
							</div>
						</div>
						<p>{state?.strInstructions}</p>
						<iframe
							src={`https://www.youtube.com/embed/${state?.strYoutube.slice(
								-11
							)}`}
							title='vid'
						/>
					</div>
				</AppWrapper>
			) : (
				<AppWrapper>
					<Loader type='Puff' color='#00BFFF' height={100} width={100} />
				</AppWrapper>
			)}
		</div>
	);
}

export default App;
