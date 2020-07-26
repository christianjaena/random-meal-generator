import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import BG from './assets/moroccan-flower.png';

const AppWrapper = styled.div`
	-webkit-box-shadow: 10px 10px 23px -5px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 10px 10px 23px -5px rgba(0, 0, 0, 0.75);
	box-shadow: 10px 10px 23px -5px rgba(0, 0, 0, 0.75);
	background-image: url(${BG});
	width: 70vw;
	text-align: center;
	border-radius: 20px;
	margin-top: 15px;
	border: 1px solid #7d151a;
	outline: 5px solid #631916;
	outline-offset: -15px;
	@media (max-width: 500px) {
		width: 90%;
	}
`;

const ResponsiveWrapper = styled.div`
	display: flex;

	@media (max-width: 500px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;

const AppContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const AppWrapperWithPadding = styled(AppWrapper)`
	padding: 15px;
`;

const FetchMealButton = styled.button`
	height: 50px;
	width: 200px;
	border: none;
	outline: none;
	font-size: 18px;
	border-radius: 15px;
	background-color: #212121;
	color: white;
	margin-bottom: 15px;
	&:hover {
		transform: scale(1.1);
		transition: .2s ease-in-out;
	}
`;

const ImageWrapper = styled(AppWrapper)`
	width: 50%;
	object-fit: cover;
	overflow: hidden;
	margin-right: 15px;
	@media(max-width: 500px) {
		width: 100%;
		object-fit: cover;
		overflow: hidden;
		margin-right: 0;
	}
`;
const RecipeWrapper = styled(AppWrapper)`
	width: 50%;
	padding: 15px;
	@media(max-width: 500px) {
		width: 100%;
		padding: 15px;
	}
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
		<AppContainer>
			<AppWrapperWithPadding>
				<h1>Feeling Hungry?</h1>
				<h2>Get a random meal by clicking below</h2>
				<FetchMealButton onClick={fetchMeal}>Get Meal <span role='img' aria-label='burger'>🍔</span></FetchMealButton>
			</AppWrapperWithPadding>
			{isFetching ? (
				<div style={state ? { display: 'block' } : { display: 'none' }}>
					<div style={{ width: '80vw' }}>
						<ResponsiveWrapper>
							<ImageWrapper>
								<img
									src={state?.strMealThumb}
									alt='meal'
									width='100%'
									height='100%'
								/>
							</ImageWrapper>
							<RecipeWrapper>
								<h1>{state?.strMeal}</h1>
								<p>
									<strong>Category:</strong> {state?.strCategory}
								</p>
								<p>
									<strong>Area:</strong> {state?.strArea}
								</p>
								<h2>Ingredients</h2>
								<ul style={{ textAlign: 'left' }}>{ingredients}</ul>
							</RecipeWrapper>
						</ResponsiveWrapper>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								flexDirection: 'column',
							}}
						>
							<AppWrapper style={{ width: '80vw', padding: '20px' }}>
								<h2>Instructions</h2>
								<p>{state?.strInstructions}</p>
							</AppWrapper>
							<AppWrapper
								style={{
									width: '80vw',
									height: '500px',
									overflow: 'hidden',
									margin: '15px 0',
								}}
							>
								<iframe
									src={`https://www.youtube.com/embed/${state?.strYoutube.slice(
										-11
									)}`}
									title='vid'
									height='100%'
									width='100%'
								/>
							</AppWrapper>
						</div>
					</div>
				</div>
			) : (
				<Loader
					type='Circles'
					color='#7D151A'
					height={100}
					width={100}
					style={{ padding: '15px' }}
				/>
			)}
		</AppContainer>
	);
}
export default App;
