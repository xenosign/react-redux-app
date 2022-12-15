import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create, done } from "../store/modules/todo";

export default function TodoList() {
  const list = useSelector((state) => state.todo.list).filter(
    (el) => el.done === false
  );
  const inputRef = useRef();
  const dispatch = useDispatch();

  return (
    <section>
      <h1>할 일 목록</h1>
      <div>
        <input type="text" ref={inputRef} />
        <button
          onClick={() => {
            dispatch(create("리덕스 마스터 하기"));
          }}
        >
          할 일 추가
        </button>
      </div>
      <ul>
        {list.map((el) => {
          return <li key={el.id}>{el.text}</li>;
        })}
      </ul>
    </section>
  );
}
