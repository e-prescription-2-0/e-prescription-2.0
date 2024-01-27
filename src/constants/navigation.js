export const navLinkConfig = [
  // {
  //   linkName: "Home",
  //   id: "1",
  //   hideFor: [],
  //   onClick: () => {},
  //   linkTo: "/",
  // },
  // {
  //   linkName: "My Prescriptions",
  //   id: "2",
  //   hideFor: ["guest", "pharmacist"],
  //   onClick: () => { },
  // },
  // {
  //   linkName: "My Patients",
  //   id: "3",
  //   hideFor: ["pharmacist", "patient", "guest"],
  //   onClick: () => { },
  // },
  // {
  //   linkName: "Search",
  //   id: "4",
  //   hideFor: ["guest"],
  //   onClick: () => { }
  // },
  {
    linkName: "Табло",
    id: "9",
    hideFor: ["guest"],
    onClick: () => {},
    linkTo: "/prescriptions",
  },

  {
    linkName: "Login",
    id: "6",
    hideFor: ["pharmacist", "doctor", "patient"],
    onClick: () => {},
    linkTo: "/login",
  },
  {
    linkName: "Register",
    id: "7",
    hideFor: ["pharmacist", "doctor", "patient"],
    onClick: () => {},
    linkTo: "/register",
  },

  {
    linkName: "Излез",
    id: "10",
    hideFor: ["guest"],
    onClick: () => {},
    linkTo: "/logout",
  },
];

const userRolesConfig = ["doctor", "pharmacist", "patient", "guest"];
