import React, { useCallback } from 'react';
import styled from 'styled-components';
import ListItems from './ListItems';

// 스타일
const ListWrapper = styled.div`
  margin-top: 1rem;
  border-top: 2px dotted #6d8b74;

  .notice {
    text-align: center;
    font-weight: bold;
  }
`;

const TodoList = ({ todoData, setTodoDate }) => {
  // 리스트 삭제하기
  const onRemoveTodo = useCallback(
    (num) => {
      // filter 함수를 이용하여 클릭한 리스트의 num 값을 제외한 나머지 객체들의 배열 재생성
      setTodoDate(todoData.filter((todo) => todo.num !== num));
    },
    [setTodoDate, todoData]
  );

  // 할일 체크
  const onCheck = useCallback(
    (num) => {
      setTodoDate(
        todoData.map((todo) =>
          // 선택한 num과 배열 num이 같으면 다른 배열들은 그대로 출력하고 같은 배열만 checked 상태를 반대로 바꿔준다.
          todo.num === num ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todoData, setTodoDate]
  );
  return (
    <ListWrapper>
      {todoData.length === 0 ? (
        // 투두 데이터가 없다면
        <p className='notice'>할 일을 적어주세요!</p>
      ) : (
        // 투두 데이터가 있다면
        <div>
          {/* todoData의 값을 map 메서드를 이용해 그 숫자만큼 반복해서 불러온다. */}
          {todoData.map((todo) => (
            <ListItems
              todo={todo}
              key={todo.num}
              onRemoveTodo={onRemoveTodo}
              onCheck={onCheck}
              todoData={todoData}
              setTodoDate={setTodoDate}
            />
          ))}
        </div>
      )}
    </ListWrapper>
  );
};

export default TodoList;
