import React from "react";
import { useSelector } from "react-redux";

export default function DoneList() {
  const list = useSelector((state) => state.todo.list);
  const doneList = list.filter((el) => el.done === true);

  return (
    <section>
      <h1>완료한 목록</h1>
      <ul>
        {doneList.map((el) => {
          return <li key={el.id}>{el.text}</li>;
        })}
      </ul>
    </section>
  );
}
