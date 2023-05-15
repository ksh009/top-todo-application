(()=>{"use strict";var t={d:(e,o)=>{for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};(()=>{t.d({},{K:()=>s});const e={todoData:{modalActive:!1,modalComponent:"",dialogComponent:null,defaultComponent:"ProjectsGrid",selectedProject:"Default Project",projects:[{name:"Default Project",priority:"low",priorityId:"lowPriorityTodo",todoCount:9,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue. Donec eget est ut velit vestibulum aliquet. Suspendisse non sagittis mauris. Sed imperdiet mi sit amet erat auctor aliquet.",completed:!1},{name:"Work Project",priority:"medium",priorityId:"medPriorityTodo",todoCount:18,description:"Vivamus varius vestibulum augue. Donec eget est ut velit vestibulum aliquet. Suspendisse non sagittis mauris. Sed imperdiet mi sit amet erat auctor aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit.",completed:!1},{name:"Personal Project",priority:"high",priorityId:"highPriorityTodo",todoCount:27,description:"Donec eget est ut velit vestibulum aliquet., consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue. Suspendisse non sagittis mauris. Vivamus varius vestibulum augue.",completed:!1},{name:"Garden Project",priority:"low",priorityId:"lowPriorityTodo",todoCount:12,description:"Suspendisse non sagittis mauris, est ut velit vestibulum aliquet. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue. Donec eget est ut velit vestibulum aliquet. Suspendisse non sagittis mauris. Sed imperdiet mi sit amet erat auctor aliquet.",completed:!1},{name:"Party Project",priority:"medium",priorityId:"medPriorityTodo",todoCount:21,description:"Sed imperdiet mi sit amet erat. Donec volutpat orci et congue blandit. Suspendisse non sagittis mauris. Sed imperdiet mi sit amet erat auctor aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit.",completed:!1},{name:"Fundraiser",priority:"high",priorityId:"highPriorityTodo",todoCount:30,description:"Maecenas volutpat orci et congue blandit velit vestibulum aliquet., consectetur adipiscing elit. Maecenas varius vestibulum augue blandit. Vivamus varius vestibulum augue. Suspendisse non sagittis mauris. Vivamus varius vestibulum augue.",completed:!1}]}};function o(t){const e=function(t){const e=document.createElement("div");e.classList.add("buttons-container");const o=document.createElement("button");o.setAttribute("id","add-project-btn"),o.textContent="+ Add Project",e.appendChild(o);const n=document.createElement("div");n.classList.add("filter-menu","font-awesome");const i=document.createElement("select");i.classList.add("far");const a=document.createElement("option");a.classList.add("far"),a.textContent="All",i.appendChild(a);const d=document.createElement("option");d.classList.add("far","high"),d.textContent="o High",i.appendChild(d);const r=document.createElement("option");r.classList.add("far","medium"),r.textContent="o Medium",i.appendChild(r);const c=document.createElement("option");return c.classList.add("far","low"),c.textContent="o Low",i.appendChild(c),n.appendChild(i),e.appendChild(n),o.addEventListener("click",(()=>{t.todoData.modalActive=!0,t.todoData.modalComponent="AddNewProject",console.log("appState logged from addProjectBtn",t),localStorage.setItem("state",JSON.stringify(t)),s("I was rerendered because of a state update triggered by the projectsGrid elm!!!")})),e}(t),o=function(t){const e=document.createElement("div");return e.classList.add("grid"),t.todoData.projects.forEach(((t,o)=>{const n=function(t,e){const o=document.createElement("div");o.classList.add("project-card");const n=document.createElement("div");n.classList.add("project-header");const i=document.createElement("h3");i.classList.add("project-name"),i.textContent=t.name;const a=document.createElement("span");a.classList.add("project-stats");const d=document.createElement("i");d.id=t.priorityId,d.classList.add("far","fa-circle"),a.appendChild(d);const s=document.createElement("h5");s.classList.add("project-todo-count"),s.textContent=`Todos: ${t.todoCount}`,a.appendChild(s),n.appendChild(i),n.appendChild(a);const r=document.createElement("hr");r.classList.add("project-hr");const c=document.createElement("div");c.classList.add("project-body");const l=document.createElement("p");l.classList.add("project-description"),l.textContent=t.description,c.appendChild(l);const u=document.createElement("div");u.classList.add("project-footer");const p=document.createElement("button");p.classList.add("add-todo"),p.textContent="Add Todo";const m=document.createElement("button");return m.classList.add("delete-project"),m.textContent="Delete Project",u.appendChild(p),u.appendChild(m),o.appendChild(n),o.appendChild(r),o.appendChild(c),o.appendChild(u),p.addEventListener("click",(()=>{console.log(`ADD TODO BUTTON CLICKED at index ${e}`)})),o}(t,o);e.append(n)})),e}(t),n=document.createElement("div");return n.append(e),n.append(o),n}function n(t){const e=document.createElement("button");return e.textContent=t,e}const i=document.getElementById("content"),a=document.createElement("header"),d=document.createElement("main");function s(t){localStorage.getItem("state")||localStorage.setItem("state",JSON.stringify(e));const r=JSON.parse(localStorage.getItem("state")),c=function(t){const e=document.createElement("nav");e.classList.add("nav");const o=function(){const t=document.createElement("div");t.classList.add("logo");const e=document.createElement("a");return e.setAttribute("href","#"),e.textContent="TASKIFY",t.appendChild(e),t}(),i=function(){const t=document.createElement("div");t.classList.add("auth");const e=n("Sign up"),o=n("Sign in");return t.appendChild(e),t.appendChild(o),t}();return e.appendChild(o),e.appendChild(i),e}(),l=o(r),u=function(t){console.log("globalState from addProjectModal",t);const e=document.createElement("div");e.classList.add("form-container","modal"),e.id="addNewProjectModal",t.todoData.modalActive&&"AddNewProject"===t.todoData.modalComponent&&(e.style.display="flex");const o=document.createElement("form");o.action="#",o.method="post";const n=document.createElement("h1");n.textContent="Add New Project",o.appendChild(n);const i=document.createElement("label");i.setAttribute("for","project_name"),i.textContent="Project Name:",o.appendChild(i);const a=document.createElement("input");a.setAttribute("type","text"),a.setAttribute("name","project_name"),a.setAttribute("id","project_name"),o.appendChild(a);const d=document.createElement("label");d.setAttribute("for","project_description"),d.textContent="Project Description:",o.appendChild(d);const r=document.createElement("textarea");r.setAttribute("name","project_description"),r.setAttribute("id","project_description"),o.appendChild(r);const c=document.createElement("label");c.setAttribute("for","priority"),c.textContent="Priority:",o.appendChild(c);const l=document.createElement("div");l.classList.add("priority-levels-container");const u=document.createElement("input");u.setAttribute("type","radio"),u.setAttribute("name","priority"),u.setAttribute("value","high"),u.setAttribute("id","priority_high"),l.appendChild(u);const p=document.createElement("label");p.classList.add("priority-high"),p.setAttribute("for","priority_high"),p.textContent="High",l.appendChild(p);const m=document.createElement("input");m.setAttribute("type","radio"),m.setAttribute("name","priority"),m.setAttribute("value","medium"),m.setAttribute("id","priority_medium"),l.appendChild(m);const C=document.createElement("label");C.classList.add("priority-medium"),C.setAttribute("for","priority_medium"),C.textContent="Medium",l.appendChild(C);const h=document.createElement("input");h.setAttribute("type","radio"),h.setAttribute("name","priority"),h.setAttribute("value","low"),h.setAttribute("id","priority_low"),l.appendChild(h);const b=document.createElement("label");b.classList.add("priority-low"),b.setAttribute("for","priority_low"),b.textContent="Low",l.appendChild(b),o.appendChild(l);const g=document.createElement("div");g.classList.add("form-footer");const v=document.createElement("button");v.classList.add("cancel-btn"),v.setAttribute("type","button"),v.textContent="CANCEL",g.appendChild(v);const E=document.createElement("button");return E.classList.add("action-btn"),E.setAttribute("type","submit"),E.textContent="CREATE PROJECT",g.appendChild(E),o.appendChild(g),e.appendChild(o),v.addEventListener("click",(()=>{t.todoData.modalActive=!1,t.todoData.modalComponent="",console.log("appState logged from addProjectBtn",t),localStorage.setItem("state",JSON.stringify(t)),s("I was rerendered because of a state update triggered by the addProjectModal elm!!!")})),e}(r);t?(console.log(t),a.innerHTML="",d.innerHTML=""):console.log("This is my default render when app first starts up!"),a.classList.add("header-container"),d.classList.add("main-container"),a.appendChild(c),d.appendChild(l),d.appendChild(u),i.appendChild(a),i.appendChild(d)}1===i.children.length&&s()})()})();