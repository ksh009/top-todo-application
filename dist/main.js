(()=>{"use strict";var t={d:(e,o)=>{for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};(()=>{t.d({},{K:()=>s});const e={todoData:{modalActive:!1,modalComponent:"AddNewProject",dialogComponent:null,layoutComponent:"ProjectsGridLayout",defaultComponent:"ProjectsGrid",selectedProject:"Default Project",projects:[{name:"Default Project",priority:"low",priorityId:"lowPriorityTodo",todoCount:9,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue. Donec eget est ut velit vestibulum aliquet. Suspendisse non sagittis mauris. Sed imperdiet mi sit amet erat auctor aliquet.",completed:!1},{name:"Work Project",priority:"medium",priorityId:"medPriorityTodo",todoCount:18,description:"Vivamus varius vestibulum augue. Donec eget est ut velit vestibulum aliquet. Suspendisse non sagittis mauris. Sed imperdiet mi sit amet erat auctor aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit.",completed:!1},{name:"Personal Project",priority:"high",priorityId:"highPriorityTodo",todoCount:27,description:"Donec eget est ut velit vestibulum aliquet., consectetur adipiscing elit. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue. Suspendisse non sagittis mauris. Vivamus varius vestibulum augue.",completed:!1},{name:"Garden Project",priority:"low",priorityId:"lowPriorityTodo",todoCount:12,description:"Suspendisse non sagittis mauris, est ut velit vestibulum aliquet. Maecenas volutpat orci et congue blandit. Vivamus varius vestibulum augue. Donec eget est ut velit vestibulum aliquet. Suspendisse non sagittis mauris. Sed imperdiet mi sit amet erat auctor aliquet.",completed:!1},{name:"Party Project",priority:"medium",priorityId:"medPriorityTodo",todoCount:21,description:"Sed imperdiet mi sit amet erat. Donec volutpat orci et congue blandit. Suspendisse non sagittis mauris. Sed imperdiet mi sit amet erat auctor aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat orci et congue blandit.",completed:!1},{name:"Fundraiser",priority:"high",priorityId:"highPriorityTodo",todoCount:30,description:"Maecenas volutpat orci et congue blandit velit vestibulum aliquet., consectetur adipiscing elit. Maecenas varius vestibulum augue blandit. Vivamus varius vestibulum augue. Suspendisse non sagittis mauris. Vivamus varius vestibulum augue.",completed:!1}]}};function o(t){const e=document.createElement("div");e.classList.add("project-grid-layout"),"ProjectsGridLayout"===t.todoData.layoutComponent?e.style.display="flex":e.style.display="none";const o=function(t){const e=document.createElement("div");e.classList.add("buttons-container");const o=document.createElement("button");return o.setAttribute("id","add-project-btn"),o.textContent="Add Project",e.appendChild(o),o.addEventListener("click",(()=>{t.todoData.modalActive=!0,console.log("appState logged from addProjectBtn",t),localStorage.setItem("state",JSON.stringify(t)),s("I was rerendered because of a state update triggered by the projectsGrid elm!!!")})),e}(t),n=function(t){const e=document.createElement("div");return e.classList.add("grid"),t.todoData.projects.forEach(((o,n)=>{const i=function(t,e,o){const n=document.createElement("div");n.classList.add("project-card");const i=document.createElement("div");i.classList.add("project-header");const a=document.createElement("h3");a.classList.add("project-name"),a.textContent=t.name;const d=document.createElement("span");d.classList.add("project-stats");const r=document.createElement("i");r.id=t.priorityId,r.classList.add("far","fa-circle"),d.appendChild(r);const c=document.createElement("h5");c.classList.add("project-todo-count"),c.textContent=t.todoCount,d.appendChild(c),i.appendChild(a),i.appendChild(d);const l=document.createElement("hr");l.classList.add("project-hr");const u=document.createElement("div");u.classList.add("project-body");const p=document.createElement("p");p.classList.add("project-description"),p.textContent=t.description,u.appendChild(p);const m=document.createElement("div");m.classList.add("project-footer");const h=document.createElement("button");h.classList.add("add-todo"),h.textContent="Todos";const b=document.createElement("button");return b.classList.add("delete-project"),b.textContent="Delete Project",m.appendChild(h),m.appendChild(b),n.appendChild(i),n.appendChild(l),n.appendChild(u),n.appendChild(m),[h,d].forEach((t=>{t.addEventListener("click",(()=>{console.log(`ADD TODO BUTTON CLICKED at index ${e}`),o.todoData.layoutComponent="TodosLayout",localStorage.setItem("state",JSON.stringify(o)),s("I was rerendered because of a state update triggered by the projectsGrid:addTodoBtn||projectStats elm!!!")}))})),b.addEventListener("click",(()=>{if(console.log(`DELETE BUTTON CLICKED at index ${e}`),"Default Project"===t.name)return alert("Default project cannot be deleted!!!"),void console.log("Default Project cannot be deleted!!");o.todoData.projects.splice(e,1),console.log("Project removed ad state updated",o),localStorage.setItem("state",JSON.stringify(o)),s("I was rerendered because of a state update triggered by the projectsGrid:deleteProjectBtn elm!!!")})),n}(o,n,t);e.append(i)})),e}(t);return e.append(o),e.append(n),e}function n(t){const e=document.createElement("button");return e.textContent=t,e}function i(t,e){const o=document.createElement("div");o.classList.add("header",`${t}`);const n=document.createElement("span");n.classList.add("header-span");const i=document.createElement("p");i.textContent=`${e}`;const a=document.createElement("hr");return a.classList.add("project-hr"),n.appendChild(i),n.appendChild(a),o.appendChild(n),o}function a(t,e,o){const n=document.createElement("div");n.classList.add("todo-item","date"),n.textContent=`${t}`;const i=document.createElement("div");i.classList.add("todo-item","description"),i.textContent=`${e}`;const a=document.createElement("div");a.classList.add("todo-item","priority"),a.id="priorityHigh",a.textContent=`${o}`;const d=document.createElement("div");d.classList.add("todo-item","completed");const r=document.createElement("i");r.classList.add("fas","fa-check"),d.appendChild(r);const c=document.createElement("div");c.classList.add("todo-item","update");const s=document.createElement("i");s.title="Update todo",s.classList.add("fa","fa-eye");const l=document.createElement("i");return l.title="Delete todo",l.classList.add("fa","fa-trash"),c.appendChild(s),c.appendChild(l),[n,i,a,d,c]}const d=document.getElementById("content"),r=document.createElement("header"),c=document.createElement("main");function s(t){localStorage.getItem("state")||localStorage.setItem("state",JSON.stringify(e));const l=JSON.parse(localStorage.getItem("state"));t?(console.log(t),r.innerHTML="",c.innerHTML=""):console.log("This is my default render when app first starts up!");const u=function(t){const e=document.createElement("nav");e.classList.add("nav");const o=function(){const t=document.createElement("div");t.classList.add("logo");const e=document.createElement("a");return e.setAttribute("href","#"),e.textContent="TASKIFY",t.appendChild(e),t}(),i=function(){const t=document.createElement("div");t.classList.add("auth");const e=n("Sign up"),o=n("Sign in");return t.appendChild(e),t.appendChild(o),t}();return e.appendChild(o),e.appendChild(i),e}(),p=o(l),m=function(t){console.log("globalState from addProjectModal",t);const e=document.createElement("div");e.classList.add("form-container","modal"),e.id="addNewProjectModal",t.todoData.modalActive&&(e.style.display="flex");const o=document.createElement("form");o.action="#",o.method="post";const n=document.createElement("h1");n.textContent="Add New Project",o.appendChild(n);const i=document.createElement("label");i.setAttribute("for","project_name"),i.textContent="Project Name:",o.appendChild(i);const a=document.createElement("input");a.setAttribute("type","text"),a.setAttribute("name","project_name"),a.setAttribute("id","project_name"),o.appendChild(a);const d=document.createElement("label");d.setAttribute("for","project_description"),d.textContent="Project Description:",o.appendChild(d);const r=document.createElement("textarea");r.setAttribute("name","project_description"),r.setAttribute("id","project_description"),o.appendChild(r);const c=document.createElement("label");c.setAttribute("for","priority"),c.textContent="Priority:",o.appendChild(c);const l=document.createElement("div");l.classList.add("priority-levels-container");const u=document.createElement("input");u.setAttribute("type","radio"),u.setAttribute("name","priority"),u.setAttribute("value","high"),u.setAttribute("id","priority_high"),l.appendChild(u);const p=document.createElement("label");p.classList.add("priority-high"),p.setAttribute("for","priority_high"),p.textContent="High",l.appendChild(p);const m=document.createElement("input");m.setAttribute("type","radio"),m.setAttribute("name","priority"),m.setAttribute("value","medium"),m.setAttribute("id","priority_medium"),l.appendChild(m);const h=document.createElement("label");h.classList.add("priority-medium"),h.setAttribute("for","priority_medium"),h.textContent="Medium",l.appendChild(h);const b=document.createElement("input");b.setAttribute("type","radio"),b.setAttribute("name","priority"),b.setAttribute("value","low"),b.setAttribute("id","priority_low"),l.appendChild(b);const C=document.createElement("label");C.classList.add("priority-low"),C.setAttribute("for","priority_low"),C.textContent="Low",l.appendChild(C),o.appendChild(l);const y=document.createElement("div");y.classList.add("form-footer");const g=document.createElement("button");g.classList.add("cancel-btn"),g.setAttribute("type","button"),g.textContent="CANCEL",y.appendChild(g);const E=document.createElement("button");let v,f,L;return E.classList.add("action-btn"),E.setAttribute("type","button"),E.textContent="CREATE PROJECT",y.appendChild(E),o.appendChild(y),e.appendChild(o),a.addEventListener("blur",(t=>{v=t.target.value,console.log("projectNameValue",v)})),r.addEventListener("blur",(t=>{f=t.target.value,console.log("ProjectDescValue",f)})),[u,m,b].forEach((t=>{t.addEventListener("click",(t=>{L=t.target.value,console.log("priorityInputValue",L)}))})),g.addEventListener("click",(()=>{t.todoData.modalActive=!1,console.log("appState updated from addProjectBtn:cancelButton",t),localStorage.setItem("state",JSON.stringify(t)),s("I was rerendered because of a state update triggered by the addProjectBtn:cancelButton elm!!!")})),E.addEventListener("click",(e=>{let o="high"===L?"highPriorityTodo":"medium"===L?"medPriorityTodo":"low"===L?"lowPriorityTodo":null;if(v||f||L||o){const e={name:v,priority:L,priorityId:o,todoCount:0,description:f,completed:!1};t.todoData.modalActive=!1,t.todoData.modalComponent="",t.todoData.projects.push(e),console.log("appState logged from addProjectBtn:createProjectButton",t),localStorage.setItem("state",JSON.stringify(t)),s("I was rerendered because of a state update triggered by the addProjectBtn:createProjectButton elm!!!")}else console.log("Do not have all form input values!")})),e}(l),h=function(t){console.log("Logging appState from createTodoModal",t);const e=document.createElement("div");e.classList.add("form-container","modal"),t.todoData.modalActive&&(e.style.display="flex");const o=document.createElement("form");o.setAttribute("action","#"),o.setAttribute("method","post");const n=document.createElement("h1");n.textContent="Add New Todo",o.appendChild(n);const i=document.createElement("label");i.setAttribute("for","date"),i.textContent="Date:",o.appendChild(i);const a=document.createElement("input");a.setAttribute("type","date"),a.setAttribute("id","date"),a.setAttribute("name","date"),a.setAttribute("required",!0),o.appendChild(a);const d=document.createElement("label");d.setAttribute("for","title"),d.textContent="Title:",o.appendChild(d);const r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("id","title"),r.setAttribute("name","title"),r.setAttribute("required",!0),o.appendChild(r);const c=document.createElement("label");c.setAttribute("for","project_description"),c.textContent="Todo Description:",o.appendChild(c);const l=document.createElement("textarea");l.setAttribute("name","project_description"),l.setAttribute("id","project_description"),o.appendChild(l);const u=document.createElement("label");u.setAttribute("for","priority"),u.textContent="Priority:",o.appendChild(u);const p=document.createElement("div");p.classList.add("priority-levels-container");const m=document.createElement("input");m.setAttribute("type","radio"),m.setAttribute("name","priority"),m.setAttribute("value","high"),m.setAttribute("id","priority_high"),p.appendChild(m);const h=document.createElement("label");h.classList.add("priority-high"),h.setAttribute("for","priority_high"),h.textContent="High",p.appendChild(h);const b=document.createElement("input");b.setAttribute("type","radio"),b.setAttribute("name","priority"),b.setAttribute("value","medium"),b.setAttribute("id","priority_medium"),p.appendChild(b);const C=document.createElement("label");C.classList.add("priority-medium"),C.setAttribute("for","priority_medium"),C.textContent="Medium",p.appendChild(C);const y=document.createElement("input");y.setAttribute("type","radio"),y.setAttribute("name","priority"),y.setAttribute("value","low"),y.setAttribute("id","priority_low"),p.appendChild(y);const g=document.createElement("label");g.classList.add("priority-low"),g.setAttribute("for","priority_low"),g.textContent="Low",p.appendChild(g),o.appendChild(p);const E=document.createElement("div");E.classList.add("form-footer");const v=document.createElement("button");v.classList.add("cancel-btn"),v.setAttribute("type","button"),v.textContent="CANCEL";const f=document.createElement("button");return f.classList.add("action-btn"),f.setAttribute("type","submit"),f.textContent="CREATE TODO",E.appendChild(v),E.appendChild(f),o.appendChild(E),e.appendChild(o),v.addEventListener("click",(()=>{t.todoData.modalActive=!1,localStorage.setItem("state",JSON.stringify(t)),s("I was rerendered because of a state update triggered by the addProjectBtn:cancelButton elm!!!")})),e}(l),b=function(t){const e=document.createElement("div");e.classList.add("todo-list-layout"),"TodosLayout"===t.todoData.layoutComponent?e.style.display="flex":e.style.display="none";const o=document.createElement("div");o.className="buttons-container";const n=document.createElement("button");n.textContent="Back to projects",o.appendChild(n);const d=document.createElement("div");d.classList.add("todo-list-container");const r=document.createElement("h2");r.classList.add("my-h2"),r.textContent="(Selected Project) Todo List";const c=document.createElement("div");c.classList.add("todo-action-btns");const l=document.createElement("div");l.classList.add("todo-list");const u=i("date","Date"),p=i("description","Title"),m=i("priority","Priority"),h=i("completed","Completed"),b=i("update","Update"),C=a("May 1, 2023","Buy groceries","High");a("May 2, 2023","Buy item 2","High"),a("May 3, 2023","Buy item 3","High"),[u,p,m,h,b].forEach((t=>{l.appendChild(t)})),C.forEach((t=>{l.appendChild(t)}));const y=document.createElement("button");return y.textContent="New Todo",c.appendChild(y),d.appendChild(r),d.appendChild(c),d.appendChild(l),e.appendChild(o),e.appendChild(d),n.addEventListener("click",(()=>{console.log("back to projects btn clicked"),t.todoData.layoutComponent="ProjectsGridLayout",localStorage.setItem("state",JSON.stringify(t)),s("I was rerendered because of a state update triggered by the projectsGrid:backButton elm!!!")})),y.addEventListener("click",(()=>{t.todoData.modalActive=!0,localStorage.setItem("state",JSON.stringify(t)),s("I was rerendered because of a state update triggered by the projectsGrid elm!!!")})),e}(l);r.classList.add("header-container"),c.classList.add("main-container"),r.appendChild(u),c.appendChild(p),c.appendChild(b),c.appendChild(l.todoData.modalActive&&"ProjectsGridLayout"===l.todoData.layoutComponent?m:h),d.appendChild(r),d.appendChild(c)}1===d.children.length&&s()})()})();