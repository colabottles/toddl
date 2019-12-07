---
title: Contrasting Accessibility with Color Contrast
description: Bringing color contrast in acessibility to the table and why we ned to do more checking of color contrast in our work on the web.
date: 2019-12-05
tags:
  - accessibility
  - tools
  - color
  - design
layout: layouts/post.njk
---

### What Is Going On With Color Contrast?

In my adventures on the internet, I was researching some conferences to attend in 2020. One website I stumbled upon had some major accessibility issues regarding color contrast. Forms, an embedded, third-party form from an event website where you buy tickets from that was totally &rdquo;invisible&ldquo;. I couldn't see any of the form.

<div class="content__placeholder">
  <figure>
    <img class="content__image" src="/img/huh.png" alt="A website for a conference that has a form but all that you can see is a white background and no form at all." />
    <figcaption>Where is the form to register?</figcaption>
  </figure>
</div>

I had the hardest time reading and disseminating the information. Where were the form fields and why is this happening in this day and age? It got me thinking. My vision (for now) is just fine, but what about people that have visual impairments or use assistive technologies? How could, and how *would* they read that?!

How do we make it better as a community of designers and developers? We __must__ think about these people and this is where the need for accessibility in the process comes in. Especially color contrast. 

According to the World Health Organization (WHO);

  * Globally, at least 2.2 billion people have a vision impairment or blindness, of whom at least 1 billion have a vision impairment that could have been prevented or has yet to be addressed.
  * This 1 billion people includes those with moderate or severe distance vision impairment or blindness due to unaddressed refractive error, as well as near vision impairment caused by unaddressed presbyopia.
  * Globally, the leading causes of vision impairment are uncorrected refractive errors and cataracts.
  * The majority of people with vision impairments are over the age of 50 years.

<blockquote cite="Designer/Developer">&ldquo;I don't need to worry about this! Our customers are under 50!&rdquo;</blockquote>

Never assume. Maybe Dad is looking online for a gift for his kids? Maybe the user under 50 has an impairment? You don't know this! So don't assume! 

Picture yourself on a website looking for some conference tickets, you're shopping around for information and doing some research on conferences. You're looking for a newsletter to sign up with to keep in the loop or to learn something. Now you run into something like this;

<div class="content__placeholder">
  <figure>
    <img class="content__image" src="/img/si1.png" alt="A blue form on a website, with darker blue form fields that aren't very discernable, with black text in the form fields with a hot pink submit button." />
    <figcaption>A case of dreadful color contrast.</figcaption>
  </figure>
</div>

This can be daunting. It was for me when I came across it, so imagine what it must be like for someone with a visual impairment. This is where color contrast comes into the conversation. A conversation we *really* need to have. Still.

<blockquote cite="Rachel R. Vasquez">Contrasting colors, also known as complementary colors, are colors from opposing segments of the color wheel. Colors that are directly across from one nother on a basic color wheel provide maximum contrast.</blockquote>

Color contrast is defined as;

<blockquote cite="Dictionary.com"><strong>noun</strong>

psychol the change in the appearance of a colour surrounded by another colour; for example, grey looks bluish if surrounded by yellow.</blockquote>

I haven't even mentioned types of color blindness until now either. [There are seven total types of color blindness including monochromacy](https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/color-blindness/types-color-blindness) (the absence of color perception).

We should all be working together to make sure that these levels of accessibility are met in our work. It is 2019 and we are still having this conversation, even more now than ever it seems. Why aren't we at a place where this is part of accessibility testing? All it takes, is some really simple testing for color contrast. You can even do it in the [Firefox DevTools](https://developer.mozilla.org/en-US/docs/Tools)!

#### The Tools

Color contrast checkers. There are many. I mean *a lot*, but there is one I use to make sure what I am doing uses the correct level of color contrasting so it meets WCAG 2.0 AA standards, it is the [Colour Contrast Checker](https://colourcontrast.cc).

Designers should know about color contrast. Developers should understand color contrast.

<div class="content__placeholder">
  <figure>
    <img class="content__image" src="/img/ccc.png" alt="The site colourcontrast.cc with a yellow-ish background with black text. A color contrast tool online that measures the color contrasts between background and foreground colors with hex values for colors, sliders for hue, saturation, and lightness. Also pass/fail indicators regarding WCAG 2.0 AA and AAA." />
    <figcaption>Colorcontrast.cc - A terrific color contrast checking tool for quick testing.</figcaption>
  </figure>
</div>

[Who Can Use](https://whocanuse.com) is another fantastic contrast checker that will become a staple in my accessibility testing most definitely. It gives you a look at the different contrasts and how they stack up versus the many different kinds of visual impairments and deficiencies.

<div class="content__placeholder">
  <figure>
    <img class="content__image" src="/img/wcu.png" alt="The site Who Can Use which gives color combinations, their contrast numbers, simulation of text, and the different impairments and their percentages in population, WCAG grading and much more." />
    <figcaption>Who Can Use - A phenomenal color contrast checking tool that is more in depth that most tools for testing against the different types of visual impairments.</figcaption>
  </figure>
</div>

The WCAG Contrast Checker is another option.

<div class="content__placeholder">
  <figure>
    <img class="content__image" src="/img/wcagcc.png" alt="The WCAG Contrast Checker. Which shows foreground and background color selection, sample text and ratio information along with pass/fail markers, a button to switch on/off for grayscale view, and much more." />
    <figcaption>The WCAG Contrast Checker.</figcaption>
  </figure>
</div>

Along with the WebAIM Contrast Checker.

<div class="content__placeholder">
  <figure>
    <img class="content__image" src="/img/webaimcc.png" alt="The WebAIM Contrast Checker. Which shows foreground and background color selection, sample text and ratio information along with pass/fail markers, a button to switch on/off for grayscale view, and much more." />
    <figcaption>The WCAG Contrast Checker.</figcaption>
  </figure>
</div>

Color contrast checking is super important. Why? Do we really want to have instances in forms where we cannot read the form labels? With flat design being popular still, do we really want to be searching for a text field to input our information into a form we're trying to send to the people that run the website?

The same goes for color and text. Not just text. I want to be able to clearly see a form field so I can enter information into it. So imagine someone with an impairment visually, trying to do this.

Getting the information to the user is crucial. If you're not getting that information to the user in an effective manner, then that's not good UX and it certainly is not good accessibility.

Have you even tried to read your phone with the glare of the sun on the screen? Probably, and you can't really read what you're trying to look at. You have to adjust so that the sun isn't hitting the screen on the phone in a way that you can read it. You want to get the information off the device so you can understand what you're looking at.

Take a minute and squint at whatever you're looking at. an you read it clearly? Probably not. So remember those who have visual deficiencies and get them the information they are looking for in a clear manner.

Some colors look good to some people (designers, I'm looking at you) but will they look good to people that have deuteranomaly? What about people with tritanopia? How is that information getting to them with your color scheme?

Stargardt's, a type of macular degeneration that means peoplewho have it, lose vision in the center of the retina. What about them? [Here is an example of a site](https://twoblindbrothers.com/pages/reveal) that allows visitors to see through the eyes of the founders, and what they see when they navigate the internet.

<blockquote cite="Internet Person">So what is an acceptable level of color contrast?</blockquote>

A minimum color contrast ratio recommended by ISO-9241-3 and ANSI-HFES-100-1988 is 3:1 for standard text and vision. The 4.5:1 ratio takes into account color deficiencies, low visual acuities, or loss of contrast sensitivity. 4.5:1 is also the chosen level for WCAG AA standards because &ldquo;*it compensated for the loss in contrast sensitivity usually experienced by users with visiion loss equivalent to approximately 20/40 vision*&rdquo;

The minimum level for WCAG AAA is 7:1 and the reason for that is;

<blockquote>&hellip;because it compensated for the loss in cotnrast sensitivity usually experienced by users with vision loss equivlent to approximately 20/80 vision. People with more than this degree of vision loss usually use assistive technologies to access their content (and the assistive technologies usually have contrast enhancing, as well as magnification capability built into them).</blockquote>

These calculations are made for the size of body text and a relaxed contrast ratio is provided for larger text, such as headings or any other text which is larger than the body copy. Remember to make link text stand out and underlined as well!

#### Forms

If I have submitted a form, I would like to be able to read any confirmation messages after the submission. i don't know about other folks, but I just like to read the information relayed to me after submission in case there is anything I shouldn't miss or some tidbit of information that I need to know. For example;

&ldquo;Please check your inbox to confirm your subscription.&rdquo;
&ldquo;Your confirmation number will be sent to *user@address.com*&rdquo; or,
&ldquo;You rticket number is 98765. Check your inbox to confirm receipt.&rdquo;

Then why are we running into instances of this?

<div class="content__placeholder">
  <figure>
    <img class="content__image" src="/img/ewww.png" alt="A form submission message in white font on a neon yellow background which makes reading nearly impossible and color contrast almost non-existant." />
    <figcaption>Wait, what?</figcaption>
  </figure>
</div>

How is someone with good vision supposed to read that? How is someone with a vision impairment supposed to read that if they do not use a screen reader?

What about temporary impairment or injury?Watery eyes by getting punched in the nose by an over-enthusiastic pet or child? An eye injury when you socked yourself in the eye trying to adjust the sun visor in your car while driving? Use of one eye just for a short period of time?

We as designers need to do better, to have asystem of checks and balances to make sure that color contrast is an integral part of the design process. We have learned through many mistakes we have seen over the last few years that accessibility reaches a far wider scope that sometimes is ignored by the masses, myself included.

How can we mke sure we are paying attention to color contrast when we design and develop websites?

__Test with persons with vision impairments.__ If we can ask on Twitter for users of a specific demographic, then we can ask for persons to test with vision impairments. Even going as far as hiring those people to work on your teams to make the process better.

__Make accessibility inclusive in the design and developemnt process.__ If we are including time to make sure what we are doing right from the start is accessible, then we are halfway there. And be even more inclusive&hellip; Hire persons with visual impairments to your team to help with the process with their expertise on the matter!

__Be sensible with colors.__ Ask yourself, &ldquo;Would this color scheme appeal to others?&rdquo; Use color schemes and palettes that work and that make sense. Pastels are okay, but not in a Miami Vice nightmare landscape kind of horrible way. And&hellip;

__Use the tools!__ Color contrast checkers like in the examples I have provided and accessibility tools that are plentiful out there, use them! That's why they are there! They will inform you of issues before you push to production or go live, saving you (and/or your company) time and money.

### Summary

There is a lot of talk about accessibility and we have taken tremendous strides to making the web more accessible and inclusive but we have a long way to go still from it being all-inclusive. So let's make the web more inclusiv, but also remember how and why. Also reminding ourselves to actually do it!

There is a broad spectrum of vision deficiencies and impairments we need to address during the design phase of the process. Making this process more inclsuive by taking the time to make sure color contrast (and other aspects of accessibility) are at levels where it passes WCAG 2.0 AA (optimally AAA levels) guidelines at least, is __crucial__ and very important.

Let us remind ourselves of the fact not everyone has perfect or near perfect vision. Embrace the rpocess of color contrast, avoid illegible parts of websites that are created and unintelligible forms like in the examples I provided.

[Jeffrey Zeldman](https://twitter.com/zeldman) summarized it up in his post on Blue Beanie Day (November 30th) when he wrote;

<blockquote cite="Jeffrey Zeldman">&hellip;our industry as a whole thinks less and less about accessibility (not that we ever had an A game on the subject), and talks less and less about progressive enhancement, preferring to chase the ephemeral goal posts of over-engineered soultions to non-problems.</blockquote>

We as architects and craftspersons of the web community must keep everyone in mind when it comes to not only color contrast with fonts, websites, User Experience, forms, and colors, but all areas of accessibility and inclusive design as well.

Clear color contrast is just the beginning, but it's one of the great ways to start building, creating, and handcrafting great, accessible sites for all.
