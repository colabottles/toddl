---
title: An Event Apart 2018 - Wrap-Up Edition
description: The wrap-up article I authored in 2018 after An Event Apart.
date: 2018-05-28
tags: 
  - conference
  - boston
layout: layouts/post.njk
---

### An Event Apart Boston 2018, Boston, MA

**_Originally posted on my old site in installments, this has been compiled into one post._**

Today started off, three days of design and web at the Renaissance Boston. So running on no sleep for the past 40 hours, I toughed out a fantastic first day of speakers at An Event Apart.

As with every AEA, it was kicked off by Jeffrey Zeldman, speaking first about Engagement and the Content Performance Quotient.

<blockquote cite="Jeffrey Zeldman">If a customer spends 30 minutes on our site, was she engaged&hellip; or frustrated?</blockquote>

Speed of Usefulness, how quickly can you get the right content to your customer? How quickly can you solve their problem? What is the shortest distance between the problem and the solution?

Content Performance Quotient (CPQ). The time it takes your customer to get the information she came for. The time it takes for a specific customer to find, receive, and absorb your most important content.

<blockquote cite="Jeffrey Zeldman">FAQs are the junk drawer of content.</blockquote>

Jeffrey always kicks off AEA with relevant and thought-provoking talks. It made me think about the site for the company I work for and the &ldquo;FAQ&rdquo;-t, we have one item on the FAQ. The fact that the site is &ldquo;pretty garbage&rdquo;.

Once again, Jeffery delivered.

Next up, was Yesenia Perez-Cruz who spoke about Scenario-Driven Design Systems.

A unified design system is essential to building better and faster; better because a cohesive experience is more easily understood by our users, and faster because it gives us a common language to work with.

A good design system feels cohesive, unified and connected.

Successful design patterns don’t exist in a vacuum. Successful design systems start with content and people.

The differences between a successful design system and telling the story of her experience at Vox Media. The best way I saw her talk put&hellip;

<blockquote cite="Jeffrey Zeldman" class="twitter-tweet">.<a href="https://twitter.com/yeseniaa?ref_src=twsrc%5Etfw">@yeseniaa</a> killed it at <a href="https://twitter.com/hashtag/aeabos?src=hash&amp;ref_src=twsrc%5Etfw">#aeabos</a>. &mdash; zeldman (@zeldman) <a href="https://twitter.com/zeldman/status/1011270559697645568?ref_src=twsrc%5Etfw">June 25, 2018</a></blockquote>

Yes, she did. what I took away from her talk was to let your user's needs define the building blocks you will need for your design system (if you even need one… more on that shortly). I can carry this to the table when I get back to the office and weigh heavily if we do indeed need a design system or not.

Next up was Una Kravets, who spoke on &ldquo;Why Design Systems Fail&rdquo;.

A Design System can be a style guide or visual pattern library. It can also be design tooling, a component library, voice and tone guidelines, design usage documentation and more.

I’ve been contemplating a design system and pattern library since I saw Brad Frost speak last year. We may be too small to do so, I have a lot of research to do, but a lot was clarified by Una today.

What is a design system? (Something I had a little insight into from last year’s talk and now this one), Why Design Systems fail, what are some characteristics of a happy design system. communication between devs and design, solid architecture, buy-in. The list goes on and on.

She showed some examples of design systems, voice and tone, MailChimp, DigitalOcean, Carbon, Solid, etc.

A successful design system is like a successful exercise program. Once you stop using it, you lose all your progress.

I’ve never had a successful diet, so I will shoot for a successful design system.

So much to soak in after the first half of the first day today, and then after a quick lunch, a surprise (to me, I wasn’t expecting this part) Mike Essl who had designed the website, many moons ago for They Might Be Giants. A site I used to visit daily and I loved the look!

Mike spoke about Cooper Union, the school he attended and all the rich history of people that attended and the things they had contributed to the world was staggering, to say the least! That school has had some rich history and very prolific people walk through their halls, indeed.

Same Bat-Time! Same Bat-Channel! His love for Batman and the massive resume Mike has is absolutely stunning and impressive some of the work that he has done or contributed to.

The began the second half to the day and the part of the day I was waiting for, some more light shed on CSS Grids and the new direction of web design and CSS by the next three speakers, Rachel Andrew, Eric Meyer, and Jen Simmons.

Rachel started with &ldquo;Graduating to Grid&rdquo;. Telling the audience to understand CSS, you don’t have to memorize everything, just have a great understanding of it. Understanding the cascade, of Cascading Style Sheets, inheritance, specificity. You don’t need a grid-based solution to everything, build your own framework, and Rachel even spoke about Bootstrap! **_GASP!_**

<blockquote cite="Rachel Andrew">Don’t be afraid of the future of CSS Grids, be excited!</blockquote>

Then Eric Meyer took the stage to discuss Feature Queries. What are the pros and cons? Where are the strengths and weaknesses?

Feature Queries examples.

```css
  @supports (prop: val) { /* CSS goes here */ } 
    @supports (--css: variables) { 
      html {
        --color1: navy; 
        --color2: red;
      } 
      html.help {
        --color1: teal;
        --color2: maroon;
      } body {
        color: var(--color1);
      } 
      .highlight {
        color: var(--color2);
      } 
    }
```

```css
  @supports (prop: val) {
    /* CSS goes here */
  }
  
  @supports (--css: variables) {
    html {
      --color1: navy;
      --color2: red;
    }
    html.help {
      --color1: teal;
      --color2: maroon;
    }
    body {
      color: var(--color1);
    }
    .highlight {
      color: var(--color2);
    }
  }
```

How to put all these new CSS features to work for you right away? I’m going to do a lot of experimentation with these features soon, I hope. Another great talk by Eric.

And the day ended with Jen Simmons discussing the phases of the web that we have seen throughout the history of the web. From simple HTML to Responsive Web Design (RWD), Jen has brought forth the term Intrinsic Web Design to the forefront.

The truncation joke was a good one as well.

<img src="https://res.cloudinary.com/colabottles/image/upload/v1585002461/images/truncation_wnesil.jpg" data-src="https://res.cloudinary.com/colabottles/image/upload/v1585002461/images/truncation_wnesil.jpg" class="lazy" alt="A slide from Jen Simmons talk on Intrinsic Web Design at An Event Apart Boston 2018">

There is so much that can be done with web layout these days and it is exciting, Jen touched on some key points on ways to contract and expand space, new possibilities for flexibility, columns and units, change in how we use the viewport, and programming to all four edges of the viewport.

Rachel and Jen both have been the catalyst for changing the way we look at the web today, and I am very grateful and fortunate to have seen them both speak for two years running now. They have both shed light on CSS Grid and I understand a lot better now than I did when I went into AEA last year by miles.

&hellip;and I cannot forget to mention that I got to see my friend Claudia Snell again!

If you are a speaker and happen to see this, and if there is anything I missed upon, key points perhaps, then please reach out and I can certainly add those. 

### Day Two 

Well, it is finished and as usual the second day of speakers was as good as the first!

Jeremy Keith kicked the day off with his talk and what a talk it was! The way the web is changing it can be overwhelming and exhausting. What tools should you learn and use and how long will those tools be around?

Jeremy brought everyone in attendance back in time, discussed the present state and walked us on a tour of the future in working on the web. From HTML/CSS/JS to frameworks and libraries and all the way to Progressive Web Apps, Jeremy taught us if we learn from the past, we can make sensible choices in the future regarding our work on the web.

<blockquote cite="Todd Libby" class="twitter-tweet">Internet Pace Layers with <a href="https://twitter.com/adactio?ref_src=twsrc%5Etfw">@adactio</a> <a href="https://twitter.com/hashtag/aeabos?src=hash&amp;ref_src=twsrc%5Etfw">#aeabos</a> <a href="https://t.co/3U1C6ETHEz">pic.twitter.com/3U1C6ETHEz</a> &mdash; Todd (@toddlibby) <a href="https://twitter.com/toddlibby/status/1011602011048038402?ref_src=twsrc%5Etfw">June 26, 2018</a></blockquote>

Then on to Donna Lichaw, who taught us on how to convey a story to your customers/clients. The better the story, the more likely you will want to use a product, pay for a product, tell others about the product. A &ldquo;story first&rdquo; approach to building websites, apps, and more that draw customers in, get them excited and keep them engaged for a long time.

<blockquote cite="Donna Lichaw" class="twitter-tweet">The better the STORY behind your product, the more likely folks are to try it, continue to use it, pay to use it, and recommend it to others. <a href="https://twitter.com/dlichaw?ref_src=twsrc%5Etfw">@dlichaw</a> <a href="https://twitter.com/hashtag/aeabos?src=hash&amp;ref_src=twsrc%5Etfw">#aeabos</a>&mdash; zeldman (@zeldman) <a href="https://twitter.com/zeldman/status/1011620432028545024?ref_src=twsrc%5Etfw">June 26, 2018</a></blockquote>

Make things that go __BOOM!__

Then on to Val Head who brought to the table this year, Building More Expressive Products. Using animation and sound, you can bring a whole new level to the sites you create or the projects you are working on and Val showed us a little bit of how to harness the design details from motion and sound to build overarching themes.

Using examples from TunnelBear, Authentic Weather and MailChimp, and the way they use animation to express their brand with personality. How we style for animation and what feelings do we aim for. Calm? Strong? Energetic? Animation on the web can bring a website or brand to a whole new level of personality.

After lunch, the panel opened up with Rachel Andrew and Jeremy Keith. Discussing the positives (as well as the negatives) of working with CSS Grid Layout and how we can begin leveling up our Grid skills.

Trent Walton followed up the lunch hour with his talk on third-party scripts, how many we have loading on our sites, ways to check the speed of our sites with all the stuff we have loading on them and to be honest (when I ran a check) I nearly fell over in my chair on how much it takes and how fast it is to load my old site.

Trent also shared ways to include third-party scripts and services on our sites. Benefits and concerns about those third-party scripts. Using your ad blocker versus not and seeing the difference with the preferred browser inspector of your choice. A great talk and his first time speaking at AEA. Job well done!

Delivering a performant, accessible, responsive, scalable website isn’t enough: I also need to consider the impact of third-party scripts.

Derek Featherstone followed with his talk on Inclusive UX. His slides and talk had Star Wars integrated into it, so I was hooked at the start.

<blockquote cite="Derek Featherstone">Accessibility is an outcome. Inclusive design is a process.</blockquote>

Inclusive UX Design is &ldquo;the intentional facilitation and crafting of the interactions within an ecosystem that incorporates inclusion as a core value.&rdquo;

Speaking about communication with all involved early in the process can make things a lot easier through the rest of the process. Reverse engineering a site, basically breaking it down in pieces to see where things are not right or went wrong. A great example was a site that had some pretty sketchy colors and a flyout menu that went three-wide and covered a lot of content area.

Color palettes that are good and bad for accessibility, design intention, CSS class name reviews, high contrast tweaks&hellip; a lot of stuff regarding accessibility to soak in, well worth the price of admission!

And to wrap up Day Two was Gerry McGovern who brought the house down with a great, humorous talk about Intuitive Navigation, and do I mean bringing the house down with laughter!

Discussing sites that it seems like it takes an eternity to finally get to the point of what the navigation was for. In a couple cases, the Gatwick Airport and Brussels Airport just to get online at these airports took 5 or more steps through a process to connect! And the right way to do it, Dublin Airport. Click once and you’re connected.

<blockquote cite="Gerry McGovern" class="twitter-tweet">Designing an intuitive navigation - Gerry McGovern&#39;s presentation at An Event Apart 2018 <a href="https://twitter.com/hashtag/customerexperience?src=hash&amp;ref_src=twsrc%5Etfw">#customerexperience</a> <a href="https://twitter.com/hashtag/informationarchitecture?src=hash&amp;ref_src=twsrc%5Etfw">#informationarchitecture</a> <a href="https://t.co/e4ySp0WLjl">https://t.co/e4ySp0WLjl</a> <a href="https://twitter.com/hashtag/aeabos?src=hash&amp;ref_src=twsrc%5Etfw">#aeabos</a> <a href="https://twitter.com/hashtag/aeaboston?src=hash&amp;ref_src=twsrc%5Etfw">#aeaboston</a>&mdash; Gerry McGovern (@gerrymcgovern) <a href="https://twitter.com/gerrymcgovern/status/1011675900482596865?ref_src=twsrc%5Etfw">June 26, 2018</a></blockquote>

It was a humorous trip through the navigations of some example sites that had me in stitches, as well as the entire crowd. Icons for navigation, &ldquo;Most Popular&rdquo; navigation blocks, labeled versus unlabeled icons, hidden versus unhidden menu systems that result in huge losses in daily engagement.

Even why and how to avoid (or even kill) the hamburger menu (something I am guilty of implementing on a few sites).

I learned to reduce confusion and increase speed and simplicity for our customers at the company I work for, and had a lot of hearty laughter while learning.

That wrapped up Day Two. As much as I would like to add more quotes, pictures and details, I have got to get some sleep. Tomorrow will be a very long day. I’ll have a wrap-up on the entire day tomorrow late. Tomorrow consists of A Day Apart, with Eric Meyer. &ldquo;Navigating the CSS Renaissance&rdquo;. I look forward to it.

Until next time, that is all.

### A Day Apart with Eric Meyer

Today was sadly enough, the last day of the conference. A Day Apart with Eric Meyer. A full day with Eric capped it off in style&hellip; literally.

We went through some examples of Grid, flexbox, production features that are ready to roll and we can use now. Writing modes, the fact that now, we actually can use the web like we did and do with print.

Feature and media queries. Positioning of objects and making them fit in the viewport, shadows, borders, auto margins, shaping content and so much more! definitely worth the extra day!

All-in-all, it was a fantastic three days of design and code. Phenomenal speakers, a great crowd, a great venue. It surpassed my expectations. It was in a new venue, new location, so I wasn’t so sure, but now that it has come and gone, it was well worth it.

I got up the courage to talk and mingle with most of the speakers. Got to meet Jeremy Keith, after all these years. I went in 2008, I believe Jeremy came back in 2010, I wasn’t able to and did not attend until last year. So it was a thrill for me, fanboy moment. First site I linked to was Jeremy’s and I have 4 of his books. (_HTML5 For Web Designers_, _Bulletproof Ajax_, _DOM Scripting_, and _Going Offline_).

I tend to ramble, so I think I did a little bit when talking, but the amount of great information, from great speakers, that are very friendly.

I highly recommend anyone thinking of going, go. Get your company to let you go, get them to send you there, make your pitch and sell them on it to advance your knowledge. You will be sure to leave there feeling like you have gained a lifetime of knowledge.

I got to see Jeffrey and Eric again and fanboy out like I always do, talk with them, they were so very gracious and put up with my fawning over the event like I always do and just have fun for three days.

Thank you to all the speakers. I apologize for my over-enthusiastic fanboy-ing, fawning and swooning like I do each year beacause this is the best conference by far for front-end fossils like myself. Tremendous jobs from all! Thank you to those behind the scenes, that set it up and make it happen.
