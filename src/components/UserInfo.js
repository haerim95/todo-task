import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const UserInfoContainer = styled.div`
  width: 40em;
  margin-top: 20px;
  padding: 1rem;
  background-color: #efead8;

  @media only screen and (max-width: 714px) {
    width: 90%;
  }
`;

const UserInfoData = styled.div`
  display: flex;
  justify-content: flex-start;

  div + div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;

    text-align: left;
    p {
      margin: 5px;
    }
  }
`;

const UserInfo = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    // 비동기 통신을 위해 async / await 사용
    // useEffect에서 promise 사용을 지원하지 않기때문에 별도의 함수를 생성해 간접적으로 호출
    const userAPI = async () => {
      try {
        const result = await axios.get('https://reqres.in/api/users/2');
        setUserData(result.data);
      } catch (error) {
        console.error(error);
      }
    };

    userAPI();
  }, []);

  return (
    <UserInfoContainer>
      <h1>사용자 정보</h1>
      {/* 유저 정보를 받아왔을 때, 받아오지 못했을 때 처리 */}
      {userData.data === undefined ? (
        '정보를 불러오는 중입니다'
      ) : (
        <UserInfoData>
          <div>
            <img src={userData.data.avatar} alt='profile' />
          </div>
          <div>
            <p>
              <b>name</b> :{userData.data.first_name} {userData.data.last_name}
            </p>
            <p>
              <b>email</b> : {userData.data.email}
            </p>
          </div>
        </UserInfoData>
      )}
    </UserInfoContainer>
  );
};

export default UserInfo;
