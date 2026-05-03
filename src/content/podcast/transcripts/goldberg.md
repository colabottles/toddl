---
title: Josh Goldberg
description: Our Interview with Josh Goldberg
date: 2023-02-21
layout: layouts/post.njk
---

## S3:E1

[00:00:00] Todd Libby: Welcome to the Front End Nerdery Podcast season three, and I'm your host Todd Libby. And my co-host is none other than the one and only, the incomparable Mr. Homer Gaines
[00:00:18] Homer Gaines: Okay, I'm just gonna go ahead and leave right now. Thanks for having me, alright.
[00:00:26] Todd: And
[00:00:28] Homer: What’s good?
[00:00:28] Todd: we have with us author, speaker, open source maintainer on projects in the TypeScript Ecosystem. And from what it says here on the fun fact, a espresso machine, connoisseur of sorts, we have Josh Goldberg. Josh, how are you?
[00:00:48] Josh Goldberg: I do it all. I'm good. I'm good. Thanks for having me. I feel like I've had a few too many espressos right now cuz I am currently in high excitement mode. So, it's good to be here,
[00:00:58] Todd: Gotcha. Well, it's great to have you here. I've been wanting to actually get you on the podcast for a while now because I saw you on a podcast, and I totally spaced out on which one it was. But you were talking about, I think it was, was it, was it Syntax, maybe? Were you on Syntax?
[00:01:20] Josh: I believe so, yeah.
[00:01:22] Todd: Might have been Syntax.
[00:01:24] Josh: One of, one of that family of podcasts.
[00:01:26] Todd: Yeah, or Shop Talk, one of those two. But I don't have the book yet, but this weekend I'm gonna go out and buy the book because I am interested in diving into TypeScript myself. So, let's go into the book, shall we?
[00:01:42] Josh: Yeah.
[00:01:44] Todd: For anybody like me, my first question would be, I've played around with it enough to try and, try to fix the errors that show up with the squiggly red lines we all love. And that's how I learn how to, kind of fix things. But with someone like me who is not even dangerous enough to know a little bit about TypeScript, does, is the book an, an introduction to those people like me that are going in kind of like feeling it out and ready to dive in?
[00:02:26] Josh: Yes. By the way, I realized I've been Googling the backward. It was background, it's JS party might have been the one I was on. But yes, the book is geared towards people who have JavaScript fundamentals down mostly, maybe not expert level, maybe not, you know, understanding symbols and bigint and all this, but you understand maybe closures, scoping, variables, and that's it. You don't need to know C Sharp or Java or C plus plus or Ruster, any other languages that have types in them. You just need to have an enthusiasm for writing JavaScript that gives you better dev time tooling, better documentation and bug catching before you run it. I assume you have enthusiasm for all those things I've described.
[00:03:07] Todd: I, I do have enthusiasm cuz I'm getting back into coding once again after couple of years of,
[00:03:15] Homer: Speaking of rust.
[00:03:17] Todd: Yes, very rusty here.
[00:03:18] Homer: Okay.
[00:03:19] Todd: Very, very rusty. What appealed to me was some of the benefits that I've read about, TypeScript, one being less syntactical clutter. Can you go into is, so
[00:03:35] Homer: Yeah.
[00:03:36] Todd: my, my question is, is it easier? Cause if I'm looking at something and there's just a lot of what I, what my brain perceives as gibberish, is there a lot less of that with TypeScript?
[00:03:52] Josh: Less is a hard word to quantify or qualify.
[00:03:55] Homer: Yeah. I was about to say the same thing. I wouldn't say you find less. Because like I've seen some TypeScript that looks like it was obfuscated and it, it was written straight out. So,
[00:04:08] Todd: So,
[00:04:08] Homer: you know, I'm with you when it, when it, when it looks very esoteric, you're like, what in the world did you, would you write?
But then you also have some devs who have nice, clean, approachable code where they write for, not for those who just are like matrix level, but for the layman, for, for us common folk that just like wanna be able to read it and understand what's going on and make changes accordingly if we need to. So, I wouldn't say it does that,
[00:04:38] Todd: Yeah
[00:04:38] Homer: but depends.
[00:04:39] Todd: Yeah
[00:04:39] Homer: on the authoring style, so to speak.
[00:04:42] Todd: Yeah. Well, like any other code I guess you could say.
[00:04:45] Homer: Yeah.
[00:04:45] Todd: So, let me ask you this then, Josh. What are the benefits of type of TypeScript of using TypeScript?
[00:04:54] Josh: Good question. At the cost of having to learn a little bit more syntax, which one used either improperly or to describe complex logic, as Homer said, at risk of becoming obscure, seemingly obfuscated looking. You get a few things. You get, and we can dive into each of these in detail. Of course, you get better documentation of your code a better standard than any of the existing say JS doc style comments in JavaScript to describe what's supposed to happen.
The intent, not just the values. You get bug catching or misuse catching, or because you're type annotating your code, type two can let you know if, say you pass a number to somewhere that's supposed to be a string. And you get better development time tooling. TypeScript can help you find all references, go to definition, rename, refactor, and so on. So, you become a slightly slower developer in the very, very short term, but a much faster, much more stable, much less likely to cause bugs, developer in the long term.
[00:05:55] Todd: Okay.
[00:05:56] Josh: And I'll give one example of why this is really nice that I think might speak to your interests. Accessibility. I have at times used TypeScript to enforce that certain props are provided or certain attributes are given to elements. Such that you can make sure people are providing, let's say either a label or a description of what labels the element. Which means that you can, before someone even runs the code, make sure that the things are, that are required for some area of code are provided to it. And you can do that by enforcing they, that they, they actually provide those things and you can document that they exist and you can, even with fancy lint integrations for real power users give ways to automatically fill that out for people that wouldn't have been easy or even possible with just JavaScript.
[00:06:42] Todd: Oh, that
[inaudible]
[00:06:43] Todd: Okay. The, the, ok could, so that intrigues me more and more and more then.
[00:06:49] Josh: You know, I, I'm very interested in seeing how this speaks to you.
[00:06:54] Todd: Yes. Yes. I'm, I'm trying. Yeah, it's, it's I'm a stickler for accessible code and everything, so. No, I appreciate that. Homer, I don't know if you have any questions. I don't have the book right now, so kind of going into this and I, I'm freely admitting that I'm wheeling that I'm winging it right now in this episode, because I did, I, I did my, a little bit of my homework and I was looking at your, your website, Josh earlier yesterday, and the book I just got caught on, on the book, but Homer, I don't know if you have any questions about the book.
I know we had.
[00:07:31] Homer: Honestly, I started digging into it last night, but as Josh know, we're all coming down off of the high of being at that conference from earlier this week, which was just wild.
[00:07:43] Josh: Yeah
[00:07:43] Homer: And you know, I, we were traveling all day yesterday just trying to get home, flights being delayed and things. So I started looking at it last night and trying not to trying not to crash.
Cuz you know how you, when, when you get off the plane, you're wired for sound, but at the same time you're just exhausted. That's about how I was.
[00:08:01] Josh: Oh yeah, oh yeah.
[00:08:01] Homer: So, I started digging through it. And one thing that really caught my attention, because I want, I want you to explain this, talk about how you went into this, but Mario Bros,
Really I'm reading through and I saw that. I was like, yo, I need to see this. And then you said that it was less than stellar, basically not your best work. So, when are you doing the rewrite so that we can we get some more of this better work of yours then?
[00:08:30] Josh: Feel like I should explain myself here. What's happening is Mario related to TypeScript. This, I go into this a little bit more in the, the preface slash first chapter. But, the first large project I worked on this was, I was learning in college. The curriculum was c plus plus and
[00:08:46] Homer: I'm sorry.
[00:08:48] Josh: you know. Thank you. I appreciate it. I really enjoyed how c plus plus gives you really granular control. It's so satisfying, massaging the bits, but I would never wanna do anything productive with it. It's just so slow. But I wanted to learn JavaScript because I really liked the web, I liked the immediacy of it. I'd already made kind of a toy HTML website to show my terrible Photoshop creations. And I also am a very nostalgic person and I thought it would be cool, it would be fun. Nice quick project to just remake the original Super Mario Brothers in JavaScript. One year later it goes viral because one year later I've somewhat completed it. It is garbage code. Just a real trash fire, you know, hundreds of global variables.
No coherent organization. If only I had written with TypeScript. Haha. So, I, I have since converted that project to Typescripts. Unfortunately, Nintendo DMCA ticked down, so like legally took down both.
[00:09:42] Homer: Oh.
[00:09:43] Josh: the website and the repository. But I did extract out the core of the project into a game engine that ostensibly is for any hate bit retro game, but really, it's just for ripping off old Nintendo games. So, I'm saying this in part because I kind of want Nintendo to DMCA, my full screen Pokémon project to get me to stop working on it because it's kind of like a back of the mind thing. I wanna work on it, it's what it sounds like, but I know I shouldn’t spend time
[00:10:06] Homer: Well, the fact that you just mentioned it in a podcast means that at some point in time they may even catch wind of it and then come knocking on it over and be like, yeah, y'all, can you pull that down for us please?
[00:10:17] Josh: Yeah. I mean, I, I think it's a great example of how you can write things in JavaScript without TypeScripts, but it is worse. It is almost always, basically, always worse to write it without the guardrails of type safety.
[00:10:30] Todd: Yeah,
[00:10:30] Homer: at,
[00:10:31] Todd: I'm looking at the DMCA right now.
[00:10:33] Homer: yeah,
[00:10:34] Todd: I wish I could see that.
[00:10:36] Homer: One thing that I learned especially when I started learning TypeScript, cuz I didn't start picking up, I didn't get introduced to TypeScript until about, I wanna say four years ago. We were in the process, it was one of the companies that I was working with.
We were in the process of rewriting all of our JSX and converting it over to TypeScript. And having those guardrails up like you, like you had mentioned, for some reason I caught on better with, you know, when I'm setting up my bars, when I'm setting up my props that are going into the, into whatever component that I'm building, and knowing what the type was supposed to be.
Because we also set up the rule that we couldn't use any, so everything had to be strongly typed. We were doing strictly ty, strict, strict typing. So knowing that going into what I was writing helped me author the code better because I knew what to expect, it also cut down all the, all the clever hacks that you could think about doing that may actually inadvertently switch, you know, the, the, the variable that you're working with and introduce a bug somewhere down the line.
But yeah, it would, for me, it was, I wouldn't say easier, but it was more relaxed once I started working with TypeScript as opposed to just vanilla JavaScript,
[00:12:11] Josh: That makes a ton of sense. I hear that a lot.
[00:12:12] Homer: So.
[00:12:13] Josh: Yeah, that, that you can't do the hacks as much anymore, but that’s probably for the best.
[00:12:20] Homer: Yeah. Just in front end in general, like, I don't, I am a rivet and weld type of person. I don't like bubble gum and duct tape holding code together. That's, you know, that's a pain in the butt to even have to deal with, to even down the line. If there is a bug or something goes, goes awry, you know how you have to come back in and make those changes.
And I feel like with TypeScript, it's more of a weld.
[00:12:53] Josh: Yeah.
[00:12:54] Homer: dealing with it. So,
[00:12:56] Josh: What I see in a lot of projects too is that.
[00:12:58] Homer: Yeah.
[00:12:58] Josh: because you have the sort of reinforcement of TypeScripts, the ability to let you know when you do something wrong, you're actually more empowered to make the big refactors and changes when you do want to change things up. In the book, I think I refer to it as freedom through restriction.
[00:13:13] Homer: Yeah, I saw that. I saw that.
[00:13:16] Josh: It's, I think it's really nice. It's a little counterintuitive, but it, I mean, I refactored a game engine from like one paradigm to another, and I can't imagine having done that without TypeScript.
[inaudible]
[00:13:27] Homer: When I was reading that, right when I, when I was reading that I applied it to working with design systems because, you know, when you introduce a design system, sometimes, you know, creative, they get upset because now they feel constricted because they have to work with inside the bounds of the design system itself.
But that freedom through restriction that you have is the exact same thing that I like to convey. I have never said it in the term or in, in that phrase. I was like that phrase is dope. I'm still in that. So just, just letting you know.
[00:14:02] Josh: I, I would love it if you stole it, please do.
[00:14:04] Homer: All right. Got, gotcha. So yes. So, tell, go ahead.
[00:14:09] Todd: No, go ahead. I got a totally different question.
[00:14:11] Homer: Oh, go for it.
[00:14:14] Todd: For someone like me who likes to dive in with both feet, I don't read the manual and I just wanna learn.
[00:14:26] Homer: That explains a lot.
[00:14:27] Todd: That it does explain a lot.
[00:14:28] Homer: That ex,
[00:14:29] Todd: you should see some of my older code, like my Pearl and PHP stuff.
[00:14:33] Homer: How many times did you hit the bottom of the pool?
[00:14:35] Todd: Every time. Every time.
[00:14:38] Homer: No diving. Okay.
[00:14:40] Todd: Sometimes headfirst.
[00:14:41] Homer: Exactly.
[00:14:43] Todd: Would this book benefit me?
[00:14:46] Josh: Yes.
[00:14:47] Todd: Okay.
[00:14:47] Josh: And I'll tell you why. You don’t do things exactly the way I typically do, but that's okay. There are all sorts of different ways of learning. The book also comes with a set of projects. They're online open source on my GitHub, or rather on the books, GitHub org. And if you want to, you can just go into each of the projects and do the projects.
Heck, you don't even need the book for them, just refer back to the book as you need if you want. But I do think that as you are going through code and learning the intentionally hard way, which things you don't yet know, it is really useful to have a description of the foundational concepts behind it. You can learn why it is that TypeScript doesn't let you assign a string to a number or vice versa and learn that the hard way. But it's also really nice to know that, okay, TypeScript has a type system that differentiates between primitives like string and number and literals like high and 1, 2, 3. So going back and forth between them in whatever order, as long as you're going back and forth between those theoretical and practical understandings is I think a good way to learn no matter what.
[00:15:48] Todd: Yeah. Okay. So, then this book definitely is for me.
[00:15:53] Homer: Oh yeah, it definitely is because the way that I like to learn is hands-on by actually doing it. But what I also prefer is having someone who ex who can explain the why something has to be done as opposed to, this is just how you do it, and just let it go out there. Because when, when you're doing it that way, it's almost like you just memorize the answers for, to a question without actually internalizing and understanding the full meaning of the answer.
And that's what I like about your book as well. So, as I was reading through it, I was getting the why certain things are the way that they are. Don't ask me to pull those out right now, because it was as I was perusing through it and I was like, yes, this is exactly what is speaking to me. I get it. But I like that style that you have.
So,
[00:16:52] Josh: Thank you, I appreciate you saying that.
[00:16:52] Homer: But there was one part that, that I didn't check on and I'm looking now, so yeah, I'm cheating. I'm, I'm Googling, but old school way. Do you go into testing?
[00:17:02] Josh: No.
[00:17:03] Homer: Okay. Okay. Because that was gonna be my other thing. Look with like testing, writing, test with TypeScript and getting through. Cuz that's actually the next level of where I am in, in my TypeScript journey.
[00:17:19] Josh: So there are a couple reasons why I don't go into testing in the book, even though I would have loved to.
[00:17:23] Homer: As it would've been another book.
[00:17:25] Josh: Yeah, pretty much. I mean, it would've been another book and it would've been another book every six months because who knows.
[00:17:30] Homer: After your facts.
[00:17:31] Josh: I just switched from jest to vitest in a bunch of my projects, and I'm thinking of switching to backward to something else.
It's a, the whole situation, they're all great in different ways.
[00:17:39] Homer: Yeah.
[00:17:40] Josh: But also I tried to avoid any frameworks or languages other than TypeScript and JavaScript and any live reviews in the book, because A, they all changed so much. But B, I wanted the book to really focus on the language fundamentals and really practice the language, not just being, you know, high and mighty theoretical.
This is structural typing, but like really understanding TypeScripts and how to write TypeScript itself.
[00:18:02] Homer: Right.
[00:18:03] Josh: Because you can take those concepts to any framework, library, whatever that, you know, it can be used with TypeScript. A testing is a really interesting example of that testing code tends to be a little different, not significantly, but a little different than production, whatever you call it, code, non-test code.
But it uses the same foundational fundamentals. So, if you understand, say implicit NE’s, how function typing.
[00:18:26] Homer: Right.
[00:18:26] Josh: works and so on, you can generally do testing, hopefully,
[00:18:31] Homer: Yeah.
[00:18:31] Josh: depending on the test framework.
[00:18:33] Homer: Gotcha, gotcha. Yeah. Yeah. We're, we're using jest now and I like it. I actually found Cypress relaxing. Like I actually, like, it's weird. I like to debug Cypress test, but that's a whole nother therapy session that we could go into with that one. So, let's talk about your talk that you that you did this weekend, or it feels like it was the weekend.
It was literally over the week. Let's talk about that.
[00:18:55] Josh: Yeah
[00:18:55] Homer: Let's, let's talk about your, your, that conference presentation. How'd you feel that went?
[00:19:00] Josh: I really liked it.
[00:19:01] Homer: Actually, what was the title and all that good stuff for, for those out there in TV land that don't know what this is,
[00:19:08] Josh: Yes. For those poor souls who did not attend that Texas 2023 specifically. Sorry, Todd.
[00:19:14] Homer: He don't count.
[00:19:19] Josh: Ah, well.
[00:19:19] Homer: What'd you expect?
[00:19:21] Josh: We’re lifting our hand here like
[00:19:21] Homer: Exactly.
[00:19:23] Josh: So, I gave, I gave two things in that comf. I gave an eight-hour TypeScript workshop, which was actually the first eight hour workshop I've ever given. Though it feels weird to call it that because we had a one hour lunch break and project breakouts and five to 10 minute breaks every 40 minutes. But then also, and this one, I think you, and you and yours who were attended and were absolute, absolute fantastic audience members to have, you know, cheering in the back. It was fantastic. Thanks to you, your, your family. But it was design systems maximum consistency, minimum effort, or some variation of that.
[00:19:57] Homer: Yeah.
[00:19:58] Josh: And I think you and I both are enthusiastic about both design systems and TypeScript, which is a very nice thing to, to bond on. But my, my thesis for the talk was that people are constantly rewriting the same thing over and over again. I started the talk with a, has this ever happened to you? Image of like nine buttons each, slightly different, you know, different radius, different color slightly, some of them inaccessible for contrast.
Presumably some of them implemented as divs instead of buttons and design systems let you just write something once, have the one good canonical way, and then that's it. No one can waste their time recreating it,
[00:20:32] Homer: Indeed.
[00:20:34] Josh: Which is.
[00:20:34] Homer: And
[00:20:34] Josh: can you imagine living your life not like that now that you've experienced design systems.
[00:20:38] Homer: man, I hon
[00:20:40] Josh: it’s a hack out there,
[00:20:41] Homer: honestly, I don't yeah. I, I don't have enough to pull out, but I would definitely be grasping for some, for some strands of hair that's left to start. You just snatching my head back for that because I remember, I remember when we didn't have it
[00:21:00] Josh: Yeah.
[00:21:00] Homer: And just how varied and fragmented the UI would be and you know, from one view to the next, your application is looking like 12 different other applications.
It was like, why are we doing, and then you had, you had some developers who had a design eye and then you'd have other developers who did not have that design eye and you could tell in those instances. So yeah, having the design systems is just, is just primo. But that, you know what too, that also speaks to the maturity of the organization as well.
[00:21:35] Josh: Yeah.
[00:21:35] Homer: Cause not every organization is gonna bring in a design system or feels that a design system is, is worth the time to even introduce, to be able to maintain the branding standards for the company. You know, we, oh well, we're using Bootstrap or we're using, you know, Tailwind to manage all that. It's like triggered.
[00:22:00] Josh: Just a little.
[00:22:01] Homer: Did you,
[00:22:03] Todd: That's, that's for Twitter. That's an argument for Twitter. Let's move on.
[00:22:06] Homer: Did you see the look? Goodness,
[00:22:09] Josh: Oh man
[00:22:09] Homer: it would,
[00:22:10] Josh: it’s all rage and fury coming out.
[00:22:12] Homer: Golly! It's just a comment, Todd. It, it, the reality is people do use it regardless if you and I don't approve of it,
[00:22:22] Todd: Yes
[00:22:22] Homer: or we're not necessarily approve of it, it's not our cup of tea, but still, you know, you have those teams who are using it to build inconsistency in their applications.
And then Josh and I are just like, yeah, let's go ahead and pull in a design system to help with all that. So, you're not doing the, the same thing over and over and over.
[00:22:42] Todd: Yep
[00:22:42] Homer: And yeah,
[00:22:44] Josh: The funny thing is the argument of whether to use Tailwind is not the same at all. It does not need to impact whether you're using a design system. I mean, you, you can use it to build your design system.
[00:22:54] Homer: you can, yeah.
[00:22:56] Josh: Not to Tailwind, I mean it's fine, but yeah. Let's debate Tailwind versus TypeScript, which is a real tweet I've actually seen and it really upset me.
[00:23:02] Homer: Wait, you're serious.
[00:23:04] Josh: I have seen p I think it was a joke, but you never know
[00:23:06] Homer: It had to be that had,
[00:23:08] Josh: J query versus PHP
[00:23:10] Homer: right? I'm,
[00:23:11] Josh: that type of thing.
[00:23:12] Homer: oh, okay. That just, that I can only imagine people taking that serious and then trying to make the leap between the two.
[00:23:18] Todd: I'm trying to wrap my head around this part of the conversation.
[00:23:23] Homer: So, we let, we left you way back,
[00:23:26] Todd: Yep
[00:23:26] Homer:  made a left at Albuquerque, and you just stopped.
[00:23:29] Todd: You did
[00:23:29] Homer: Okay. Gotcha, gotcha, gotcha. Sorry about that.
[00:23:34] Josh: To your point, I think it, it does require discipline on the side of an organization to really adopt and use a design system.
[00:23:40] Homer: Yeah.
[00:23:40] Josh: True for any one good way of doing things. Whether it's a visual sort set of components, one good way or an architectural work, people are always gonna think that they know better and sometimes they do know better, but is that slightly better thing they know really worth the cost of diverging, creating something new, taking the time to create it, and then taking the time long term to maintain it.
Almost always no. So you see this really bizarre pattern where at first you, before design system is even thought of, a company or org's website might look like a bunch of different ones and you can tell which team wrote which page because of how good or bad or different it
[00:24:14] Homer: Exactly.
[00:24:15] Josh: And then you can tell which teams have adopted the design systems cuz they look standard. And that's a different, you can tell which, because oftentimes the teams pages that look best are the teams that don't actually have the design minded people. They're the ones who aren't resisting the design system because they know better.
They're just going along with it. So you get this weird situation where the worse the team is in terms of personnel, staffing at visuals, the better their stuff looks. And then eventually everyone gets onto the design system. This is not every company, but it is a fun trend that I have seen and enjoyed.
[00:24:46] Homer: Yep. It is definitely something that I've seen over the past. I wanna say close to eight years with the two that I've worked on. So yeah, just watching things evolve, but still amazing. Still amazing. Still a fun space to be in. Was it, was it you and I? Were we talking about Canvas?
[00:25:05] Josh: No, what’s up with that?
[00:25:06] Homer: I'm trying to remember who I was having a conversation with. Cause
[00:25:09] Todd: It was about half an hour ago, Homer.
[00:25:10] Homer: Yes, I know it was with you, Todd. But I had it earlier this week and I'm trying to remember who I had that conversation with because we were talking about Canvas and accessibility and, you know, we were, we were going into how these complex it, it started off, we were talking about Flash, the days of Flash and how people started to use Canvas to develop new complex, interactive UIs in addition to obviously with the JavaScript and everything.
And we were talking about how accessibility seems really limited, if at all, inside of these Canvas elements. And then I started digging into it a couple of days ago and I started uncovering all this accessibility information around the Canvas tag itself and how it actually is more accessible than what I thought.
[00:26:08] Josh: Really?
[00:26:09] Homer: Yeah, like for instance say for instance you have a chart, just a graph. If you are inside of a PDF, you would use, like, if you are remediating a PDF, you would describe the chart in a PDF just like you would any other image on a website using alt description.
Same thing with the Canvas element. You can put an image roll or an image, or I mean roll equals image or roll equals figure on a Canvas element, and then use the aria label to describe what it is to apply for more, less of a better word the, you know, the alt description.
And I was like, wait, what? That actually works. And then I did some digging and found out that there was, actually a dom that is exposed within, inside. It's a shadow dom that's exposed inside the canvas element that's been around since like 2014.
[00:27:12] Josh: Really?
[00:27:12] Homer: Yeah, so now I'm in that rabbit hole mode. Now I actually, you know, stop today to come to the podcast. But yeah, I was reading those articles cuz I'm gonna put together just some quick blog posts about it.
But today I learned that yeah, the Canvas element is way more accessible than we, than what we originally, or what I originally assumed, but I don't think a lot of people knew that, except for the hardcore geese that are using it.
[00:27:45] Josh: I did not know. I've always wondered what it'd be like to make a game that's built on Canvas accessible because none of the games
[00:27:52] Homer: Mario Bros.
[00:27:53] Josh: I'm sorry?
[00:27:54] Homer: I said Mario Bros.
[00:27:55] Josh: Yeah. Specifically, Mario and Pokémon. Yeah, for my purposes, because you know, I, I made the UI like the, there's a React or pre-Act now based HTML UI,
[00:28:03] Homer: Nice.
[00:28:04] Josh: UI around them that they come with my game, but
[00:28:07] Homer: Yeah.
[00:28:08] Josh: is just completely like, I, I don't know, like how do you, how would you make that, especially if it's a character running through the screen, like how would you, at what levels would you be able to make that accessible?
It's a lovely investigation. I'm sure. I just haven't gone into it.
[00:28:21] Homer: You know what? In game dev game, game accessibility is almost, you know what, I almost see that industry being years ahead of where we are on the web because of how they are really focusing on it. And you have the companies also coming out with these new, you know, assistive devices to help gamers play.
[00:28:43] Todd: Yeah, very much so. Yes. Yep.
[00:28:47] Homer: Yeah.
[00:28:48] Josh: It’s beautiful.
[00:28:49] Homer: So that.
[00:28:50] Josh: So, it's so nice to see little nuggets of goodness in the world, like game accessibility being light years ahead. That's, that's nice. You know, fills the heart.
[00:28:58] Todd: Yeah.
[00:28:59] Homer: Yes, it does. Yes, it does. Even though you still see the trolls out there talking about what do games need to be accessible, and you just block them quickly and get them on out the way. So, but you were saying like an accessible game. How would we do that? What would that actually look like? So first off, it's a complex image, so we're describing the complex image, but at the same time we're also, so there are ways to make focusable elements inside of a Canvas element.
Like it would actually show a focus ring and things like that. I, I gotta go back to the article, but there's two, there's two commands that, two functions that you have to call. One sets the focus on the focusable element, the other moves the focusable element into view on the Canvas. So, there's that part for interaction.
[00:29:55] Josh: That's so interesting.
[00:29:56] Homer: Yeah.
[00:29:57] Josh: You're not just like making a, a div or whatever, applying a whole bunch of aria and No, it's like a real
[00:30:03] Homer: Yeah. Yep, yep. So, but like I said, I, I, it was something that I was just in earlier today and I'm at the, the high level of, of digging into it. So I'll share more of it once and once I start to uncover a little bit more.
[00:30:19] Todd: The accessible gaming community on Twitter is so big right now
[00:30:24] Homer: Really?
[00:30:24] Todd: and has been for quite a while. So, I would probably even suggest following some of the, the people there too and asking questions.
[00:30:33] Homer: Not just Mike.
[00:30:35] Todd: cuz
[00:30:36] Josh: Sounds good.
[00:30:37] Todd: I've seen a lot of good stuff from that space. So I wanted to talk about your developer evangelism with TypeScript ESLint. And tell us a little bit that.
[00:30:48] Homer: Oh, did we lose him?
[00:30:50] Todd: He has frozen.
[00:30:54] Homer: Let's see what happens.
[00:30:58] Todd: I'm sure he'll come around.
[00:31:01] Homer: We should take this still shot and turn it into a meme.
[00:31:04] Josh: Sorry
[00:31:04] Todd: it, it, it'll be a TypeScript meme by the end of
[00:31:07] Homer: It'll be a TypeScript meme. Yes.
[00:31:10] Josh: We making TypeScript memes.
[00:31:11] Todd: Yeah.
[00:31:12] Homer: Hey, he's back.
[00:31:13] Todd: there he is.
[00:31:13] Josh: Sorry.
[00:31:14] Homer: At.
[00:31:14] Josh: The story is my hotspot on my phone. I lost my phone charger. So now I'm, I'm trying to get to the corner of this apartment that's near the one that actually has the working Wi-Fi. It's a whole thing, but I think, I think this is gonna be good and stable for a long time,
[00:31:27] Todd: Okay.
[00:31:27] Homer: Al right, cool. Groovy. You, you wanna ask your question again?
[00:31:31] Todd: Yeah. So I wanted to, get into the developer evangelism you've been doing around TypeScript ESLint. And explain that to some of the people that might not know about that like me. I know about it, but I don't know enough, again to be dangerous with any hard hitting questions today. So, what is the elevator pitch behind TypeScript ESLint?
[00:31:56] Josh: Sure. There is a, there are two levels of elevator pitch. I can give.
[00:31:59] Todd: Okay.
[00:32:00] Josh: One which I think is convincing enough for it to exist, and then two, which makes it really exciting. The first is that TypeScript ESLint is the tooling that lets you run ESLint and Prettier on TypeScript. So full stop that makes it a very important project because we all like formatting our code automatically with Prettier or similar and ESLint linting our code.
We may not like it, but it is very important and good. TypeScript ESLint also provides a lot of really good lint rules, ESLint lint rules that are tailored to TypeScript code, and it provides APIs that let people's custom lint rules be much more powerful actually use the power of the TypeScript type checker. So for example, we can detect whether you're say using a four in loop over an, an object rather, or sorry, over an array rather than an object, which is kind of a no-no in JavaScript. And we can create a rule that determines whether you are, let's say creating a promise and then not handling it.
Like if you forget to await to something in ways that the TypeScript type checker, like the TypeScript compiler's way of running it can detect, but then maybe not complain about because it's still technically valid code. So this is really great because we see a lot of people writing custom lint rules using our tooling specific to their team, organization, company, et cetera. And then also great because we provide a lot of really powerful lint rules outta the box that help people write better code.
[00:33:26] Todd: So with that said, am I able to go download an extension anywhere? VS. Code, for instance, which is my main code editor and use that when I'm coding with TypeScript?
[00:33:43] Josh: Absolutely, and there used to be a separate linter in the ecosystem called TSLint that was kind of a competitor or equivalent to ESLint, which was, it had the advantage of being its own thing native to TypeScript, which made little simpler, but it, it recreated all sorts of work from ESLint and community plugins for ESLint didn't work in TSLint and vice versa.
So TSLint is dead if you're still using it, kill it. Gone. I was a maintainer on it and like almost all I did was kill it. It was great. I joined the [inaudible]. But no TypeScript is just a parser set of extensions and lint rules for ESLint. So, if you're using the standard ESLint extension in VS code or your other editor, it will work.
[00:34:23] Todd: Okay,
[00:34:24] Josh: similar to how, if you have like any other ESLint extension, like for Vue or Angular or whatnot, it'll, it'll still just work with the ESLint tooling.
[00:34:31] Todd: Okay. Yeah, that I use ESLint, so
[00:34:35] Josh: Great.
[00:34:36] Todd: that's awesome.
[00:34:37] Homer: We use, we use it on our side too, and I love it.
[00:34:41] Todd: I know we, where I am, where I work, we, we use a lot of the, we, it's, there's a lot of TypeScript that we're doing. And I know that is something that we play around with. Now you said in your, your guest form response that, you know, you overhauled the docs. And, I love me some good documentation. So, can you go over what you've overhauled in your docs and I'm, I'm curious also to, you said you fixed a bunch of common user pain points.
[00:35:14] Josh: Yes.
[00:35:15] Todd: What were those pain points?
[00:35:17] Josh: Sure, well the first big pain point was the docs, and I really wanna give a shout out to the, the three other maintainers and types plain. Brad Zacher, who's been doing a lot of work for a long time. James Henry, also a lot of work also created the project along with some folks in ESLint and Sida Chen or Josh Cena, who's a relatively newer maintainer and like really helped us out from the DocuStore site, which is the site generator we're built on. And yeah, we, prior to 2021, end of, I think we didn't have a website. I wanna say there wasn't one until I think around then, and there was just a bunch of markdown files in the repo, somewhat well organized. But now we have a real doc site, which I think the fact that it is a real website is already much more encouraging to a lot of users.
There's kind of, I think it a user hesitation around reading raw markdown on GitHub. It feels more hackery, less novice friendly. That's just anecdotal. I don't know if there's studies supporting this. But we also filled out the website with getting started guides, which we then iterated on cuz you know you can't just write a good guide in documentation.
You have to create the starting version and then get user feedback, keep iterating, trimming it down, adding important information. We added a bunch of information to each rules page. The way linters, such as ESLint work is you have a bunch of different rules. Each checks for one specific code smell are similar, and all those rules’ pages now are partially auto-generated with a description of the rule options and code samples of what to do and what not to do according to the rule. So, really what we tried to do is understand the two main user stories. The first user story is, I don't know jack squat about linting or TypeScript or whatever. Just get it to work. Tell me, tell me what I should be doing on my project so I can just copy and paste and get it to work where we can try to teach them as much as possible despite that urge. And then the other user story is, I have a red or yellow squiggly in my editor. Tell me what I'm doing wrong to fix it. And if you don't, I'm just gonna uninstall ESLint or disable in the file.
[00:37:17] Todd: Which I've done that.
[00:37:18] Josh: Oh yeah. Which is not always the wrong solution. Oftentimes the linter is, you know, wrong or misconfigured and it's yelling at you about something it shouldn’t.
But, unfortunately, if the linter does that too much, people are trained to disable the linter and for a while in the JavaScript community
[00:37:34] Homer: And then what's the point of having it then at that point, if all you're gonna do is keep
[00:37:38] Todd: Yes, yes.
[00:37:39] Josh: Exactly, so people would, you know what’s the point. And we the JavaScript community for a while was using these like preset configurations, like the old versions of the Airbnb ESLint config, which is just
[00:37:50] Homer: Yep.
[00:37:50] Josh: this giant list of rules, a third of which were not applicable to every project, and then that trained people to get rid of it. So now we, we seeing a new age or renaissance of ESLint where the recommended rules are actually good. And we're trying not to train people to hate it.
[00:38:04] Homer: Yeah,
[00:38:05] Todd: So, I'm
[00:38:06] Homer: I know when I get them red. Go ahead.
[00:38:09] Todd: I'm looking at the site right now, typescript-eslint.io. That's the correct website?
[00:38:16] Josh: Yep.
[00:38:17] Todd: Okay.
[00:38:18] Josh: With the bluish purple.
[00:38:19] Todd: Yes. Definitely gonna bookmark that one. Go ahead, Homer.
[00:38:22] Josh: Yay.
[00:38:24] Homer: Yeah, you were, when you gave your talk and you were talking about the, the squigglies appearing cuz you know, I remember you asking the question of who writes documentation. I think I was the only one that raised my hand.
[00:38:35] Josh: You were so proud of it too. In a very good way. You were like, yeah, nailing it.
[00:38:39] Homer: That, that is, that's that developer experience side of me, man. Because it's like, what's I, I can't stand working with something that's not documented correctly. Cause it's like, if I'm supposed to be learning, you're the one that, that built this tool for us to use. And if you didn't explain well how to use it, how, why should I use it?
[00:38:59] Josh: Yeah.
[00:39:00] Homer: I remember running into that. Remember, remember Dojo JS.
[00:39:04] Josh: Oh yeah.
[00:39:05] Homer: Yeah, I ran into that with Dojo and I remember reaching out to the guys who created Dojo because I was like, look, I am having, I'm having a hard time getting started with this. Can you help me? And they were like, if you haven't figured it out by now, something along those lines.
If you haven't figured it out by now, you probably never will.
[00:39:28] Josh: Oof
[00:39:28] Homer: It was one of, yeah, it was one of those things where ask the community, don't ask us. And at that point I was like, you know what? Screw it. I'm never using this again.
[00:39:39] Todd: Yeah
[00:39:39] Homer: Your documentation's trash and clearly your attitude is trash. So, it's like, holla back, I'm out.
So, but yeah, the documentation side but, you know, you're talking about the squigglies. Oh, it irks me whenever I see the squigglies. Not in a bad way. It’s just that I feel like I have to fix every single one that goes through. And I've recently learned that some of 'em are more like warnings as opposed to just immediately fix.
Like my build will still pass if there's one or two in there. Like I was working on something today and I had two red squigglies and I had to fight the urge to go down the rabbit hole
[00:40:18] Josh: Oh boy
[00:40:18] Homer:  to figure out what they were. Build still passed. Everything still went through. They were just kind of like these alerts letting me low, let me, letting me know that there was something in this legacy file that might need to be changed, so,
[00:40:32] Josh: This is such an unexpectedly deep, philosophical, practical debate, and it's one of my favorite things. What is an error in the context of things that don't actually prevent your code from compiling and being run? In TypeScript land, you could have a syntax error, which is you know, you put like asdf, semicolon, semicolon, dash, whatever, like some invalid code
[00:40:55] Homer: Right.
[00:40:56] Josh: Which block the code from running. Then you could have a type error, which should not block your code from running locally. It's just you put like, you know, number or undefined instead of number and like,
[00:41:05] Homer: Yeah.
[00:41:05] Josh: it’s probably wrong, but your code can still run.
[00:41:07] Homer: Yeah.
[00:41:08] Josh: Then you have a lint complaint of something that is a guaranteed bug versus a lint complaint of something that's a probable bug versus just like a stylistic thing.
You know, use Pascal case instead of Camel case.
[00:41:16] Homer: Yep.
[00:41:17] Josh: At all of these things it is what one could refer to as an error or except for the type sorry for the syntax errors. So anything that's in the type system or lesser arguably a warning. So should you fail the build on which of those, and I would posit that in most projects it is a good idea to fail CI, fail the build, block the poll request or whatever on any of those things. Even though you might want to display the TypeScript ones as red squigglies and the ESLint ones as yellow squigglies, just to differentiate them
Because if you allow a whole bunch of complaints in the code base from any of those things, then people will learn to ignore them. And then you have the same situation as before when we just, you know, completely remove the tool altogether for.
[00:42:00] Homer: Right, right. Yeah. Well, what I learned, what I learned was like, especially like when we when we turned on strict mode,
[00:42:10] Josh: ooh
[00:42:12] Homer: Ooh, I was, the application started bleeding everywhere.
[00:42:16] Todd: Yep.
[00:42:17] Homer: All kinds of red squigglies.
[00:42:19] Josh: It can be mean. It can be real mean.
[00:42:19] Homer: Oh, it's a bully. It is. It, it gives zero Fs about your feelings at all. You're like, this code I wrote, it's immaculate. It's efficient, it moves through. Yeah, no, your types are all wrong. It has an implicit or it has an implicit any on everything.
And then if you have the rule, no anys, you getting smacked all upside the head while you working on it. So,
[00:42:44] Josh: Yeah.
[00:42:44] Homer: Yeah.
[00:42:45] Josh: We even have a set of rules in TypeScript ESLints. And just to be clear, for any listeners who are now scared, this is all optional.
[00:42:50] Homer: Yes, it is. Yes, it is.
[00:42:52] Josh: It’s all optional. These rules are optional. You don't have to do this, but we have a set of rules that keep you from accidentally using anys or creating anys. No unsafe argument return and so on call.
And this is because it's actually possible to have no explicit keywords. So that's the keyword saying, shut up TypeScript. I know what I'm doing. Let me do whatever I want with this. And you, you never using any, never having any implicit anys like never having a function parameter that doesn't have a type annotation nor inferable type, but still have any creep in.
For example, JSON.parse returns type any.
Because you can't in, you can't enforce what JSON.parse return is gonna be in the type system. It's just, you know, you can pass whatever string you want in there. It's too wacky. So I've, it's hard to find code bases more than a hundred files that have all the really strict lint rules on, but when you do see 'em, it is, it is quite impressive.
You know, real good typing.
[00:43:46] Homer: Matched up. Ooh, golly. You can just sit there and fight it. I've opened up some files where I'm like, how in the world this is supposed to be a simple change. All I had to do was go in and fix this one bug, and now I gotta go in and redo all of these. I, in fact, I had a couple of those that were like, that last week that I had to get through before I could actually leave for the conference.
Cuz one, I didn't wanna leave my team with them. It was just like; this is just cruel.
[00:44:14] Todd: I, I
[00:44:15] Homer: So,
[00:44:15] Josh: I appreciate your instincts. Sorry, go ahead,
[00:44:18] Todd: I definitely, so I'm in this conversation and I don't like it because I'm one of those people who I, if I see a red squiggly line, I gotta fix it.
[00:44:28] Homer: Got to
[00:44:29] Todd: Or, or if
[00:44:29] Josh: Yeah.
[00:44:30] Todd: a yellow one, I gotta fix it. And I, I, you know, I'll sit here like I did what it was a few weeks ago, and I’m playing around with some, with some stuff. And red squiggly line, yellow squiggly line. Fix the red squiggly line. Four more yellow squiggly line shows up. So, yeah, I, I definitely, definitely feel that for sure.
[00:45:03] Homer: And, and if, if you really wanna raise your anxiety level a little bit more, go ahead and throw on the Alley Linter
[00:45:10] Josh: Oh.
[00:45:11] Todd: Oh no, I already have that and yeah.
[00:45:15] Homer: And open up a legacy file and just see all the red just pop up.
[00:45:19] Todd: Yep.
[00:45:20] Josh: Oh yeah.
[00:45:20] Todd: Yeah.
[00:45:21] Josh: I have a story about this. I was once on a team that was doing some code that was so old that Visual Studio just gave up and slapped red squiggly on the entire file. It was so incomprehensible. This was, this was some legacy code that no longer exists, I'm told within Microsoft in the business division and some acquisition they'd done years and years ago.
It was not a normal C sharp templating language, not the normal razor code. This like predates whatever you'd use today. And also, it was from years of projects being rushed over and over again. So, you know, they're like 10 files that are the same, but for two characters and,
[00:45:57] Homer: Oh, yeah.
[00:45:58] Josh: Nightmare to work in, good times.
[00:45:59] Homer: Oh yeah. Oh,
[00:46:01] Josh: I’m told the team has finally over the years, like been able to get rid of it and clean it up and make it much better for their sake.
[00:46:06] Homer: That's a good thing. Yeah. Those, those things are, they're, they're stress inducing, that's for sure.
[00:46:13] Josh: Yeah,
[00:46:14] Todd: Yes, they are.
[00:46:15] Homer: Yeah. Buckle up Todd!
[00:46:18] Todd: Oh, I, yeah. Well, I got this new office chair, but I have, well, it was mine. My cat took it. I have it. I'm renting it out right now. My cat sits in my chair now, so I have to buy.
[00:46:33] Homer: Okay. I was about to say, I'm like, what? How'd you get deebo by your cat?
[00:46:37] Todd: Oh, easily. You know, it's, it's me. You've hung out with me before Homer. Come on,
[00:46:41] Homer: Yeah, but you're a big dude. It's the cat.
[00:46:46] Todd: Yeah.
[00:46:46] Homer: Not unless he handing out them skippity paps to you.
[00:46:49] Todd: She doesn't like lobster, so we're gonna have to send her back.
[00:46:53] Homer: Wait, how is the cat even in the house and doesn't like lobster?
[00:46:58] Todd: Well, there's three other people that live with me, so
[00:47:02] Homer: I, I,
[00:47:04] Todd: majority rule. I, I, I abide by it.
[00:47:05] Homer: Okay. Okay. All right. You're outnumbered. All right. I get it. I get it.
[00:47:09] Josh: Sorry to hear that.
[00:47:11] Todd: Yeah,
[00:47:12] Homer: These are my condolences.
[00:47:15] Todd: Yeah. So, the other thing I wanted to talk about touch on is you mentioned the open con contributions project
[00:47:24] Josh: Yeah,
[00:47:25] Homer: Yeah,
[00:47:26] Todd: Any of course I didn't do my homework. Cuz this week I've been lazy. But could you tell us a little bit about that? And I know about open source, I've done open-source work for a long, long time, you know, cut me in half, count the rings. Can you go into that a little bit?
[00:47:43] Josh: Sure. I was about to lecture you on open-source accessibility and community, but I figured I'll, I'll save the lecture.
[00:47:52] Homer: I, I'm stuck. He said cut me in half and count the rings
[00:47:56] Josh: Right?
[00:47:57] Homer: I know. Like a tree. I know, but it was just like the visual of that. I was like, you come with some phrases, man. I'm just saying you; you always have something really unique come outta your face. It's gotta be a Maine thing.
[00:48:09] Todd: Kind of, yeah.
[00:48:10] Homer: Okay.
[00:48:11] Josh: Imagining each, each ring would be like a lobster shell with the little white meat and yeah. Okay.
[00:48:16] Todd: Yeah.
[00:48:17] Homer: Yep
[00:48:17] Josh: Yeah, so part of the reason why open contributions project is not a known phrase to either of you is because it's not a thing yet or it's very new. It's a project that I'm starting up, recording time is around middle end of January.
I'm hoping to have it really fleshed out within the next few months. Like this is a 2023 era thing, not January I have seen time and time again and been in myself situations where someone who works at a company is trying to convince the company or some part of the company to contribute to open source. That could be, I want to contribute time as part of my day. I want to contribute money because we depend on these projects. It's the right thing to do, et cetera.
Or I wanna use open source as a user. And that last one is, is normally pretty fine. Like we don't see a lot of companies just saying no to open source the way you did in like 2000 or so. But the other two things, contributing time and money are hard to advocate for. There are a lot of good reasons why you should contribute to open source, but in my experience it has been very hard to find real convincing arguments in favor of them. Arguments that are not just correct but compelling. So that's what I want the open contributions project to be.
I want it to be a set of resources to start that just really help people explain to whatever decision maker they're trying to convince. Manager, PM, finance person, hey, this is why we should contribute to open source. This is why it's a net positive for us. And that alone I think is gonna be really helpful.
And I've been doing a lot of user calls a lot of them with Rizèl Scarlett from GitHub, one of the dev advocates there. And we just keep seeing people going, huh, yeah, this would be really nice. Let me know when you have something. And eventually I'd love to create some sort of like positive call out service that likes hot spotlights companies. Highlights, the open contributions they do, but for now it's just gonna be a set of resources.

[00:50:03] Todd: Awesome. And I have that pulled up here. We're gonna have all these links in the show notes and everything. So definitely going to put that together when we're through here, but I'm looking at it right now and def just bookmarked it because
[00:50:15] Josh: Yeah
[00:50:15] Todd: I'm very interested in this.
[00:50:17] Josh: Thanks. And hey, if you, either of you, anyone wants to help out, we are so early stage, we don't even have a logo yet. Someone is working on specifically that, but we're about to have a website eventually. There are gonna be a whole bunch of articles or explainers to fill out. I kind of want like an interactive, like choose your adventure to get to the three paragraphs you should send someone creator.
I really hate that this actually would be kind of a good use case for GPT chat, GPT of like explaining, you know, I am this, this, this, talking to that, that, that with this personal context, making me the whatever. But yeah, a lot of work to do in data science authoring English professor stuff, like all sorts of things.
Not just coding. So would love anyone's help.
[00:50:56] Homer: All right, cool. Groovy.
[00:50:57] Todd: That sounds great.
[00:51:00] Homer: I'm down for that. Always down to help.
[00:51:03] Josh: Yay. I'm curious, do either of you have a unhappy story or happy story from trying to get someone to sponsor open source at a company?
[00:51:11] Todd: Oh, that's a good question.
[00:51:12] Homer: Yeah, mine, la mine was my horror story involved my design team and upper management and I mean, it was over with pretty quickly, you know, cuz we wanted to open source our first design system because we thought that it was really clever in what we did. We had designers who were not, they, they weren't familiar with HTML, you know, they did not do HTML or anything like that.
And there were some other designers who even expressed that they had no desire to even write a, a line of code at all. We said cool, because our environment our, our project environment ran so quickly. You know, we had to update three different websites every week, three different brands. And, you know, it, it was a lot of work that had to be done.
Like, for instance one particular brand running banners across that entire brand for, for the coming week would take one developer at least four days to prepare. After we built our design system, it took two days to get it done, you know, stuff like that. And what we did was we built a temp it was a temp loading system.
We built it in brackets. Brackets was a, was a was a free IDE that we were using, and it was built on JavaScripts. We were like, huh, we could just build functions into this thing. and allow the designers to choose which template they wanted, and even our copywriters. So what they would do was just start up brackets, go, say for instance, you wanted a banner with a copy on the left side, as opposed to the right side, you could choose left, right or center.
This is just one of the templates that were in there. We had full blown page templates and things like that. Well, you could go in and we had a visual diagram of which one you wanted.
So all you had to do was just click on the button and it would spit out the markup for you. And we already wrote the markup so that they didn't have to worry about accessibility or anything like that. It was production ready code. And we put inside the specific tags that needed to be edited. You know, markers edit here, put your header here, put your body copy here, and let it ride.
And then we also had all of that linked to the production style sheet at that time. So, whenever they saw it render. You know, in their browser it was exactly how it was gonna render and prod. We thought that was such a good idea that we wanted to open source it. We were gonna going to move forward with it, and even though it did not have any proprietary branding information in it whatsoever, our VP was basically like, Nope.
And if you do so, you're outta here. Just shut us down immediately. Yeah. We were like, well dang. Because that, imagine how helpful that could have been to anyone else that didn't have, you know, like a coding background, but at least wanted to work with these basic templates that were very vanilla but still effective to design with like our banners.
They either had a solid color behind them based on the branding colors themselves, or you could just change the image path that would change the background image of the banner. and have the content sitting on top of it that you needed. How many times you see that all over the web right now? You know,
[00:54:52] Josh: You can make a design system for half the marketing websites at Dev tools now, and it would be consistent and applicable,
[00:54:58] Homer: facts.
[00:54:59] Josh: Although I do really like that a lot of a lot of them have that like really vibrant gradient color of like dark texts and white background or vice versa with a little flashes of color.
I do like the current trend. It's nice.
[00:55:10] Homer: Yeah. I got, I kinda did that with my with my blog graphics and it, it follows the theme that I have with, when I'm given my talks, my accessibility talks. I have those gradients and gradient effects and so forth. But yeah, so that was, that was my horror story. It really wasn't a horror story. It was like a it was a quick horror movie with black folks when they walk in and be like, yeah, no, I'm not, I don't want any part of this, and, and I'm out.
So yeah, that's about how I went down.
[00:55:37] Todd: I, I don't have a horror story, but I do, I used to use Brackets cuz that was Adobe originally had made brackets.
[00:55:47] Homer: I think they ended up picking it up after it got popular cuz I went from using like notepad plus plus to brackets and then jumped over to VS. Code when it dropped.
[00:56:01] Todd: Maintained by the brackets community. It was founded by Adobe as a
[00:56:05] Homer: Oh, it was?
[00:56:06] Todd: guided open-source project to push.
[00:56:08] Homer: Yep.
[00:56:09] Todd: editors to the next level. They now I'm, coming back to me now. They, Adobe abandoned it. These open-source maintainers picked it up and now they direct you to a browser, or no, sorry, not a browser. A, an IDE called Phoenix, which is
[00:56:38] Josh: I'm making some guesses in my name of where or in my mind of where the name Phoenix comes from. Is it what it sounds like rising from the ashes of
[00:56:45] Homer: That's exactly where I was.
[00:56:47] Todd: I think so.
[00:56:47] Homer: Like brackets is rising back up.
[00:56:49] Todd: I put the, I put the link in the chat.
[00:56:52] Homer: Oh, that's not spelled any way that I thought it would be.
[00:56:55] Todd: No.
[00:56:56] Josh: PH code. Thinking like
[00:56:58] Homer: Yeah.
[00:56:58] Josh: acidity.
[00:57:00] Todd: Yeah
[00:57:00] Homer: Right? What's the pH balance of your code base?
[00:57:05] Josh: Well I am a 10 X developer, so
[00:57:08] Todd: I was gonna say, I was gonna ask
[00:57:09] Homer: Very acidic
[00:57:11] Josh: yeah.
[00:57:11] Todd: I was gonna ask if, if, if I read your TypeScript book, will I become a 10 x developer?
[00:57:18] Josh: Yes. If you read the TypeScript book, you will become a 10 x developer.
[00:57:22] Todd: That's all.
[00:57:22] Josh: He says, motivated to promote the book.
[00:57:26] Homer: There you go. There.
[00:57:27] Josh: You're learning how this industry really works.
[00:57:31] Todd: Yes
[00:57:31] Homer: Yeah. So how, how, talk about that process, man. What was it like, because I, I noticed that your book went through three different revisions. It originally what you, the first revision was done in June of 2022
[00:57:45] Josh: Oh do they track those things?
[00:57:45] Homer: Yeah. They actually tracked those in your book. Yeah.
[00:57:49] Josh: Well, it's about to go through another one because there are a lot of typos that I've fixed.
[00:57:52] Homer: Oh, awesome. All righty then.
[00:57:54] Josh: It's just typo fixing.
[00:57:56] Homer: Gotcha, gotcha. So, what was it like actually, what was that process like of actually publishing your, your own book. I mean, it's really well done and everything. So mad props to you, but again, you still have hair.
[00:58:13] Josh: There was, it was a lot of thrilling moments and nerve-wracking releases, so I never thought I'd be a book author. That just didn't occur to me. You know, other people do that similar to how for many folks, other folks who, developers, and all of a sudden you're years into the job.
[00:58:28] Homer: Yep.
[00:58:28] Josh: How did that happen? I was doing what I guess could be called content creation in TypeScripts, in area folks. Really. I was starting to do conference talks and had my blog and occasionally contributing to TypeScript itself, which is a lot of fun. Would recommend. Not enough people are doing that. And, and O'Reilly reached out to me.
They had a need for a TypeScript book that was geared towards introductory folks. They already had a really, really good, which I, I do recommend this book a lot, even in my book. I recommend Effective TypeScript by Dan Vanderkam. Wonderful read, but for someone who just knows JavaScript, they didn't have one for them. And at the time I was working at Code Academy where I kind of learned a lot, a lot about pedagogy and teaching, and things in tech in general. And specifically had helped them kind of with the initial starting structure of their type of courses. And we actually released a, the start of their intermediate textbook course, which I was very excited to help with. So the book proposal was actually fairly close to what ended up being released. It was TypeScript for, for JavaScripts, which is now the name I give many of my TypeScript workshops. It walks you through the foundations of the book. We made a, oh, sorry. Through the foundations of the language and then going through some of the more complex stuff.
As you get more advanced, we made a kind of, I think like 10 page proposals, seven page, some page proposal of explaining what the book would be, why it's relevant to the markets and some of the, so to speak, competitors, like other types of books that had come out recently through other publishers a while ago.
Really just, this is a standard thing I'm told for all O’Reilly authors and for many publishers just to figure out where is the book getting positioned in the market to really flesh out why you wanna do it. And after that, it was a year of writing. Two-thirds of that year was me employed at Code Academy.
So it was in my spare time, weekends, nights, and then a third of that after I was no longer at Code Academy, after I quit to go open source full-time. It was just one of my things that I did during the day. And I had a schedule of every couple months, I had delivered one or two chapters. Once in a while through those months, we would have a editor go through and review the last few chapters. I also had some industry peers, as is the norm for them, go and review it.
So that's, that's how I sneaky got a lot of, like, praise quotes they're called in the beginning of the book, just from people who I knew or had worked with or just generally wanted an excuse to talk to. I'd say the one mistake I made during the book was delaying a lot of the flavor text till the end. I had the idea of, and I'm very proud of this, that I wanted the book to not just have a bunch of unique to me or specific to my interests examples cuz you know, everyone puts in like Star Wars and video games and things that are fun and cool, but unfortunately oftentimes end, up being like American white male centric.
So I wanted each chapter to have a different theme of things like authors, warriors, poets, et cetera, and the vast majority of code samples to be not dudes, so mostly women, some nonbinary. I think the only dudes in there are my dad cuz he's a mathematician. And there's a chapter on that. And me, unfortunately, that means a lot of research.
So many Wikipedia binges on ancient women in history. So many, I learned a lot. I ended up trying to read Weathering Heights, which is not an easy read to get through.
[01:01:43] Homer: No man. What? Wow. Okay. Props to you for that one.
[01:01:48] Josh: I didn't make it all the way through the book, but the spark notes summary was very.
[01:01:51] Homer: Me neither.
[01:01:52] Josh: Yeah. Lizzo is in there and it's actually hard too, because if you put someone in your book, if you reference a person, then you run the risk if they're still alive of them ending up being a total pooper, like a real bad person.
So anyone who's alive and I put in the book, like that's someone who I have high faith in not actually being a total piece of crap on the inside.
[01:02:10] Homer: Wait, hold up. Time out though. But you said Lizzo.
[01:02:14] Josh: Lizzo is in like the musician,
[01:02:16] Homer: Yeah, yeah. The, the, the flutists? Yeah, the, the vocalist. H How'd you, okay. I can't wait to find that spot but go ahead gimme the spoiled alert. How'd you work Lizzo into a TypeScript book?
Did he freeze?
[01:02:32] Josh: It is both easier and harder than it sounds.
[01:02:34] Homer: Oh, okay.
[01:02:35] Josh: It’s easier because you can just, [inaudible], internet. Is this better?
[01:02:41] Homer: Yeah. Think you're there.
[01:02:42] Josh: Sorry. It's my parents' crappy Xfinity. If you wanna include the dig at Xfinity in the podcast, fine by me. So,
[01:02:48] Todd: We'll have that section at the end when I complain about Cox Communications here in Arizona as well.
[01:02:55] Josh: Oh, great. just us dishing on all the internet providers.
[01:02:58] Homer: Yeah. Well, I'm surprised that ours hasn't gone down because they're upgrading all of the hubs in our area and our internet has been cutting in and out just all day,
[01:03:12] Josh: Nightmare.
[01:03:13] Homer: all day. But it's been going on for the past two and a half weeks, so, yeah. Yeah. Well, last week a friend of mine, the hub blew up in front of his house, like literally. Boom.
[01:03:24] Josh: Oh my God,
[01:03:25] Homer: Yeah. So, I don't know. Weird. But anyway, how'd you, how'd you, how'd you work Lizzo in to this?
[01:03:31] Josh: It is both easier and harder than it sounds.
[01:03:34] Homer: Yeah.
[01:03:35] Josh: It’s easier because you can just make a code snippet. Let's say I wanna demonstrate arrays. Okay, I'll make an array of singers. Let's say the variable name is singers.
[01:03:42] Homer: Okay. I see where you're going. Yeah.
[01:03:44] Josh: Lizzo, whatever whomsoever. But in order to make good code snippets, you have to put thought into it.
You can't just make some 500 line monstrosity and expect people to read through it. You have to find.
[01:03:55] Homer: Right
[01:03:56] Josh: draft something that really succinctly describes the intent of what you were trying to teach them at that time. And only that. You can't
[01:04:04] Homer: Right
[01:04:04] Josh:  teach five things at once, just one. So, combining that with my desire to have fun, exciting code snippets, because let's be honest, textbooks are normally boring.
So the, the more fun you can add in without detracting from the lesson, the better,
[01:04:16] Homer: Fair
[01:04:18] Josh: which is hard. So, I ended up just, you know, procrastinating on that until the very end. And I went from constantly being ahead of my deliverables to being very behind at the end. And unfortunately, more typos slipped in than I wanted. So, I’m still pleased with the results, but you know, as you saw, the online edition has some corrections.
[01:04:33] Homer: Grammarly
[01:04:35] Josh: Yeah, well it's, it's, it's things like, you know, referring to a variable by its old name instead of its new. And this word only appear once checker? But then if the old name appears twice, then you know, so
[01:04:46] Homer: Yeah, then that, then it slips through.
[01:04:48] Josh: Give a shout out to Dan.
[01:04:48] Homer: All right, so cool. There's the one-line version.
[01:04:50] Josh: Vanderkam, who has a lot of good tooling for writing textbooks about TypeScript for the five other people in the world who are currently doing that. Very good reference.
[01:04:58] Homer: Nice. And my a friend of mine, he's always teasing me about, he was like, when are you gonna start writing a book? I was like, I'm like you. I, I don't know. I don't even, I don't even know where to, what, what would I write on, man? And he was just like, dude, you can write a book. And he's already signed on to write the, the forward on it.
So, I'm just like we'll see. But mad props to you and everyone else.
[01:05:27] Josh: I think it’s surprising, thanks. I think a surprising number of people in the industry would find that given the motivation, the pressure, they could write a book, for example, for you, I would imagine you could write a very good book on design systems. Maybe what it is, atomic design and or the act of getting an organization to adopt one.
I would love to see that book or the same thing, but with accessibility, you know, what is accessibility on the web, let's say? How do you get an org to go from zero to accessible?
[01:05:51] Homer: Yeah
[01:05:51] Josh: That's a whole book, at least two books right there if you want.
[01:05:54] Homer: Yep. And you know, it's funny you say that because that's one of 'em, one of the ideas that I had. But we'll, see,
[01:06:01] Todd: I pitched a book on accessibility to your organization to a few places, and it got,
[01:06:09] Josh: Oh,
[01:06:10] Homer: See,
[01:06:11] Josh: Poopies.
[01:06:12] Homer: See, there's that.
[01:06:13] Josh: Oh well.
[01:06:13] Todd: But
[01:06:14] Josh: Well, you have my votes. If that helps.
[01:06:15] Homer: Now, now you turning into a blog and now no one can tell you that.
[01:06:19] Todd: I just ordered your book, so
[01:06:20] Josh: Yay.
[01:06:21] Todd: It is.
[01:06:21] Josh: Thank you,
[01:06:22] Todd: hopefully will be here by Sunday. But as you can see behind me, I have a lot of books. So the, a lot of the people that have written these books I've met, because I just have this thing where I have to meet these people and I have to ask a lot of questions about the book.
So, in a future conference
[01:06:39] Josh: Well, we should meet from today.
[01:06:41] Todd: Exactly, that's exactly where I was going. We should meet and I, because I'll probably have a lot of questions for you, but I heard from a lot of people
[01:06:52] Homer: Uh oh.
[01:06:52] Todd: that I talked to that it is a very long process in writing a book. Now, I have the, A Book Apart books, which are the small ones up here behind all these, all this stuff. So, it's that, that is still a, a, a process. But some of these other books that I have, I mean, you're talking in your book, the O'Reilly books and I mean, that must have been a process to write a book like that.
[01:07:24] Josh: I'd say in general for anyone who's interested, either through a publisher or what some folks are doing now, is self-publishing books. Figure out the outline, the rough chapters you wanna write for each chapter. Figure out the prerequisites, order the chapters so that the prerequisites match up. You're doing a graph search basically for the mathematicians in the room and folks who like that stuff.
[01:07:43] Homer: Exactly.
[01:07:44] Josh: And then each, each chapter is just a very long, just, each chapter is a very long blog post, but it’s a well thought out.
[01:07:51] Homer: You did put that just in there,
[01:07:54] Josh: It's, yeah, it's just 400 pages.
[01:07:57] Homer: Right? It's just, you know, that's like going, oh yeah.
[01:08:00] Josh: here,
[01:08:01] Homer: JavaScript is easy.
[01:08:03] Josh: Yeah, I mean, you, we have these giant bookshelves. Like I have a bookshelf in my office now, a little fancy glass one because I don't have enough books to fill a real one.
And you know, if all those people can do it, if I can do it, the buffoon who, who got taken down by Nintendo, if I can do it, y'all can, y'all can do it. It just, you know.
[01:08:20] Homer: You can't see it over there.
[01:08:21] Josh: it just takes a lot of time and effort.
[01:08:22] Homer: Our bookshelf over there is, is loaded too. I, I built the shelves that are over there and it's, it's, you know, deep and then wifey went through and actually color coordinated all the books. So,
[01:08:34] Josh: Ooh.
[01:08:35] Homer: yeah.
[01:08:35] Josh: I’m always torn on that. I personally organize first I have sections of genre like my, like Halo books versus like my programming books. And then within that I do like alphabet alphabetical by author, last name. Oh, I love a color coordinated bookshelf. It is so visually appealing. Oh my,
[01:08:51] Homer: Yeah, it is. I had one friend, hers was so tight that the, the books formed a gradient.
[01:09:00] Josh: Oh.
[01:09:01] Homer: I was like, how in the world? First off, like you, you need another hobby because you spent way too much time getting all of those just perfect. And I was just standing there just looking at him like, this is not a bookshelf.
This is a work of art. Is this, is this an installation? Are these books real or did you actually just paint this like this?
[01:09:26] Todd: I believe Dan Mall, who used to have his bookshelf, and I'm trying to find a picture of it.
[01:09:34] Homer: Is that the one that he had in his podcast?
[01:09:39] Todd: I bel, I don't know, but he, his was a, his was a gradient and he is
[01:09:45] Homer: Yeah.
[01:09:46] Todd: a lot of books on Dan's shelf.
[01:09:49] Homer: Yeah.
[01:09:52] Todd: I mean it, yeah, it's, as you can tell by mind, mine's in, in, you know, my bookshelf is like my brain, very out of order. Everything's all over the place. I have my cooking books there with web books, with old web books like Dom scripting
[01:10:14] Josh: Ooh,
[01:10:15] Todd: from Jeremy Keith. So not that I've opened it in like 10 or 15 years or so,
[01:10:23] Homer: You know, I, I, yeah. I can't front, I actually, what, it was a couple of years when we moved up here, when we moved, when we moved from Florida. That was yeah, six years ago. That's when I got rid of my last TypeScript book. I mean, not TypeScript, but action script book.
[01:10:39] Todd: type Homer.
[01:10:41] Josh: You almost got my heart going there.
[01:10:43] Homer: I know, right? No, it is my old action ScriptBook. I, I don't know why I still had them jokers, but yep, still did AS3.
[01:10:51] Todd: I had the Macromedia ones. Remember the Macromedia ones? The big, those big manuals? I still have those.
[01:10:57] Homer: Big, thick things?
[01:10:59] Todd: Yeah.
[01:11:00] Homer: Kenneling.
[01:11:01] Josh: Remember when software moved so slow that you could write a giant manual and have it be financially sustainable like that.
[01:11:08] Todd: Yep. Yep.
[01:11:09] Josh: That’s one of the, I think the downsides of, of books these days is that we're doing such a good job of iterating so quickly on things like TypeScripts that you can't really write a huge composium on state-of-the-art for some areas. For some you can
[01:11:22] Homer: Right.
[01:11:23] Josh: Like for TypeScript. A month after release they, they announced that the next version of type two read this great new feature, the satisfies operator, and now the book is outta date. I mean, I have a blog post explaining it and they have good release notes, so it's not like you would be missing out, but it's just annoying.
[01:11:41] Homer: Yeah. And it's, I, I like buying books, but I'll, you know, I also, because of that, you know, I track a lot of things online because books go out of date so fast. But like I was saying earlier, like the, like the way that I learned when I first learned how to build a website, it was because I had an HTML 1 book and I was sitting in the computer lab eight hours later, I was done with my first website.
So, and I just went from, you know, the front of the cover to the back of the cover and did it, and it was just a lot of rinse and repeat. So being able to actually have the book there, the, the tactile sense of having it there and being able to follow through and just go, you know, not being, it's, it's less noise when you have whatever you're working on up on the screen.
And then the book here is not the same, you know, it's not the same visual noise and distractions that you have to deal with. Like you're going from this side of the screen to that side of the screen, or constant reminders and stuff like that popping up. So yeah,
[01:12:45] Josh: Agreed
[01:12:45] Homer: I love having the books around.
[01:12:47] Todd: Yeah. Now I, that brings me to a question, Josh, have you thought about, because I see it a lot lately with developers, Wes Bos Scott Tolinski, they have their own courses online.
Have you ever thought about doing a TypeScript course like that on your own platform?
[01:13:13] Josh: Yeah, I put a lot of thought into it. I would have loved to do that at some point in time, but I just don't have the time.
[01:13:20] Todd: Right.
[01:13:20] Josh: For anyone looking for a good interactive TypeScript course and or a series of videos, I really recommend Matt Pocock—Matt Pocock totaltypescript.com. Fantastic. Matt is just a guru, both with TypeScript and explaining TypeScript, two distinct, very interconnected skills. I would've loved to do what a lot of people recommended, which is a series of videos going through, say, each of the chapters of learning TypeScript with an associated walkthrough in some text form.
And I would've loved to do like videos on random syntax features or cool things you can do or new releases of TypeScript. But I also wanna be a full-time open source maintainer. I'm putting a lot of time and effort into TypeScript ESLint and I have this template TypeScript node package where I'm learning how to do all the best ways to make a node package and all these other open source projects.
And then I also have the open contributions project, which I think is gonna be a really good impact if we can get it right, if we can really help people advocate for contributing and open source. So given those, what, three or four things and the one thing's worth of time that I have, I just, there is already a good solution in the market for learning TypeScript in video content form. I just, I just won't compete. Such is life.
[01:14:28] Todd: Okay. Fair enough. Yeah. So, we're getting on time here for me anyways. And
[01:14:35] Homer: I don't know if that was my internet or your internet.
[01:14:37] Josh: Oh, is that all? I just assumed it was me.
[01:14:41] Todd: My internet, surprisingly, has not absolutely just packed up and left for the weekend. So is there anything we did not ask or touch upon that you would like to discuss for a little bit?
[01:14:57] Josh: We didn't go too deep on TypeScript ESLint
[01:14:59] Todd: OK
[01:14:59] Josh: or linter practices, but I think that's okay. The only plug I'd put in there is that in our getting started recommended guide, we suggest to people using the recommended configurations. So it's a set of rules that get enabled with some good defaults for you, and especially in our current version V5 and in our upcoming version, v6, which is gonna come out in 2023, hopefully the first half. We've really made sure that the recommended rules are those that are applicable to all projects or almost all projects and aren't like stylistic preferences.
[01:15:30] Todd: Okay,
[01:15:31] Josh: I'd also say though, that because TypeScript ESLint lets rules opt into reading from the TypeScript type checker, which is a little slower, but much more powerful. We also have a second recommended rule set. I don't like having two things, but you know, it, it's more expensive. It's, it makes things a little slower. So it's an opt-in thing, but recommended, required type checking.
And it'll be renamed in V6 maybe to recommended type checked or something like that. But I'd really encourage anyone who's linting their types of code with ESLint to try out the types could ESLints  recommended requiring type checking rule set. It's a little bit more to configure, just, just, you know, two or three more lines for most projects.
[01:16:11] Homer: Okay.
[01:16:12] Josh: And a little slower to run, but it catches some incredible bugs and mishaps that you can do in your code.
Things like, using promises the wrong way or using a for loop over an the wrong way, like a for an incident for four of. All these random little things. It'll find cases where you're using a, a type assertion, the as in a, to change something to a type that it already is, like it'll, it'll delete a lot of your code for you,
[01:16:36] Homer: Okay, cool.
[01:16:37] Josh: Which is really nice. So highly recommend. And if anyone has any problems with TypeScript ESLint in general, or specifically that, or really wants a particular rule to be added or removed, then you know, let us know. Let me know. Reach out on Twitter or I'm on Fosstodon, both as Joshua K Goldberg. And you mentioned the site is TypeScript-ESLint.io.
[01:16:54] Todd: Yep. Okay.
[01:16:55] Josh: Sparkle emoji.
[01:16:56] Todd: Sounds good.
[01:16:56] Homer: Sparkle emoji. Indeed. Where are you speaking next?
[01:17:03] Josh: Ooh, not sure.
[01:17:04] Homer: In case folks wanna see you in real life.
[01:17:07] Josh: You know, oh shoot, I should know this. I believe it is. So the next place I'm speaking at is gonna be a meetup. I wanna say it's TypeScript. I forget which city. I should know this. It's one of them. I think Ann Arbor is where it's gonna be.
[01:17:20] Homer: Are you gonna be up there at University of Michigan? Go blue.
[01:17:23] Josh: Oh yeah, that’s a thing, right? People, people like that?
[01:17:24] Homer: Yeah. Yeah. Go blue.
[01:17:27] Josh: Go blue. Sure.
[01:17:28] Josh: As I've recently moved to Philadelphia, I'm learning phrases like fly Eagles or
[01:17:33] Homer: Yeah, man.
[01:17:35] Josh: Sure. A New Yorker in Philly. I'm, I'm, I'm eventually gonna get beat up. It's only a matter of. There's this big Giants game happening at, at time of recording, and it's a whole thing.
[01:17:45] Homer: Oh goodness.
[01:17:47] Josh: But, as for the next oh, on a conference I'm really excited about is staff Plus in New York City in middle of March. I was a staff developer, staff run and developer at Code Academy for a while, and I, I really like the, the practice of being an influential engineer. So I'm gonna be talking a quick little 10 minute talk there on how to complain positively, meaning how to affect positive change without annoying and inconveniencing everyone around you, which is a subject I think many developers could learn a lot of.
[01:18:12] Todd: Yeah.
[01:18:13] Homer: Work on them. Soft skills.
[01:18:15] Josh: Yep.
[01:18:15] Todd: So two words that you may save yourself from getting beat up is John and Yins. So, I highly suggest using the, I don't know what they mean. I don't know how you, what context you use them in. You just throw them out there and you might be able to walk down the street In Philly, nobody will hurt ya.
[01:18:35] Homer: Don't, don't do that. Todd gonna get you jacked up. All right.
[01:18:38] Josh: No, I know, I know John. I know John.
[01:18:40] Homer: Okay.
[01:18:41] Josh: Anything's a John.
[01:18:43] Homer: He, he giving you the Ron John on that.
[01:18:49] Josh: Hey listen, learn the hard way.
[01:18:51] Homer: Maine. My man is from Maine,
[01:18:54] Todd: Hey,
[01:18:55] Homer: Now he’s in Arizona.
[01:18:57] Todd: Go figure. Right? Go figure.
[01:19:01] Josh: I think the average geographically is around Philadelphia. Now,
[01:19:05] Homer: say, say that again.
[01:19:07] Josh: the, if the, the midpoint between Maine and Arizona, where is that? Is that like Virginia? Ohio? Philadelphia?
[01:19:13] Homer: I would say Ohio.
[01:19:15] Todd: I would
[01:19:15] probably.
[01:19:16] Josh: He's close.
[01:19:18] Todd: Right in that part of the country.
[01:19:21] Homer: So, you in Philly? I'm gonna be in Philly. I'm looking at my calendar right now. I'm be in Philly next, next month.
[01:19:27] Josh: Oh.
[01:19:27] Homer: I might have to hit you up when I get up there. I'll be up there for a week.
[01:19:30] Josh: Yeah, I have an espresso machine. I can make lattes.
[01:19:34] Homer: Yeah. So, you, you digging the espresso machine man?
[01:19:37] Josh: Oh yeah. It's a Breville dual pro. I, I don't know these things, but it's real nice and I've been learning how to make the latte actually someone I'm I slash we met at that conf, a wonderful individual named Akira taught me how to, or told me how to like, angle the cup and twirl it or spin it the right way. Akira is a security person, like really no security, and also a former opera singer and barista. Very cool.
[01:19:58] Homer: Oh, that was homegirl with the locks?
[01:20:01] Josh: Yeah. Yes.
[01:20:02] Homer: Yeah, I didn't get a chance to talk to her, but I heard that somebody did open spaces about opera music cuz I was out with the family at that time. So we actually completely missed that, but yeah. Okay. All right. Cool.
[01:20:13] Josh: It's actually a fascinating discussion, I think a really good podcast episode recommendation of how does music impact people when they say program, like the, the brain activity, the way different people.
[01:20:23] Homer: Oh yeah.
[01:20:24] Josh: I, I listen to instrumental or synth wave and or down tempo, like it's a whole thing. Really cool.
[01:20:29] Homer: Yep. That is one of the things that I've noticed that like my streaming statistics for, for the albums that I've released, people are listening to my music while they're at work, while they're at school or while they're driving. And you know, with my background being in psychology, behavioral psychology, and neurology, yeah, the same deal.
Which is why I also like to write instrumentals. It's for that reason, because I know that you just need something to disappear into the background.
[01:21:00] Josh: Yeah
[01:21:00] Homer: To help you focus, so to speak. And the tempo dictates the pace of which you're moving throughout that day. The synchronicity of it all. I mean, you synchronize to the pace of the music, even to the point to where, you know, your heartbeat slows down or speeds up according to, you know, the pace of the music that, that you're doing.
Like often when I'm writing music, I'm writing music at the pace that I walked that day,
[01:21:25] Josh: That's fascinating.
[01:21:26] Homer: You know, that, that maintains my, or dictates my tempo. So yeah. Yeah, that's, that's an interesting topic too, that we could go in. Maybe that could be a book idea.
[01:21:35] Josh: Yeah. Yeah. I'm sure.
[01:21:37] Homer: Who knows? Who knows?
[01:21:40] Todd: I can't afford to have my heart rate go down any further than it already is right now, because I'll flatline.
[01:21:46] Homer: I'm gonna send you a slow jam,
[01:21:50] Todd: Well, hey, your music gets played a lot in
[01:21:51] Josh: you're gonna kill him.
[01:21:52] Todd: the kitchen, and I'm in the kitchen, not just for cooking, but for eating. So
[01:21:58] Homer: Tell the family. I said, I appreciate that.
[01:22:02] Todd: You're, you're on heavy rotation here, so
[01:22:06] Homer: Nice.
[01:22:07] Todd: Yes
[01:22:07] Homer: And I didn't even have to pay y'all.
[01:22:09] Todd: No you didn't, which is the best thing,
[01:22:12] Homer: Yeah, it is that whole pay-to-play thing, just, I get it, but at the same time, it's like people like your music, they're just gonna play it.
[01:22:20] Todd: So,
[01:22:21] Homer: I appreciate it.
[01:22:22] Todd: Yeah, definitely. So are gonna be at the meetup. Any conferences, Josh, in the, in the, that you have planned, that you'll be at in the, in the future or,
[01:22:34] Josh: You know what this is, this is a good time for me to plug a thing. I released a blog post how I apply to conferences, and it's on my blog, blog.joshuakgoldberg.com.
And in that it links to my Notion table document page set conferences, which has a giant submissions database. Love Notion, big fan. And I have an accepted timeline view of my submissions thing. My table that shows all the places I'm gonna be. So there are a few remote ones like Global Summit for no JS and Dev Developer Week 2023. But React Miami in what is it, in April? In June, exactly When is React Miami? That one I'm really excited about. So, I've never been to Miami. I think I have been to Florida mostly for family things or weddings.
So really excited you got April 20th,
[01:23:22] Homer: Nice. April 20th. April in Miami. Yeah. You're gonna, it'll be, it'll be nice.
[01:23:27] Josh: It'll be nice. Only a little sunburn.
[01:23:29] Homer: Just a little. Just a little. You'll be actually April, where will I be? Nope, will not be done there. I'll be down there the month prior. I'm, I'm in Miami in March, so
[01:23:44] Josh: Almost.
[01:23:45] Homer: Almost
[01:23:45] Josh: I’ve also been helping out with the, the half stack conferences. We're about to release a next JS version of the site, which I'm very excited about and I'm not sure which ones I'm gonna be yet. Todd, I'm sorry. I will not be seeing you in Phoenix cause I'm real bummed. Just couldn't make that one.
But at some point, I will be at, at least one other half stack conference this year. Almost certainly, at least the New York one.
[01:24:03] Homer: Good deal.
[01:24:04] Todd: Yeah, I was looking at that one as well and, and getting back to that area. I haven't been in New York in quite a long time, so definitely want to hit.
[01:24:16] Josh: Nice.
[01:24:17] Todd: hit that.
[01:24:17] Josh: I used to live there would recommend.
[01:24:19] Todd: Yeah. Yeah. I used to visit there a lot. Know a lot of people in the, in the, in the city and in the area.
[01:24:25] Homer: Likewise.
[01:24:28] Josh: It's a great city to visit. What about you guys? Any, any conferences?
[01:24:33] Todd: Oh, do I have conferences? I conferenced myself out last year. I have, well, half Stack Phoenix, which is coming up in a couple weeks on Friday, the 3rd of February. And then Dev Nexus in Atlanta, Georgia, the fourth through, I believe it's the fourth, through this, through the eighth. I, I'll be there until the eighth, but I think the conference goes on until the seventh.
So, debnexus.org is the website for that. Anything else? I have a ton of submissions out floating around in, in the, in the, in sessionize and in, in the internet, inter tubes there. But
[01:25:20] Homer: Internet inner tubes.
[01:25:21] Todd: Homer and I have a, have a talk submitted or a workshop, excuse me, submitted to Casey KCDC so I'm keeping my fingers crossed.
[01:25:29] Homer: Yep.
[01:25:30] Todd: for that one.
[01:25:31] Homer: Yeah, so,
[01:25:33] Josh: I also applied to that one. Real hopeful.
[01:25:34] Homer: So, there's that one. I've got KCDC. It's just like Todd. I'm waiting for like KCDC's CFP closes in a couple hours,
[01:25:44] Todd: Yep
[01:25:44] Josh: Oh
[01:25:44] Homer: like it closes today is the last day for that one. But I s I put my submission in like day one when it went open. So, I've been waiting for a while for a lot of mine to come through.
So there's you know, obviously just did that, submitted for that and Wisconsin. Waiting for KCDC. Ooh, dropped my X-Wing, VueConf, up. Looking forward to that one. Orlando Code camp that's possibly happening. Let's see, RenderATL, which is obviously gonna be here in ATL, KCDC. Who else?
And then the other one, I think the, so far, it looks like the last one of the year is gonna be Magnolia JS, so we'll see. Might be a couple more in between here and there, but yeah.
[01:26:28] Todd: Magnolia, I can't sing the praises of Magnolia JS enough, so if you can get a CFP in there, get one in there because
[01:26:38] Josh: There's open.
[01:26:40] Homer: Yeah. Rich. Yeah. Kayla Sween.
[01:26:43] Todd: Kayla and Richard put on a
[01:26:45] Homer: Really cool.
[01:26:47] Todd: fantastic conference last year. So
[01:26:50] Josh: That's so exciting
[01:26:50] Homer: Cool. Really cool folks.
[01:26:52] Todd: Yeah,
[01:26:53] Josh: Oh my God. And it's a Halloween themed. I'm looking at their sessionize page. I love Halloween so very much.
[01:26:59] Todd: I will, I
[01:27:00] Josh: yes,
[01:27:00] Todd: will be wearing a lobster costume during the talk.
[01:27:04] Homer: Oh gosh,
[01:27:06] Josh: Yes
[01:27:07] Homer: the, I'm just gonna throw sticks of butter at you,
[01:27:09] Todd: and, and
[01:27:12] Josh: What a vision.
[01:27:13] Todd: We're going to, we're going to blow have one of them inflatable pools and fill it with clarified butter.
[01:27:20] Josh: Woo. It's gonna be great.
[01:27:24] Todd: During the talk.
[01:27:24] Homer: That's gonna be gross.
[01:27:25] Todd: Homer, Homer I also, so I was at, I was at Code Mash,
[01:27:31] Homer: Yeah, I, yeah, I saw you rocking it.
[01:27:33] Todd: I, I actually was talking with our friend Chris DeMars, and I said, you know, I'd probably want to wear my lobster costume in, in the hot tub that was in the waterpark. But I didn't have the lobster costume, but I thought it was, that would've been great as just, just sitting there in the lobster costume in the hot tub.
[01:27:54] Homer: I see you just sitting up there just like this. Just chilling.
[01:28:00] Todd: Exactly, so
[01:28:01] Homer: That would've lasted all of five minutes, security would've showed up behind you. Excuse me, sir. Can't have the right then.
[01:28:08] Josh: whatever little.
[01:28:09] Homer: come up there behind you with some pliers.
[01:28:11] Todd: Homer, do you have the book? You can up the book for a minute.
[01:28:14] Homer: Yes. I gotta say book.
[01:28:16] Todd: But the book, Learning TypeScript. Josh Goldberg, I just bought it, so it's gonna be here in a couple days. I'm looking forward to digging in.
[01:28:26] Homer: I'm gonna be in it tonight for sure.
[01:28:29] Josh: Thanks guys, I really appreciate you both getting the book and, and promoting it, that that means a lot to,
[01:28:32] Todd: Yeah definitely
[01:28:32] Homer: Oh yeah. Oh yeah.
[01:28:34] Josh: When you write a book I will, I will return the favor. Absolutely. Both of you.
[01:28:38] Todd: The only book I'm writing is.
[01:28:39] Homer: I'll let you know.
[01:28:41] Todd: the only book I'll end up writing is either a pop-up book or a coloring book.
[01:28:46] Homer: This brother said a popup book. But you know what though? The first thing that I ever did publish like that physically published, and this, this was a it was a design template book for iPhones.
[01:29:02] Josh: Ooh.
[01:29:03] Homer: So, it, it literally, it was a graph pages and so forth, but it had the iPhone templates so that you could do storyboarding and quick wire framing using it.
And it's actually still up on Amazon. I was cracking up. It's still there. That was the first time I ever published anything. I thought that was, it was a fun process.
[01:29:23] Todd: It's still on Amazon?
[01:29:26] Homer: Still on Amazon. Just look up my name.
[01:29:27] Todd: I'm gonna have to look for it then.
[01:29:29] Homer: Yeah.
[01:29:30] Todd: Yeah. All right. Josh, thank you very much for coming on it's been a pleasure on my end.
[01:29:29] Homer: Likewise.
[01:29:37] Josh: I had fun.
[01:29:38] Todd: Really looking forward to not only meeting up soon, hopefully at a conference sometime, hopefully the three of us can meet up. But you know, getting that book, diving in and we're gonna have all the links in the show notes and hopefully we'll get this out by, well this will probably be a going out by the time people see and hear this probably, I'm hoping the end of the, this month, but we might be looking at early next month, getting that done.
But again, I really appreciate your time. It's been a pleasure and Homer, you got anything?
[01:30:19] Homer: No. You know, I, one thing I would like to say is, you know, if we, if we have any friends, that we know of that have been impacted by the recent changes in layoffs and everything that's been going on because, you know, it's, it's a little rough for folks out there right now. So lean in and be supportive in any way that we can, you know, the dev community is a, is a strong one, and we're only better together.
[01:30:47] Todd: Yeah, definitely.
[01:30:50] Josh: I’ll put out there that if anyone wants like a resume review or a mock interview or anything, I love doing those, so it would be a
[01:30:55] Homer: Yeah, indeed.
[01:30:56] Josh: symbiotic relationship.
[01:30:58] Homer: Indeed, indeed. Appreciate that.
[01:31:00] Todd: All right. That sounds great. So, all right, this has been the Front End Nerdery Podcast. A great episode.
[01:31:09] Homer: Indeed
[01:31:09] Todd: So, go watch it, subscribe, like, do all that stuff that you hear everybody say at the end of a podcast episode. And
[01:31:18] Homer: buttons.
[01:31:20] Todd: just
[01:31:21] Josh Goldberg: wherever you get your podcasts.
[01:31:22] Homer: Exactly.
[01:31:23] Todd: Exactly. So, we'll see you next time.
[01:31:26] Josh Goldberg: Thanks guys. Bye.
[01:31:27] Homer: Bye everybody.
