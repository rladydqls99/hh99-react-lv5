import axios from "axios";

// todos 조회
const getTodos = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/todos`
    );
    return response.data;
  } catch (error) {
    console.error("오류가 발생했습니다.", error);
  }
};

// todo 추가하기
const addTodos = async (newTodos) => {
  try {
    await axios.post(`${process.env.REACT_APP_SERVER_URL}/todos`, newTodos);
  } catch (error) {
    console.error("오류가 발생했습니다.", error);
  }
};

// todo 삭제
const deleteTodos = async (id) => {
  try {
    await axios.delete(`${process.env.REACT_APP_SERVER_URL}/todos/${id}`, id);
  } catch (error) {
    console.error("오류가 발생했습니다.", error);
  }
};

export { getTodos, addTodos, deleteTodos };
