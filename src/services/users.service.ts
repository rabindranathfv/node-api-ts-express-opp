import { users } from './../mock/users';

class UserService {
  constructor() {}

  public getAllUsers(): any[] {
    console.log('llamando desde el UserServices*********');
    return users;
  }
}

export default UserService;
