import path from 'path';
import { MenuItemType, SocialsEnum } from './components/ui/types';
import MediumIcon from './assets/socials/medium';
import TwitterIcon from './assets/socials/twitter';

export const SOCIALS_LINKS = {
  [SocialsEnum.MEDIUM]: 'https://medium.com/nomic-foundation-blog',
  [SocialsEnum.TWITTER]: 'https://twitter.com/NomicFoundation',
};

export const BANNER_LINK =
  'https://www.notion.so/Nomic-Foundation-jobs-991b37c547554f75b89a95f437fd5056';

export const PRIVACY_POLICY_PATH = '/privacy-policy';

export const bannerContent = {
  text: 'Announcing the Nomic Foundation',
  href: BANNER_LINK,
};

export const DOCS_PATH = path.join(process.cwd(), 'src/content/');
export const TEMP_PATH = path.join(process.cwd(), 'temp/');
// TODO: change this to "https://github.com/NomicFoundation/hardhat/edit/master/docs/src/content/" before publishing to production
export const REPO_URL =
  'https://github.com/NomicFoundation/hardhat/edit/master/docs/';

// Regular expression to find tool in query string.
export const toolRegExp = /tool=[A-Z_]+/;

export const menuItemsList: MenuItemType[] = [
  {
    label: 'What we do',
    href: '/what-we-do',
  },
  {
    label: 'Who we are',
    href: '/who-we-are',
  },
  {
    label: 'Hardhat',
    href: 'https://hardhat.org/',
  },
  {
    label: 'Building Blocks',
    href: '/',
  },
  {
    label: 'Jobs',
    href: '/',
  },
];

export enum Tools {
  RUNNER = 'RUNNER',
  IGNITION = 'IGNITION',
  NETWORK = 'NETWORK',
  SOLIDITY = 'SOLIDITY',
}

export enum DirInfoConfigKeys {
  SECTION_TYPE = 'section-type',
  SECTION_TITLE = 'section-title',
  ORDER = 'order',
}

export enum LayoutsConfigKeys {
  TITLE = 'title',
  FOLDERS = 'folders',
}

export const GDPR = {
  title: 'We value your privacy',
  text: 'We use cookies to enhance your browsing experience, serve personalized adds or content, and analyze our traffic. By clicking “Accept All”, you consent to our use of cookies.',
  readMoreHref: '/',
};

export const socialsItems = [
  {
    name: SocialsEnum.MEDIUM,
    href: SOCIALS_LINKS[SocialsEnum.MEDIUM],
    Icon: MediumIcon,
  },
  {
    name: SocialsEnum.TWITTER,
    href: SOCIALS_LINKS[SocialsEnum.TWITTER],
    Icon: TwitterIcon,
  },
];
