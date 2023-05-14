(()=>{"use strict";(()=>{const t={todoData:{modalComponent:null,dialogComponent:null,defaultComponent:"ProjectsGrid",selectedProject:"Default",projects:[{name:"Default",priority:"high",todos:[{date:"2023-05-15",description:"Finish coding challenge",completed:!1},{date:"2023-05-16",description:"Buy groceries",completed:!1}]},{name:"Project 2",priority:"medium",todos:[{date:"2023-05-15",description:"Book flight tickets",completed:!0},{date:"2023-05-16",description:"Call dentist",completed:!1}]},{name:"Project 3",priority:"low",todos:[{date:"2023-07-15",description:"Watch a movie",completed:!1},{date:"2023-03-16",description:"Call dentist",completed:!1}]}]}};function e(t){const e=document.createElement("button");return e.textContent=t,e}const o=[{name:"Default Project",priority:"low",priorityId:"lowPriorityTodo",todoCount:9,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue. Donec eget est ut velit vestibulum aliquet. Suspendisse non sagittis mauris. Sed imperdiet mi sit amet erat auctor aliquet."},{name:"Work Project",priority:"medium",priorityId:"medPriorityTodo",todoCount:18,description:"Vivamus varius vestibulum augue. Donec eget est ut velit vestibulum aliquet. Suspendisse non sagittis mauris. Sed imperdiet mi sit amet erat auctor aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit."},{name:"Personal Project",priority:"high",priorityId:"highPriorityTodo",todoCount:27,description:"Donec eget est ut velit vestibulum aliquet., consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue. Suspendisse non sagittis mauris. Vivamus varius vestibulum augue."},{name:"Garden Project",priority:"low",priorityId:"lowPriorityTodo",todoCount:12,description:"Suspendisse non sagittis mauris, est ut velit vestibulum aliquet. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue. Donec eget est ut velit vestibulum aliquet. Suspendisse non sagittis mauris. Sed imperdiet mi sit amet erat auctor aliquet."},{name:"Party Project",priority:"medium",priorityId:"medPriorityTodo",todoCount:21,description:"Sed imperdiet mi sit amet erat. Donec volutpat orci et congue blandit. Suspendisse non sagittis mauris. Sed imperdiet mi sit amet erat auctor aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit."},{name:"Fundraiser",priority:"high",priorityId:"highPriorityTodo",todoCount:30,description:"Maecenas volutpat orci et congue blandit velit vestibulum aliquet., consectetur adipiscing elit. Maecenas varius vestibulum augue blandit. Vivamus varius vestibulum augue. Suspendisse non sagittis mauris. Vivamus varius vestibulum augue."}];function i(){const t=function(){const t=document.createElement("div");t.classList.add("buttons-container");const e=document.createElement("button");e.setAttribute("id","add-project-btn"),e.textContent="+ Add Project",t.appendChild(e);const o=document.createElement("div");o.classList.add("filter-menu","font-awesome");const i=document.createElement("select");i.classList.add("far");const n=document.createElement("option");n.classList.add("far"),n.textContent="All",i.appendChild(n);const a=document.createElement("option");a.classList.add("far","high"),a.textContent="o High",i.appendChild(a);const d=document.createElement("option");d.classList.add("far","medium"),d.textContent="o Medium",i.appendChild(d);const s=document.createElement("option");return s.classList.add("far","low"),s.textContent="o Low",i.appendChild(s),o.appendChild(i),t.appendChild(o),t}(),e=function(t){const e=document.createElement("div");return e.classList.add("grid"),t.forEach((t=>{const o=function(t){console.log("project",t);const e=document.createElement("div");e.classList.add("project-card");const o=document.createElement("div");o.classList.add("project-header");const i=document.createElement("h3");i.classList.add("project-name"),i.textContent=t.name;const n=document.createElement("span");n.classList.add("project-stats");const a=document.createElement("i");a.id=t.priorityId,a.classList.add("far","fa-circle"),n.appendChild(a);const d=document.createElement("h5");d.classList.add("project-todo-count"),d.textContent=`Todos: ${t.todoCount}`,n.appendChild(d),o.appendChild(i),o.appendChild(n);const s=document.createElement("hr");s.classList.add("project-hr");const c=document.createElement("div");c.classList.add("project-body");const r=document.createElement("p");r.classList.add("project-description"),r.textContent=t.description,c.appendChild(r);const l=document.createElement("div");l.classList.add("project-footer");const u=document.createElement("button");u.classList.add("add-todo"),u.textContent="Add Todo";const m=document.createElement("button");return m.classList.add("delete-project"),m.textContent="Delete Project",l.appendChild(u),l.appendChild(m),e.appendChild(o),e.appendChild(s),e.appendChild(c),e.appendChild(l),e}(t);e.append(o)})),e}(o),i=document.createElement("div");return i.append(t),i.append(e),i}const n=document.getElementById("content");1===n.children.length&&(console.log("I only run once on reload!!!"),function(){localStorage.getItem("state")||(console.log("Default state set"),localStorage.setItem("state",JSON.stringify(t)));const o=JSON.parse(localStorage.getItem("state"));console.log("globalState from inside index.js",o);const a=function(t){console.log("globalState from nav.js",t);const o=document.createElement("nav");o.classList.add("nav");const i=function(){const t=document.createElement("div");t.classList.add("logo");const e=document.createElement("a");return e.setAttribute("href","#"),e.textContent="TASKIFY",t.appendChild(e),t}(),n=function(){const t=document.createElement("div");t.classList.add("auth");const o=e("Sign up"),i=e("Sign in");return t.appendChild(o),t.appendChild(i),t}();return o.appendChild(i),o.appendChild(n),o}(o),d=i(),s=document.createElement("header"),c=document.createElement("main");s.classList.add("header-container"),c.classList.add("main-container"),s.appendChild(a),c.appendChild(d),n.appendChild(s),n.appendChild(c)}())})()})();