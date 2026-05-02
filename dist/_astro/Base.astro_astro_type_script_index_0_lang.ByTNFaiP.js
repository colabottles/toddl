const a=document.getElementById("hamburger"),n=document.getElementById("sidebar"),p=document.getElementById("sidebar-overlay"),g=document.getElementById("theme-toggle"),i=document.getElementById("gh-toggle"),l=document.getElementById("gh-panel"),A=document.getElementById("gh-close"),b=document.getElementById("gh-body"),c=document.getElementById("support-panel");function y(e){const o=Array.from(n.querySelectorAll("button, a, [tabindex]:not([tabindex='-1'])")),d=o[0],s=o[o.length-1];e.key==="Tab"&&(e.shiftKey&&document.activeElement===d?(e.preventDefault(),s.focus()):!e.shiftKey&&document.activeElement===s&&(e.preventDefault(),d.focus()))}function $(){n.classList.add("is-open"),p.classList.add("is-open"),a.setAttribute("aria-expanded","true"),a.setAttribute("aria-label","Close navigation menu"),document.body.style.overflow="hidden",n.querySelector("button, a")?.focus(),n.addEventListener("keydown",y)}function h(){n.classList.remove("is-open"),p.classList.remove("is-open"),a.setAttribute("aria-expanded","false"),a.setAttribute("aria-label","Open navigation menu"),document.body.style.overflow="",n.removeEventListener("keydown",y),a.focus()}a.addEventListener("click",()=>{n.classList.contains("is-open")?h():$()});p.addEventListener("click",h);document.addEventListener("keydown",e=>{e.key==="Escape"&&(h(),m())});function I(e){document.documentElement.setAttribute("data-theme",e),localStorage.setItem("theme",e),g.setAttribute("aria-label",e==="dark"?"Switch to light mode":"Switch to dark mode")}g.addEventListener("click",()=>{const e=document.documentElement.getAttribute("data-theme");I(e==="dark"?"light":"dark")});const f=localStorage.getItem("theme");f&&g.setAttribute("aria-label",f==="dark"?"Switch to light mode":"Switch to dark mode");let v=!1;async function B(){if(!v){v=!0;try{const[e,o,d]=await Promise.all([fetch("https://api.github.com/users/colabottles"),fetch("https://api.github.com/users/colabottles/repos?sort=updated&per_page=5"),fetch("https://api.github.com/users/colabottles/events/public?per_page=10")]),s=await e.json(),_=await o.json(),E=await d.json(),w={PushEvent:"pushed to",PullRequestEvent:"PR on",IssuesEvent:"issue on",CreateEvent:"created",WatchEvent:"starred",ForkEvent:"forked"};b.innerHTML=`
            <section class="gh-section" aria-labelledby="gh-profile-heading">
              <h3 id="gh-profile-heading" class="gh-section__title">profile</h3>
              <dl class="gh-profile">
                <div class="gh-profile__row"><dt>followers</dt><dd>${s.followers}</dd></div>
                <div class="gh-profile__row"><dt>following</dt><dd>${s.following}</dd></div>
                <div class="gh-profile__row"><dt>public repos</dt><dd>${s.public_repos}</dd></div>
                <div class="gh-profile__row"><dt>member since</dt><dd>${new Date(s.created_at).getFullYear()}</dd></div>
              </dl>
            </section>
            <section class="gh-section" aria-labelledby="gh-repos-heading">
              <h3 id="gh-repos-heading" class="gh-section__title">recent repos</h3>
              <ul class="gh-repos">
                ${_.map(t=>`
                  <li class="gh-repo">
                    <a href="${t.html_url}" class="gh-repo__name" target="_blank" rel="noopener noreferrer">${t.name}</a>
                    ${t.description?`<p class="gh-repo__desc">${t.description}</p>`:""}
                    <p class="gh-repo__meta">
                      ${t.language?`<span class="gh-repo__lang">${t.language}</span>`:""}
                      <span class="gh-repo__stars">&#9733; ${t.stargazers_count}</span>
                    </p>
                  </li>
                `).join("")}
              </ul>
            </section>
            <section class="gh-section" aria-labelledby="gh-activity-heading">
              <h3 id="gh-activity-heading" class="gh-section__title">recent activity</h3>
              <ul class="gh-events">
                ${E.slice(0,8).map(t=>{const L=w[t.type]??t.type.replace("Event",""),k=t.repo.name.split("/")[1];return`<li class="gh-event"><span class="gh-event__action">${L}</span> <span class="gh-event__repo">${k}</span></li>`}).join("")}
              </ul>
            </section>
          `}catch{b.innerHTML='<p class="gh-error">Could not load GitHub data.</p>'}}}function H(){l.classList.add("is-open"),l.removeAttribute("aria-hidden"),c.setAttribute("aria-hidden","true"),c.classList.add("is-hidden"),i.setAttribute("aria-expanded","true"),i.setAttribute("aria-label","Close GitHub panel"),B()}function m(){l.classList.remove("is-open"),l.setAttribute("aria-hidden","true"),c.removeAttribute("aria-hidden"),c.classList.remove("is-hidden"),i.setAttribute("aria-expanded","false"),i.setAttribute("aria-label","Open GitHub panel")}i.addEventListener("click",()=>{l.classList.contains("is-open")?m():H()});A.addEventListener("click",m);const r=document.getElementById("right-panel-btn"),u=document.getElementById("right-panel");r&&u&&r.addEventListener("click",()=>{const e=u.classList.contains("mobile-open");u.classList.toggle("mobile-open"),r.setAttribute("aria-expanded",e?"false":"true"),e?document.body.style.overflow="":document.body.style.overflow="hidden"});
