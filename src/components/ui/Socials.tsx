import Link from 'next/link';
import { socialsItems } from '../../config';
import { SocialItem, SocialsContainer } from './styled/DesktopMenu.styled';

const Socials = () => {
  return (
    <SocialsContainer>
      {socialsItems.map((socialItem) => {
        const { Icon } = socialItem;
        return (
          <Link
            key={socialItem.name}
            href={socialItem.href}
            aria-label={socialItem.name}
          >
            <SocialItem>
              <Icon />
              {socialItem.name}
            </SocialItem>
          </Link>
        );
      })}
    </SocialsContainer>
  );
};

export default Socials;
