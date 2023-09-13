import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ResultTable } from '../'

describe('Reders tests', () => {
	test('Render ResultTable component', () => {
		const { container } = render(<ResultTable items={[]}/>);
		expect(container).toMatchSnapshot();
	});
})
