import Users from '../data/users.json';

function login(email, password) {
  Users.map((user) => {
    if (user.email === email) {
      return user.password === password;
    }
  });
  return false;
}

function register(email, password) {
  Users.map((user) => {
    if (user.email === email) {
      return false;
    }
  });

  Users.push({
    email: email,
    password: password,
  });

  return true;
}

export default {
  login,
  register,
};
