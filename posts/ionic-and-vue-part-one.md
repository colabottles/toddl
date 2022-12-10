---
title: Ionic and Vue, Part One
description: My deep dive into learning Ionic and Vue.
date: 2022-12-01 ## YYYY-MM-DD
tags:
  - ionic
  - vue
  - framework
  - learning
  - javascript
  - typescript
  - ionicpartone
layout: layouts/post.njk
---

![The Ionic Framework logo, a blue circle enclosed in a thick blue, incomplete line with a small blue ball rotationg around the center circle, next to the Vue JS logo, a V-shaped logo with a light green V and a slate grey blue smaller V sitting inside the large V-shape.](https://res.cloudinary.com/colabottles/image/upload/v1670038063/images/vue-ionic-logos.png)

## Well, Here I Go!

I've been looking to start coding again after doing accessibility auditing for two solid years and also have had an idea that's been swirling around in my head for a long time now. This brought me to the idea of an app, which finds the best lobster roll shacks in your area (yes, IYKYK).

I like the [Vue framework](https://vuejs.org), I liked how it was accessible. Still do even though in [the last WebAIM Million Report](https://webaim.org/projects/million/#frameworks), the average number of homepages using Vue increased from 18,358 home pages to 22,349 homepages while the number of errors has gone down from 67.3 on each homepage to 63.4 per homepage.

That can be attributed to the knowledge and the education of accessibility, I am fairly certain. Or perhaps some organizations just do not value accessibility. Not a question, a fact. Some organizations do not value or even know about accessibility.

That's not why I'm writing this though. Not the main reason, but accessibility is a big factor in what I do. How accessible is your framework? How does your team value accessibility? It will show in the product.

So Vue it is. I also just like the feeling I get when writing it. If you're a developer, and you prefer a certain language or framework and you just feel comfortable in that language or framework, then you'll understand what I mean.

Sure there is Flutter or React Native, but I just had a good feeling about using Vue and Ionic.

## A Mobile UI Toolkit

I don't need anything fancy or something that I am going to need a PhD to learn and understand. That may have been a little over-the-top, but I really wanted to hit the ground running. [That's when I found Ionic](https://ionicframework.com).

It works with Angular, React, Vue. It is cross-platform. Performant and interoperable. I also like the attention to accessibility. I don't know if anyone has touched upon the accessibility of the framework, but I like what I have read, heard, [and seen](https://youtu.be/p3AN3igqiRc?t=72). Though the video does reference Web Standards, so that is a giant plus as far as I am concerned.

You can use one stylesheet and you can ship the framework using one JavaScript file. Now that everything is shipped as web components, you can use one `.html` file with no build process. I kind of like that.

So I'm going to go over my experience with the Ionic framework.

## Installation

Node.js is necessary to install, no problem, I already have it running on my machine. Next is getting Ionic CLI installed to execute the commands. So I just followed the docs and type in:

```js
npm install -g @ionic/cli
```

I made a pre-made template to start. Just to get tthe feel of doing a quickstart of sorts by running:

```js
ionic start
```

or I could have typed in:

```js
ionic start lobstah-roll tabs
```

I'm then given the choice to pick between Angular, React, and Vue JavaScript frameworks from a list of choices. I chose Vue, of course. I am then asked if I want to integrate my new app with [Capacitor](https://capacitorjs.com/docs/v2/).

It then runs and does its thing, then I get a list of next steps to follow:

```js
- Go to your new project: `cd ./test-ionic`
- Run `ionic serve` within the app directory to see your app in the browser
- Run `ionic capacitor add` to add a native iOS or Android project using Capacitor
- Generate your app icon and splash screens using `cordova-res --skip-config --copy`
- Explore the Ionic docs for components, tutorials, and more: https://ion.link/docs
- Building an enterprise app? Ionic has Enterprise Support and Features: https://ion.link/enterprise-edition
```

I followed the steps and I was good to go.

<!-- [Part two of the series is here if you want to read on](https://toddl.dev/posts/ionic-and-vue-part-one.md) -->

## Next Steps

It's time to start getting things underway, which will come in part two of this series. I am doing these posts in short little chunks that I can parse easily. I have so much on my plate, this is how I'm doing it. So if you want to leave a comment, [go to the contact page](https://toddl.dev/contact/) and contact me there! And if you don't have anything nice to say, then just find somewhere else to go and complain. Like [YouTube](https://youtube.com).
