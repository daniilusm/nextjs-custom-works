import { FamilyMember } from 'src/models/family/types';
import { User } from 'src/models/user/types';
import { AvatarUrlsType } from 'src/types';

type Props = {
  user:
    | FamilyMember
    | {
        first_name: string;
        last_name: string;
        avatar_url?: string;
        avatar_urls?: AvatarUrlsType;
        is_pending?: boolean;
      }
    | User
    | null;
  width?: string | number;
  height?: string | number;
};

const getSizes = (avatarUrls?: AvatarUrlsType | null) => {
  const sizes = avatarUrls && Object.keys(avatarUrls);
  if (sizes) {
    return sizes
      .map(size => {
        return size.split('_')[size.split('_').length - 1];
      })
      .sort((a, b) => +a - +b);
  }
  return null;
};

const getAvatarImage = ({ user, width }: Props) => {
  const sizes = getSizes(user && user.avatar_urls);
  const isRetina = window.devicePixelRatio > 1;
  const currentSize =
    sizes &&
    width &&
    sizes.find(size => (isRetina ? +size >= +width * 2 : +size >= width));
  if (
    currentSize &&
    user?.avatar_urls &&
    user.avatar_urls[`v_${currentSize}_${currentSize}`]
  ) {
    return user.avatar_urls[`v_${currentSize}_${currentSize}`];
  }
  return user?.avatar_url;
};

export default getAvatarImage;
