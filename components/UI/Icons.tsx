import React from 'react';
import { SiHackerrank, SiLeetcode, SiYoutube } from 'react-icons/si';

export const LeetCodeIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <SiLeetcode className={className} aria-hidden="true" focusable={false} />
);

export const HackerRankIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <SiHackerrank className={className} aria-hidden="true" focusable={false} />
);

export const YouTubeIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <SiYoutube className={className} aria-hidden="true" focusable={false} />
);
