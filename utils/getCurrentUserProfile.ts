import { User } from 'src/models/user/types';

const getCurrentUserProfile = (user?: User | null) => {
  if (user) {
    return user.current_role === 'customer'
      ? user.customer_social_account
      : user?.agent_social_account;
  }
  return null;
};

export default getCurrentUserProfile;
