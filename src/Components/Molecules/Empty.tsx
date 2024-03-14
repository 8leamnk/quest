import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Content from '../Atoms/Content';
import ButtonsLayout from '../Layout/ButtonsRightLayout';
import Button from '../Atoms/Button';

interface EmptyOptions {
  children: string;
  pathname?: string;
  linkText?: string;
}

const S = {
  Empty: styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;
  `,
};

function Empty({
  children,
  pathname = '',
  linkText = '',
  ...rest
}: EmptyOptions) {
  return (
    <S.Empty {...rest}>
      <Content>{children}</Content>

      {pathname && (
        <ButtonsLayout>
          <Link to={pathname}>
            <Button>{linkText}</Button>
          </Link>
        </ButtonsLayout>
      )}
    </S.Empty>
  );
}

export default Empty;
