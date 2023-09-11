import axios from "axios";

// users 조회
const getUsers = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/users`
    );
    return response.data;
  } catch (error) {
    console.error("오류가 발생했습니다.", error);
  }
};

// user 추가하기
const addUser = async (newUser) => {
  try {
    await axios.post(`${process.env.REACT_APP_SERVER_URL}/users`, newUser);
  } catch (error) {
    console.error("오류가 발생했습니다.", error);
    console.log(newUser);
  }
};

export { getUsers, addUser };
