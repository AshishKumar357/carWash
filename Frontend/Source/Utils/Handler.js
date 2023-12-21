import axios from "axios";
import React from "react";

export default function axiosRequestHandler(method, data, endpoint) {
  // axios.defaults.baseURL = "http://localhost:13300";
  axios.defaults.baseURL = "http://192.168.170.215:13300";
  console.log(method, data, endpoint);

  // let token = localStorage.getItem("token");
  // let Authrization = `Bearer  ${token}`;

  return new Promise((resolve, reject) => {
    axios({
      method: method,
      url: endpoint,
      data: data,
      headers: {
        // Authorization,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // Allow CORS
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "x-custom-header": "custom",
      },
    })
      .then((response) => {
        console.log(response);
        resolve(response);
      })
      .catch((error) => {
        console.log(error);
        reject(error.response);
      });
  });
}
