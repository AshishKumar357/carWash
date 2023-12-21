import { GoogleLogout } from "react-google-login";

function logout() {
  const onSuccess = (res) => {
    console.log("Logout Successfull!");
  };

  return (
    <View id="signoutButton">
      <GoogleLogout
        clientId={process.env.CLIENT_ID}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </View>
  );
}
export default logout;
