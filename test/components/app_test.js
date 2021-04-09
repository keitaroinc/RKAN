/*
Copyright (c) 2017 Keitaro AB

Use of this source code is governed by an MIT license
that can be found in the LICENSE file or at
https://opensource.org/licenses/MIT.
*/

import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});

