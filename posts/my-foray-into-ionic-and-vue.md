---
title: My Foray Into Ionic and Vue
description: My deep dive into learning Ionic and Vue.
date: 2022-12-01 ## YYYY-MM-DD
tags:
  - ionic
  - vue
  - framework
  - learning
layout: layouts/post.njk
---

## Well, Here I Go!

I've been looking to start coding again after doing accessibility auditing for two solid years and also have had an idea that's been swirling around in my head for a long time now. This brought me to the idea of an app, which finds the best lobster roll shacks in your area (yes, IYKYK).

I like the [Vue framework](https://vuejs.org), I liked how it was accessible. Still do even though in [the last WebAIM Million Report](https://webaim.org/projects/million/#frameworks), the average number of homepages using Vue increased from 18,358 home pages to 22,349 homepages while the number of errors has gone down from 67.3 on each homepage to 63.4 per homepage.

That can be attributed to theknowledge and the education of accessibility, I am fairly certain. Or perhaps some organizations just do not value accessibility. Not a question, a fact. Some organizations do not value or even know about accessibility.

That's not why i'm writing this though. Not the main reason, but accessibility is a big factor in what I do. How accessible is your framework? How does your team value accessibility? It will show in the product.

So Vue it is. I also just like the feeling I get when writing it. If you're a developer, and you prefer a certain language or framework and you just feel comfortable in that language or framework, then you'll understand what I mean.

Sure there is Flutter or React Native, but I just had a good feeling about using Vue and Ionic.

## A Mobile UI Toolkit

I don't need anything fancy or something that I am going to need a PhD to learn and understand. That may have beena little over-the-top, but I really wanted to hit the ground running. [That's when I found Ionic](https://ionicframework.com).

It works with Angular, React, Vue. It is cross-platform. Performant and interoperable. I also like the attention to accessibility. I don't know if anyone has touched upon the accessibility of the framework, but I like what I have read, heard, [and seen](https://youtu.be/p3AN3igqiRc?t=72). Though the video does reference Web Standards, so that is a giant plus as far as I am concerned.

You can use one stylesheet and you can ship the framework using one JavaScript file. Now that everything is shipped as web components, you can use one `.html` file with no build process. I kind of like that.

So I'm going to go over my experience with the Ionic frameowrk.

## Installation

Node.js is necessary to install, no problem, I already have it running on my machine. Next is getting Ionic CLI installed to execute the commands. So I just followed the docs and type in:

`npm install -g @ionic/cli`
