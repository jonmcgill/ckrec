import { seasons } from './themes';
import config from './config';

const year = new Date().getFullYear();

export default {
  background() {
    return seasons[config.season].bg;
  },
  season() {
    return config.season;
  },
  theme() {
    return seasons[config.season].theme;
  },
  year() {
    return year
  },
}