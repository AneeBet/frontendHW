import { render, fireEvent } from '@testing-library/react';
import CrudEmployee from './crudEmployee';
 
 
describe('validate function', () => {
  it('validates form fields correctly', () => {
    const { getByPlaceholderText, getByText } = render(<CrudEmployee/>);
 
    fireEvent.change(getByPlaceholderText('Name'), { target: { value: '' } });
    fireEvent.change(getByPlaceholderText('Username'), { target: { value: '' } });
    fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'invalidemail' } });
    fireEvent.change(getByPlaceholderText('Phone'), { target: { value: '123' } });
    fireEvent.change(getByPlaceholderText('Balance'), { target: { value: '-10' } });
 
    fireEvent.click(getByText('Add Customer'));
 
    expect(getByText('Name is required')).toBeInTheDocument();
    expect(getByText('Username is required')).toBeInTheDocument();
    expect(getByText('Email address is invalid')).toBeInTheDocument();
    expect(getByText('Phone number is invalid (must be 10 digits)')).toBeInTheDocument();
    expect(getByText('Balance must be a positive number')).toBeInTheDocument();
  });
});


test('button click updates state', () => {
  const { getByText } = render(<CrudEmployee/>);
  const button = getByText('Add Customer');
  fireEvent.click(button);
});