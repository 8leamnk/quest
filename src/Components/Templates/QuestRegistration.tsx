// view
import MainSectionLayout from '../Layout/MainSectionLayout';
import Registration from '../Organisms/Registration';
import ErrorMessage from '../Atoms/ErrorMessage';
import RegisteredData from '../Organisms/RegisteredData';

// model
import useInputs from '../../hooks/useInputs';
import useValidation from '../../hooks/useQuestValidation';
import useRegistration from '../../hooks/useRegistration';
import usePriorityQueue from '../../hooks/usePriorityQueue';

// states
import { questState } from '../../states/main.state';

// types
import { QuestInputs, QuestType, buttonEvent } from '../../constants/types';

const INITIAL_INPUTS: QuestInputs = {
  title: '',
  content: '',
  priority: '',
};

function QuestRegistration() {
  const { inputs, onChange, onReset } = useInputs<QuestInputs>(INITIAL_INPUTS);
  const { errorMsg, validate } = useValidation();
  const { registeredData, registerQuest } = useRegistration();
  const { enqueue } = usePriorityQueue<QuestType>(questState);

  const onSubmit = (e: buttonEvent): void => {
    e.preventDefault();
    e.stopPropagation();

    const element = validate(inputs);

    if (element) {
      registerQuest(element);
      enqueue(element);
      onReset();
    }
  };

  return (
    <MainSectionLayout>
      <ErrorMessage errorMsg={errorMsg} />
      <Registration
        inputs={inputs}
        buttonText="등록"
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <RegisteredData registeredData={registeredData} />
    </MainSectionLayout>
  );
}

export default QuestRegistration;
