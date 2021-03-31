import React from 'react';
import Link from './Link';

import EmailIcon from '@material-ui/icons/Email';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  return (
    <div className="contact section">
      <div className="section-heading" style={{ marginBottom: '4vmin' }}>
        Contact Me
      </div>
      <Email email={'rssalik14@gmail.com'} />
      <Github />
    </div>
  );
}

function Email(props: { email: string }) {
  return <Link iconType={EmailIcon} text={props.email} href={`mailto:${props.email}`} />;
}

function Github() {
  return <Link iconType={faGithub} text={'Orion31Dev'} href={'https://github.com/Orion31Dev'} />;
}
