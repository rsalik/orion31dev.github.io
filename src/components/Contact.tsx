import React from 'react';
import EmailIcon from '@material-ui/icons/Email';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { mergeIconStyles } from '../App';

export default function Contact() {
  return (
    <div className="contact section">
      <div className="section-heading" style={{ marginBottom: '4vmin'}}>Contact Me</div>
      <Email email={'rssalik14@gmail.com'} preferred />
      <Email email={'orion31dev@gmail.com'} preferred={false} />
      <Github />
    </div>
  );
}

function Email(props: { email: string; preferred: boolean }) {
  return (
    <a href={`mailto:${props.email}`} className={'link email' + (props.preferred ? ' preferred' : '')}>
      <div>
        {props.preferred && <div className="contact-email-preferred-label">Preferred</div>}
        <EmailIcon style={mergeIconStyles({ position: 'absolute', left: '2vmin' })} />
        <span>{props.email}</span>
      </div>
    </a>
  );
}

function Github() {
  return (
    <a href="https://github.com/Orion31Dev" className={'link'}>
      <div>
        <FontAwesomeIcon icon={faGithub} style={mergeIconStyles({ position: 'absolute', left: '2vmin' })} />
        <span>Orion31Dev</span>
      </div>
    </a>
  );
}
