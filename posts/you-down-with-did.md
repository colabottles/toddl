---
title: You Down With DID?
description: The pain of having a DID issue on Bluesky and the hours it took to research and fix.
date: 2024-11-14 ## YYYY-MM-DD
tags:
  - didfixit
  - bluesky
  - did
layout: layouts/post.njk
image: https://res.cloudinary.com/colabottles/image/upload/v1731376889/did-card.png
---

## Yeah You Know Me&excl;

I had been having a hell of a time getting my domain name to be my handle for quite a while on Bluesky. When I tried to change my handle to my domain name, all I got was this:

![Settings in Bluesky to change your handle to a custom domain.](https://res.cloudinary.com/colabottles/image/upload/v1731640373/settings.png)

and to no avail for weeks I had not been able to get the new DID to work. It appeared to be that Bluesky, somewhere along the line was holding the old DID and nothing was changing. So I *did* (pun intended) to some research. A lot of research and here is what I know and the steps I took to fix it.

## Spill The Beans Man&excl;

I started with a lot of misses as far as what steps to take at the beginning of my search. A few questions on Stack Overflow, some articles written and general chatter that led to a dead end each time. Then I found the ![Bluesky Debug Page](https://bsky-debug.app/) on one of my rounds of searching for clues and answers.

From there I clicked the "Handles" tab and searched for `toddl.dev` and it brought up this information:

![The Bluesky Debug page showing the information for DNS and HTTP authorization for the domain.](https://res.cloudinary.com/colabottles/image/upload/v1731640855/debug.jpg)

Then I went to my host and domain provider (Netlify, in my case) and I went into the Domain Management section. I had removed the old DID a while back and put the new one in during my all over the place debugging, so I added the old back in and got the image above. Then I deleted the old record, then I got the DNS error but the HTTP authorization  went all green. Great!

![The Bluesky Debug page showing everything passing for DNS and HTTP verification.](https://res.cloudinary.com/colabottles/image/upload/v1731640855/dnspoo.jpg)

## The Part That Gets Tricky

Now I have a feeling this had absolutely nothing to do with anything, but I did a DNS flush from my Windows machine, just in case. 

`ipconfig /flushdns`
`ipconfig /renew`

Then I could not get the next command to work even running Powershell as an admin (go figure). Went on the Mac and ran:

`ipconfig /registerdns`

Meanwhile, I popped open another terminal tab and `dig toddl.dev` got that info, checked everything out. Things on the HTTP side were still good. Perfect. Things on the DNS side were not still.

I added the Bluesky Custom Domain extension in Netlify in the Extensions part of the admin for the domain, followed those steps not using the DNS option but the .well-known option. I still have the `atproto-did` file as well. I will be leaving it and sitting on my hands.

## That Sounds Like A Ton of Work

Well it was, and I figure, it couldn&apos;t hurt. Then I found this gem, which I believe is the bread and butter of the whole thing. I went through prior to this final fix and ran into some issues. Namely:

```java
curl: (6) Could not resolve host: xrpc
curl: (3) URL rejected: Bad hostname
curl: (3) URL rejected: Bad hostname
curl: (3) URL rejected: Bad hostname
```

So I did my due diligence (and being as stubborn as I can be, not giving up tonight) and looked up ways to remedy that situation, which is why I ran the `ipconfig` commands. Then I went off in another direction when I [found this page](http://pxtl.ca/2023/12/13/bluesky-api/). I figured if the extension in Netlify wasn't working and the settings through Bluesky weren't working, give this a try.

Again, I tried it once and failed due to some bad typing on my part. So I repeated the steps, triple-checked my work, and ran the commands again (all one line and spaces between the hyphens at the beginning e.g., Invoke-RestMethod -Method POST):

```js
$sessionResponse = Invoke-RestMethod 
-Method POST 
-Uri https://bsky.social/xrpc/com.atproto.server.createSession ` 
-body (@{identifier = 'email@example.com'; password ='PASSWORDGOESHERE'} | ConvertTo-Json) ` 
-ContentType 'application/json'
```

Replace your email in the `identifier` part of the above code and use your password in the `password` part naturally.

As soon as that ran with no issues, I ran a `$sessionResponse` command, had no issues there, then proceeded to doing a `$sessionresponse.did`. This turned out to reveal no errors. So whatever I did with the DNS, whether it was the flush and all that or if it was something else I did, it worked. I can press on.

I made sure to run the `Resolve-DnsName _atproto.toddl.dev` command and that came back clean.

```php
Name                        Type TTL   Section    PrimaryServer               NameAdministrator
----                        ---- ---   -------    -------------               ---------
toddl.dev                   SOA  3600  Authority  dns1.wha.tevr.itis          hostmaster.your.com
```

Awesome&excl; Let's move on. I then ran (again, all one line and spaces between the hyphens at the beginning e.g., Invoke-RestMethod ` -Method POST ...):

```php
Invoke-RestMethod ` 
-Method POST ` 
-Uri https://bsky.social/xrpc/com.atproto.identity.updateHandle ` 
-Headers @{Authorization = "Bearer $($sessionResponse.accessJwt)"} ` 
-Body (@{ = 'toddl.dev'} | ConvertTo-Json) ` 
-ContentType 'application/json'
```

Nothing happened, no errors. let's go back to the Settings panel in Bluesky and let's try this again. Looks like resetting the bearer worked&excl;

Clicked the "Verify DNS" in the "Change handle" settings and yes&excl; It works&excl;

Now I have my domain as my handle and I can stop obsessing about a fix. I will say, as of this article, that I don't know if this has anything to do with the current "Invalid Handle" bug, but, I would suggest giving the API method of changing your handle a try and see if that works. Your mileage may vary.

Now I can rest easily, cross one more thing off my list of to-do's and move on to obsessing about something else like I normally do. Maybe sleep would be a good thing to focus on next&quest;