import React from 'react';
import { shallow } from 'enzyme';
import { OrderItemComponent } from './OrderItem';

describe('Component OrderItem', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderItemComponent />);
    expect(component).toBeTruthy();
  });
});
