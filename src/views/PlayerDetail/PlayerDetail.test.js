import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import PlayerDetail from './PlayerDetail';

test('snapshot test for PlayerrDetail veiws page', () => {
  const container = render(
    <BrowserRouter>
      <PlayerDetail match={{ params: { id: 1 } }} />
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});
