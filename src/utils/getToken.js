export const getToken = () => {
  const user = JSON.parse(localStorage.getItem("authUser"));
  if (user) {
    console.log(user["accessToken"]);
    return user["accessToken"];
  }
};
