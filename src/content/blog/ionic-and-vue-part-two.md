---
title: Ionic and Vue, Part Two
description: My deep dive into learning Ionic and Vue.
date: 2023-04-26 ## YYYY-MM-DD
tags:
  - ionic
  - vue
  - framework
  - learning
  - javascript
  - typescript
  - ionicparttwo
layout: layouts/post.njk
---

![The Ionic Framework logo, a blue circle enclosed in a thick blue, incomplete line with a small blue ball rotating around the center circle, next to the Vue JS logo, a V-shaped logo with a light green V and a slate grey blue smaller V sitting inside the large V-shape.](https://res.cloudinary.com/colabottles/image/upload/v1670038063/images/vue-ionic-logos.png)

It has been a bit, but following up on the [first part](https://toddl.dev/posts/ionic-and-vue-part-one/) of this series, I'm going to be diving into file structure, so pitter patter, let's get at &apos;er&excl;

## File Structure

> NOTE: This is an introductory overview and this section is from the generated files and folders from running the ionic start command. There are more folders and more comprehensive ways to set things up. This is my experience through the Ionic CLI.
>
> This also takes into consideration you have familiarity with the node_modules folder and test folder if you're testing with Jest and/or Cypress. I will be going over the testing stuff later on in this series.

## src

This folder is where the bulk of the work will be done to create your application. This folder is where much of the work, and frankly nearly all of the work will be done in.

![The file structure shown for a Vue and Ionic template showing files in the src folder.](https://res.cloudinary.com/colabottles/image/upload/v1682433572/vue-example.png)

## router

The `router` folder is where all the routes are kept, added, and each route has its View component with route name. So the `index.ts` file will point to the `HomePage.vue` file. The route points to the HomePage view.

The `Home` route is defined as the default path.

```js
import HomePage from '../views/HomePage.vue'
```

## theme

This is the folder that holds the stylesheets for your project. You can [find out more about theming](https://ionicframework.com/docs/theming/basics) from the Ionic docs here.

Global theming for the project can be defined here, Ionic has such names as `success`, `danger`, `warning`, and more for colors for different elements in the UI.

## views

The `views` folder is what is render for what page. `HomePage.vue` is rendered when the `Home` route is defined in the `index.ts` file. The same would be for `ContactPage.vue`, `AboutPage.vue`, and others.

The home page code looks something like this:

```js
<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <strong>Ready to create an app?</strong>
        <p>Start with Ionic
          <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components">
          UI Components
          </a>
        </p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
```

I won't go into the specifics here until another installment of this series, but it won't be too long before I dive into that part.

## Next Steps

Again, this was a very high-level overview of the file structure of the Ionic/Vue application and the major parts of the folder structure.

I'll get more into the deeper parts of the template files, router, and more later in the series.

<!-- [Part three of the series is here if you want to read on](https://toddl.dev/posts/ionic-and-vue-part-three.md) -->
