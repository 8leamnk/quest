import styled, { css } from 'styled-components';
import Quest from '../Atoms/Quest';
import Notice from './Notice';
import { QuestType } from '../../constants/types';

const wrapper = css`
  display: flex;
  padding: 16px;
  box-sizing: border-box;
`;

const S = {
  Items: styled.ul`
    ${wrapper};
    flex-direction: column;
    gap: 16px;
  `,

  Empty: styled(Notice)`
    ${wrapper};
    height: calc(100% - 56px);
    justify-content: center;
    align-items: center;
  `,
};

function Quests({ quests }: { quests: QuestType[] }) {
  if (quests.length > 0) {
    return (
      <S.Items>
        {quests.map((data: QuestType, index) => (
          <Quest key={index} data={data} />
        ))}
      </S.Items>
    );
  }

  return <S.Empty>아직 아무 것도 등록되지 않았습니다.</S.Empty>;
}

export default Quests;
