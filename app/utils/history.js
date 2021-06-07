import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';
import axios from 'axios';
import API from 'constants/apis';
import { getToken } from '../../services/auth';

ReactGA.initialize('UA-38870597-10', { debug: false });
const history = createBrowserHistory();
const hours = 7;

history.listen(location => {
  ReactGA.pageview(location.pathname);
  const loginTime = localStorage.getItem('loginTime');
  if (
    loginTime &&
    new Date().getTime() - loginTime > new Date(hours * 60 * 60 * 24).getTime()
  ) {
    localStorage.clear();
    axios
      .create({
        baseURL: API.BASE_URL,
        timeout: 5000,
        validateStatus(status) {
          return (status >= 200 && status < 300) || status === 403; // default
        },
        headers: { 'Content-Type': 'application/json' },
      })
      .post(`${API.BASE_URL}/user/logout?access_token=${getToken()}`);
  }
});

export default history;
