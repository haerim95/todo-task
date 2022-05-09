import React from 'react';
import styled from 'styled-components';
import TodoContainer from './components/TodoContainer';
import UserInfo from './components/UserInfo';

// 스타일
const TodoContainerWrapper = styled.div`
  margin: 0;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const App = () => {
  return (
    <TodoContainerWrapper>
      {/* todo 컴포넌트 */}
      <TodoContainer />
      {/* user */}
      <UserInfo />
    </TodoContainerWrapper>
  );
};

export default App;
