import React, { MouseEventHandler } from 'react';
import LinkIcon from '@material-ui/icons/Link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { mergeIconStyles } from '../App';

interface ProjectsState {
  selected: string;
}

export default class Projects extends React.Component<any, ProjectsState> {
  projects = [
    {
      name: 'Geoguessr',
      desc: 'A remake of a game where you guess the location based on a Google StreetView',
      repo: 'https://github.com/Orion31Dev/Geoguessr',
      link: 'https://geoguessr.herokuapp.com',
    },
    {
      name: 'BombParty',
      desc: 'An explosive word game',
      repo: 'https://github.com/Orion31Dev/BombParty2',
      link: 'https://bombparty2.herokuapp.com/',
    },
    {
      name: 'Super Mario Maker',
      desc: 'A platformer game where you build, play, and share levels',
      repo: 'https://github.com/Orion31Dev/Super-Mario-Maker',
      link: 'https://smmweb.herokuapp.com/',
    },
    {
      name: 'Typeracer++',
      desc: 'A game where you can challenge a friend to a typing race',
      repo: 'https://github.com/Orion31Dev/typeracer-plus-plus',
      link: 'https://typeracer-plus-plus.herokuapp.com/',
    },
  ];
  constructor(props: any) {
    super(props);

    this.state = {
      selected: '',
    };
  }

  render() {
    return (
      <div className="projects section">
        <div className="section-heading">Projects</div>
        {this.renderProjects()}
      </div>
    );
  }

  renderProjects() {
    let index = 0;
    return this.projects.map((p) => {
      return (
        <Project
          name={p.name}
          desc={p.desc}
          repo={p.repo}
          link={p.link}
          selected={p.name === this.state.selected}
          key={index++}
          onClick={() => {
            this.select.bind(this)(p.name);
          }}
        />
      );
    });
  }

  select(name: string) {
    this.setState({ selected: name });
  }
}

function Project(props: { name: string; desc: string; repo: string; link: string; selected: boolean; onClick: MouseEventHandler }) {
  return (
    <div className={'project' + (props.selected ? ' active' : '')} onClick={props.onClick}>
      <div className={'project-name' + (props.selected ? ' active' : '')}>
        <span>{props.name}</span>
      </div>
      {props.selected && <div className="project-info">{props.desc}</div>}
      {props.selected && (
        <a href={props.link} className="link highlight">
          <div>
            <LinkIcon fontSize={'large'} style={mergeIconStyles({ position: 'absolute', left: '2vmin' })} />
            Visit
          </div>
        </a>
      )}
      {props.selected && (
        <a href={props.repo} className="link">
          <div>
            <FontAwesomeIcon icon={faGithub} style={mergeIconStyles({ position: 'absolute', left: '2vmin' })} />
            Repository
          </div>
        </a>
      )}
    </div>
  );
}
