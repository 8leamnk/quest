import { atom } from 'recoil';
import { QuestType } from '../constants/types';

export const questState = atom<QuestType[]>({
  key: 'questState',
  default: [],
});
