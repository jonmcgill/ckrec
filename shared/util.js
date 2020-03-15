import { backgroundImages, seasons } from './themes';
import config from './config';

const year = new Date().getFullYear();

export default {
  background() {
    return backgroundImages[config.season];
  },
  season() {
    return config.season;
  },
  theme() {
    return seasons[config.season];
  },
  year() {
    return year
  }
}