import React from 'react';
import Loader from 'react-loader-spinner';
import useFetchMeal from './hooks/useFetchMeal'
import {
	AppContainer,
	Header,
	FetchMealButton,
	ResponsiveWrapper,
	ImageWrapper,
	RecipeWrapper,
	AppWrapper,
} from './styled-components/StyledComponents.jsx';

const App = () => {
	const {fetchMeal, state, isFetching, ingredients} = useFetchMeal();

	return (
		<AppContainer>
			<Header>
				<h1>Feeling Hungry?</h1>
				<h2>Get a random meal by clicking below</h2>
				<FetchMealButton onClick={fetchMeal}>
					Get Meal{' '}
					<span role='img' aria-label='burger'>
						🍔
					</span>
				</FetchMealButton>
			</Header>
			{isFetching ? (
				<div style={state ? { display: 'block' } : { display: 'none' }}>
					<div style={{ width: '80vw' }}>
						<ResponsiveWrapper>
							<ImageWrapper>
								<img src={state?.strMealThumb} alt='meal pic'/>
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
				<AppWrapper style={{ paddingTop: '15px' }}>
					<Loader
						type='Circles'
						color='#7D151A'
						height={100}
						width={100}
						style={{ padding: '15px' }}
					/>
					<h3>Fetching your meal ...</h3>
				</AppWrapper>
			)}
		</AppContainer>
	);
}
export default App;
