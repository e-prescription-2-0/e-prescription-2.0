export const navLinkConfig = [
  {
    linkName: "Home",
    id: "1",
    hideFor: [],
    onClick: () => { },
    linkTo: "/"
  },
  {
    linkName: "My Prescriptions",
    id: "2",
    hideFor: ["guest", "pharmacist"],
    onClick: () => { },
  },
  {
    linkName: "My Patients",
    id: "3",
    hideFor: ["pharmacist", "patient", "guest"],
    onClick: () => { },
  },
  {
    linkName: "Search",
    id: "4",
    hideFor: ["guest"],
    onClick: () => { }
  },
  {
    linkName: "Help",
    id: "5",
    hideFor: [],
    onClick: () => { }
  },
  {
    linkName: "Login",
    id: "6",
    hideFor: ["pharmacist", "doctor", "patient"],
    onClick: () => { },
  },
  {
    linkName: "Register",
    id: "7",
    hideFor: ["pharmacist", "doctor", "patient"],
    onClick: () => { },
  },
  {
    linkName: "Profile",
    id: "8",
    hideFor: ["guest"],
    onClick: () => { }
  },
  {
    linkName: "Dashboard",
    id: "9",
    hideFor: ["guest"],
    onClick: () => { },
    linkTo: "/dashboard"
  },
  {
    linkName: "Logout",
    id: "10",
    hideFor: ["guest"],
    onClick: () => { }
  },
]

const userRolesConfig = ["doctor", "pharmacist", "patient", "guest"]
