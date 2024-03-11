import { Link } from 'react-router-dom';
import styled from 'styled-components';
import StickyHeader from '../Molecules/StickyHeader';
import Button from '../Atoms/Button';
import Quests from '../Molecules/Quests';
import { QuestType } from '../../constants/types';

const S = {
  Section: styled.div`
    width: 320px;
    height: 480px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 4px;
    position: fixed;
    top: 50%;
    left: 72px;
    transform: translateY(-50%);
    z-index: 1;
    box-shadow: 3px 6px 9px 0 rgba(0, 0, 0, 0.16);
    overflow: auto;
  `,
};

function RegisteredData({ registeredData }: { registeredData: QuestType[] }) {
  return (
    <S.Section>
      <StickyHeader text="등록된 퀘스트">
        {registeredData.length > 0 && (
          <Link to="quest-start">
            <Button>퀘스트 시작</Button>
          </Link>
        )}
      </StickyHeader>

      <Quests quests={registeredData} />
    </S.Section>
  );
}

export default RegisteredData;
