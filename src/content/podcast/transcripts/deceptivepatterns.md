---
title: Deceptive Patterns
description: Homer and Todd discuss Deceptive Patterns
date: 2023-08-31
layout: layouts/post.njk
---

## S3:E3

[00:00:00] Todd Libby: Welcome to the Front End Nerdery Podcast, a podcast about front end web design and development. Do they even, we, did they even say web design anymore? That just came out of nowhere.
[00:00:16] Homer Gaines: I don't know. I would possibly, yeah, what is it? Product design now, but I mean,
[00:00:20] Todd Libby: product design. Yeah,
[00:00:22] Homer Gaines: I mean, if you're working on a product, but yeah, I'm pretty sure that,
[00:00:25] Todd Libby: yeah.
[00:00:25] Homer Gaines: pretty sure we say web design still.
[00:00:27] Todd Libby: yeah.
[00:00:28] Homer Gaines: I don't know. I haven't seen it used as a title for like a job, like web designer.
[00:00:34] Todd Libby: no.
[00:00:37] Homer Gaines: UI design.
[00:00:38] Todd Libby: webmaster.
[00:00:39] Homer Gaines: Oh my gosh. Yeah. There's a blast from the past. I actually had that, I had that title professionally, had that title. Folks paid me to have that title.
[00:00:48] Todd Libby: yep. That's, that's when you used to snap those little Um uh, yeah. See words today are just escaping me.
[00:01:00] Homer Gaines: This is gonna be an interesting, um, talk.
[00:01:03] Todd Libby: bad badges that said your site was accessible, that they want to bring back.
[00:01:11] Homer Gaines: Yo, I really hope that never happens. I really do.
[00:01:17] Todd Libby: for, yeah. Yeah. That, that's for another podcast because that's, it's,
[00:01:20] Homer Gaines: yeah,
[00:01:20] Todd Libby: that's a different soapbox. But, uh, yeah. I'm Todd Libby and with me, my gu&mdash;uh, my co-host, my guest, my co-host, Homer Gaines, Homer?
[00:01:33] Homer Gaines: What’s good everybody? Happy Friday. Happy Friday.
[00:01:37] Todd Libby: yeah. Happy Friday. Um, so today is, I guess, I don't know, it's, it seems like it's gonna be you kind of, um, interviewing me a little bit, but we're gonna talk about, um, my work in the W3C and deceptive patterns and the fast framework.
[00:02:07] Homer Gaines: Yep
[00:02:07] Todd Libby: So, I'm gonna hand it over to you while I, you know, get ready for all these hard-hitting questions,
[00:02:14] Homer Gaines: Actually, they're not gonna be hard hitting questions, really. Um, what I really want to do is, uh, I would love for you to highlight what your talk is about,
[00:02:24] Todd Libby: Mm-hmm.
[00:02:25] Homer Gaines: um, just for those who aren't able to get to any of the conferences that you're speaking at, uh, so that you know they can at least gain the insight that you are presenting to others.
So, uh, initially I'd like to know. Why, like, why did this even become a thing with you? Because I, I know your whole role in accessibility and in, in the accessibility community and all, but, um, this one is still somewhat a fresh talk that a lot of people are, do not have on their radars. So, I'd like for you to expound on this topic, talk about how you came up with it, or why you came up with it, why you feel it's important to discuss.
And then if you can just go over some high-level details of it. Since you know, this is, we're not doing a full hour on this one. You can just give us the gist. So, yeah, first one, how'd you, what made you want to start speaking about this, uh, at conferences?
[00:03:29] Todd Libby: Uh, the work that I've done, the work that I'm doing, I think made for a talk that maybe the community, the dev community, um, would want to possibly have. So, what I did was put the, I put this talk together about the, the stuff that I've been doing. Um, and I thought it's important because, not just to me, but to inclusivity and accessibility, since we're both in that space.
[00:04:10] Homer Gaines: Mm-hmm.
[00:04:11] Todd Libby: and not because, um, you know, it, it just, you know, I didn't chatGPT, I didn't, you know, I, I, I, from the, from the time that I was like, okay, we're doing this work. I think this would, I thought it would make a really engaging, not only in an engaging talk, but an engaging conversation.
And so far, like the conversation part. Oh, didn't that just go well on, on social media? But I won't go into that.
[00:04:52] Homer Gaines: Oh no, we might have to, cause I mean you just can't drop that and be like, oh yeah, that went well mad sarcastically.
[00:04:57] Todd Libby: yeah, exactly.
[00:05:00] Homer Gaines: We may have to discuss, discuss that aspect of it, but, alright. So, you're talking about, um, deceptive patterns in the fast framework.
[00:05:08] Todd Libby: Yes
[00:05:08] Homer Gaines: So how do you dis how do you define deceptive patterns? Cause I know, um, what one of the people are more probably more familiar with anti-pattern or dark pattern. So how did you come up with deceptive patterns or why did you choose deceptive patterns as opposed to those other two labels?
[00:05:30] Todd Libby: I don't like the, I don't like the term dark pattern, simply because it just doesn't, I, it doesn't describe what these patterns are. And not only that, there, contrary to popular belief, I think, and this is just one man's opinion, I think there are, we've gotten to the point where we have been ridding the tech landscape of problematic terms, master slave, for instance.
[00:06:14] Homer Gaines: Yeah.
[00:06:15] Todd Libby: Dark patterns, although of a lesser degree, I think is a problematic term. And that's part of why I don't use it. The other part being, I don't think it fits. I don't think it fits at all. I think deceptive is more attuned to what. Um, is going on with these patterns. I think also at the same time, anti-pattern is as well.
So, to get to the question, what's the difference between the two? A deceptive pattern to me is a deliberate attempt with intent to deceive a user into doing something they don't want to do on the web.
[00:07:11] Homer Gaines: Okay.
[00:07:11] Todd Libby: anti an anti-pattern is a pattern is that is harmful or bad. It's bad UX, it's bad, you know, whatever.
But there's no intent. It's not deliberate. Um,
[00:07:28] Homer Gaines: Mm-hmm.
[00:07:29] Todd Libby: and I think there's a big difference and I just not too long ago was like, okay, because I wasn't discussing the anti-pattern, I. I was like, there is a difference. So that's why I added it into my talk because there is a difference. One's with intent, one's without intent.
Um, now.
[00:07:48] Homer Gaines: Okay. And so just like, just like with legal matters, how, you know, some instances you have to prove intent. Um, how do you, how do you prove intent with a deceptive pattern or an anti-pattern?
[00:08:10] Todd Libby: there are classifications that we have and, um, I think, let's see.
There are barriers and different types of patterns that are with intent, and I think there's a clear line with some of these that, oh, yes, that's with intent. Um,
[00:08:41] Homer Gaines: Can you give an example?
[00:08:43] Todd Libby: so, trick questions. That can be one. Um,
[00:08:53] Homer Gaines: like double negatives?
[00:08:54] Todd Libby: yeah,
[00:08:56] Homer Gaines: Mm-hmm.
[00:08:57] Todd Libby: Um, the, uh, one example I give is there is a, uh, form and it says, I would like to receive, I, I re, I would like to receive relevant information from this company. And there's two radio buttons, yes or no. And one's checked? No, the question underneath that, I would like to receive additional information too.
No, that one's checked. And then underneath that, contact preferences. Would you like to receive information from Company X about upcoming events, exhibitions, and news? No. And, and I, those aren't really trick questions, but they, there's confusion. There is a pattern.
[00:09:54] Homer Gaines: No, I get it.
[00:09:55] Todd Libby: There's a pattern there of deceit, so, um,
[00:09:59] Homer Gaines: I get it. I get it. If you asked me once and I gave you an answer once, don't ask me two other times the same way. Expecting my answer to be different. If I don't want any information from you, I don't want any information from you.
[00:10:13] Todd Libby: Yeah. I'll give you a better one. Copy and paste when that's disabled.
[00:10:19] Homer Gaines: That's an anti-pattern for sure. And, and also a pain in the neck, uh, from an accessibility standpoint
[00:10:25] Todd Libby: Yes
[00:10:25] Homer Gaines: when you disable it, yeah.
[00:10:27] Todd Libby: Or, well, that's actually not a better one. What?
[00:10:32] Homer Gaines: So, let me, let me ask you this. Would, um, would form input fields that don't allow foreign characters be considered an anti-pattern?
[00:10:46] Todd Libby: Yes. Because somebody should be able to input their name the way that it is spelled, and not have an error message come up saying, no, that's not, well paraphrasing. No, that's wrong.
[00:11:00] Homer Gaines: Yeah, no, I get it. I get it. Yeah. I had a friend, um,
[00:11:07] Todd Libby: that's a
[00:11:07] Homer Gaines: or the one that, the, uh, one that I came across, uh, a friend of mine, um, her first name has two letters and she was trying to sign up for service and the input would not allow her to put her first name because it said it had to be more than two letters, which I thought was trash.
[00:11:27] Todd Libby: Yeah, so another, another example I give in my talk is our friend Jina Anne.
[00:11:38] Homer Gaines: yeah.
[00:11:39] Todd Libby: She
[00:11:40] Homer Gaines: Shout out Jina. Clarity Conf.
[00:11:42] Todd Libby: yep. Clarity Conf great conference. Uh, she had an example that I had to take, and it was from Post, that app Post.
[00:11:54] Homer Gaines: Mm-hmm. Oh gosh.
[00:11:56] Todd Libby: So, it, it's, it's basically shows the, the form where you put in the handle that you want.
[00:12:05] Homer Gaines: Mm-hmm.
[00:12:06] Todd Libby: and, it says in parentheses your unique personal identifier.
You currently can't change it. So, pick a good one. Example. Noam, N O A M. Okay, that's the CEO, I believe that's his name. Noam, I don't know if I'm pronouncing it right, but apologies if I'm not. So, the example has four letters, and you know Jina Anne, she is at Jina, J I N A, right?
[00:12:41] Homer Gaines: Yeah. Yeah, I mean, she might as well just have that joint trademark.
[00:12:45] Todd Libby: She goes, yeah, she goes, she presses enter an error, comes up, handle must be between six and 15 characters in length and can only contain letters, numbers, and underscores. But their example is four letters.
[00:13:04] Homer Gaines: I was just gonna say that. Make it make sense.
[00:13:10] Todd Libby: Is that deceitful? No, but it's a definite anti pattern.
[00:13:16] Homer Gaines: It's misleading.
[00:13:17] Todd Libby: It is misleading.
[00:13:19] Homer Gaines: It’s misleading that's for sure.
[00:13:21] Todd Libby: Is there intent?
[00:13:22] Homer Gaines: Yes, definitely misleading,
[00:13:25] Todd Libby: is one could say there is no, there's no intent. So, I mean,
[00:13:32] Homer Gaines: Right.
[00:13:32] Todd Libby: what is with and without intent is subjective.
[00:13:37] Homer Gaines: Honestly, you know what though? Um, I think there is a way that you can prove whether something, uh, was done with intent. And this goes back to looking at business requirements. So, for instance, while someone is building out this form and they're working on a validation for it, if it is specifically called out that the form should have, you know, that particular anti-pattern built into it, and that is a part of the requirements that is intended. So therefore, you have intent because a decision was made to actually limit it based on these parameters versus someone saying, oh, we just have this. And because just a lack of forward thinking or whatnot, they build in that validation. Maybe it was a use case that never got tested.
[00:14:29] Todd Libby: Right
[00:14:29] Homer Gaines: or anything like that.
[00:14:32] Todd Libby: Yeah, yeah.
[00:14:32] Homer Gaines: That's just how it was validated. And that could fall short, you know? So, I could see, I could see, um, intent being proven that way, but then again,
[00:14:43] Todd Libby: Yeah.
[00:14:43] Homer Gaines: getting someone to actually say, well, show me your documentation so that we can verify how this was. I mean, that could be going back to tickets, but that's also like, are we getting into courts of law to prove this stuff?
[00:14:54] Todd Libby: Yeah.
[00:14:54] Homer Gaines: So, I don't know, but that's just one way that I could, that I could see it.
[00:14:59] Todd Libby: yeah, definitely, definitely. So,
[00:15:00] Homer Gaines: So when you, so when you're talking, what, so when you're talking about these, um, these deceptive patterns and such, are they only related to, from what, from your research and everything, are they only related to form elements, forms, or is it that we just see them more often in forms while trying to extract data from somebody?
[00:15:24] Todd Libby: Not just in forms. Uh, I'll give you an example. Paywall on a website. We get, we get we,
[00:15:34] Homer Gaines: how's that?
[00:15:36] Todd Libby: okay. So, we get all of the bad news thrown at us. It's constantly shoved in our faces. But anything, anything other than the bad news, we go to click on it. And we, we, you, you're staring in the face of a, the best example is the Washington Post. When I see a link and I click on it, it goes to the post, and then there's a paywall. It's like, and it could be something, it could be bad, it could be bad news, it could be, you know, not a very good news item. Or it could, you know, most of the time though, that I've seen through my research, it's been something that, you know, won't make me feel anxious, that won't raise my anxiety or make me, you know, angry to read it. You know? Um, so we have paywalls. I think that is, that's a definite anti-pattern to me. It, you know, deceitful. We're getting into, is the link deceitful? Nah, that's, that's another debate.
[00:16:57] Homer Gaines: Is it, is it deceitful when you click on it and you're able to read or you start reading and then the paywall pops up in front of you after you have been on the page for say, 30 seconds or so?
[00:17:12] Todd Libby: it is. I think that's,
[00:17:13] Homer Gaines: I got hit by that today.
[00:17:14] Todd Libby: Yeah.
[00:17:14] Homer Gaines: and it was annoying as crap. I was, I was reading this article and boom, I was like, you must subscribe.
I'm like, really?
[00:17:21] Todd Libby: yep. Yeah. That's de, that's a definite that the way that is implemented is a definite deceptive pattern. Um, another example is a timer. Okay, you have 12 hours until our sale ends. You better hurry and you better order something.
[00:17:41] Homer Gaines: was, you know those, those are marketing tactics that play on your psyche.
[00:17:44] Todd Libby: Definitely, definitely.
[00:17:44] Homer Gaines: That's what those are. Building in that urgency to get you to go click, click, click, click, click. Do it now.
[00:17:51] Todd Libby: ticket Ma Ticketmaster, you have, you have 10 minutes to finish this order. What if I get sidetracked like I had before, and I have to come back and I gotta do that process all over again. But the seats that I had are gone now, so I have to go through and find seats because now the way I, the way I'm thinking on these is, okay, especially with the timer.
What about if somebody has a cognitive issue?
[00:18:23] Homer Gaines: Mm-hmm.
[00:18:24] Todd Libby: What if even maybe somebody has, you know, an issue learning or reading issue, that creates a huge barrier for people like that. So not necessarily.
[00:18:44] Homer Gaines: It causes anxiety too.
[00:18:45] Todd Libby: Definitely
[00:18:46] Homer Gaines: A lot of people don't do well when there's, you know, timed actions and so forth.
[00:18:50] Todd Libby: Right.
[00:18:50] Homer Gaines: It, wait, there's a rule in the WCAG against timing or saying that you should at least state an amount of time that a task for like a session, for instance, a session is gonna be open, but you also are supposed to give the person ample time to, uh, either cancel that session or extend it after a while.
[00:19:11] Todd Libby: Yeah, that's,
[00:19:12] Homer Gaines: So, I know that,
[00:19:14] Todd Libby: yeah, that's,
[00:19:14] Homer Gaines: I don’t know if that really applies to this.
[00:19:17] Todd Libby: well, I'm looking at that now. Success criterion 2.2.1. Timing adjustable.
[00:19:23] Homer Gaines: Yeah. Timing adjustment. Yeah.
[00:19:25] Todd Libby: So, for each time limit that is set by the content, one of, at least one of the following is true, you have turn off, the user can turn off the time limit, uh, adjust.
The user is allowed to adjust the time before encountering it over a wide range that is at least 10 times the length of the default setting. Extending then you have real time exception. You have essential exception and you have a 20 hour exception. It's a very, I don't know what the, it's not as much, I guess you could say nuanced or you could, it, it's a very involved success criterion.
So yeah, that, that, that's definitely something that accessibility wise, you could definitely say, oh, that doesn't meet timing adjustable because of, you know, whatever issue there is. So,
[00:20:23] Homer Gaines: So, playing devil's advocate. We know that. I don't know why we picking on Ticketmaster right now. It's your fault you brought em up.
[00:20:32] Todd Libby: Because they suck.
[00:20:32] Homer Gaines:  Anyway. Glad they're not a sponsor anyway.
[00:20:40] Todd Libby: We don't have any. We don't have any.
[00:20:43] Homer Gaines: it's okay. Yeah. So, devil's advocate here. We know that if you were standing in the queue waiting to purchase tickets, physically standing, waiting to pur purchase tickets, if you just happen to be the unlucky person that is number, you know, 501 and there are only 500 tickets that you didn't know about.
The person in front of you gets the last ticket. It's basically first come, first serve basis.
[00:21:15] Todd Libby: Yep.
[00:21:16] Homer Gaines: Could this timer or the way that they handle timing online be considered a method of doing first come, first serve in a digital medium?
[00:21:31] Todd Libby: I would first,
[00:21:32] Homer Gaines: Not saying that it's still not, it doesn't have its accessibility issues, but could this be a possible way to actually do that first come first serve?
[00:21:42] Todd Libby: I would first ask myself; did I see anything that mentioned there are a limited amount of tickets and there was a limited time to get those tickets. If not,
[00:21:54] Homer Gaines: Okay.
[00:21:55] Todd Libby: then I definitely am saying that's a deceptive pattern. Can,
[00:22:02] Homer Gaines: I can see that.
[00:22:04] Todd Libby: can it be an anti-pattern? Sure. It can. Okay. And from the point of view where, you know, I go in and I'm looking around for seats and I get that timer ticking down. Sure. I don't want to be rushed. I want to find a good seat for the concert. Right. That part could be, I would say an anti-pattern, but if, you know, seats are getting snatched up I'm like trying to look around and then all of a sudden timer runs out and it's sold out, that's, that's kind of, you know, and, and then you go back and read, oh, there was only 500 tickets.
Limited time, you know, 10, 12-hour sale. Yeah. That's definitely a deceptive pattern. I haven't seen that though. So more often than not, it's an anti-pattern that I've seen.
[00:23:05] Homer Gaines: Okay. I'm just curious. Like I said, I'm just, I'd rather to cha I'd like to challenge it because I could see somebody coming up and actually doing that exact same thing to, to argue the point itself. Um,
[00:23:20] Todd Libby: Yeah.
[00:23:20] Homer Gaines: So deceptive patterns, dark patterns, anti-patterns. So, let's touch on dark patterns again. Um, because like we're coming up on time. We, we got a half hour to,
[00:23:35] Todd Libby: Yep.
[00:23:35] Homer Gaines: to bang this out, so I wanna get into the controversial side of it. Uh,
[00:23:38] Todd Libby: Yep.
[00:23:40] Homer Gaines: so, let's talk about that. What type of negative feedback have you received for trying to shine some light on deceptive patterns?
[00:23:54] Todd Libby: Uh, I tweeted out, I think it was New Year, January 1st, as a matter of fact, when I think it was where I was like, it's 2023.
[00:24:05] Homer Gaines: Way to start the year off.
[00:24:07] Todd Libby: I know it's, you know, leave it up to me. Um, it might.
[00:24:13] Homer Gaines: let's start the year off with an argument.
[00:24:15] Todd Libby: yeah, I mean, it's Twitter. Why not? Um, it, it, it might've been a few days after, but anyways, I tweeted out it's 2023 why don't we stop calling it dark patterns and start calling it deceptive patterns because, you know, or anti-patterns, because dark patterns just makes it feel all halloweeny. You know, it makes it feel halloweenish,
[00:24:43] Homer Gaines: Halloween&mdash;Halloweenish.
[00:24:45] Todd Libby: halloweenish. I'm sticking with it. Um,
[00:24:51] Homer Gaines: All right, all right, we keeping Halloweenish,
[00:24:53] Todd Libby: so,
[00:24:55] Homer Gaines: but wait, somebody had beef with that?
[00:24:57] Todd Libby: oh, well, I, I didn't mention Halloween-ish, but yes, somebody had beef with it, and here's why. They misread one, which seems like it's a common theme on Twitter. People misreading other people's tweets.
[00:25:15] Homer Gaines: Ooh yeah.
[00:25:17] Todd Libby: Um,
[00:25:18] Homer Gaines: Misread stuff all the time.
[00:25:20] Todd Libby: I said there were, there are racial connotations behind the term dark patterns, or they're, or they're
[00:25:31] Homer Gaines: See you used that trigger. You used that trigger word.
[00:25:34] Todd Libby: yes. Racial. Yes. It, you know, I'll stop right there before I say something I, that, that gets me canceled, but
[00:25:47] Homer Gaines: All right, so the, the trigger word triggered somebody.
[00:25:52] Todd Libby: Yes. And then that brought a mountain of people jumping on that bandwagon. I said they could, they can be there, there can be racial connotations behind the term dark patterns, and there is research to show that there is, okay, black, dark, evil, disgrace, vile, immoral, white, light, purity, good, innocence, cleanliness, you know, take all that, people wanted to, well, it's all about light and how light, light from the sun or light from an how is a a pattern online digitally. What does that have to do with light from that big fireball in the sky? Nothing. Absolutely nothing. That's just avoiding that word, racial.
[00:27:02] Homer Gaines: Mm-hmm.
[00:27:06] Todd Libby: There's the connotation is also the, the, the inclusion. Why are we using an exclusionary term? Harry Brignull, who coined the term dark patterns, him and I have been talking and he switched from dark patterns to deceptive design, which I like deceptive design as well, because everything's,
[00:27:38] Homer Gaines: Yeah
[00:27:38] Todd Libby: everything's
[00:27:38] Homer Gaines: Yeah, I like that term.
[00:27:38] Todd Libby: got a design, everything's got a design phase to it too, so, It's all about, you know, the deceit, the deliberate attempt or the, you know, the, um, there's no attempt to deliberately harm a user, but it happens, you know, without, without intent.
It's the pattern where somebody is forced down a path to trap their attention, and this is what that's about. It's not about dark or light, you know, black or white. It's all about that deliberate push down that path to get people to do something, whether it's from the marketing aspect or whether it's, you know, whatever.
There's a goal. These companies want us as people on the other side of the glass to do, and that is to sign up for their newsletter, sign up for their newsletter to get 30% off your first order. Okay. What if I don't, what if I don't want to? What if you slap that modal in my face when I land on your website, I'm leaving.
I am gone. That's a deceptive pattern. Okay.
[00:29:22] Homer Gaines: Mm-hmm.
[00:29:22] Todd Libby: I just think there's no room for dark pattern that is a archaic and monolithic term. We, you and I both know, and maybe there's listeners out there that are, that will agree, people that work in tech and on the web. We don't like change, and as human beings, we don't like change at all.
[00:29:48] Homer Gaines: Mm-hmm.
[00:29:49] Todd Libby: Oh, I, I, I'm, I'm fine with that term. Dark patterns. Well, okay. You're, you're living in 1990 or, or the year 2000 maybe, you know, it's 2023. You know, let's have a more inclusive term. Deceptive design, deceptive patterns, anti-patterns, something other than dark patterns. It's not because of a fricking light and the light source of something that has nothing.
If we are gonna get into that, then we might as well hit, you know, we might as well go to MIT and have brunch and talk about light and light waves and all this stuff and become scientists, which has zero to do with anything. And now that I've gone off road, that's my point. That was so off road when uh, it's, it's not racist.
I never said it was racist. I said there was racial connotations. There is a difference. Now whether that is.
[00:31:04] Homer Gaines: Yeah. Yes. There, there is a difference. I mean, remember the, um, I, I hope I don't, I'm remembering these lyrics. Remember the rap group back in the, uh, nineties 3rd Bass? MC Serch had a line, um, paraphrasing it where he said, uh, something like, bad guys wear black. Must have been a white guy that started all that.
[00:31:26] Todd Libby: Mm-hmm.
[00:31:28] Homer Gaines: And the lines before where he was talking about different things that were, that were black and how black was seen as bad. And like you said earlier, black meaning absence of light. We already know sphere, the whole nine, um, void of color, dark. So, I get how dark comes in or, and how that is being used. And yeah, to some it could have, it could be charged, it could be a charged term.
Um, I will admit when I, when I first, when I built my first computer back in, mid-nineties and when I was purchasing the hard drives, you know, and I was going to install my hard drives, and that was back in the day where we had those little jumper switches that we had to put on the hard drive to denote which one was, you know, the first one versus the second one.
And yes, I was taken aback when I noticed that those jumpers were labeled master and slave. I was just like, wow. I was like, that's jacked up.
[00:32:37] Todd Libby: Hmm. Mm-hmm.
[00:32:38] Homer Gaines: Alright and then I paid no mind. I was just like, all right, whatever this is. It's not like me realizing that at that moment was going to change the industry, you know?
It was all right, that's what it is. Then, um, for years what we started, you know, we've been, especially since we have repos, master branch, The master branch. Um, even in architecture, you know, I point that way cause our, the main bedroom is that way, but master bedroom,
[00:33:09] Todd Libby: Mm-hmm.
[00:33:10] Homer Gaines: there are other industries that are actually leaning in to not using these terms that have these racial connotations.
Some of them, the history of them is racist, master bedroom. We already know that. Why that is considered that. So now it is called the primary. You know, we're going there. GitHub changed or gave you the ability to change main to whatever you needed to be. So, there are other industries, we'll just stick with GitHub.
GitHub is a tech. It is tech. We have the ability to make those changes. They are leaning into it. They've leaned into it as a service. So, what makes it so difficult for others? Just to be able to, one, have the empathy to understand that this could rub folks the wrong way. And if we have the ability to change it for the better for someone other than myself, I'm speaking as if I'm not me, change to make it better for someone other than myself, why not do that?
[00:34:20] Todd Libby: Yeah
[00:34:20] Homer Gaines: And I mean, me being, you know, a behavioralist, I have my own theories of why we run into that. It's unfortunate that, you know, you run into the negativity as such, just from trying to point something out and get us to think about the terminology that we are collectively using as an industry to better ourselves.
[00:34:51] Todd Libby: Yep.
[00:34:51] Homer Gaines: You know, at the same time it's just,
[00:34:54] Todd Libby: Yeah.
[00:34:55] Homer Gaines: I think people like to be divisive for the sake of being divisive.
[00:34:59] Todd Libby: Yeah. And if you remember, if you remember when GitHub made the move from master to main, some people lost their damn minds about it.
[00:35:10] Homer Gaines: You know what? Honestly, I do remember when that happened and I muted a lot of those folks, or I blocked a lot of those folks because I was like, this is, first off, y'all got mad beef with this term that we already know has a, has some racial energy. Racial energy behind it. So, it's like, why are you even embracing it that way?
[00:35:37] Todd Libby: Yeah.
[00:35:37] Homer Gaines: And I just didn't want the noise. So, yeah. Yeah, I do remember that.
[00:35:42] Todd Libby: People lost their minds over that and
[00:35:45] Homer Gaines: Lost a lot out of that.
[00:35:46] Todd Libby: Yeah. And, and people, people have lost their minds over. I had to mute that conversation.
[00:35:54] Homer Gaines: I believe it.
[00:35:54] Todd Libby: I had to mute that conversation.
[00:35:57 Homer Gaines: I believe it.
[00:35:57] Todd Libby: Cause I, you know, the end goal, okay, for, for the fast framework is, well, first of all, basically what it, the framework is it advises creators of technical specs on how to ensure their technology meets the needs of people with disabilities.
That's a main goal with this, one of the main
[00:36:19] Homer Gaines: Mm-hmm.
[00:36:19] Todd Libby: Okay. The other, since I brought in, or I suggested the mental health piece, is to do no harm on the web. Right. So, the, you know, one of, one of the goals that I have in this is I asked a lot of people on Twitter, give me an example of a, of a deceptive pattern or an anti-pattern that you come across and why this harms you.
And I had a lot of responses and a lot of great examples, which we are using in our documentation. Things, again, fast, you know, framework. It, it's to reduce harm to the people who are affected by these things. You know, you mentioned anxiety, you men, you mentioned anxiety, and that's, that's one of the things we want people to be able to use something on the web without physical harm or risk to not only them, you know, to not only other, you know, people, but to themselves as well.
I mean, going down, not trying not to go down an, an entirely different rabbit hole, but misinformation, disinformation, that's causing harm. That's a big, why do I mention that? Facebook, Twitter, two of the big players in the game. What did they do? They let that run rampant for years, and now we're, uh, we are where we are because of that harm, those two platforms inflicted onto people, it's driven friendships apart, families apart, caused a whole deal of harm. Are we going to get those companies to buy into this? No. They're solely there to make money. They're to make Mark Zuckerberg and Egon Musk a boat ton of money and yeah, I, I know E, Egon, Elon. All right, Elon. I just, I can't, the, the emer, the Emerald baby, you know, so that, that's an entirely different show.
[00:39:00] Homer Gaines: Holy smokes. All right.
[00:39:04] Todd Libby: and there are, there are ethical web principles. There are two in particular. It's the W3C tag, ethical web principles, uh, document, and then the ethical principles for web machine learning. I don't remember if they have groups. I'm pretty sure they're just documents. But there's, you know, there's this thing called ethics.
[00:39:30] Homer Gaines: Oh, yeah, oh, yeah.
[00:39:31] Todd Libby: and when I got Joe Developer going, that's not racist.
[00:39:39] Homer Gaines: yeah,
[00:39:39] Todd Libby: Well, of course not. You don't think it is because insert whatever reason they have there.
[00:39:49] Homer Gaines: yeah. No, I get that. I get that.
[00:39:53] Todd Libby: So,
[00:39:54] Homer Gaines: I get that. I had that conversation with, uh, somebody I, I wanna say a couple weeks ago where I was like, um, so just because you don't think a term is, doesn't mean that it isn't,
[00:40:07] Todd Libby: Yes.
[00:40:08] Homer Gaines: Just because you know, a said term does not affect you in a negative way or has any effect on you as a person or how society views you, does not mean that it is not a negative term, nonetheless.
[00:40:24] Todd Libby: Yeah.
[00:40:24] Homer Gaines: So, and unfortunately that was about as, as effective as me explaining it to a brick. But hey,
[00:40:34] Todd Libby: Yeah.
[00:40:34] Homer Gaines: let that ride out. Yeah. And yeah. cause yeah, that, that kid was just ignorant. He was just, some, some days, some days I have time to deal with trolls and other days I don't. And he was a troll in real life. And, you know, it was the, the better thing to do with that was just to be like, you know what, let me go ahead and exit this conversation because.
[00:40:56] Todd Libby: Yeah.
[00:40:56] Homer Gaines: clearly, you're just here for the drama. And I got, I got better things to do than speak to someone who.
[00:41:02] Todd Libby: Yeah.
[00:41:04] Homer Gaines: is letting it go through one ear and out the other.
[00:41:06] Todd Libby: Yeah. And, and
[00:41:07] Homer Gaines: I already saw, or I already know what time it is with you, so
[00:41:09] Todd Libby: yeah. And we, you know, I know, you know, we've known each other how long now? Couple years.
[00:41:17] Homer Gaines: yeah.
[00:41:20] Todd Libby: I know. I think I can safely assume, and even though sometimes I shouldn't, I do. That you have an aversion to emotional vampires like I do. I don't want to, like, when that conversation happened where it's not racist. Well, here's the links to those research papers that are, you know, university levels, not just what something Todd wrote, right?
[00:41:52] Homer Gaines: Go, go educate yourself. Yeah.
[00:41:55] Todd Libby: Yeah, I don't want any part of that conversation because it's just so draining.
[00:42:02] Homer Gaines: Yeah
[00:42:02] Todd Libby: when you meet up with an emotional vampire to where they just drain the energy, they suck the life force out of you. I don't, I don't want any part of it.
[00:42:15] Homer Gaines: And that comes in and it comes in many varieties.
[00:42:15] Todd Libby: Yeah.
[00:41:04] Homer Gaines: You know, like I had a, had a guy come up to me after I gave, um, after I gave one of my accessibility talks, and he was very adamant in explaining how he felt that only meeting Level A for the WCAG was efficient and I,
[00:42:37] Todd Libby: Yeah.
[00:42:39] Homer Gaines: I just gave him the look, you know, I don't have a poker face, so he, he saw the, he saw the screw face immediately and he, and he is like trying to convince me that he is doing the right thing.
But I know that by him trying to convince me, he's actually trying to validate where he was coming from and his justification, his intent to only support level double or level A and trying to get me to buy in or validate and affirm that he was correct in what he was doing. And I chose not to. And you know, I peaced outta that conversation as well.
But yeah, that, that one was, was mad annoying. Now there were a couple other people who were around me who had a more visceral response to homeboy. I was like, you know what? Obviously, you were in my talk. You chose not to listen and lean into it, so you know.
[00:43:35] Todd Libby: Yep. And Homer. Homer. If I've learned anything from this year so far of 2023, it is this. The Irish goodbye is the most underused goodbye there is out there, and I intend on using it a lot on Twitter.
[00:44:01] Homer Gaines: all right. Nice.
[00:44:04] Todd Libby: So now before you know, before we we go, I do wanna mention this that FAST, the Framework for Accessible Specification of Technologies and the, the link to the document, uh, the editor's draft will be in the show notes.
 This is a potential source of guidelines. This doesn't replace WCAG. So there's a, even, even though I think I, I've done a good job explaining this so far at the, the talks that I've given on this, I just want, you know, when people listen to this to, to know, this isn't replacing WCAG.
A, this isn't going to be a, you know, an alternative. This is a potential source to implement along with or alongside the WCAG guidelines that we follow. And of course, you know, WCAG guidelines are a baseline. There's other things that we need to take into consideration too. That you, you and I both know, you know it, you know, performance, internationalization, localization, all that stuff, you know, usability at UX.
[00:45:28] Homer Gaines: Right. Okay.
[00:45:28] Todd Libby: Um, so a potential source of guidelines. I think the biggest part for me anyways, is that mental health piece, because I know I can do all the research and all the work into this and it, you know, it may get published and it may get published in the WCAG 3 or whatever, but even if one person is helped with re, you know, with things on the internet and it reduces the harm that some of these patterns are, are causing, I will have done my job.
I will have feel complete, you know, and, and I mean, that's why I am in accessibility. That's one of the things why I am in accessibility to help other people. Now, whether
[00:46:24] Homer Gaines: Likewise. Yeah, no, I understand that.
[00:46:26] Todd Libby: whether they want it or not. I mean, we lately people don't want help and that's fine. I get it. You know, if that's how you feel, that's fine.  I have
[00:46:45] Homer Gaines: Just because you don't want help doesn't mean someone else doesn't need it.
[00:46:48] Todd Libby: Correct
[00:46:48] Homer Gaines: Yeah, no, I'm with you. I get it.
[00:46:51] Todd Libby: But the, the, you know, where we were talking earlier on the phone, it's that family piece. It's that I have people that I need to be the voice for because.
[00:47:03] Homer Gaines: Mm-hmm.
[00:47:03] Todd Libby: they don't have that voice. And I, I mention this sometimes in talks and when I do like podcasts and, and streams and such. I'm not doing this for me.
I'm not trying to be some sort of savior. I have a, a long interest in accessibility. It's over 20 years now. Um, I'm not, do, I'm not doing this.
[00:47:30] Homer Gaines: Yeah, it has been 20 years.
[00:47:30] Todd Libby: Yeah, yeah. We're long in the tooth.
[00:47:33] Homer Gaines: Cause I started what, towards the end of 2001? Going into 2002.
[00:47:41] Todd Libby: Yep. I started in
[00:47:42] Homer Gaines: Just say 2002. Yeah. Wow.
[00:47:45] Todd Libby: 99, 99 for me, right around 99. But,
[00:47:50] Homer Gaines: Yeah.
[00:47:51] Todd Libby: um, you know, I do this for family and friends. My, the close circle of people
[00:48:00] Homer Gaines: Right
[00:48:00] Todd Libby: for me, you know, and if it helps others, great. If it helps somebody that doesn't want it. Even better. But if it, you know, raises the ire of people who don't want help and view me as just some able-bodied person who's sticking their nose in where it doesn't belong.
That's your, you know, if that's what you think, you know, that's none of my business.
[00:48:28] Homer Gaines: Yeah
[00:48:28] Todd Libby: It's just like, you know what people think of me is none of my business that goes with, you know, those people.
[00:48:34] Homer Gaines: Yeah
[00:48:34] Todd Libby: I, I mentioned on Twitter that part of the accessibility community is very toxic and boy, didn't I get unfollowed, but that's okay.
You know, just because you're offended doesn't mean you're right. I'm not saying I'm right, but boy is there a lot of vitriol going on lately. And it's sad to see. 'cause for the most part, the, and you know this, the accessibility community is very open, very welcoming, and a lot of brilliant people.
[00:49:09] Homer Gaines: Mm-hmm.
[00:49:10] Todd Libby: A lot why this is going on.  It's anybody's guess.
[00:49:15] Homer Gaines: Who knows? Again, divisiveness,
[00:49:20] Todd Libby: Yeah.
[00:49:21] Homer Gaines: I don't know,
[00:49:22] Todd Libby: Yeah.
[00:49:22] Homer Gaines: stress, people being tired, who knows. Anti-patterns.
[00:49:27] Todd Libby: we're still in a pandemic whether people want to believe it or not.
[00:49:33] Homer Gaines: So, thanks for telling me all about that. Um, let's go ahead and wrap this up. So, where's the next time you're speaking? When are you actually, yeah, when's the next, when's your next talk?
[00:49:45] Todd Libby: So, my next talk is in Orlando, Florida at Orlando Code Camp. You'll be there, our friend.
[00:49:52] Homer Gaines: I’ll see you there.
[00:49:52] Todd Libby: Yes. Our friend DeMars will be there. Chris DeMars.
[00:49:56] Homer Gaines: Oh, cause problems.
[00:49:56] Todd Libby: Uh, yeah. And I still can't get over the fact that it's during spring break break, but you know.
[00:50:04] Homer Gaines: Yeah. It's that season down there, but hey, it, it, it is what it is. All I'm interested in is we gotta find some dope pizza in Old Town. So,
[00:50:12] Todd Libby: Yes, definitely. Um, so there's that. After that, so I had a little mix up and let me just pull this up real quick here. Um,
[00:50:26] Homer Gaines: I thought you were about to say you didn't hit record.
[00:50:28] Todd Libby: no, I did. Yeah, it's still recording. Um, don't make me look, don't make me look again. Um, so when I sent my CFP in for DevNexus.
[00:50:45] Homer Gaines: Mm-hmm.
[00:50:46] Todd Libby: Um, I, uh, I thought I was doing a workshop. I thought they had accepted my, um, accessibility workshop, but it was a workshop and Pratik, our friend Pratik said, oh no, you're, you're only doing an hour. And I'm like, okay, well that's not an hour. 'Cause I can't fit a lot of content into one hour with that. So, uh, I am doing the deceptive patterns talk at DevNexus, uh, on, I'm going through the schedule right now. I think it was Thursday, April 5th at 10:00 AM
[00:51:30] Homer Gaines: All right.
[00:51:31] Todd Libby: Um,
[00:51:34] Homer Gaines: Wait, April 5th.
[00:51:35] Todd Libby: yes. So DevNexus is the fourth through the sixth.
[00:51:39] Homer Gaines: Okay. Yeah, that's right. That's right. Okay.
[00:51:42] Todd Libby: So, I am on the fifth. Um, there's a lot of good speakers there, you know, a lot of people we know. Um, so those are the two so far, I haven't have had any word about any other, um, conferences. I will be doing a Twitter space with our friend DeMars on the seventh.  So that's coming up in a few days.
[00:52:10] Homer Gaines: Mm-hmm.
[00:52:11] Todd Libby: Um, let me just, I wrote it down. I'm at that age where I gotta write things down March 7th. Yes. On Twitter space. And then, um, in, in May, I believe it is, I'll be doing a stream with Nick Taylor on his I Am developer stream on Twitch. Um, and that's pretty much it. Um, I do have a lot of CFPs just floating around out there for conferences.
Uh, and hopefully, you know, I'll be able to, um, last year was a very busy year for me traveling and I'm, I'm glad I was able to, I’m grateful I was able to. Um, hopefully this year we'll be a little less of traveling, but, you know, we'll see. But yeah, that, that's, that's pretty much it. So, you'll be in Orlando.
[00:53:10] Homer Gaines: I'll be down there and I'm, I have a bunch of CFPs that are, that are still in the review process as well, so,
[00:53:17] Todd Libby: mm-hmm.
[00:53:18] Homer Gaines: I will probably see you at some of these other events.
[00:53:21] Todd Libby: hopefully we can get, oh. DevNexus, dude, remember that place I told you about, uh, with the, with the tacos in Atlanta?
[00:53:32] Homer Gaines: Yeah.
[00:53:33] Todd Libby: We need to go there. I don't,
[00:53:36] Homer Gaines: So, we're doing that and Blue India?
[00:53:38] Todd Libby: oh, blue India, definitely.
[00:53:41] Homer Gaines: OK
[00:53:41] Todd Libby: Speaking of which, Blue India. If you're ever here in Phoenix. Okay. And you need to come out. The place that I took DeMars to over in Glendale.
[00:53:57] Homer Gaines: Mm-hmm. I, yeah, I, I, I remember you talking about this. I, yeah. I need to, um, I need to partake of this to see.
[00:54:06] Todd Libby: Neck and neck,
[00:54:09] Homer Gaines: Blue India sets a high bar.
[00:54:11] Todd Libby: they do set high bar. That was the originator of the thou, the thousand-yard stare.
[00:54:19] Homer Gaines: Yeah, you was way off in the middle distance with that.
[00:54:21] Todd Libby: Oh, I lost, I literally time traveled. I looked at the clock, it said 5:30, you guys got up and were leaving. And I got up and it was 8:00 or something like that. I'm like, I just traveled in time.
[00:54:40] Homer Gaines: Yeah. That food was amazing.
[00:54:42] Todd Libby: It was amazing. But yes. Um, yeah, Blue India, it's hard to beat, but I think this place is a, I think this place is a tie. I really, really do.
[00:54:54] Homer Gaines: All right.
[00:54:55] Todd Libby: um, and then you have VueConf?
[00:55:00] Homer Gaines: Yeah. I got VueConf coming up. It's gonna be in, um, New Orleans.
[00:55:06] Todd Libby: Yes.
[00:55:07] Homer Gaines: Yeah. When is that one? VueConf is New Orleans May. Then I got Render here in ATL and I'm still waiting to hear about, uh, KCDC and the re the others throughout the rest of the year, so, yeah.
[00:55:26] Todd Libby: So KCDC we're, we have a CFP.
[00:55:34] Homer Gaines: Yeah. We're doing a session, right? Yeah.
[00:55:36] Todd Libby: A workshop
[00:55:37] Homer Gaines: We’re doing a session. Yeah. The workshop.
[00:55:39] Todd Libby: Yeah.
[00:55:39] Homer Gaines: Yep.
[00:55:41] Todd Libby: Um,
[00:55:44] Homer Gaines: I'm down with that.
[00:55:45] Todd Libby: and then I put in, I don't know about you, but I put in for a few, um, or a couple other talks, one being the deceptive patterns talk as well. So,
[00:55:56] Homer Gaines: Okay.
[00:55:57] Todd Libby: um, and then did you put any for any talks during KCDC?
[00:56:06] Homer Gaines: Yeah. Um, some accessibility talks, you know, I've got like four to choose from, four or five to choose from. So, I actually, I like to submit all of them and then let the organizer choose which one they want,
[00:56:22] Todd Libby: Yeah.
[00:56:23] Homer Gaines: one that they feel that the, uh, that the attendees would, you know, benefit from. Not saying that they, they wouldn't benefit from everyone, but just, just to change it up a bit.
They want different opinions, different ideas, things like that. So, yeah. Well, good stuff. Good stuff. Um,
[00:56:42] Todd Libby: yeah.
[00:56:43] Homer Gaines: so, we are at time homeboy.
[00:56:47] Todd Libby: Yeah. I think we might've gone over, didn't we?
[00:56:51] Homer Gaines: Just a little. It's all good, so thanks for that conversation.
[00:56:57] Todd Libby: Yeah. Thank you. Um, you know, hopefully it, uh, picks up a little bit of steam, maybe, you know, people will look at it and say, you know what? Time for change. I hope. If not, you know, it was worth the attempt, even if it's one person,
[00:57:18] Homer Gaines: Mm-hmm.
[00:57:21] Todd Libby: you know, so, but no, thank you. Um, it was great to to talk to you, and I know we've been talking for a little bit of the day, but, uh, definitely always a pleasure.
[00:57:33] Homer Gaines: Indeed,
[00:57:34] Todd Libby: from this side.  Um, and, uh, yeah, uh, what we got coming up on three weeks until we're hanging out. So, find some, like you said, find some good food and
[00:57:50] Homer Gaines: Yes sir.
[00:57:50] Todd Libby: chill.
[00:57:51] Homer Gaines: Yes sir.
[00:57:51] Todd Libby: Keep me outta trouble.
[00:57:59] Homer Gaines: I will try.
[00:58:00] Todd Libby: Well, I'm not putting the onus on you. The, the onus is on me. And as, as tempting as things are, sometimes I have to, I have to remember that.
[00:58:15] Homer Gaines: Yeah, I'll, I'll, I'll just send the wifey on you on you 'cause she'll be down there with us, so.
[00:58:19] Todd Libby: Yeah, exactly. Um, but I, I, I can't wait to see you. And I saw DeMars not too long ago and he made fun of me. Oh, I, oh, I don't have it with me. So, he was making fun of me because Hartington and I had, uh, been talking about coffee milk. And, and my, my beautiful other half, she, she got me a sippy cup 'cause DeMars on one of our drives was saying, um, that I should be drinking it in a sippy cup.
So, I have a sippy cup. Now it's blue, but it has lobster stickers on it. So, I filled it up. Actually, I do have a picture. I filled it up with coffee milk the other day. So that's for you, DeMars. And the Red Wings. And the red wings still suck.
[00:59:21] Homer Gaines: Oh wow. Okay. And on that note, so you, you, you, you can't be coming for Detroit B. Come on now.
[00:59:29] Todd Libby: Hey, now, uh, mad props and respect for the pizza.
[00:59:33] Homer Gaines: You cannot be coming for the D like that. No, we will, we will have no such talk on the podcast like that.
[00:59:42] Todd Libby: right. I will, I will refrain from the violence today.
[00:59:49] Homer Gaines: Just, just calling out Detroit like that. No.
[00:59:52] Todd Libby: Now, if I had, if Detroit Pizza, New York, Chicago, anything else, that's how I rank it. Detroit, I haven't had Detroit pizza in quite some time, so I'm overdue, so, and DeMars knows. I'm gonna visit and bring my sippy cup.
[01:00:20] Homer Gaines: All right, well on that note, it's great rapping with you bro.
[01:00:26] Todd Libby: Yeah, likewise.
[01:00:29] Homer Gaines: See everybody later.
[01:00:31] Todd Libby: Yeah, thanks for, uh, tuning into the Front End Nerdery Podcast. Uh, we will be back at some other time. I don’t know when.
[01:00:38] Homer Gaines: with more shenanigans.
[01:00:39] Todd Libby: more shenanigans, uh, maybe a guest or two, and then maybe another one of these little, uh, you know, rap sessions between you and I about stuff and, know, mixing it up this year, uh, needed to do something different.
So, it's, um, you know, like I said, it's always a pleasure chatting with you, and we will do this again soon. So, until then, like, subscribe on the YouTube channel, uh, leave a rating on podcast, um, you know, platforms and, you know, I. We need some sponsors. I, I don't want to have to go out there with a twirly sign.
[01:01:29] Homer Gaines: don't do that.
[01:01:30] Todd Libby: or or beg. I don't want to beg either.
[01:01:32] Homer Gaines: No, no, no. Don't do that. You gonna pull a muscle.
[01:01:35] Todd Libby: but, um, I do actually real quick, and I know we keep doing this, we definitely have to get James and Amy on because that's long overdue.
[01:01:46] Homer Gaines: Yep. We gotta do that. And we gotta have, yeah, she and I have to geek out about audio equipment. Yeah.
[01:01:51] Todd Libby: So, um,
[01:01:53] Homer Gaines: We definitely gonna do that.
[01:01:54] Todd Libby: yeah, I'll get, if, you know, you want to get in touch with him or I want to get, I'll do it. I don't mind. But anyways, um, again, like, subscribe, tell your friends about it. Um, you know, tweet about it, toot about it. I just can't, I don't know. Toot still, uh,
[01:02:16] Homer Gaines: Toot is Mastodon for anybody that doesn't know.
[01:02:18] Todd Libby: yeah. And uh, yeah, toot, tweet. Shout it out from the mountaintops,
[01:02:26] Homer Gaines: There you go.
[01:02:28] Todd Libby: but uh, yeah, until next time everybody, we'll see you. Take care.
[01:02:32] Homer Gaines: Peace.
