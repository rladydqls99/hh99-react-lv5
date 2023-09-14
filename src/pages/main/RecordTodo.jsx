import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getTodos, addTodos } from "../../api/todos";
import { useQueryClient, useMutation } from "react-query";
import { v4 as uuidv4 } from "uuid";

function RecordTodo() {
  const params = useParams();
  const navigate = useNavigate();
  const { isError, isLoading, data } = useQuery("todos", getTodos);

  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const authorOnChange = (e) => {
    const { value } = e.target;
    setAuthor(value);
  };
  const titleOnChange = (e) => {
    const { value } = e.target;
    setTitle(value);
  };
  const contentsOnChange = (e) => {
    const { value } = e.target;
    setContents(value);
  };

  // 추가하기
  // queryClient & mutation
  const queryClient = useQueryClient();
  const mutation = useMutation(addTodos, {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
      console.log("success");
    },
  });

  const addTodosHandler = () => {
    if (!author || !title || !contents) {
      alert("작성자, 제목, 내용을 모두 입력해주세요.");
    }

    const newTodos = {
      userId: params.id,
      author,
      title,
      contents,
      todoId: uuidv4(),
    };
    mutation.mutate(newTodos);
    alert("추가가 완료되었습니다.");
    navigate(`/main/${params.id}/home`);
  };
  return (
    <div>
      <h1>작성자</h1>
      <input
        value={author}
        onChange={authorOnChange}
        placeholder="작성자의 이름을 입력해주세요.(5자이내)"
      />
      <h1>제목</h1>
      <input
        value={title}
        onChange={titleOnChange}
        placeholder="제목을 입력해주세요.(50자이내)"
      />
      <h1>내용</h1>
      <input
        value={contents}
        onChange={contentsOnChange}
        placeholder="내용을 입력해주세요.(200자이내)"
      />
      <button onClick={addTodosHandler}>추가하기</button>
    </div>
  );
}

export default RecordTodo;
