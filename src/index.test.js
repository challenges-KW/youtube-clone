import ReactDOM from 'react-dom';
import { render, document } from '@testing-library/react';
import index from './index';
import App from './App';

it('renders without crashing', () => {
    expect(
      JSON.stringify(
        Object.assign({}, index, { _reactInternalInstance: 'censored' }),
      ),
    ).toMatchSnapshot();
  });
  



