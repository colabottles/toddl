---
title: The Perpetual Circle of Accessibility
description: Twenty-five years and we can't get off the ever-merry-go-round
date: 2023-09-05 ## YYYY-MM-DD
tags:
  - accessibility
  - development
  - community
  - merrygoround
  - html
  - aria
layout: layouts/post.njk
---

![A man holding his glasses in his hands while rubbing the bridge of his nose in frustration.](https://res.cloudinary.com/colabottles/image/upload/v1693938299/frustration.jpg)

## The History

In the time I have been practicing accessibility, whether it was behind-the-scenes in a not-so-public way of putting myself out there like I did for most of my career or whether it is like it is now with me. Writing articles, giving conference talks, appearances on podcasts and streams.

The fact of the matter is this. I have had to repeat myself it seems a million times over. And over. And over it seems year after year after year since 1999. That's 24 years if you're keeping score.

It is the same items of order. Low contrast of text, alternative text of images, empty buttons or input labels. Empty links and missing document language attributes.

Sound familiar&quest; Well if it does, then you know. If it does not, then [I shall point you to the WebAIM Million Report](https://webaim.org/projects/million/) which only goes back the past five years. I can tell you with conviction that I have been harping these things over and over for longer than that. Ten-plus years at least.

## The Question

> Why do accessibility professionals scream at us when we&hellip;

I am not going to speak for the accessibility community as a whole, but if my colleagues and accessibility professionals agree, then you can bank on it.

**We have told you over and over again. Time after time, year after year. Most of you do not listen or care enough to listen.**

Or when you see something we post, like _"Hey, if you're doing this, please don't. Please do that."_ and then you post:

![A post about accessibility professionals not telling developers what to do when something is not done to their understanding](https://res.cloudinary.com/colabottles/image/upload/v1693929327/a11y.jpg)

As you see in my reply, I have told you. I have posted on my blogs, on other sites, on message boards and in social media circles about what to do but you do not listen or you do not care enough to listen. Maybe you do&quest;&excl;

Maybe, you care enough to actually see it, but you do not retain the information, and then when you see another post, you ask me again (yes, this happens!).

I have told you. I have seen the suggestions, the tutorials, the guides on how to make something accessible without mucking it up and yet, 95-99% of the internet is _still_ inaccessible (I lean towards 99%).

The reasons are your own, but when you snap back at me with "Why do you scream at us, tell us what we're doing wrong!" I have. I mean, **I have**.

```css
<button>This is a cool button</button>
```

is more accessible and easier to implement than:

```css
<div role="button" aria-label="A button as a CTA" aria-labelledby="IdOfSomethingUnrelated" onClick="Do something JavaScripty()">This is a div disguised as a button</div>
```

A div has no semantic meaning. More often, you see a `<div>` as a "wrapper" in the times since HTML5. That one container to rule them all. Then you get into your HTML5 landmark elements (e.g., `<main>`, `<section>`, `<nav>`, `<footer>`, etc.). But I **have** told you.

## The Examples

> Please put alternative text on the image you posted on Twitter.
>
> Please use better contrast for the text on this because I cannot read it.
>
> Screen reader technology will not read a label because you have forgotten it.
>
> You are not shipping your machine. A screen reader will skip over all this.
>
> Who do you want to exclude when you make this inaccessible&quest;
>
> Please use the button element. It is more accessible than a div.
>

One example: Flashing video content on the former Twitter. I asked the original poster (OP), _"Please add a content warning for people that are prone to epileptic seizures and other vestibular issues, thank you."_ Just to have some clown reply with _"Well then don't watch the video."_

Well, it is easy for someone that is abled to say that and dismiss the disabled community with their ableism and ignorance. They do it every day online. Developers and designers included. More in the developer space than the designer space. Because _"move fast and break things"_ or _"coding is my life, here are ten reasons why you should do what I list here on Twitter."_

If you're going to blatantly dismiss the disabled community and exclude them, then prepare for that backlash. Because it is deserve and justified. Since the internet became public and more and more disabled people try to gain access, **you** are the barrier.

and there are many more examples. You don't have to look too far to find them on Twitter.

## The Burnout

Developers will experience burnout if they are not cognizant of the amount of work they are doing. It is inevitable. Well, accessibility professionals do too. Tenfold.

I'm tired. I'm burnt out. I'm sad, depressed, struggling, tired, tired, tired. I am the parent, developers and designers, and everyone at the organization(s) that I have to tell over and over again, are the child.

I have scolded you, I've finger-wagged, I've publicly shamed, I have educated, I have suggested, I have done everything in my power until I am blue in the face and angry,  exhausted, and exasperated to try and get it through to you that accessibility for disabled people matters. You, most of you. The majority of you, have not listened. You don't care.

I am burnt out. I'm the beyond tired parent with all the children running around wreaking havoc. I need a vacation from you but I cannot because I have got to look over you and make sure you're not burning the house down. Yet, I don't know about the small fires that have already been set around the house. Only the small fires I can see in the room I'm in.

## The Education

There are those that are happy to help and answer questions because they are passionate about accessibility and want a more accessible Web and a level playing field for people with disabilities. I'm always happy to say, "Here is why this isn't an accessible solution&hellip;"

There are those that will virtually spat at you and block you or admonish you, or scold you, or tell you to _"fuck off"_ (Yes, this has happened to me). Whatever their personal issues, leaving those aside, they are fed up way beyond what anyone can comprehend. Because they have been repeating themselves over and over and over again.

The one's that help, the helpers&quest; Just send me a DM, or a post and ask. Or do an internet search (search engines still exist. Fewer now than when I went online, but they are there!) for the solution! If you question that, please ask!

## The Solution

Ask. Simply stated. Ask.

## The Takeaway

There is a group of people that need a fair and equal Web, the disabled community. For decades, they have been fighting on and off the Web for equal access. Hardly anyone listens. If anyone does listen, how many of them act on that&quest; A few.

You see a post, it suggests something but doesn't explain why, but you don't use the back channels to ask. That is on **you** that is not on the person that posted the suggestion without a solution. Just because you cannot see it does not mean that it is not there. It is.

It is a never-ending perpetual circle of grief and pain for me that I have to look at something online and pass it by because I have said it a billion times, _"Use alternative text for your images for people who use screen reader technologies or assistive tech, please"_

It's the constant merry-go-round that you get spinning so fast, you jump on and spin for an hour and you feel ill and like you are going to throw up.

That is the current state of accessibility. Every time someone ignores a suggestion, I get ill. Because that person doesn't care. Accessibility is a right, **NOT** a privilege.

That said, you wonder why we shout it out on socials&quest; Read this article again.
