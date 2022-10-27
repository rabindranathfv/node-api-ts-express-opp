import { users } from './../mock/users';

class UserService {
  constructor() {}

  public getAllUsers(): any[] {
    return users;
  }
}

export default UserService;
