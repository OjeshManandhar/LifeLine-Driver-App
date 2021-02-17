// packages
import io from 'socket.io-client';

// env
import { SOCKET_ENDPOINT } from '@env';

const socket = io(SOCKET_ENDPOINT, {
  path: '/',
  transport: ['polling', 'websocket'],
  autoConnect: true,
  reconnection: true,
  reconnectionDelay: 500,
  reconnectionAttempts: Infinity
});

socket.on('connect', data => console.log(socket.id, 'connected:', data));
socket.on('error', err => console.log('error:', err));
socket.on('connect_error', err => console.log('connect_error:', err));

export default socket;
