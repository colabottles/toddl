---
title: CORS, CodePen & Me
description: My adventures solving the CORS issue.
date: 2019-09-06
tags:
  - development
  - front-end
  - fonts
layout: layouts/post.njk
---

## CORS, CodePen and Me

I have been experimenting and leaning about Variable Fonts ever since [Jason Pamental](https://rwt.io) spoke at An Event Apart this past May in Boston. I had been following Jason as well as Mandy Michael and Scott Kellum’s works/tweets/articles/talks as well. All great stuff.

I was (and still am very much so) intrigued, as I am with most everything spoken about at conferences, in using variable fonts for not only my site but for work projects as well. When [Ethan Marcotte](https://ethanmarcotte.com) coined “responsive web design” I wondered shortly afterwards, “I wonder if fonts and typography will be soon to follow?” Well, much to my delight it did!

On a pen on my CodePen account, the heading was not showing for me but forked pen by Jason had it coming in quite nicely. I had tried to get the pens to render the variable fonts I had tried to use for over a month with no success because I did not know about the CORS issue.

CORS, or Cross-Origin Resource Sharing, is, according to [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) (Mozilla Developer Network);

<blockquote cite="MDN">a mechanism that uses additional HTTP headers to tell a browser to let a web application running at one origin (domain) have permission to access selected resources from a server at a different origin. A web application executes a cross-origin HTTP request when it requests a resource that has a different origin (domain, protocol, or port) than its own origin.</blockquote>

So, unbeknownst to me, browsers restrict cross-origin HTTP requests initiated from within scripts. [To quote from MDN again](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS); 

<blockquote cite="MDN">This means that a web application using those APIs can only request HTTP resources from the same origin the application was loaded from, unless the response from the other origin includes the right CORS headers.</blockquote>

I had tweeted out to Jason if he could take a peek and see what the issue was because I was still unaware of the CORS issue until Scott Kellum (@ScottKellum) tweeted at me about it. So I went right to the search engine (DuckDuckGo for this guy) and did a search which came up with some good stuff.

## How did I solve it?

The best (and easiest) solution I found came from here http://bit.ly/2U2DV5s

So, in the netlify.toml file, I just implemented these headers;

<code>
[[headers]]
for = "/*.woff"
[headers.values]
Access-Control-Allow-Origin = "*"
Content-Type = "application/font-woff"
</code>

<code>
[[headers]]
for = "/*.woff2"
[headers.values]
Access-Control-Allow-Origin = "*"
Content-Type = "application/font-woff2"
</code>

<code>
[[headers]]
for = "/*.ttf"
[headers.values]
Access-Control-Allow-Origin = "*"
Content-Type = "application/font-ttf"
</code>

And went to test and they worked! It took about 15 minutes of searching and reading and only less than 5 minutes of placing the appropriate code in and pushing it live!

If there is a better, or easier way to implement this, I would be very interested in knowing and learning. The other ways involved a little bit of in-depth command line work and I’m not knocking those methods (nor would I be scared to do them) but this one just seemed a lot easier for what I was trying to accomplish was for me to be able to see the variable font I was calling off my site in CodePen.

## Special Thanks

Thanks to [Jason Pamental - @jpamental](https://twitter.com/@jpamental), [Scott Kellum - @ScottKellum](https://twitter.com/@ScottKellum) and [Sarah Drasner - @sarah_edo](https://twitter.com/@sarah_edo) for their guidance and assistance!
