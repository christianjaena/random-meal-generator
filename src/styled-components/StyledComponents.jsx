import styled, { createGlobalStyle } from 'styled-components';
import BG from '../assets/moroccan-flower.png';

export const GlobalStyles = createGlobalStyle`
	body {
	margin: 0;
	font-family: Fira Code, -apple-system, BlinkMacSystemFont, 'Segoe UI',
		'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
		'Helvetica Neue', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background-color: hsl(2, 57%, 40%);
	background-image: repeating-linear-gradient(
			transparent,
			transparent 50px,
			rgba(0, 0, 0, 0.4) 50px,
			rgba(0, 0, 0, 0.4) 53px,
			transparent 53px,
			transparent 63px,
			rgba(0, 0, 0, 0.4) 63px,
			rgba(0, 0, 0, 0.4) 66px,
			transparent 66px,
			transparent 116px,
			rgba(0, 0, 0, 0.5) 116px,
			rgba(0, 0, 0, 0.5) 166px,
			rgba(255, 255, 255, 0.2) 166px,
			rgba(255, 255, 255, 0.2) 169px,
			rgba(0, 0, 0, 0.5) 169px,
			rgba(0, 0, 0, 0.5) 179px,
			rgba(255, 255, 255, 0.2) 179px,
			rgba(255, 255, 255, 0.2) 182px,
			rgba(0, 0, 0, 0.5) 182px,
			rgba(0, 0, 0, 0.5) 232px,
			transparent 232px
		),
		repeating-linear-gradient(
			270deg,
			transparent,
			transparent 50px,
			rgba(0, 0, 0, 0.4) 50px,
			rgba(0, 0, 0, 0.4) 53px,
			transparent 53px,
			transparent 63px,
			rgba(0, 0, 0, 0.4) 63px,
			rgba(0, 0, 0, 0.4) 66px,
			transparent 66px,
			transparent 116px,
			rgba(0, 0, 0, 0.5) 116px,
			rgba(0, 0, 0, 0.5) 166px,
			rgba(255, 255, 255, 0.2) 166px,
			rgba(255, 255, 255, 0.2) 169px,
			rgba(0, 0, 0, 0.5) 169px,
			rgba(0, 0, 0, 0.5) 179px,
			rgba(255, 255, 255, 0.2) 179px,
			rgba(255, 255, 255, 0.2) 182px,
			rgba(0, 0, 0, 0.5) 182px,
			rgba(0, 0, 0, 0.5) 232px,
			transparent 232px
		),
		repeating-linear-gradient(
			125deg,
			transparent,
			transparent 2px,
			rgba(0, 0, 0, 0.2) 2px,
			rgba(0, 0, 0, 0.2) 3px,
			transparent 3px,
			transparent 5px,
			rgba(0, 0, 0, 0.2) 5px
		);
	display: flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;

	}
`;
export const AppWrapper = styled.div`
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

export const ResponsiveWrapper = styled.div`
	display: flex;

	@media (max-width: 500px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;

export const AppContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const Header = styled(AppWrapper)`
	padding: 15px;
`;

export const FetchMealButton = styled.button`
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
		transition: 0.2s ease-in-out;
	}
`;

export const ImageWrapper = styled(AppWrapper)`
	width: 50%;
	object-fit: cover;
	overflow: hidden;
	margin-right: 15px;
	@media (max-width: 500px) {
		width: 100%;
		object-fit: cover;
		overflow: hidden;
		margin-right: 0;
	}
	@media (max-width: 768px) {
		width: 100%;
		object-fit: cover;
		overflow: hidden;
		margin-right: 0;
	}
`;

export const RecipeWrapper = styled(AppWrapper)`
	width: 50%;
	padding: 15px;
	@media (max-width: 500px) {
		width: 100%;
		padding: 15px;
	}
	@media (max-width: 768px) {
		width: 100%;
		padding: 15px;
	}
`;
