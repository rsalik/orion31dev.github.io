(this["webpackJsonpryansalik.com"]=this["webpackJsonpryansalik.com"]||[]).push([[0],{22:function(e,t,c){},29:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var s=c(0),r=c.n(s),n=c(4),a=c.n(n),i=(c(22),c(1));function o(){return Object(i.jsx)("div",{className:"header",children:"ryansalik.com"})}var l=c(9),d=c(10),j=c(16),p=c(15),m=c(11),h=c.n(m),u=c(13),b=c.n(u),O=function(e){Object(j.a)(c,e);var t=Object(p.a)(c);function c(e){var s;return Object(l.a)(this,c),(s=t.call(this,e)).projects=[{name:"Geoguessr",desc:"A remake of a game where you guess the location based on a Google StreetView",repo:"https://github.com/Orion31Dev/Geoguessr",link:"https://geoguessr.herokuapp.com"},{name:"BombParty",desc:"An explosive word game",repo:"https://github.com/Orion31Dev/BombParty2",link:"https://bombparty2.herokuapp.com/"},{name:"Super Mario Maker",desc:"A platformer game where you build, play, and share levels",repo:"https://github.com/Orion31Dev/Super-Mario-Maker",link:"https://smmweb.herokuapp.com/"},{name:"Typeracer++",desc:"A game where you can challenge a friend to a typing race",repo:"https://github.com/Orion31Dev/typeracer-plus-plus",link:"https://typeracer-plus-plus.herokuapp.com/"}],s.state={selected:""},s}return Object(d.a)(c,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"projects section",children:[Object(i.jsx)("div",{className:"section-heading",children:"Projects"}),this.renderProjects()]})}},{key:"renderProjects",value:function(){var e=this,t=0;return this.projects.map((function(c){return Object(i.jsx)(v,{name:c.name,desc:c.desc,repo:c.repo,link:c.link,selected:c.name===e.state.selected,onClick:function(){e.select.bind(e)(c.name)}},t++)}))}},{key:"select",value:function(e){this.setState({selected:e})}}]),c}(r.a.Component);function v(e){return Object(i.jsxs)("div",{className:"project"+(e.selected?" active":""),onClick:e.onClick,children:[Object(i.jsx)("div",{className:"project-name"+(e.selected?" active":""),children:Object(i.jsx)("span",{children:e.name})}),e.selected&&Object(i.jsx)("div",{className:"project-info",children:e.desc}),e.selected&&Object(i.jsx)("a",{href:e.repo,className:"link",children:Object(i.jsxs)("div",{children:[Object(i.jsx)(h.a,{style:{position:"absolute",left:"2vmin"}}),"Repository"]})}),e.selected&&Object(i.jsx)("a",{href:e.link,className:"link",children:Object(i.jsxs)("div",{children:[Object(i.jsx)(b.a,{style:{position:"absolute",left:"2vmin"}}),"Visit"]})})]})}var f=c(14),x=c.n(f);function k(){return Object(i.jsxs)("div",{className:"contact section",children:[Object(i.jsx)("div",{className:"section-heading",children:"Contact Me"}),Object(i.jsx)(y,{email:"rssalik14@gmail.com",preferred:!0}),Object(i.jsx)(y,{email:"orion31dev@gmail.com",preferred:!1})]})}function y(e){return Object(i.jsx)("a",{href:"mailto:".concat(e.email),className:"link email"+(e.preferred?" preferred":""),children:Object(i.jsxs)("div",{children:[e.preferred&&Object(i.jsx)("div",{className:"contact-email-preferred-label",children:"Preferred"}),Object(i.jsx)(x.a,{style:{position:"absolute",left:"2vmin"}}),Object(i.jsx)("span",{children:e.email})]})})}c(29);var g=function(){return Object(i.jsxs)("div",{className:"app",children:[Object(i.jsx)(o,{}),Object(i.jsx)(O,{}),Object(i.jsx)(k,{})]})};a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(g,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.5fb1e1db.chunk.js.map