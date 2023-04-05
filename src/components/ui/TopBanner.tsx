import React from 'react';
import { BannerContainer, BannerDecorator } from './styled/TopBanner.styled';
import { BannerProps } from './types';

const TopBanner = ({ content }: BannerProps) => {
  return (
    <BannerContainer target='_blank' rel='noreferrer' href={content.href}>
      <BannerDecorator className='optional'>◱ ◰</BannerDecorator>
      <BannerDecorator>◲ ◳</BannerDecorator>
      <span className='long banner-text'>{content.text}</span>
      <BannerDecorator>◱ ◰</BannerDecorator>
      <BannerDecorator className='optional'>◳ ◲</BannerDecorator>
    </BannerContainer>
  );
};

export default TopBanner;
