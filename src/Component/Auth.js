import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

export default function Auth() {

  const cookies = new Cookies();
  const token = cookies.get("TOKEN");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const configuration = {
      method: "get",
      url: "http://localhost:3000/auth-endpoint",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios(configuration)
      .then((result) => {
        setMessage(result.data.message);
      })
      .catch((error) => {
        error = new Error();
      });
  }, []);

  return (
    <div className="text-center">
      <h1>Auth Component</h1>
      <h3 className="text-danger">{message}</h3>
    </div>
  );
}