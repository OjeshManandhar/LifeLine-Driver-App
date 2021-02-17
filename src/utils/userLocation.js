// utils
import Socket from 'utils/socket';
import UserInfo from 'utils/userInfo';

// global
import { SocketText } from 'global/strings';

function emitLocation(location, operation) {
  const info = UserInfo.getInfo();

  Socket.emit(SocketText.events.driverLocation, {
    operation,
    driver_gps: {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: location
      },
      properties: {
        role: info.role,
        contact: info.contact
      }
    }
  });
}

class UserLocation {
  #sendLocation = true;
  #userLocation = null;

  updateLocation(coords) {
    this.#userLocation = coords;

    console.log('new coords:', this.#userLocation);

    if (this.#sendLocation) {
      emitLocation(this.#userLocation, SocketText.operations.update);
    }
  }

  startSendLocation() {
    this.#sendLocation = true;
    emitLocation(this.#userLocation, SocketText.operations.update);
  }

  stopSendLocation() {
    this.#sendLocation = false;
    emitLocation(this.#userLocation, SocketText.operations.delete);
  }

  get currentLocation() {
    return this.#userLocation;
  }
}

export default new UserLocation();
