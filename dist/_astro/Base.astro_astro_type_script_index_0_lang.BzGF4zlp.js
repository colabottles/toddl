const i=document.getElementById("hamburger"),a=document.getElementById("sidebar"),g=document.getElementById("sidebar-overlay"),h=document.getElementById("theme-toggle"),l=document.getElementById("gh-toggle"),c=document.getElementById("gh-panel"),$=document.getElementById("gh-close"),v=document.getElementById("gh-body"),d=document.getElementById("support-panel");function k(e){const s=Array.from(a.querySelectorAll("button, a, [tabindex]:not([tabindex='-1'])")),o=s[0],n=s[s.length-1];e.key==="Tab"&&(e.shiftKey&&document.activeElement===o?(e.preventDefault(),n.focus()):!e.shiftKey&&document.activeElement===n&&(e.preventDefault(),o.focus()))}function I(){a.classList.add("is-open"),g.classList.add("is-open"),i.setAttribute("aria-expanded","true"),i.setAttribute("aria-label","Close navigation menu"),document.body.style.overflow="hidden",a.querySelector("button, a")?.focus(),a.addEventListener("keydown",k)}function m(){a.classList.remove("is-open"),g.classList.remove("is-open"),i.setAttribute("aria-expanded","false"),i.setAttribute("aria-label","Open navigation menu"),document.body.style.overflow="",a.removeEventListener("keydown",k),i.focus()}i.addEventListener("click",()=>{a.classList.contains("is-open")?m():I()});g.addEventListener("click",m);document.addEventListener("keydown",e=>{e.key==="Escape"&&(m(),b())});function B(e){document.documentElement.setAttribute("data-theme",e),localStorage.setItem("theme",e),h.setAttribute("aria-label",e==="dark"?"Switch to light mode":"Switch to dark mode")}h.addEventListener("click",()=>{const e=document.documentElement.getAttribute("data-theme");B(e==="dark"?"light":"dark")});const y=localStorage.getItem("theme");y&&h.setAttribute("aria-label",y==="dark"?"Switch to light mode":"Switch to dark mode");let _=!1;async function x(){if(!_){_=!0;try{const[e,s,o]=await Promise.all([fetch("https://api.github.com/users/colabottles"),fetch("https://api.github.com/users/colabottles/repos?sort=updated&per_page=5"),fetch("https://api.github.com/users/colabottles/events/public?per_page=10")]),n=await e.json(),f=await s.json(),r=await o.json(),w={PushEvent:"pushed to",PullRequestEvent:"PR on",IssuesEvent:"issue on",CreateEvent:"created",WatchEvent:"starred",ForkEvent:"forked"};v.innerHTML=`
            <section class="gh-section" aria-labelledby="gh-profile-heading">
              <h3 id="gh-profile-heading" class="gh-section__title">profile</h3>
              <dl class="gh-profile">
                <div class="gh-profile__row"><dt>followers</dt><dd>${n.followers}</dd></div>
                <div class="gh-profile__row"><dt>following</dt><dd>${n.following}</dd></div>
                <div class="gh-profile__row"><dt>public repos</dt><dd>${n.public_repos}</dd></div>
                <div class="gh-profile__row"><dt>member since</dt><dd>${new Date(n.created_at).getFullYear()}</dd></div>
              </dl>
            </section>
            <section class="gh-section" aria-labelledby="gh-repos-heading">
              <h3 id="gh-repos-heading" class="gh-section__title">recent repos</h3>
              <ul class="gh-repos">
                ${f.map(t=>`
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
                ${r.slice(0,8).map(t=>{const L=w[t.type]??t.type.replace("Event",""),A=t.repo.name.split("/")[1];return`<li class="gh-event"><span class="gh-event__action">${L}</span> <span class="gh-event__repo">${A}</span></li>`}).join("")}
              </ul>
            </section>
          `}catch{v.innerHTML='<p class="gh-error">Could not load GitHub data.</p>'}}}function P(){c.classList.add("is-open"),c.removeAttribute("aria-hidden"),d.setAttribute("aria-hidden","true"),d.classList.add("is-hidden"),l.setAttribute("aria-expanded","true"),l.setAttribute("aria-label","Close GitHub panel"),x()}function b(){c.classList.remove("is-open"),c.setAttribute("aria-hidden","true"),d.removeAttribute("aria-hidden"),d.classList.remove("is-hidden"),l.setAttribute("aria-expanded","false"),l.setAttribute("aria-label","Open GitHub panel")}l.addEventListener("click",()=>{c.classList.contains("is-open")?b():P()});$.addEventListener("click",b);const p=document.getElementById("right-panel-btn"),u=document.getElementById("right-panel");p&&u&&p.addEventListener("click",()=>{const e=u.classList.contains("mobile-open");u.classList.toggle("mobile-open"),p.setAttribute("aria-expanded",e?"false":"true"),e?document.body.style.overflow="":document.body.style.overflow="hidden"});const E=document.querySelectorAll("[data-bsky-id]");if(E.length>0){const e="did:plc:gevyqibw5p2xsonkbsbjm5vy";for(const s of E){const o=s.getAttribute("data-bsky-id");if(o)try{const r=(await(await fetch(`https://public.api.bsky.app/xrpc/app.bsky.feed.getPosts?uris=at://${e}/app.bsky.feed.post/${o}`)).json()).posts?.[0]?.likeCount??0;s.textContent=`🦋 ${r}`}catch{s.textContent=""}}}
