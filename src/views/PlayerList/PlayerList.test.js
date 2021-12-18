import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import PlayerList from './PlayerList';

test('snapshot test for PlayersList veiws page', () => {
  const container = render(
    <BrowserRouter>
      <PlayerList
        id="1"
        name="Bennie Jetts"
        position="Pitcher"
        team_id="1"
        created_at="2021-11-22T20:11:15+00:00"
        match={{ params: { id: 1 } }}
      />
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});
