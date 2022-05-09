import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

// 스타일
const List = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 2px dotted #6d8b74;

  p {
    padding: 0 1rem;
    text-align: center;
  }
  button {
    width: 120px;
    height: 30px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  &.checked {
    p {
      text-decoration: line-through;
      color: gray;
    }
  }

  .del {
    background-color: #fe7e6d;
  }
  .modify {
    margin-left: 5px;
    background-color: #ccd1e4;
  }
`;
const NumTodo = styled.p`
  width: 10px;
`;
const TextTodo = styled.p`
  width: calc(100% - 380px);
  word-break: break-all;
`;
const ModifyInput = styled.input`
  width: calc(100% - 290px);
  margin-right: 20px;
  height: 30px;
  padding-left: 10px;
  border: none;
`;
const ModifyContainer = styled.div`
  width: calc(100% - 20px);
`;

const ListItems = ({ todo, onRemoveTodo, onCheck, todoData, setTodoDate }) => {
  // 투두 정보 가져오기
  const { text, num, checked } = todo;

  // 수정버튼
  const [edit, setEdit] = useState(false);
  const onEdit = useCallback(() => {
    setEdit(!edit);
  }, [edit]);

  // 수정하기
  const [editTxt, setEditTxt] = useState(text);
  // 수정 텍스트
  const onChangeText = useCallback((e) => {
    setEditTxt(e.target.value);
  }, []);
  const onChangeTodo = useCallback(
    (e) => {
      // 수정할 아이템 넘버와 배열 아이템들 넘버 비교해서 같으면 editTxt 값을, 아니면 그대로 배열값
      const editTodoList = todoData.map((editItem) => ({
        ...editItem,
        text: editItem.num === num ? editTxt : editItem.text,
      }));
      setTodoDate(editTodoList); // setTodoDate에 수정값 넣기
      setEdit(!edit);
      e.preventDefault();
    },
    [edit, editTxt, todoData, setTodoDate, num]
  );

  return (
    <List className={checked === true ? 'checked' : null}>
      {/* 문제에는 없었지만 todo 라면 체크박스도 필요하다 생각되어 넣었습니다... */}
      <input type='checkbox' value={checked} onChange={() => onCheck(num)} />
      <NumTodo>{num}</NumTodo>
      {edit === false ? (
        <>
          <TextTodo>{text}</TextTodo>

          <button className='del' onClick={() => onRemoveTodo(num)}>
            DELETE
          </button>
          <button className='modify' onClick={onEdit}>
            MODIFY
          </button>
        </>
      ) : (
        <ModifyContainer onSubmit={onChangeTodo}>
          <form>
            <div>
              <ModifyInput
                type='text'
                value={editTxt}
                placeholder='Enter what to do?'
                onChange={onChangeText}
              />
              <button className='del' onClick={onEdit}>
                CANCEL
              </button>
              <button className='modify' type='submit'>
                COMPLETE
              </button>
            </div>
          </form>
        </ModifyContainer>
      )}
    </List>
  );
};

export default ListItems;
