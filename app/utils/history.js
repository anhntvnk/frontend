import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-38870597-10', { debug: false });
const history = createBrowserHistory();

history.listen(location => {
  ReactGA.pageview(location.pathname);
});

export default history;
