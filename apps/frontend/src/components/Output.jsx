import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Output({ id }) {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch(`http://localhost:8080/result/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      });
  });
  return <div>{data}</div>;
}
