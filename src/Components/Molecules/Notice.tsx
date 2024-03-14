import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Content from '../Atoms/Content';
import ButtonsLayout from '../Layout/ButtonsRightLayout';
import Button from '../Atoms/Button';

interface NoticeOptions {
  children: string;
  pathname?: string;
  linkText?: string;
}

const S = {
  Notice: styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;
  `,
};

function Notice({
  children,
  pathname = '',
  linkText = '',
  ...rest
}: NoticeOptions) {
  return (
    <S.Notice {...rest}>
      <Content>{children}</Content>

      {pathname && (
        <ButtonsLayout>
          <Link to={pathname}>
            <Button>{linkText}</Button>
          </Link>
        </ButtonsLayout>
      )}
    </S.Notice>
  );
}

export default Notice;
