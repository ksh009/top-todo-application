(()=>{"use strict";(()=>{const e={todoData:{modalComponent:null,dialogComponent:null,defaultComponent:"ProjectsGrid",selectedProject:"Default",projects:[{name:"Default",priority:"high",todos:[{date:"2023-05-15",description:"Finish coding challenge",completed:!1},{date:"2023-05-16",description:"Buy groceries",completed:!1}]},{name:"Project 2",priority:"medium",todos:[{date:"2023-05-15",description:"Book flight tickets",completed:!0},{date:"2023-05-16",description:"Call dentist",completed:!1}]},{name:"Project 3",priority:"low",todos:[{date:"2023-07-15",description:"Watch a movie",completed:!1},{date:"2023-03-16",description:"Call dentist",completed:!1}]}]}};function t(e){const t=document.createElement("button");return t.textContent=e,t}const n=function(){const e=document.createElement("div");e.classList.add("project-card");const t=document.createElement("div");t.classList.add("project-header");const n=document.createElement("h3");n.classList.add("project-name"),n.textContent="Default Project";const o=document.createElement("span");o.classList.add("project-stats");const d=document.createElement("i");d.id="lowPriorityTodo",d.classList.add("far","fa-circle"),o.appendChild(d);const c=document.createElement("h5");c.classList.add("project-todo-count"),c.textContent="Todos: 9",o.appendChild(c),t.appendChild(n),t.appendChild(o);const a=document.createElement("hr");a.classList.add("project-hr");const s=document.createElement("div");s.classList.add("project-body");const i=document.createElement("p");i.classList.add("project-description"),i.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue. Donec eget est ut velit vestibulum aliquet. Suspendisse non sagittis mauris. Sed imperdiet mi sit amet erat auctor aliquet.",s.appendChild(i);const l=document.createElement("div");l.classList.add("project-footer");const r=document.createElement("button");r.classList.add("add-todo"),r.textContent="Add Todo";const p=document.createElement("button");return p.classList.add("delete-project"),p.textContent="Delete Project",l.appendChild(r),l.appendChild(p),e.appendChild(t),e.appendChild(a),e.appendChild(s),e.appendChild(l),e}(),o=document.getElementById("content");1===o.children.length&&(console.log("I only run once on reload!!!"),function(){localStorage.getItem("state")||(console.log("Default state set"),localStorage.setItem("state",JSON.stringify(e)));const d=JSON.parse(localStorage.getItem("state"));console.log("globalState from inside index.js",d);const c=function(e){console.log("globalState from nav.js",e);const n=document.createElement("nav");n.classList.add("nav");const o=function(){const e=document.createElement("div");e.classList.add("logo");const t=document.createElement("a");return t.setAttribute("href","#"),t.textContent="TASKIFY",e.appendChild(t),e}(),d=function(){const e=document.createElement("div");e.classList.add("auth");const n=t("Sign up"),o=t("Sign in");return e.appendChild(n),e.appendChild(o),e}();return n.appendChild(o),n.appendChild(d),n}(d),a=function(){const e=document.createElement("div");return e.append(n),e}(),s=document.createElement("header"),i=document.createElement("main");s.classList.add("header-container"),i.classList.add("main-container"),s.appendChild(c),i.appendChild(a),o.appendChild(s),o.appendChild(i)}())})()})();