import axios from "axios";

// todos 조회
const getTodos = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/Todos`
    );
    return response.data;
  } catch (error) {
    console.error("오류가 발생했습니다.", error);
  }
};

// user 추가하기
const addTodos = async (newTodos) => {
  try {
    await axios.post(`${process.env.REACT_APP_SERVER_URL}/todos`, newTodos);
  } catch (error) {
    console.error("오류가 발생했습니다.", error);
    console.log(newTodos);
  }
};

export { getTodos, addTodos };
