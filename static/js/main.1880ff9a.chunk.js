(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/itcloud.1386c62d.png"},function(e,t,a){e.exports=a.p+"static/media/mediadevs.6b4846b8.png"},function(e,t,a){e.exports=a.p+"static/media/spaceverse.bce027a7.png"},function(e,t,a){e.exports=a.p+"static/media/formovie.2e2c278b.png"},function(e,t,a){e.exports=a.p+"static/media/githubIcon.22fdaa0b.svg"},function(e,t,a){e.exports=a(22)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(8),r=a.n(c),s=(a(20),a(1)),o=a(2),i=a(5),m=a(3),d=a(4),u=a(6),h=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"menu-btn",onClick:this.props.toggle},l.a.createElement("div",{className:"btn-line"}),l.a.createElement("div",{className:"btn-line"}),l.a.createElement("div",{className:"btn-line"}))}}]),t}(n.Component),p=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e="side-menu";return this.props.show&&(e="side-menu open"),l.a.createElement("div",{className:e},l.a.createElement("a",{href:"#projects",onClick:this.props.toggle},"Projects"),l.a.createElement("a",{href:"#about",onClick:this.props.toggle},"About"))}}]),t}(n.Component),E=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e="backdrop";return this.props.show&&(e="backdrop open"),l.a.createElement("div",{className:e,onClick:this.props.toggle})}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={menuOpen:!1,scroll:0},a.handleScroll=a.handleScroll.bind(Object(u.a)(Object(u.a)(a))),a.toggle=a.toggle.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handleScroll",value:function(){this.setState({scroll:window.scrollY})}},{key:"toggle",value:function(){this.setState(function(e){return{menuOpen:!e.menuOpen}})}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e="navbar";return this.state.scroll>650?e+=" fixed":e="navbar",l.a.createElement(l.a.Fragment,null,l.a.createElement(p,{show:this.state.menuOpen,toggle:this.toggle}),l.a.createElement("div",{className:e},l.a.createElement("h2",{className:this.state.scroll<650?"navbar__title hidden":"navbar__title"}," ","Adam Czakon"," "),l.a.createElement("ul",{className:"navbar__list"},l.a.createElement("li",null,l.a.createElement("a",{href:"#home",className:this.state.scroll<650?"button active":"button inactive"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{href:"#projects",className:this.state.scroll>690&&this.state.scroll<3500?"button active":"button inactive"},"Projects")),l.a.createElement("li",null,l.a.createElement("a",{href:"#about",className:this.state.scroll>=3500?"button active":"button inactive"},"About")))),l.a.createElement(h,{toggle:this.toggle}),l.a.createElement(E,{show:this.state.menuOpen,toggle:this.toggle}))}}]),t}(n.Component);function g(){return l.a.createElement("div",{className:"home",id:"home"},l.a.createElement("div",{className:"home__background"},l.a.createElement(b,null),l.a.createElement("div",{className:"home__header"},l.a.createElement("h1",{className:"item"},"Adam Czakon"),l.a.createElement("p",{className:"text-large item"},"Web Development Enthusiast"),l.a.createElement("a",{className:"button",href:"#projects"},"Check My Projects"))),l.a.createElement("div",{className:"home__introduction"},l.a.createElement("h1",{className:"introduction__heading"},"My Portfolio"),l.a.createElement("p",{className:"introduction__text"},"Below you can see front-end and fullstack projects I've been working on.",l.a.createElement("br",null)," I've listed technologies that I used to create each project.")))}var v=a(9),N=a.n(v),f=a(10),j=a.n(f),k=a(11),_=a.n(k),O=a(12),w=a.n(O);function y(){return l.a.createElement("div",{className:"about"},l.a.createElement("h1",null," About Me"),l.a.createElement("p",{className:"about__item"},"I'm developer with expertise in JavaScript, interested in all kinds of web technologies, constantly learning something new. ",l.a.createElement("br",null),"I enjoy working with UI to make sure the designs are functional, accesible and give the intended experience."))}function C(){return l.a.createElement("div",{id:"projects"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"project"},l.a.createElement("div",{className:"project-description"},l.a.createElement("h1",{className:"item"},"IT Cloud"),l.a.createElement("p",{className:"secondary item"},"Social website for developers."),l.a.createElement("h4",{className:"description-header"},"Technologies"),l.a.createElement("div",{className:"description-grid"},l.a.createElement("div",null,l.a.createElement("h4",{className:"technologies-header"},"Front"),l.a.createElement("ul",{className:"project-technologies"},l.a.createElement("li",null,"React"),l.a.createElement("li",null,"Redux"),l.a.createElement("li",null,"SCSS"))),l.a.createElement("div",null,l.a.createElement("h4",{className:"technologies-header"},"Back"),l.a.createElement("ul",{className:"project-technologies"},l.a.createElement("li",null,"Node.js"),l.a.createElement("li",null,"Express"),l.a.createElement("li",null,"MongoDB")))),l.a.createElement("div",{className:"description-grid"},l.a.createElement("a",{className:"btn btn-github",href:"https://github.com/adamczakon/IT-Cloud",target:"_blank",rel:"noopener noreferrer"},"Github"),l.a.createElement("a",{className:"btn btn-live",href:"https://fast-shore-92170.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},"Live"))),l.a.createElement("div",{className:"project-image"},l.a.createElement("img",{src:N.a,alt:"Loading..."}))),l.a.createElement("div",{className:"project last"},l.a.createElement("div",{className:"project-description"},l.a.createElement("h1",{className:"item"},"Media Devs"),l.a.createElement("p",{className:"secondary item"},"Landing page for business website."),l.a.createElement("h4",{className:"description-header"},"Technologies"),l.a.createElement("div",{className:"description-grid"},l.a.createElement("div",null,l.a.createElement("h4",{className:"technologies-header"},"Front"),l.a.createElement("ul",{className:"project-technologies"},l.a.createElement("li",null,"React"),l.a.createElement("li",{className:"text-center"},"React Styled Components")))),l.a.createElement("div",{className:"description-grid"},l.a.createElement("a",{className:"btn btn-github",href:"https://github.com/adamczakon/media-devs",target:"_blank",rel:"noopener noreferrer"},"Github"),l.a.createElement("a",{className:"btn btn-live",href:"https://adamczakon.github.io/media-devs/",target:"_blank",rel:"noopener noreferrer"},"Live"))),l.a.createElement("div",{className:"project-image"},l.a.createElement("img",{src:j.a,alt:"Loading..."}))),l.a.createElement("div",{className:"project"},l.a.createElement("div",{className:"project-description"},l.a.createElement("h1",{className:"item"},"Spaceverse"),l.a.createElement("p",{className:"secondary item"},"Application for managing space flights."),l.a.createElement("h4",{className:"description-header"},"Technologies"),l.a.createElement("div",{className:"description-grid"},l.a.createElement("div",null,l.a.createElement("h4",{className:"technologies-header"},"Front"),l.a.createElement("ul",{className:"project-technologies"},l.a.createElement("li",null,"React"),l.a.createElement("li",null,"Redux"),l.a.createElement("li",null,"SCSS"))),l.a.createElement("div",null,l.a.createElement("h4",{className:"technologies-header"},"Back"),l.a.createElement("ul",{className:"project-technologies"},l.a.createElement("li",null,"Node.js"),l.a.createElement("li",null,"Express"),l.a.createElement("li",null,"MongoDB")))),l.a.createElement("div",{className:"description-grid"},l.a.createElement("a",{className:"btn btn-github",href:"https://github.com/adamczakon/spaceverse.git",target:"_blank",rel:"noopener noreferrer"},"Github"),l.a.createElement("a",{className:"btn btn-live",href:"https://still-brushlands-54388.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},"Live"))),l.a.createElement("div",{className:"project-image"},l.a.createElement("img",{src:_.a,alt:"Loading..."}))),l.a.createElement("div",{className:"project last"},l.a.createElement("div",{className:"project-description"},l.a.createElement("h1",{className:"item"},"ForMovie"),l.a.createElement("p",{className:"secondary item"},"Website for browsing movies."),l.a.createElement("h4",{className:"description-header"},"Technologies"),l.a.createElement("div",{className:"description-grid"},l.a.createElement("div",null,l.a.createElement("h4",{className:"technologies-header"},"Front"),l.a.createElement("ul",{className:"project-technologies"},l.a.createElement("li",null,"React"),l.a.createElement("li",null,"Redux"),l.a.createElement("li",null,"SCSS")))),l.a.createElement("div",{className:"description-grid"},l.a.createElement("a",{className:"btn btn-github",href:"https://github.com/adamczakon/formovie",target:"_blank",rel:"noopener noreferrer"},"Github"),l.a.createElement("a",{className:"btn btn-live",href:"https://adamczakon.github.io/formovie/#/",target:"_blank",rel:"noopener noreferrer"},"Live"))),l.a.createElement("div",{className:"project-image"},l.a.createElement("img",{src:w.a,alt:"Loading..."})))),l.a.createElement("div",{id:"about"},l.a.createElement(y,null)))}var S=a(13),x=a.n(S);function z(){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"info__wrapper"},l.a.createElement("p",{className:"footer__info footer__margin"},"\xa9"," Adam Czakon 2019"),l.a.createElement("p",{className:"footer__info"},"adam.czakon63@gmail.com"),l.a.createElement("div",{className:"footer__github"},l.a.createElement("a",{href:"https://github.com/adamczakon"},l.a.createElement("img",{className:"footer__icon",alt:"github",src:x.a})," "),l.a.createElement("a",{href:"https://github.com/adamczakon",className:"footer_link footer_info"}," ","github.com/adamczakon"))))}a(21);var I=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(g,null),l.a.createElement(C,null),l.a.createElement(z,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[14,1,2]]]);
//# sourceMappingURL=main.1880ff9a.chunk.js.map