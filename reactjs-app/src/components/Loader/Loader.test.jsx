import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Loader } from '../'

describe('Reders tests', () => {
	test('Render Loader component', () => {
		const { container } = render(<Loader />);
		expect(container).toMatchSnapshot();
	});
})
