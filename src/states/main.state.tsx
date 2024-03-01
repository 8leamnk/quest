import { atom } from 'recoil';
import { Quest } from '../constants/types';

export const questState = atom<Quest[]>({
  key: 'questState',
  default: [],
});
