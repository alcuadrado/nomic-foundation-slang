import React from 'react';

export interface MenuItemType {
  label: string;
  href: string;
  subItems?: MenuItemType[];
  prefix?: string;
  icon?: React.FC<any>;
  iconDark?: React.FC<any>;
}

export enum SocialsEnum {
  TWITTER = 'TWITTER',
  MEDIUM = 'MEDIUM',
}

export interface SocialsItem {
  name: SocialsEnum;
  href: string;
  Icon: React.FC;
}

export interface MenuProps {
  menuItems: MenuItemType[];
  isOpen?: boolean;
  socialsItems: SocialsItem[];
  isDocumentation?: boolean;
}

export interface CTAType {
  label: string;
  href: string;
  color?: string;
}

interface DefaultBannerContent {
  text: string;
  shortText: string;
  href: string;
}
interface DefaultBannerContent {
  text: string;
  href: string;
}

export interface BannerProps {
  content: DefaultBannerContent;
}

export interface DefaultBannerProps {
  content: DefaultBannerContent;
}

export enum NavigationPagesPaths {
  HOME = '/',
  PLUGINS = '/plugins',
  DOCUMENTATION = '/docs',
  TUTORIAL = '/tutorial',
}
