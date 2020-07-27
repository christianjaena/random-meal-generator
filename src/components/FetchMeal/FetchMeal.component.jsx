import React from 'react';
import {
	Header,
	FetchMealButton,
} from '../../styled-components/StyledComponents';

const FetchMeal = ({ fetchMeal }) => {
	return (
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
	);
};

export default FetchMeal;
