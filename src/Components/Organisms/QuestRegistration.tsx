// view
import RegistrationLayout from '../Layout/RegistrationLayout';
import Registration from '../Molecules/Registration';
import ErrorMessage from '../Atoms/ErrorMessage';
import RegisteredData from '../Atoms/RegisteredData';

// model
import useInputs from '../../hooks/useInputs';
import useValidation from '../../hooks/useQuestValidation';
import useRegistration from '../../hooks/useRegistration';
import usePriorityQueue from '../../hooks/usePriorityQueue';
import { QuestInputs, buttonEvent } from '../../constants/types';

const INITIAL_INPUTS: QuestInputs = {
  title: '',
  content: '',
  priority: '',
};

function QuestRegistration() {
  const { inputs, onChange, onReset } = useInputs<QuestInputs>(INITIAL_INPUTS);
  const { errorMsg, validate } = useValidation();
  const { registeredData, registerQuest } = useRegistration();
  const { enqueue } = usePriorityQueue();

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
    <RegistrationLayout>
      <Registration
        inputs={inputs}
        buttonText="등록"
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <ErrorMessage errorMsg={errorMsg} />
      <RegisteredData registeredData={registeredData} />
    </RegistrationLayout>
  );
}

export default QuestRegistration;
