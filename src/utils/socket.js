// packages
import io from 'socket.io-client';

// utils
import UserInfo from 'utils/userInfo';

// env
import { SOCKET_ENDPOINT } from '@env';
class Socket {
  #alreadyInit = false;
  #socket = null;

  init() {
    if (this.#alreadyInit) return;

    this.#socket = io(SOCKET_ENDPOINT, {
      autoConnect: true,
      reconnection: true,
      reconnectionDelay: 500,
      reconnectionAttempts: Infinity
    });

    this.#socket.on('connect', data =>
      console.log(socket.id, 'connected:', data)
    );
    this.#socket.on('error', err => console.log('error:', err));
    this.#socket.on('connect_error', err => console.log('connect_error:', err));
  }

  get socket() {
    return this.#socket;
  }
}

export default new Socket();
