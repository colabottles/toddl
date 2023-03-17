---
title: What I Have Learned With Ionic
description: What I have learned with using the Ionic framework in three months.
date: 2023-03-17 ## YYYY-MM-DD
tags:
  - ionic
  - framework
  - mobile
  - development
  - learning
  - ioniclearning1
layout: layouts/post.njk
---

![The Ionic logo in blue](https://res.cloudinary.com/colabottles/image/upload/v1679077487/ionic_logotype_blue_jde7di.png)

So for the past three-plus months, I have been diving into Ionic and Vue, but namely, getting a good grasp of Ionic and what the company has to offer developers. It is amazing.

## A Little History

When I decided to write my own application for mobile, I looked at a few solutions that are readily available out there. React Native, Flutter, and some others but I had to take into consideration that I have to learn (and in some cases re-learn) some languages and frameworks.

My development skills took a hit over the past three years of continuous accessibility work and audits and I got really rusty. My real development chops left off at such languages as PHP, MySQL, and around the time I got around to brushing up on the latest, React was in the early stages of version 16 (16.3.whatever).

I had also toyed with 1.X versions of Angular but stopped after v4 and I didn't get to Vue until v2 (2.4 or 2.5-ish) and stopped before v3. So I didn't quite get familiar with any of the "big 3".

So I chose Ionic because I could craft PWAs, hybrid and cross-platform mobile apps and it could also (and does) create iOS and Android apps that seamlessly work together. Ionic also lets you employ various UI elements in the application framework (filtration, navigation, inputs, etc.) and I could use Ionic with Angular, Vue, or React which seemed like a bonus.

## Ionic Makes Me Think Back

[I started tinkering around with Ionic](https://toddl.dev/posts/ionic-and-vue-part-one/) and of course, I have yet to follow up with an article on my progress (coming soon!) but it reminds me a lot of [ColdFusion](https://coldfusion.adobe.com/) and it is because of the custom tags. ColdFusion with their tags:

```html
  <cfset firstName = "Todd">
  <cfif firstName eq "Todd">
    I don't care for lobster rolls at all.
  </cfif>
```

and Ionic with their tags:

```html
  <ion-header>
    <ion-toolbar>
      <ion-title>
        Contact Form
      </ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <ion-item *ngIf="isLoggedIn; else login">
      <ion-label>Welcome, {{username}}!</ion-label>
    </ion-item>
    <ng-template #login>
      <ion-item>
        <ion-label>Please log in to continue.</ion-label>
      </ion-item>
    </ng-template>
  </ion-content>
```

A lot different that I know of so far, but the custom tags are what make me think of CFML (ColdFusion Markup Language). I stopped developing in ColdFusion at version 6 (MX 6 as it was called which was associated with the Macromedia branding). After that, CF and Windows development I felt wasn't for me and I went back to PHP.

## Ionic Makes Learning and Mobile Development Fun

I went with Vue and Ionic. Vue had a good reputation for accessibility and Ionic takes accessibility seriously. That's what drew me to the both of these. [Vue has slipped a bit in the accessibility area according to the WebAIM Million Report](https://webaim.org/projects/million/#frameworks) so that's of a concern for me while React and Angular have improved and I may make the decision to move to one of those after this little experiment.

But the learning has been fun. [Ionic's docs are great](https://ionic.io/docs) there is a lot I am familiarizing myself with like Capacitor, Appflow, Portals, etc. I even contributed a little bit to the accessibility guide. Learning something I thought I'd never get into has been the best part.

## What is Ionic&quest;

Ionic is a cross-platform mobile SDK which lets developers create mobile applications, micro applications, and even custom component libraries using open web technologies and everyday, well-known and widely used tools, languages, and frameworks (React, Angular, and Vue).

## Why I Am Learning And Using Ionic

Accessibility. Ionic puts their best foot forward with accessibility. I won't speculate how the other technologies go about accessibility but Ionic does it right. I mean, [look at their accessibility guide](https://ionic.io/docs/accessibility) for great insight how they treat accessibility. This is the major reason behind my decision.

Performance. The SDK is used by companies to build highly performant apps. Target, Panda Express, InstantPot to name a few (apps I use). I haven't checked metrics or seen the numbers against other mobile frameworks, I only have what I have gone off of. Usage. Those apps I named above seem to run much faster than some, if not most of my other apps I use.

Other factors. I know there is a focus on app delivery (Appflow) and security which is super-important as well. I like the focus on all these as a company.

Community. I have joined the Discord server and been to some of the webinars and live events. The community is welcoming and super helpful. A strong and kind community is something that was also critical in my search.

Development. I can do my thing in HTML and CSS I can learn how to implement Ionic with Angular or Vue, and even React if I choose. I have choices. I like that aspect, I get to learn while doing which is how I learn best.

## Wait. Appflow&quest; Capacitor&quest; Portals&quest;

So in my extensive reading of everything I could pour over, here is what I understand of each of these technologies:

[Capacitor](https://capacitorjs.com) is a mobile cross-platform runtime (designed to work in multiple platforms) which uses modern web tools designed to run on iOS, Android, and others that creates Web Native apps. The thing I like (that I really like) is that Capacitor stays close to web standards as possible.

If it works in a browser, it works on mobile while using Capacitor. Capacitor does not require the Ionic framework to work with it. Ionic UI components may improve the app that is being built. I had to do a little history lesson when researching which turned out this.

Adobe had PhoneGap, which bridged web apps with native capability. PhoneGap was donated to the Apache Foundation and renamed it Cordova. Capacitor is an alternative to Cordova. There are some similarities, but that is as much as I know.

[Stencil](https://stenciljs.com/) allows you to build reusable design systems. Since I've been helping organizations make their design systems accessible, this intrigues me. You can generate performant web components with Stencil that can run everywhere and are framework agnostic. Which is pretty awesome.

[Appflow](https://ionic.io/appflow) is an easy way to build and deploy your apps. It automates a lot of the process and you can build, deploy, and ship faster through Appflow. It is a cloud platform and you can build apps with Cordova, Capacitor, and React Native with Appflow.

[Portals](https://ionic.io/portals) lets developers add web-based experiences to native mobile apps. There is also mention of better collaboration, and safe web experiences but that is as much as I know. I wasn't able to read too far into that but that is definitely on my list.

Ionic also has a CI/CD service, an auth service for SSO (Single Sign-On), Trapeze which I haven't read into, along with Ionicons (handcrafted icons for Ionic apps and apps in general), and I could have sworn there was one other project they announced (they being Ionic) but I am drawing a blank at the time of this writing.

## What I Am Building&quest;

I can't say other than it is an app and it has to do with lobster rolls. That's all I'll say. You didn't expect anything less or me to actually spill, did you&quest;

Though as I write this article, I really am thinking of switching to the more accessible Angular or React. Leaning heavily to Angular. That I will have to think about.

You'll be able to find some of the best in Maine... that's all I'll say for now.

## What Else&quest;

Well, I'd like to get into DevRel (Developer Relations) once I transition out of accessibility. I'll always advocate for accessibility, but as someone that has spent the past two years going to conferences and speaking to people about the importance of accessibility, I think that is something I would love to do for a company.

My main goal. Get hired by a company that will allow me to travel to and speak at conferences on the importance of accessibility or making mobile apps accessible or whatever. Just being there and educating at this point in my career. I'll even be more than happy to do booth duty and talk with people.

Maybe for Ionic&quest; Maybe for another company&quest; Maybe it may be time for me to hang up the whole tech career&quest; I don't know yet. I do know that I am having fun learning and getting back to my roots of development and coding. Ionic brought out the Todd from the early days that **LOVED** to code and learn.
