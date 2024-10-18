import mongodbUserManager from '@mongodb/managers/user';

function userManager() {
  return { ...mongodbUserManager() };
}

export default userManager;
