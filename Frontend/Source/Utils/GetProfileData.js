//fetch users/:id api and store the response in profile state and return the profile state

import React from "react";
import axiosRequestHandler from "./Handler";

const GetProfileData = async (id) => {
  //create profile state
  var profile = {
    id: "",
    firstname: "",
    lastname: "",
    email: "",
    age: "",
    gender: "",
    phonenum: "",
  };
  try {
    if (!id) {
      id = 8;
    }
    let url = `/users/${id}`;
    let method = "GET";
    let data = {};
    let response = await axiosRequestHandler(method, data, url);
    // console.log(response);
    //set data to profile state
    if (response.status === 200) {
      profile.id = response.data[0].id;
      profile.firstname = response.data[0].firstname;
      profile.lastname = response.data[0].lastname;
      profile.email = response.data[0].email;
      profile.age = response.data[0].age;
      profile.phonenum = response.data[0].phonenum;
      profile.gender = response.data[0].gender;

      return profile;
    } else {
      throw new Error("Error in fetching profile data");
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default GetProfileData;
