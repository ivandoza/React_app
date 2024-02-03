import { useMemo, useState } from "react";

export function FilteredList({ people }) {
  const [newList, setNewsList] = useState([]);

  useMemo(() => {
    const list = people.filter((p) => p.age > 18);
    setNewsList(list);
  }, [people]);

  return (
    <div>
      <h4>People over 18 years old:</h4>
      <ul>
        {newList.map((p) => (
          <li key={p.id}>
            <p>{`${p.name}, ${p.age}`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
