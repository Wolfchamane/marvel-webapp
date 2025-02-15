import { Route, BrowserRouter as Router, Routes } from 'react-router';
import {
	CHARACTERS_ROUTE_PATH,
	CHARACTER_DETAILS_PATH,
	CharacterDetailsPage,
	CharactersPage,
} from '../features/characters';

export function AppRouter() {
	return (
		<Router>
			<Routes>
				<Route path={CHARACTERS_ROUTE_PATH} element={<CharactersPage />} />
				<Route path={CHARACTER_DETAILS_PATH} element={<CharacterDetailsPage />} />
			</Routes>
		</Router>
	);
}
