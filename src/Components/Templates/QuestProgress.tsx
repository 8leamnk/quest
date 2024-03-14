import { useLayoutEffect } from 'react';

// view
import MainSectionLayout from '../Layout/MainSectionLayout';
import CurrentQuest from '../Organisms/CurrentQuest';
import Notice from '../Molecules/Notice';

// model
import useCurrentQuest from '../../hooks/useCurrentQuest';
import usePriorityQueue from '../../hooks/usePriorityQueue';

function QuestProgress() {
  const { currentQuest, isEntryEmpty, handleCurrentQuest } = useCurrentQuest();
  const { dequeue } = usePriorityQueue();

  const onComplete = () => {
    const nextQuest = dequeue();

    handleCurrentQuest(nextQuest);
  };

  useLayoutEffect(() => {
    onComplete();
  }, []);

  if (isEntryEmpty) {
    return (
      <MainSectionLayout>
        <Notice pathname="/" linkText="메인 페이지로">
          아직 아무 것도 등록되지 않았습니다.
        </Notice>
      </MainSectionLayout>
    );
  }

  if (!currentQuest) {
    return (
      <MainSectionLayout>
        <Notice pathname="/" linkText="메인 페이지로">
          퀘스트를 모두 완료했습니다.
        </Notice>
      </MainSectionLayout>
    );
  }

  return (
    <MainSectionLayout>
      <CurrentQuest currentQuest={currentQuest} onComplete={onComplete} />
    </MainSectionLayout>
  );
}

export default QuestProgress;
