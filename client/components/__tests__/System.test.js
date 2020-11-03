import React from 'react';
import { render } from '@testing-library/react';
import System from '../System';

describe('System Component', () => {
  it('will render the title h1 element', () => {
    const { getByText } = render(<System />);
    const textElement = getByText('SYSTEM REQUIREMENTS');
    expect(textElement).toBeInTheDocument();
  })
})