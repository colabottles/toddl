---
title: Mike Hartington
description: Our Interview with Mike Hartington
date: 2023-11-04 #YYYY-MM-DD
layout: layouts/post.njk
---

## S3:E7

[00:00:00] Todd Libby: Welcome to the Front End Nerdery podcast, a podcast about front end development and design and a host of other stuff, usually, that we don't talk about. So, um, my name's Todd Libby. I'm the host, my co-host, Homer Gaines. He's not here today. He might show up later. We might have a Homer sighting today, who knows.
[00:00:23] Todd: But with me today is the Director of Developer Relations at Ionic. a, uh, guitar player and builder of guitars, which we will talk about later connoisseur of coffee, milk. Yes. Uh, and hot sauce. I mean, we got a lot of commonalities.
[00:00:53] Mike Hartington: We will, we'll dive deep into that.
[00:00:54] Todd: Definitely. Uh, fellow New Englander me being formerly in New England.
[00:01:01] Todd: Um, and. You know, the beard guy, the guy who has a Twitter account for his beard, right? Am I right?
[00:01:15] Mike: It, it was my beard. And then I grew my hair out and I was able to tie it back into like a little top knot. And I think they rebranded to be, um, Mike's top knot, but they still have so many photos of my beard in there that I feel like top knot, beard.
[00:01:33] Mike: It should just be renamed to Hartington’s hair. That would have been, yeah.
[00:01:38] Todd: But anyways, Mike Hartington, Mike, how are you today?
[00:01:41] Mike: I'm doing well. I, uh, I feel like you've summed me up in the most concise way that I've ever heard somebody say more and more times that I'm just like, introduce yourself. Like, oh, who am I?
[00:01:54] Mike: It's like music, code, coffee, milk. Hot sauce. What kind of sauce? There it is!
[00:02:03] Todd: Say less. If you don't have nothing to add, then let's just jump right into the questions, shall we?
[00:02:12] Mike: It's like, nuff said. Oh,
[00:02:14] Todd: and, you know, lover of Letterkenny slash Shoresy, which we may talk about as well,
[00:02:22] Mike: so... Outstanding.
[00:02:24] Mike: Outstanding.
[00:02:26] Todd: Yes. Wondrous.
[00:02:32] Mike: We'll keep it PG rated, I guess.
[00:02:34] Todd: Probably, yeah, but, um, yeah, probably should. Probably should. Actually, you know what? We don't have to. Not to a certain level. How's that?
[00:02:46] Mike: PG
[00:02:47] Todd: 13. Yeah. Um, so, Ionic. Yes. For those people who don't know, have never used, uh, haven't heard of Ionic, tell us what Ionic is.
[00:03:02] Mike: So, Ionic is a framework for building mobile apps.
[00:03:06] Mike: We give you a collection of UI components. Um, a library to access native device APIs and tools to, uh, build the app with the big factor being that it's all based on web technologies. So if you know CSS HTML and a bit of JavaScript, uh, YouTube can build a mobile app by utilizing our components and, uh, Uh, companion libraries, um, which are all web standard base, uh, integrate with your favorite framework of choice.
[00:03:40] Mike: Um, so it's like building a website just as easy. Uh, and you get a mobile app for free. Yes. And it is a hundred percent free and MIT open source. I just. That was pretty at that part.
[00:03:55] Todd: Yes. I, uh, have been contributing a little bit myself with some accessibility stuff. I found that, uh, when we initially met and I don't, you'll have to refresh my memory and where that was.
[00:04:12] Mike: Connect Tech 2021 was like the first Connect Tech, uh, since the before times.
[00:04:20] Todd: Yes. Um, I had heard you talking to somebody about that, about Ionic and I'm like, let's check it out because I wanted to build an app and I wanted to build my lobster roll app. Um, so I checked it out. And it attracted me because one, you can use angular view, react, whatnot with it.
[00:04:52] Todd: Svelte
[00:04:54] Mike: is that. There's some community, uh, integration with Svelte and SvelteKit. Uh, but nothing, um, 100 percent official. Um, we're, we, we keep an eye out on things. There's like so many frameworks these days that it's hard to know what to prioritize.
[00:05:13] Todd: Right. So, that attracted me, along with the accessibility part, which we will Ionic is, I think,
[00:05:26] Todd: Terrific. Um, that really was the, the deciding factor that pushed me to ionic was a focus. It seems of the developers in the whole team, you know, the, the company on, uh, accessibility, uh, can you talk about the, um, The focus on accessibility and why you, because we see a lot of frameworks that aren't focused on accessibility for whatever reason.
[00:06:07] Todd: So why the focus on accessibility is not much of a, of a soul solar solo focus, but you know, that's one of the focuses that the company that Ionic has is accessibility.
[00:06:22] Mike: So, yeah. Um, I guess like in the very, very early days of it. I think everyone was kind of in the same spot where I wouldn't say it wasn't a focus or a priority, but we weren't sure what we needed to do.
[00:06:37] Mike: Um, we hadn't really thought about it because we don't use the tools and don't have to experience. Uh, using apps, uh, with accessibility settings, uh, turned on. So it was kind of an afterthought for us. Uh, and I feel like we've been paying, paying back all the years that we weren't that accessible. Uh, but we had like serious conversations with companies who were using Ionic.
[00:07:04] Mike: Um, and needed to be. To some degree, more accessible than what we what we were offering at the time. And so we needed to go through, uh, and basically establish a ground rule. Like, what are things that we can do here? What are things that we can do within the next major release? Because it requires a lot of work and we just started.
[00:07:28] Mike: Using the tools that people who need, uh, a little bit of extra help. Um, we started enabling voiceover on our phones and debugging all of the apps. Uh, that way we started just experiencing what it was like to have to live in that realm. All the time, and I think that I wouldn't, I wouldn't say if sympathy might not empathy might not be the right word, but it definitely gave us a lot of sympathy for people who have to, uh, because we can just turn those settings off and we can go on with our day.
[00:08:02] Mike: Um, but we at least got a little understanding of how it was like, so. Once we realized where we were falling short, we said we took that plan, we kind of put it into place and I think because it's a web project, first and foremost, you know, there's a lot that we can do to, to muck it up real easily. Um, so it took a lot of just like teaching on ourselves, like, Hey, let's look up some of the best practices in.
[00:08:31] Mike: Accessible markup, um, making sure that we're not generating garbage HTML and that we're actually generating something that built in controls can, uh, tap into and then looking at new web standards to find out, hey, is there any way we can get our web components to integrate with form controls? Um, in the form integration.
[00:08:51] Mike: And so it's just, it's a long process of, um, Seeing what's current, seeing what's coming and just, just testing it to see if it works.
[00:09:04] Todd: Definitely. And that's, you know, a lot of the time when I've done auditing mobile, the mobile side of things. Yeah. I can usually tell right away if the, uh, desktop version isn't very accessible, then mobile most likely not be.
[00:09:25] Todd: Yeah. So that focus that you all have is great. And I mean, we, I mean, we had one stream where we were working on a little bit of a, on that app that I was building. I asked you, you know, if you wanted to, to help out and, uh, that's why I'm using Ionic, Ionic, just. I've looked at React Native, I've looked at Flutter, I've looked at, uh, there was one other thing I looked at, one other framework I looked at, and they didn't quite meet Where I needed to be, but Ionic did.
[00:10:11] Todd: So I commend Ionic for, for doing that and all the work that you put into it. Um, so that was great. And helping out for me was great, uh, because 7. 2 came out and then I helped out a little bit with the, um, Issue that they had with, um, Texas with text going to wrap instead of truncating text with an ellipsis because that can cause issues
[00:10:51] Todd: accessibility wise. So that was that was nice to be able to pass the information on that I knew was out there to the team in order for you, the team to make a decision that, you know, we're going to go with this instead of this because of this accessibility. Issue. So that, that was, um, that was great to see
[00:11:14] Mike: that.
[00:11:14] Mike: Um, I think that kind of, you know, goes to like a big point with a lot of our accessibility history is that it's not that we don't want to do any of this stuff. It's. We don't know. Um, there's some, there's a lot of information out there. So, uh, you know, getting feedback from the community definitely helps us understand what should we be doing and how should we be, uh, approaching the problem?
[00:11:40] Mike: Because what makes sense for us might not always make sense for, um, you know, like the most accessible option.
[00:11:49] Todd: Yes, definitely. Definitely. So 7. 2 is out. Um, and from, let's see, I've used Ionix not for very long, actually. So I would say, I think seven was my first, it might've been, it might've been before seven in somewhere in, in the late six version, but anyways, um, Yeah, it's just great.
[00:12:26] Todd: I can't, it's like, I'm glad I found this. So, you know, I'm glad we got introduced to each other and I heard your conversation because, you know, that, that's, that changed the way that, um, I was going to do. A mobile app. So,
[00:12:46] Mike: you know, it's one of those things where it seems like it's the most logical and reasonable way to build something, especially like, with the complexity of a lot of, um, other tools and not to like, sound like I'm trashing on other tools.
[00:13:06] Mike: There's a lot of additional things that you need to. Um, keep tabs on, but you need to be mindful not only of the code that you write, but the code that gets generated or is, uh, executed on the fly to render everything else. So it's this weird, I wouldn't say uncanny value, but it's like a weird, like. Like area where am I responsible for any issues or is it tools that I'm using or, or is it the runtime is this weird translation layer?
[00:13:40] Mike: Um, for us, it's like, oh, it's the browser. We know where things are going to go wrong. We know how things are going to happen. If they happen and we can be optimized that and help guide people towards a better path. Yes,
[00:13:56] Todd: definitely. And that actually ties into something that I'm doing currently. I'm doing an audit and they have.
[00:14:06] Todd: Uh, they're using ionic, so I'm able to look at something from the outside in under the hood a little bit and they'd be like, okay, this is what's been generated, but this is not accessible. So. I've been taking notes and I have some stuff ready for, uh, to contribute.
[00:14:32] Mike: Liam will look forward to that.
[00:14:36] Todd: Um, yeah, so no, I, I absolutely right.
[00:14:40] Todd: So my next question is going to be this. It be a little bit of a curve ball. So it's, um, native versus web app.
[00:14:57] Mike: Which one pick your poison? Why not both? I mean, this is a, it's a kind of an unfair question because this is what I do. And I spend most of my time in that cross platform landscape and I don't have to choose. I can have my cake and eat it too, uh, because of the way it works. But if I have to go to a store and download an app.
[00:15:22] Mike: I instantly feel like an extra step of just, it's extra work. I got to install. Now I got to do the face ID thingy, where it's like website and a web app. I kind of know that, that just cause I've been using the web for most of my life. Um, so as a user, I'd rather have the web as a dev and a maker. I'd rather have both and be able to.
[00:15:49] Mike: Cover all my bases,
[00:15:51] Todd: right? Yeah. And Ionic is just more than the framework to, um, been in my, um, I guess in my learning when I, um, was reading through all the documentation, uh, your accessibility guide and everything. You know, you have app flow, you have who app flow, we have our mutual friends. Cecilia is on that team, uh, capacitor, you have stencil on, on, on a lot of great stuff here that helps, you know, with, I guess, creation of mobile apps.
[00:16:41] Mike: Not just not just mobile apps. I think like a lot of the times like at our core we are just like nerdy web developers and We want tools that you know work a certain way and work well And like our big thing is we have let's say it's a problem, but we have a habit of doing A bunch of open source projects and just open, like a bunch of internal projects and then open sourcing them, which is, it's just just like, you know, we make a lot of things, but those things turn out to be really, really good.
[00:17:18] Mike: And, uh, we open them up and a lot of people like, yes, these are also really, really good. We should be using these. So we cover everything from your components, like authoring to your frameworks, your, uh, mobile app needs to your actual deployment of those mobile apps, uh, through app flow and everything. So try to cover the whole gambit
[00:17:42] Todd: and the community is.
[00:17:45] Todd: Terrific. Um, I got to mention this because you have a forum. You have the discord stuff. You have a lot of events that you do online. You have, um, you have what, uh, what am I missing here? Um, contributions on GitHub, of course. Um,
[00:18:08] Mike: YouTube channel.
[00:18:10] Todd: So, um, DevRel, I wanted to talk about DevRel a little bit. What do you, to you, in your opinion, uh, what makes a good DevRel?
[00:18:27] Mike: Um, somebody who. Is after talking with them, you leave that conversation feeling empowered and excited to go learn more about whatever you just talked about with them.
[00:18:45] Mike: A good DevRel is somebody who inspires people to want to go and do something and build and learn and teach it inspires them to like, hey. I could do something like this. Um, I think I've had several people who, in my DevRel career, that I've looked up as, like, that is a gold star, uh, DevRel person. Um, Kelsey Hightower, for example, we're in completely different fields.
[00:19:17] Mike: But, he is somebody who, anytime I've seen him talk, I've just been like, Oh, I should probably go look at some of this cloud stuff that he's talking about, and I'm not a cloud engineer, but I always leave feeling inspired and wanting to go do something and knowing that, like, I might not think I'm great at it, but he makes me feel like I could do this.
[00:19:43] Todd: Gotcha. Gotcha. I haven't heard anything, uh. Kelsey has said, but I know, I know of him in the community and I've heard nothing but praise, uh, about him. So, um, now we know, I mean, my journey hasn't taken, uh, effect yet, hopefully, but, um, you know, I've been to conferences now in person for. Well, all of last year and some of this year, so it's going to be a couple of years since I've hit the conference circuit and I've seen a lot of different, you're yourself included.
[00:20:29] Todd: You know, we have our friend, Krista Mars. We have Jeremy, um, we have who else, who else am I missing? Boy, I've got. Um,
[00:20:41] Mike: I mean, let's, let's, let's highlight him before he shows up and then gets a big head Homer, Homer, definitely seeing one of his talks is one of those ones where I'm just like, I'm inspired and I'm like, I feel incentivized to go do something and empowered to do something.
[00:20:58] Mike: Homer,
[00:20:59] Todd: definitely, you know, and many, many, many, many more, um, people who I look at and that gives me that inspiration to just to go and, and do these talks and, and like, learn about things like ionic, for instance, or, you know, um, view and how diving back into view, because I've been this year and last year, I dove back into view to relearn view because, I got pulled away from that, um, with all the accessibility stuff I was doing.
[00:21:38] Todd: And now with the work, uh, that I'm doing on the, on the app, uh, diving back into Angular. Because last time I touched Angular was when it first came out and it's version one. So. There's a lot to learn. Relearn. Yeah. So, um, that kind of thing. And when I think about it, it pulled me out of burnout and I took a break for a while.
[00:22:11] Todd: And, you know, hearing talks. And seeing y'all talking up on stage, engaging with the community was like, this is what I needed to get, to pull me out of that burnout and to get coding again. And now when I'm doing coding, even the littlest thing, it's like, I had that feeling back when I started coding, when I started learning coding, right?
[00:22:41] Todd: I feel that feeling again. So I know I'm definitely out of the burnout and it's because of the community and hearing talks and all that. So, you know, um, community is, is terrific. Um, the going back to the Ionic community, you know, going on the discord or in the form, I haven't been in the forums yet. I don't think I can't remember now, but you know, the Ionic community is terrific, friendly.
[00:23:13] Todd: Welcoming, um, lots of great people in there. Lots of great community, uh, lots of great conversation, um, I've learned a little bit myself, so, um, on community, I guess tying that into the DevRel, how important is Community to developer relations and how, you know, how does that all tie in to you?
[00:23:47] Mike: I mean, it's it's our it's our lifeline really like if we don't have a good community our community that is that we're fostering like What are we really doing?
[00:23:58] Mike: Um, like, my, my main goal is that at the end of the day, I want to be able to be able to take a, uh, group of developers, and I want to be able to teach them and help them and then also enable them to go teach and help others. It's just the kind of giving back thing. So, for the, If a community doesn't grow, a DevRel has really nothing to do, um, whether it's their community or they are in another community that, uh, for like a tool that they integrate with, um, but you need to have people there to be able to talk to, to be able to help and, you know, kind of spread, uh, your, your, your message more or less, um, so if community doesn't foster and you don't know how to foster a good community, Might as well, DevRel might as well not exist.
[00:24:59] Mike: Right,
[00:25:00] Todd: right, yeah. Um, another thing, another question that I actually have, um, now that I'm thinking about it, there, to me, having kind of read up on Well, I've, I've read a lot on developer relations. I've also read a little bit about developer experience. So is there a difference between the two?
[00:25:32] Mike: There's a subtle difference.
[00:25:34] Mike: Um, the way I tend to break them down is you have, uh, evangelism, advocacy and experience. We're like a evangelist in my, my personal, uh, like definition is somebody who's clearly there to not push, but to promote a product. Um, they're, they're, they're trying to make sure people know, Hey, um, this is a thing that exists, but here's also why this needs to exist.
[00:26:08] Mike: Uh, an advocate is somebody who can talk that, but if the conversation ends and they're like, Hey. I don't think this is the tool for me. Oh, cool. Here's like a few more that could be of interest to you and it could be a good fit. Um, I've spent most of my, uh, role as an advocate and you have to be okay with not every tool is going to be applicable for, for a person.
[00:26:36] Mike: So, uh, then with it, when it comes to developer experience, that tends to be more of. I am somebody who focuses on not just what the product can do, but how do people use it and how do people get on board? Like we hear about this onboarding process of I'm going to go learn. Ionic framework. Well, now you need to have somebody who's responsible for the understanding.
[00:27:07] Mike: What's the journey going to be like from setting up your environment, starting your app, uh, being able to build something and have a proof of concept. And then where do you go from there? Like, what are your next steps after that? And developer experience. To me, focus is a lot on that, that journey and that story and how your tools can work with other tools out there.
[00:27:40] Mike: Um, it's a lot of a, it's a lot of, you know. Handshaking and meeting people doing the introductions being like, all right, everybody shake your hands and then pulling them together. It's like, hey, do you guys know? Do you guys know each other? We should talk. Um, that that's to me what it is. Um, it's a very, it's a very nuanced, uh, kind of job experience.
[00:28:04] Mike: Um, and at some point, all 3 of those kind of, like, intermingle, but it is definitely, uh, there's a clear separation and what somebody should be focusing on. Right.
[00:28:17] Todd: Definitely. Yeah. Um, that's, yeah, that's, that's great. So we're a little past the halfway point, which means, um, we have to start talking about guitars.
[00:28:36] Todd: And so my first question is going to be, how'd you get into building guitars? I like the color. I love that. I love that,
[00:28:51] Mike: that. So I, it's a, it's a nice surf green. My, um, all right, so how did I get into guitars? Uh, I played cause my older brother played guitar and, um, at some point you just want to do and say, I'm cool.
[00:29:10] Mike: I'm hip. Um, so I got into guitar and then my high school at the time was doing this thing where in order to graduate, you had to do what's called senior project. Uh, where it's just like a, Hey, we want to know, do you know how to learn? It doesn't have to be anything that you're doing for college. It doesn't have to be anything that you learned here, but show us that you know how to take a project, make a thing, and then give us a report in a, like a, an oral presentation on your, on your topic and present it to the school board and let us know if you, uh, if you high schooled correctly, uh, more or less, I don't know if it was like one of those things where it's like.
[00:29:56] Mike: Oh, now we need to prove that we're actually doing our jobs. So I thought about what I was interested in at the time, and it was a lot of music and art and doing all bunch of makey things. Uh, and so I was like, I'm going to build a guitar. It can't be that hard. It is very challenging. It is very difficult to do.
[00:30:18] Mike: Um, I had a wonderful mentor who, uh, was able to like, He was a woodworker first and a carpenter. And when he's like, I know nothing about building guitars, but I know how to make things and I know what details I need to look for first and foremost, so I can help you, but you know, Do some, do your own research too, and I can just be a, a voice for you.
[00:30:41] Mike: Cool. That's all I needed. And I built a copy of a Fender Strat with like cheap parts that I ripped off from another donor guitar. Um, and it came out horrible out of, there were two other people who'd built guitars and theirs were far better than mine. Yeah. Um. But it was one of those things that's like, I really enjoyed this.
[00:31:07] Mike: This is a lot of fun. And so after college and once I got like the equipment and tools, I just started figuring out I need to build a guitar. I have too much time on my hands. I need to go build something. Um, and so I just started building guitars mostly because I wanted something special and it was fun.
[00:31:31] Todd: And you, I think I saw one of your pictures. That you may have posted on what I call Twixter now.
[00:31:45] Mike: Um,
[00:31:49] Todd: you have quite a few that you've built. How many, how many do you have? Let's see.
[00:32:00] Mike: So, this is one that I built. Uh, is very similar to the other one, but there's some slight, uh, differences in, like, the switches, the, uh, overall size. This is one that I built for myself most recently. I did an acoustic. I got the other one that I built, the two green ones. An acoustic that I, uh, gifted to a friend.
[00:32:27] Mike: I'm working on a, another guitar right now for, um, somebody in the community. We met at a conference and I was like. Oh, yeah, I build guitars. He goes, can you build me a guitar? And I was like, let's talk. Are you serious about this? He goes, Oh no, I'm dead serious. And so I've been building that, uh, since Dev Nexus.
[00:32:49] Mike: So since April, um, it's been a, it's been a long, uh, arduous process cause buying parts and materials are sti it's still a bit of a nightmare getting stuff shipped in. Uh, but it's, uh. Yeah, so like, you know, four or five guitars and again, but given moment, the ones that I, that I, I just bought,
[00:33:19] Todd: right, right.
[00:33:20] Todd: Okay. So you got the bug to build. Uh, guitars. Yeah. I, I, I know somebody who built our builds guitars as well from, from his house. Um, and yeah, he says the same thing, very challenging, but he loves doing it and he's built. I don't remember how many he's built but he's built a lot of them for people and, um, he plays.
[00:33:55] Todd: He lives in Maine. Um, but yeah, that's like, if I had the time, I would probably, that's one of the things I'd probably do, but rarely do I have time.
[00:34:10] Mike: Um, Oh, I definitely don't have time. Um, a lot of what I build is, uh, to the detriment of my sleep schedule. Um, but it sounds super corny to say it is very much just like it scratches an itch.
[00:34:29] Mike: And, um, like I, it's the same kind of itch that I'm scratching. It's like, I build something cool, like in a, in like our build a cool app. Cause like I'm creating something, but it's different because it's a physical process and you get that feedback loop. And if you mess up. There's no ctrl z or command z, you gotta, you gotta figure out what you're doing.
[00:34:56] Todd: Definitely. Um, I'm gonna switch now to what some of our friends have called heresy, and that is, that is, yeah I know, it's, it's awful, I tend to ignore the, the haters, but it's, it's coffee milk, and.
[00:35:16] Mike: Coffee milk if you know you know. If you
[00:35:19] Todd: know, you know, um, I was gifted by you not too long ago with a spectacular, uh, jug of autocrat, which the angels sang and harps played.
[00:35:42] Mike: Was it a gallon jug? It was
[00:35:44] Todd: the big, it was like gallon, half gallon jug. I think it was a gallon
[00:35:49] Mike: jug. Or three points. 3. 75 liters for the, uh, non, non U. S. folk.
[00:35:58] Todd: Yes, um, and it, when, when I got it, our, our, one of our mutuals, uh, Mr. DeMars, who's been on the podcast, Um, also one of the nonbelievers as well. Um, yeah, I was as giddy as a schoolgirl, um, when, when that came.
[00:36:26] Mike: Um, The thing that gets me though is, it's everyone who hates it has never had it. Like, if you had it, you, you'll know. That's why it's, if you know, you know.
[00:36:38] Todd: Exactly. Uh, Mark Noonan, who we know. He has it. He's had it. He likes it. Yeah.
[00:36:50] Todd: But then again, you know, we have people like Jeremy, who's, who's kind of a coffee snob. So,
[00:37:02] Todd: um, for those who don't know what coffee milk is, enlighten them,
[00:37:06] Mike: please. So, um, it is a drink with milk and if you've ever had chocolate milk, it's a syrup with chocolate flavoring. It's a similar concept milk, but the syrup has A coffee extract flavor. So it's a very sweet, delicious, light drink that there are, there's no wrong time to have coffee milk, but the really good time to have coffee milk is either when you're a kid and you want to feel like you're drinking a cup of coffee, like your parents, or.
[00:37:46] Mike: If you go to what's called a New York systems here in Rhode Island, uh, they have these things called hot wieners with a meat sauce, onions, mustard, celery, salt, uh, the one rule that you get, if you come to Rhode Island and you go to New York system, just say three all the way in a coffee milk. They will know what you're talking about.
[00:38:09] Mike: They'll give you them. You'll have the large thing of coffee milk. It's like some kind of chemical reaction. Once it hits your stomach and you just like eat it, you just feel happiness. Secure for any kind of just like blues that you're going through. It's like, three all the way, coffee milk, happy. I
[00:38:30] Todd: drove three, three or four hours.
[00:38:35] Todd: For lunch one day down to only bill just to say just to say three all the way in a coffee milk
[00:38:43] Mike: if the if a guy theory is like Oh, yeah, you gotta go get some how we need some coffee milk. Who am I to argue? the fun story of that I will go off topic on this my fun story with Uh, with New York system is in O'Neill specifically my dad growing up said he would go there and this is before they were like health and regulations and restaurants.
[00:39:14] Mike: Kind of a bigger set heavy guy sweating behind a grill all day, takes his arm out, lines him up with hot dog buns, starts putting all the hot dogs in there and lining him up with sauce kind of just like dragging it across his arm and he'd be like, Oh, if I could be so lucky just to get the few that are up there towards the pit, it would be extra salty.
[00:39:40] Todd: Oh, that's great. That's great. I think the last time I was there they were still doing the arm thing, but that was before they got By the by the health
[00:39:53] Mike: inspector now they now wear gloves probably for the best, but Nostalgia,
[00:40:03] Todd: you know every time I see a food show that has been there It's the same people that were there when I was there The few times that I had been there.
[00:40:17] Todd: So it's like the owner, I know who the owner is just by, you know, Oh, that's the owner.
[00:40:23] Mike: It's a, it's a very family run kind of thing. And, uh, the only bill one specifically, like that is the same family that has always owned that New York system and probably always will. Yeah. Um, Yeah, it's just a Rhode Island staple and you can't go wrong.
[00:40:45] Mike: No,
[00:40:45] Todd: no, and then there's like a couple of guys that That I've seen on, on TV that are behind there doing their thing and it's like, I've been served by that guy. I've been served by that guy. So definitely, definitely. Um, so now that we've talked about coffee mill and the ideal three all the way and a coffee mill.
[00:41:13] Mike: See, I won't go for three all the way. I do know us to mustard and onions. Really? I'm not, nobody's perfect. No. Everyone has their flaws.
[00:41:24] Todd: Still though, it's a Rhode Island hot wiener. So, can't go wrong. No matter what you put on it. No. Hot sauces.
[00:41:41] Mike: You've got my mouth, you've got my mouth tingling already from the thought of some sauces. I
[00:41:48] Todd: sent you some of, uh, Arizona's, well, Phoenix's finest, I think. Uh, what'd you think?
[00:41:58] Mike: Uh, I like them. They're, they have a good balance of flavor and heat, but not so much heat where you hate everything. For like 30, 40 minutes.
[00:42:10] Mike: Um, I've had some from Kansas city where there's no flavor. There is no joy. There's only pain. And,
[00:42:28] Todd: uh, speaking of pain, I was gifted with a bottle, excuse me, a bottle of what's called 100 percent pain. And I can tell you it's not high up on the Scoville scale, but it is. A distant
[00:42:53] Todd: cousin of the bomb.
[00:43:00] Mike: I already know that flavor and pain, uh, like without even going into anything else, there's a very specific flavor palette, battery acid.
[00:43:15] Todd: And it's not so a hundred percent pain does have some taste, but you have to fight through the pain to get to that taste. This is a slap in the face. And then a punch to the gut kind of hot
[00:43:33] Mike: sauce.
[00:43:35] Mike: But we'll at least just say, it's been a long time. Yes. Nice to see you. Yes,
[00:43:40] Todd: exactly. Um, but, I will say, in a chili, that could work.
[00:43:49] Mike: Oh, yeah. But you gotta have like a big 5 gallon thing of chili and have, I don't know. 16th of a teaspoon to drop that in there. Maybe less. Yes,
[00:44:04] Todd: definitely because that I felt my soul being pulled out of me like Harry Potter when one of those things was sucking is his magic out of him or whatever it was they were watching Harry Potter last night here, so That was happening
[00:44:32] Todd: A good hot sauce to you contains what?
[00:44:36] Mike: Uh, heat first and foremost. Uh, if you don't have any heat, might as well just be heading to Basco. Um, let's see if that, see if that gets any angry comments. Um, heat, flavor, um, I'm particular to like a dry, almost fruitiness. Um, like I like, I like it to be almost like, um, like, like a nice red wine.
[00:45:10] Mike: Like there's almost like a little dry notes to it. And you're kind of just like, Hmm, it coats the mouth really good. Uh, leaves, leaves the lips tingling a bit, but in a, in a reasonable amount, I'm not hating life trying to have it. Um, I'd rather not do that. So heat, but enough to like, be like, Ooh, Ooh, this is a good pick me up.
[00:45:39] Mike: And a good dry, uh, like fruitiness to it. I
[00:45:45] Todd: sent you the mango. You
[00:45:48] Mike: did. Yes. Yes. Very good. It's got a little bit of that kick to it. But it is a very good flavor first and foremost. Yeah, yeah,
[00:46:00] Todd: they make a, they, they make good ones. They actually came out with a line of, of, uh, I think they called it limited reserve, but I just want to make sure real quick here.
[00:46:16] Todd: They have a blackberry.
[00:46:23] Todd: Oh, sorry. Raspberry chipotle hot sauce.
[00:46:27] Mike: I'm not a raspberry flavor fan, but raspberry chipotle. I'll give it a go.
[00:46:35] Todd: They have jerk sauces, uh, marinades. We, we just had actually blackberry rum. Uh, I used it to marinate some chicken breasts and the chicken came out. Just, it tasted terrific. Um, yeah, the limited edition stuff.
[00:46:59] Todd: So they have a chimichurri Reaper. They have black cherry, black garlic, uh, lemon or pineapple five spice. So they have a lot of, of, uh, yeah, they have a lot of good ones that I bought. That I'm complete. I ended up buying 20 bottles. So I have 20 bottles in my pantry.
[00:47:22] Mike: That's a lot of hot sauce. That
[00:47:24] Todd: is a lot of hot sauce.
[00:47:25] Todd: They have a smoky mango habanero. So I have two bottles of that. Maybe that'll find its way to your neck of the woods.
[00:47:39] Mike: Todd, uh, there is a good one, Mad Dog 357, which burns, it's got a lot of heat, but it's also, it's nostalgic for me because that's what me and my roommates would like do, uh, a hot sauce challenge on like some little, uh, chips, and we'd just do like a little drop of that, and, uh, It's always fun to try it to people who are like, they're not quite sure what to expect and they have no, like, this is really hot.
[00:48:08] Mike: Can I get some ice cream or milk or ice or, or something? It's like, yes, you can, but welcome. Come hang out.
[00:48:17] Todd: Yes, yes, indeed. Um. So we're getting down to time here. That went quick. Um, what do you have going on, uh, coming up that, uh, people can find you at as far as you've got conferences? I know that, um, I'll be seeing you in October, late October Ionic Conf.
[00:48:53] Mike: I'll be, yeah, so I'll be, uh, be a city this weekend. Um, I got, uh, some stuff going on in New York. I'm going to be at a droid con, which is always going to be fun. Uh, but connect tech, I am a conf. Those are probably going to be the, uh, connect tech, all things open. Then, uh, Um, no, no. Hold on a second. Order's right.
[00:49:19] Mike: IonaConf, AllThingsOpen, ConnectTech. Uh, kind of three back to back to back, and then I take a little bit of a break.
[00:49:29] Todd: Because AllThingsOpen is this, I think, right around the same time Magnolia is. I'll be at Magnolia. Yeah,
[00:49:35] Mike: it's going to be, uh, one of our big ones, and, uh, while I want to go to Magnolia, it's one of those ones where...
[00:49:43] Mike: I gotta go for, I gotta go for all the, uh, all the business stuff, but it is a fun event and it's a painful time of the year because you want to go with, go to the ones with your friends, but you also want to go to the other ones and I hate having to choose. Yes, definitely. If I could clone myself and go to both of them, I would.
[00:50:07] Todd: So you got those going on. Um, anything else, uh, going on? You doing any, um, you did, you recently had an Ionic event two weeks ago? Three weeks ago?
[00:50:27] Mike: Two to three weeks ago. It feels like it was, Um, yeah, we did a live stream on YouTube. It was a good number of people, uh, hanging out in the chat. Todd, you were in the chat the whole entire time.
[00:50:40] Mike: Um, it was really fun. Uh, I get to hear updates from all the people at, uh, you know, behind the scenes in Ionic who are helping build the products themselves. Um, we got to, we'll probably do another one of those later on in the year, but Ionicoft is going to be our, our next one where we highlight all the cool stuff that we have planned.
[00:51:01] Mike: Um, and I'll be, I'll be jumping in on a little bit more streams, uh, uh, coming up soon. I think those are going to be, those are going to be making a comeback in my, uh, schedule just because they're fun to do and they're, it's a great time hanging out with people. Yeah,
[00:51:17] Todd: definitely. And, uh, we'll be doing a stream at some point working on that app.
[00:51:27] Todd: Yes.
[00:51:28] Mike: Yes, we will be doing
[00:51:29] Todd: that. Yes, we'll have to button down the date on that, but, um, we'll get that out there. Um, trying to think of anything else before we wrap this up. Um, conferences, blah, blah, blah, blah, blah. Um,
[00:51:49] Todd: geez, I don't know. I think that's it.
[00:51:53] Mike: Yeah, yeah, that seems to be about just everything. Yep. Outstanding. Well,
[00:52:03] Todd: yeah. Um, Mike, thank you for coming on today. Um, always good to talk to you. And it was good to talk symbiotic and, and hot sauce and coffee milk and hopefully we hear from our coffee milk detractors. I just want to make fun of
[00:52:26] Mike: them. Coffee milk detractors, don't knock it if you haven't tried it. And if you've tried it and hate it, I will understand.
[00:52:35] Mike: But if you haven't tried it, don't, don't, don't hate. You'll, you'll know once you'll know what we're talking about once you actually have it and understand then it's like, oh, I see why they like this.
[00:52:49] Todd: Yeah, don't knock it until you try
[00:52:52] Mike: it. I've been saying since day one.
[00:52:56] Todd: So, yeah. Um, anything else? Last minute, last
[00:53:03] Mike: second.
[00:53:05] Mike: Come hang out with me and Todd on our next stream together. Whenever that happens. Yeah. That's all I
[00:53:14] Todd: got. The sound effects when you subscribe and give out, uh, or use points and, uh, give out subscriptions are really fun. It's, uh, Shoresy, which we didn't talk about Letterkenny or Shoresy, but I'm, I'm still Anticipating season two of Shoresy.
[00:53:38] Mike: Oh, I can't, I cannot wait for that. You know, you know how they say that somebody is going to really be happy for something, for something, and then it shows up and they are the happy for it. That's how I'm going to be for Shoresy. To me, it's going to be fantastic. I'll try not to cry. Just like Shoresy, whenever he hears the Canadian National Anthem.
[00:54:03] Mike: Getting peppered over here.
[00:54:07] Todd: All right, uh, with that, uh, thank you again for coming on. I appreciate it. And, uh, can't wait to see you soon. Um, geez, when was that? Connect Tech. Boy, that's going to be long. Another, another couple of months, at least.
[00:54:26] Mike: So it feels like it's going to be a little bit, but trust me, time flies, my friend,
[00:54:30] Todd: it sure does.
[00:54:32] Todd: So that wraps up this episode of the front and nerdy podcast, uh, catch us next time, new guests, new chats about other stuff. Boy, what a low budget program I got going on here because I don't have a sheet. I work. I just work off the cuff. So,
[00:54:53] Mike: um, yeah, I do not apologize for just doing it like that. It means that you still care because you just you want it to come from the heart.
[00:55:01] Mike: Yes,
[00:55:02] Todd: exactly. Um, like us subscribe on our YouTube channel, uh, rate us on podcast app of your choice, um, all that good stuff. And again, thank you very much. And, uh, we will see you next time. Bye bye bye bye.
