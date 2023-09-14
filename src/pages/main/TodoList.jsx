import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTodos } from "../../api/todos";
import { useQuery, useQueryClient, useMutation } from "react-query";
import { deleteTodos } from "../../api/todos";

function TodoList() {
  // todos에 저장되어 있는 데이터 가져오기
  const params = useParams();
  const navigate = useNavigate();
  const { isError, isLoading, data } = useQuery("todos", getTodos);

  // queryClient & mutation
  const queryClient = useQueryClient();
  const mutation = useMutation(deleteTodos, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
      console.log("success");
    },
  });

  const deleteButton = () => {
    if (window.confirm("정말로 삭제 하시겠습니까?")) mutation.mutate();
  };

  return (
    <div>
      <h1>내 할일</h1>
      {data &&
        data
          .filter((item) => item.userId === params.id)
          .map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => {
                  navigate(`/main/${params.id}/detail/${item.todoId}`, {
                    state: { id: item.todoId },
                  });
                }}
              >
                제목: {item.title} 글쓴이: {item.author}
                <button
                  onClick={() => {
                    mutation.mutate(item.id);
                  }}
                >
                  삭제
                </button>
              </div>
            );
          })}
    </div>
  );
}

export default TodoList;
