import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "admin@email.com",
    password: bcrypt.hashSync("1", 10),
    isAdmin: true,
  },
  {
    name: "Ali",
    email: "ali@email.com",
    password: bcrypt.hashSync("1", 10),
  },
  {
    name: "Mohanad",
    email: "me@email.com",
    password: bcrypt.hashSync("1", 10),
  },
];

export default users;
