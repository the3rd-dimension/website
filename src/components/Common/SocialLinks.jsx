import React from 'react';
import { socialLinks } from '@/data/contact';

function SocialLinks({ listClassName, itemClassName, linkClassName, labelClassName }) {
  return (
    <ul className={listClassName}>
      {socialLinks.map(({ name, href }) => (
        <li key={name} className={itemClassName}>
          <a href={href} target="_blank" rel="noopener noreferrer" className={linkClassName}>
            {labelClassName ? <span className={labelClassName}>{name}</span> : name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
