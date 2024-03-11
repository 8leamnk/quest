/* eslint-disable no-unused-vars */
import React from 'react';

export interface StringHashTable {
  [propsName: string]: string;
}

export type buttonEvent =
  | React.MouseEvent<HTMLButtonElement>
  | React.FormEvent<HTMLFormElement>;
export type changeEvent = React.ChangeEvent<HTMLInputElement>;

export interface QuestType {
  title: string;
  content: string;
  priority: number;
}

export interface QuestInputs extends StringHashTable {
  title: string;
  content: string;
  priority: string;
}

export interface InputOptions {
  type: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: changeEvent) => void;
}
