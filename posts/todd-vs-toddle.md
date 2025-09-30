---
title: Todd Vs Toddle
description: The relationship of the toddl's begins. Thoughts about a new development tool and accessibility.
date: 2025-03-07 ## YYYY-MM-DD
tags:
  - post
  - toddle
  - toddl
  - web
  - tools
  - accessibility
layout: layouts/post.njk
image: https://res.cloudinary.com/colabottles/image/upload/v1731376889/todd-social-card-toddle.png
bskyPostId: 3ljsfz2e4m22z
---

## Wait&hellip; ToddL or Toddle or Toddl&quest;

Yes.

So I was up early today and planning on doing nothing when I was watching the stream of one of my favorite people, Salma Alam-Naylor, [a.k.a. whitep4nth3r](https://twitch.tv/whitep4nth3r) and Salma was rebuilding her website with Toddle.

[Toddle](https://toddle.dev) is a "visual web framework" so as a fellow Todd, I had to check this out. I said I would not pass judgment, but I will describe what I see that could be improved upon from an accessibility standpoint.

## Caveat

Yes, it is a work in progress I understand that but accessibility needs to be considered (and I believe it has been here) from before the concept phase. Things get lost in the shuffle or developers don't understand the guidelines and accessibility so this is why I felt compelled to write this. WHat I see so far is great, but loads of room for improvement.

## First Impression

First impression is it is Figma meets front-end development. Which is great. I think tools that make the job less stressful and alleviates the daily grind of the developer is great. To an extent. Yes, I am going to talk about accessibility.

It is a good looking tool that cannot be denied and the docs do need some work (and I have been told they are going to be reworked), and I love the idea of "Challenges" as a way to onboard someone to the product.

## Accessibility

I already have an issue with things being obscured and not being able to manipulate the layout so I can read what I need as I work in three different spots in the UI at once. I like to use the keyboard occasionally to navigate a page.

![A view of the Toddle.dev interface showing how to create a Weather App](https://res.cloudinary.com/colabottles/image/upload/v1741357094/toddle1.png)

I'd love to be able to resize the area that has the formulas in it to "un"-hide the menu it is obscuring and I also wish that formula area was not a [keyboard trap](https://www.w3.org/TR/WCAG22/#no-keyboard-trap). So those are the first two things I noticed right away.

The second is the way everyone can re-style a heading element (as you will see if you do the Weather App challenge) which you should never do as far as font sizing goes. Styling an `h1` to look like an `h3` or `h4` [is not](https://www.w3.org/TR/WCAG22/#info-and-relationships) ![suggested](https://www.w3.org/TR/WCAG22/#section-headings).

Also not a fan of the ability to place placeholders in an input field, but, that is on people to know that placeholders are not labels and placeholders are helper text. Those placeholders that are helper text shouldn't be read by a screen reader and hidden from assistive technologies. Visual labels are the way, my friends.

Speaking of visual labels...

![A screen capture of a triangle icon and when hovered over with the cursor, it says, No issues! Good Job!](https://res.cloudinary.com/colabottles/image/upload/v1741360583/huh.png)

More visual guidance and helper labels/text would be beneficial for anyone with cognitive issues or memory loss. Even for busy people doing ten things at once to where these improvements benefit everyone.

## Early Final Thoughts

Great tool, needs some work, needs an accessibility audit and some retooling in the name of accessibility but overall I like what I am looking at and will continue to tinker around in Toddle. I just hope it is not another tool that gets misused in the name of rapid development forsaking accessibility.

## Wish List

- The ability to resize the formula area
- the ability to not have main parts of onboarding obscured
- documentation about accessibility (how-to use semantic HTML, examples of an accessible component, guiding the developer through education, good examples vs bad examples, etc.)
- A good, thorough, accessibility audit and usability audit
- Better visual guidance (accessibility) and better labelling of interactive components.

## Summary

Todd L. likes Toddle. Again, I know it is a work in progress, so I am interested to see what happens in the future. I really do like this tool and I really did enjoy taking it for a spin. I hope great things come out of this tool for developers.

They can always hire me to come on as Head of Accessibility too and we can make this tool even better!