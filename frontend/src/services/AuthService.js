import Users from '../data/users.json';

function login(email, password) {
  let found = false;
  Users.map((user) => {
    if (user.email === email) {
      if (user.password === password) {
        found = true;
      }
    }
  });
  return found;
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
