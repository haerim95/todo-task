import React, { useState } from 'react';
import styled from 'styled-components';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

// 스타일
const Container = styled.div`
  width: 40em;
  padding: 1rem;
  background-color: #efead8;

  h2 {
    text-align: center;
  }

  @media only screen and (max-width: 714px) {
    width: 90%;
  }
`;

const TodoContainer = () => {
  // todo 배열
  const [todoData, setTodoDate] = useState([]);
  return (
    <Container>
      <h2>✏️ ToDo</h2>
      <hr />
      {/* 투두 입력창 */}
      <TodoInput todoData={todoData} setTodoDate={setTodoDate} />
      {/* 투두 리스트 */}
      <TodoList todoData={todoData} setTodoDate={setTodoDate} />
    </Container>
  );
};

export default TodoContainer;
