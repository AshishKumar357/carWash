import { GoogleLogin } from "react-google-login";

function login() {
  const onSuccess = (res) => {
    console.log("Login Success! current user: ", res.profileObj);
  };
  const onFailure = (res) => {
    console.log("Login Failed! current res: ", res);
  };

  return (
    <GoogleLogin
      clientId="89187994972-ck8sqsfigh6i688abhhj6n7i7k5q2iq0.apps.googleusercontent.com"
      // client_id="89187994972-ck8sqsfigh6i688abhhj6n7i7k5q2iq0.apps.googleusercontent.com"
      buttonText="Continue with Google"
      // onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
      isSignedIn={true}
    />
  );
}
export default login;

// import queryString from "querystring";
// import React from "react";
// import axios from "axios";

// /* creating login URL */
// const stringifiedParams = queryString.stringify({
//   client_id: process.env.CLIENT_ID,
//   redirect_uri: "https://www.example.com/authenticate/google",
//   scope: [
//     "https://www.googleapis.com/auth/userinfo.email",
//     "https://www.googleapis.com/auth/userinfo.profile",
//   ].join(" "), // space seperated string
//   response_type: "code",
//   access_type: "offline",
//   prompt: "consent",
// });

// const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`;

// /*      getting back the code from google and extracting ,
//         example: https://www.example.com/authenticate/google?code=CODE_IS_HERE
// */
// const urlParams = queryString.parse(window.location.search);

// if (urlParams.error) {
//   console.log(`An error occurred: ${urlParams.error}`);
// } else {
//   console.log(`The code is: ${urlParams.code}`);
// }

// /* generating access tokens */
// async function getAccessTokenFromCode(code) {
//   const { data } = await axios({
//     url: `https://oauth2.googleapis.com/token`,
//     method: "post",
//     data: {
//       client_id: process.env.CLIENT_ID,
//       client_secret: process.env.CLIENT_SECRET,
//       redirect_uri: "https://www.example.com/authenticate/google",
//       grant_type: "authorization_code",
//       code,
//     },
//   });
//   console.log(data); // { access_token, expires_in, token_type, refresh_token }
//   return data.access_token;
// }

// /*get user data */
// async function getGoogleUserInfo(access_token) {
//   const { data } = await axios({
//     url: "https://www.googleapis.com/oauth2/v2/userinfo",
//     method: "get",
//     headers: {
//       Authorization: `Bearer ${access_token}`,
//     },
//   });
//   console.log(data); // { id, email, given_name, family_name }
//   return data;
// }

// /* Screen View */
// const login = () => {
//   return <a href={googleLoginUrl}>Login with Google</a>;
// };

// export default login;
