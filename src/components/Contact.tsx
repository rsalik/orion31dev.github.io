import React from 'react';
import EmailIcon from '@material-ui/icons/Email';

export default function Contact() {
  return (
    <div className="contact section">
      <div className="section-heading">Contact Me</div>
      <Email email={'rssalik14@gmail.com'} preferred />
      <Email email={'orion31dev@gmail.com'} preferred={false} />
    </div>
  );
}

function Email(props: { email: string, preferred: boolean }) {
  return (
    <a href={`mailto:${props.email}`} className={'link email' + (props.preferred ? ' preferred' : '')}>
      <div>
        {props.preferred && <div className="contact-email-preferred-label">Preferred</div>}
        <EmailIcon style={{ position: 'absolute', left: '2vmin' }} />
        <span>{props.email}</span>
      </div>
    </a>
  );
}
