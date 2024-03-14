import React, { Suspense, useMemo } from 'react';
import Quest from '../Atoms/Quest';
import Button from '../Atoms/Button';
import { QuestType } from '../../constants/types';

interface CurrentQuestOptions {
  currentQuest: QuestType;
  onComplete: () => void;
}

const ListBoxAndButton = React.lazy(
  () => import('../Molecules/ListBoxAndButton'),
);

function CurrentQuest({ currentQuest, onComplete }: CurrentQuestOptions) {
  const listtNode = useMemo(
    () => <Quest data={currentQuest} />,
    [currentQuest],
  );
  const buttonNode = useMemo(
    () => <Button onClick={onComplete}>완료</Button>,
    [onComplete],
  );

  return (
    <Suspense fallback={<>loading...</>}>
      <ListBoxAndButton listtNode={listtNode} buttonNode={buttonNode} />
    </Suspense>
  );
}

export default CurrentQuest;
