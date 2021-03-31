import React from 'react';

import { mergeIconStyles } from '../App';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { SvgIconComponent } from '@material-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Link(props: { href: string; text: string; iconType: IconDefinition | SvgIconComponent; highlight?: boolean }) {
  return (
    <a href={props.href} className={'link' + (props.highlight ? ' highlight' : '')}>
      <div>
        {isFontAwesomeIcon(props.iconType) ? (
          <FontAwesomeIcon icon={props.iconType} style={mergeIconStyles({ position: 'absolute', left: '2vmin' })} />
        ) : (
          <props.iconType style={mergeIconStyles({ position: 'absolute', left: '2vmin' })} />
        )}
        <span>{props.text}</span>
      </div>
    </a>
  );
}

function isFontAwesomeIcon(iconType: IconDefinition | SvgIconComponent): iconType is IconDefinition {
  return (iconType as IconDefinition).icon !== undefined;
}
