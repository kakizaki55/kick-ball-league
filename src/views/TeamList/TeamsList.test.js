import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TeamsList from './TeamsList';

test('renders the TeamsList component', () => {
  const container = render(
    <BrowserRouter>
      <TeamsList
        id="1"
        name="Bridge City Sneakers"
        created_at="2021-11-22T20:07:58+00:00"
        city="Portland"
        state="OR"
      />
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});
