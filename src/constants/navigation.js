export const navLinkConfig = [
  {
    linkName: "Home",
    hideFor: [],
    onClick: () => { },
    linkTo: "/"
  },
  {
    linkName: "My Prescriptions",
    hideFor: ["guest", "pharmacist"],
    onClick: () => { },
  },
  {
    linkName: "My Patients",
    hideFor: ["pharmacist", "patient", "guest"],
    onClick: () => { },
  },
  { linkName: "Search", hideFor: ["guest"], onClick: () => { } },
  { linkName: "Help", hideFor: [], onClick: () => { } },
  {
    linkName: "Login",
    hideFor: ["pharmacist", "doctor", "patient"],
    onClick: () => { },
  },
  {
    linkName: "Register",
    hideFor: ["pharmacist", "doctor", "patient"],
    onClick: () => { },
  },
  { linkName: "Profile", hideFor: ["guest"], onClick: () => { } },
  {
    linkName: "Dashboard",
    hideFor: ["guest"],
    onClick: () => { },
    linkTo: "/dashboard"
  },
  { linkName: "Logout", hideFor: ["guest"], onClick: () => { } },
]

const userRolesConfig = ["doctor", "pharmacist", "patient", "guest"]
