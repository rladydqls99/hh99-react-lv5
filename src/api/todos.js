import axios from "axios";

// users 조회
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

export { getTodos };
