import React from 'react';
import { shallow } from 'enzyme';
import { ProductsComponent } from './Products';

const mockProps = {
  className: 'className',
  products: [
    {
      title: '',
      photo: '',
      price: '',
    },
  ],
};

describe('Component Products', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductsComponent {...mockProps} />);
    expect(component).toBeTruthy();
  });
});
