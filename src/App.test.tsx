import { screen } from '@testing-library/react';
import { wrapRender } from './util/testHelpers';
import App from './App';

describe('<App> component', () => {
	it('should render logged in', async () => {
		wrapRender(<App />, {
			auth: { username: 'cluey', signedIn: true },
		});
		const text = screen.getByText('Hello cluey');
		expect(text).toBeInTheDocument();
	});

	it('should render logged out', async () => {
		wrapRender(<App />, { auth: { username: '', signedIn: false } });
		const text = screen.getByText(/welcome to the cluey tutor hub/i);
		expect(text).toBeVisible();
	});
});
