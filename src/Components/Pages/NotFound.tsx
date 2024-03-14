import MainSectionLayout from '../Layout/MainSectionLayout';
import Notice from '../Molecules/Notice';

function NotFound() {
  return (
    <MainSectionLayout>
      <Notice pathname="/" linkText="메인 페이지로">
        없는 페이지입니다.
      </Notice>
    </MainSectionLayout>
  );
}

export default NotFound;
