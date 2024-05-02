import React, { useEffect } from "react";

const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

const getData = async (url = "") => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export default function RabochkaPage() {
  useEffect(() => {
    // getData("http://127.0.0.1:8000/api/departments");

    // postData("http://127.0.0.1:8000/api/departments/create/", {
    //   links: [{ link: "saf", title: "sfjnkd" }],
    //   short_title: "ыфвафыва",
    //   title: "фывафы",
    //   description: "фывафыв",
    //   structure: "фывафывв",
    //   work: "фыавфыв",
    //   in_events: "фыав",
    //   FAQ: "фыавфы",

    // }).then((data) => {
    //   console.log(data);
    // });

    var xhr = new XMLHttpRequest();

    xhr.open("POST", "http://127.0.0.1:8000/api/departments/create/", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(
      JSON.stringify({
        links: [],
        short_title: "ыфвафыва",
        title: "фывафы",
        description: "фывафыв",
        structure: "фывафывв",
        work: "фыавфыв",
        in_events: "фыав",
        FAQ: "фыавфы",
      })
    );
  }, []);

  return <div>Я есть RabochkaPage</div>;
}
