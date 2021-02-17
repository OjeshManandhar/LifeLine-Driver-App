// packages
import Axios from 'axios';

// env
import { API_URL, LOGIN_ENDPOINT } from '@env';

export default async function (phoneNumber, password) {
  const url = API_URL + LOGIN_ENDPOINT;

  return new Promise(resolve =>
    resolve({
      data: {
        token: '0987654321',
        name: 'DeadSkull',
        contact: '' + phoneNumber,
        role: 'driver'
      }
    })
  );

  return Axios.post(
    url,
    {},
    {
      auth: { username: phoneNumber, password }
    }
  );
}
