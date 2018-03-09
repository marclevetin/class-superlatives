import React from 'react';
import Button from './Button';
import renderer from 'react-test-renderer';

test('string', () => {
  const component = renderer.create(
    <Button />
  );

  // initial snapshot test
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
