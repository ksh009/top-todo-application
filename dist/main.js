(()=>{"use strict";(()=>{const t={todoData:{modalComponent:null,dialogComponent:null,defaultComponent:"ProjectsGrid",selectedProject:"Default Project",projects:[{name:"Default Project",priority:"low",priorityId:"lowPriorityTodo",todoCount:9,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue. Donec eget est ut velit vestibulum aliquet. Suspendisse non sagittis mauris. Sed imperdiet mi sit amet erat auctor aliquet.",completed:!1},{name:"Work Project",priority:"medium",priorityId:"medPriorityTodo",todoCount:18,description:"Vivamus varius vestibulum augue. Donec eget est ut velit vestibulum aliquet. Suspendisse non sagittis mauris. Sed imperdiet mi sit amet erat auctor aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit.",completed:!1},{name:"Personal Project",priority:"high",priorityId:"highPriorityTodo",todoCount:27,description:"Donec eget est ut velit vestibulum aliquet., consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue. Suspendisse non sagittis mauris. Vivamus varius vestibulum augue.",completed:!1},{name:"Garden Project",priority:"low",priorityId:"lowPriorityTodo",todoCount:12,description:"Suspendisse non sagittis mauris, est ut velit vestibulum aliquet. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue. Donec eget est ut velit vestibulum aliquet. Suspendisse non sagittis mauris. Sed imperdiet mi sit amet erat auctor aliquet.",completed:!1},{name:"Party Project",priority:"medium",priorityId:"medPriorityTodo",todoCount:21,description:"Sed imperdiet mi sit amet erat. Donec volutpat orci et congue blandit. Suspendisse non sagittis mauris. Sed imperdiet mi sit amet erat auctor aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit.",completed:!1},{name:"Fundraiser",priority:"high",priorityId:"highPriorityTodo",todoCount:30,description:"Maecenas volutpat orci et congue blandit velit vestibulum aliquet., consectetur adipiscing elit. Maecenas varius vestibulum augue blandit. Vivamus varius vestibulum augue. Suspendisse non sagittis mauris. Vivamus varius vestibulum augue.",completed:!1}]}};function e(t){const e=document.createElement("button");return e.textContent=t,e}function o(t){console.log("appState in createProjectsLayout",t);const e=function(){const t=document.createElement("div");t.classList.add("buttons-container");const e=document.createElement("button");e.setAttribute("id","add-project-btn"),e.textContent="+ Add Project",t.appendChild(e);const o=document.createElement("div");o.classList.add("filter-menu","font-awesome");const n=document.createElement("select");n.classList.add("far");const i=document.createElement("option");i.classList.add("far"),i.textContent="All",n.appendChild(i);const a=document.createElement("option");a.classList.add("far","high"),a.textContent="o High",n.appendChild(a);const d=document.createElement("option");d.classList.add("far","medium"),d.textContent="o Medium",n.appendChild(d);const s=document.createElement("option");return s.classList.add("far","low"),s.textContent="o Low",n.appendChild(s),o.appendChild(n),t.appendChild(o),t}(),o=function(t){const e=document.createElement("div");return e.classList.add("grid"),t.todoData.projects.forEach(((t,o)=>{const n=function(t,e){const o=document.createElement("div");o.classList.add("project-card");const n=document.createElement("div");n.classList.add("project-header");const i=document.createElement("h3");i.classList.add("project-name"),i.textContent=t.name;const a=document.createElement("span");a.classList.add("project-stats");const d=document.createElement("i");d.id=t.priorityId,d.classList.add("far","fa-circle"),a.appendChild(d);const s=document.createElement("h5");s.classList.add("project-todo-count"),s.textContent=`Todos: ${t.todoCount}`,a.appendChild(s),n.appendChild(i),n.appendChild(a);const c=document.createElement("hr");c.classList.add("project-hr");const r=document.createElement("div");r.classList.add("project-body");const l=document.createElement("p");l.classList.add("project-description"),l.textContent=t.description,r.appendChild(l);const u=document.createElement("div");u.classList.add("project-footer");const m=document.createElement("button");m.classList.add("add-todo"),m.textContent="Add Todo";const p=document.createElement("button");return p.classList.add("delete-project"),p.textContent="Delete Project",u.appendChild(m),u.appendChild(p),o.appendChild(n),o.appendChild(c),o.appendChild(r),o.appendChild(u),m.addEventListener("click",(()=>{console.log(`ADD TODO BUTTON CLICKED at index ${e}`)})),o}(t,o);e.append(n)})),e}(t),n=document.createElement("div");return n.append(e),n.append(o),n}const n=document.getElementById("content");1===n.children.length&&(console.log("I only run once on reload!!!"),function(){localStorage.getItem("state")||(console.log("Default state set"),localStorage.setItem("state",JSON.stringify(t)));const i=JSON.parse(localStorage.getItem("state"));console.log("globalState from inside index.js",i);const a=function(t){console.log("globalState from nav.js",t);const o=document.createElement("nav");o.classList.add("nav");const n=function(){const t=document.createElement("div");t.classList.add("logo");const e=document.createElement("a");return e.setAttribute("href","#"),e.textContent="TASKIFY",t.appendChild(e),t}(),i=function(){const t=document.createElement("div");t.classList.add("auth");const o=e("Sign up"),n=e("Sign in");return t.appendChild(o),t.appendChild(n),t}();return o.appendChild(n),o.appendChild(i),o}(i),d=o(i),s=document.createElement("header"),c=document.createElement("main");s.classList.add("header-container"),c.classList.add("main-container"),s.appendChild(a),c.appendChild(d),n.appendChild(s),n.appendChild(c)}())})()})();