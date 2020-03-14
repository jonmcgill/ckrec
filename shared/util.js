import { backgroundImages, seasons } from './themes';
import flags from './flags';

const year = new Date().getFullYear();

export default {
  background() {
    return backgroundImages[flags.season];
  },
  season() {
    return flags.season;
  },
  theme() {
    return seasons[flags.season];
  },
  year() {
    return year
  }
}