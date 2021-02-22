// packages
import io from 'socket.io-client';

// env
import { SOCKET_ENDPOINT } from '@env';

class Socket {
  #alreadyInit = false;
  #socket = null;

  init() {
    if (this.#alreadyInit) return;

    // Add token here

    this.#socket = io(SOCKET_ENDPOINT, {
      autoConnect: true,
      reconnection: true,
      reconnectionDelay: 500,
      reconnectionAttempts: Infinity
    });

    this.#socket.on('connect', data =>
      console.log(this.#socket.id, 'connected:', data)
    );
    this.#socket.on('error', err => console.log('error:', err));
    this.#socket.on('connect_error', err => console.log('connect_error:', err));
  }

  get socket() {
    return this.#socket;
  }
}

export default new Socket();
