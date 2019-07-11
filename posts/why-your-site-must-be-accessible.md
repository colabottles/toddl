---
title: Why Your Site Must Be Accessible
description: Accessibility is an afterthought still. It shouldn't be.
date: 2019-06-18
tags:
  - accessibility
  - design
layout: layouts/post.njk
---

Accessibility: _adj. that can be used, entered, reached, etc._

Some of us all too often forget how easy it is for us able-bodied persons to access the web. We don't need screen readers, assistive software, optical character recognition (OCR), adaptive or on-screen keyboards, magnification software. I could go on and on but you probably get the point.

We able-bodied people are fortunate. As of 2010, 56.7 million people in the United States had a disability of some kind and around 38.3 million people had a severe disability. That's 95 million people out of (as of 2010) around 309 million people. That's over a quarter of the entire populace, 30.7% to be precise.

### What does that have to do with me&quest;

A: Everything.

As designers and even developers, we **must** take into consideration that 30.7% of the population, there shouldn't be _any_ argument about it. It's 2019 folks, time to get inclusive!

#### There's that word "inclusive"

Yes, and it's here to stay. As of 2016, it was the UN that declared;

<blockquote cite="UN Universal Declaration of Human Rights, Article 19">Everyone has the right to freedom of opinion and expression; this right includes freedom to hold opinions without interference and to seek, receive and impart information and ideas through any media and regardless of frontiers.</blockquote>

So we must be inclusive. The UN also added;

<blockquote cite="UN Universal Declaration of Human Rights, Section 32">The promotion, protection and enjoyment of human rights on the Internet</blockquote>

So to not make a site accessible, is denying someone of their basic human right. A site that is slow and takes forever to load on a device that is 10 years old but still functions on a 2G/3G network is denying someone of their basic human right. You'll be surprized how many people access the internet from places you couldn't and don't even think of.

Accessibility is part of the fabric now, it is part of an inclusive experience for those that deserve it. The keyword there is _deserve_. Don't get me wrong, the web is for everyone regardless of age, sex, religion, preferences, gender, color, or creed. I find that some folks just blow off disabled persons. Even if the disability is just a temporary one. Broken arm. Eye surgery. Child on your lap. Yes, those are temporary, situational or conditional disabilities.

### What Do I Need To Do&quest;

**The use of descriptive alt tags.** 

Just having an alt tag of a boat that says &ldquo;boat&rdquo; isn't good enough. How about &ldquo;Picture of a boat, a lobster boat coming into dock with a full haul from a day of hauling traps off the Maine coast.&rdquo;

**Keyboard navigation and Focus**

Check your site to see if you can navigate with the keyboard. All form fields, navigation items, links, buttons and modal dialogues/lightboxes should be accessible without using the mouse. There is some extra steps users with Macs have to take when enabling keyboard navigation in OSX.

Also enhance `:focus` indicators and make them stand out and distinctive.

**Form fields**

Make sure form fields have `aria-required="true"` so they are read by screen readers as required.

**Closed captioning**

Make sure all videos are closed captioned. 

**Basic ARIA landmarks**

Use `role` properly. 

**Table tags**

Markup all tables, cells, headers, and captions appropriately.

These just aren't it, there is a lot more you can do to make your site accessible that I won't be covering here but you can go through these links and read on.

[Stanford - Online Accessibility Program](https://soap.stanford.edu/getting-started/basic-checks)
[Karl Groves - The 6 Simplest Web Accessibility Tests Anyone Can Do](https://karlgroves.com/2013/09/05/the-6-simplest-web-accessibility-tests-anyone-can-do)
[WebAIM - 10 Easy Accessibility Tips Anyone Can Use](https://webaim.org/blog/10-easy-accessibility-tips/)
[W3C - Easy Checks - A First Review of Web Accessibility](https://www.w3.org/WAI/test-evaluate/preliminary/)
[Resources - The Paciello Group](https://developer.paciellogroup.com/resources/)

### Summary

There is a lot you can do. Do it. Educate yourself, read up on articles, attend conferences, workshops, talk to the speakers there. Soak in all you can about accessibility. You will gain a vast amount of information and in my case, education about accessibility.

If you are at a job where it is an uphill battle to get your company to recognize and practice accessibility, fight for it. Diplomatically. Push hard, but not too hard. Know your limits. I'll share from my experience.App

"We don't need to have accessibility as a priority." said my boss. All I had to say is, "Yes we do." I presented one story about why accessibility is important to someone who is focused on company. "Did you hear about Target being sued for their website not being accessible according to the ADA?"

Attitudes change when you tell suits how they can save money by not paying extra. "If the company gets sued for not adhereing to the ADA, it could cost a few thousand to a million or more to have a company come in and do an audit. I can make sure this doesn't happen while building the website."

It's funny when you present suits that information how fast they give the green light and the go ahead to "do what you need to do. Make it happen."

Be inclusive with your websites, your apps, your designs and remember those who aren't like you when you design and build great things.

You got this.
