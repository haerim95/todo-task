import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

// 스타일
const InputWrapper = styled.div`
  padding: 0;
  margin: 0;
  form {
    display: flex;

    input {
      flex-grow: 2;
      margin: 0;
      padding: 0;
      padding-left: 1rem;
      height: 40px;
      border: none;
    }
  }
`;
const InsertBtn = styled.button`
  flex-grow: 1;
  margin: 0;
  padding: 0;
  height: 40px;
  border: none;
  background-color: #6d8b74;
`;

const TodoInput = ({ todoData, setTodoDate }) => {
  // todo 입력값 초기 설정, 입력 이벤트
  const [text, setText] = useState('');
  const insertChange = useCallback(
    (e) => {
      setText(e.target.value);
      console.log(text);
    },
    [text]
  );

  // 입력
  // 투두 추가
  const [todoNum, setTodoNum] = useState(1); // 투두 넘버 초기상태
  const onSubmit = useCallback(
    (e) => {
      const todo = {
        // todo 객체에 값 담기
        num: todoNum,
        text: text,
        checked: false,
      };
      setText(''); // input 리셋
      setTodoDate(todoData.concat(todo).reverse()); // 기존 todoData 배열에 todo 객체를 추가. 최신 입력순을 위해 reverse 사용
      setTodoNum(todoNum + 1); // 넘버 1씩 더하기
      e.preventDefault(); // submit시 리렌더링 되므로 방지
    },
    [todoData, todoNum, text, setTodoDate]
  );

  return (
    <InputWrapper onSubmit={onSubmit}>
      <form>
        <input
          type='text'
          value={text}
          onChange={insertChange}
          placeholder='Enter what to do?'
        />
        <InsertBtn type='submit'>ADD</InsertBtn>
      </form>
    </InputWrapper>
  );
};

export default TodoInput;
