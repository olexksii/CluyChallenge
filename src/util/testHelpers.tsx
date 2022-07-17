import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { RootState, reducer } from '../redux/store';
import { configureStore } from '@reduxjs/toolkit';

export const createTestStore = (preloadedState?: Partial<RootState>) => {
	return configureStore({ reducer, preloadedState });
};

/**
 * Wrap RTL render with React Router
 */
export const routerRender = (component: React.ReactNode) => {
	const utils = render(<MemoryRouter>{component}</MemoryRouter>);
	return { utils };
};

/**
 * Wrap RTL render with Redux and React Router
 */
export const wrapRender = (component: React.ReactNode, state?: Partial<RootState>) => {
	const store = createTestStore(state);
	const utils = render(
		<Provider store={store}>
			<MemoryRouter>{component}</MemoryRouter>
		</Provider>
	);
	return { utils, store };
};
