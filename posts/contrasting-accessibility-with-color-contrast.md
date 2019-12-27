---
title: Contrasting Accessibility with Color Contrast
description: Bringing color contrast in acessibility to the table and why we ned to do more checking of color contrast in our work on the web.
date: 2019-12-20
tags:
  - accessibility
  - tools
  - color
  - design
layout: layouts/post.njk
---

I believe this is a conversation we need to revisit. Color contrast is something that is important when deisgning and developing what we are putting on the web. The strides we have taken are many, but there is still a long way to go and I will show you some examples, as well as why we need to do a better job at making sure color contrast is covered in our work.

In my adventures on the internet, I was researching some conferences to attend in 2020. One website I stumbled upon had some major accessibility issues regarding color contrast. Forms, an embedded, third-party form from an event website where you buy tickets from that was totally &rdquo;invisible&ldquo;. I couldn't see any of the form. It's as if it was not there at all.

<div class="content__placeholder">
  <figure>
    <img class="content__image" src="/img/huh.png" alt="A website for a conference that has a form but all that you can see is a white background and no form at all." />
    <figcaption>Where is the form to register? In this example, this was a third-party form that was not showing up in Firefox for some reason. The form worked in Chromium-based browsers. This was another aspect of accessibility that was not met. Not everyone uses a Chromium-based browser.</figcaption>
  </figure>
</div>

How do we make it better as a community of designers and developers? We *must* think about these folks and this is where the need for accessibility in the process comes in. While accessibility encompasses a lot of different aspects of design and development, I am focusing right now solely on color contrast in this article.

Color contrast is defined as;

<blockquote cite="Dictionary.com"><strong>noun</strong>

The change in the appearance of a colour surrounded by another colour; for example, grey looks bluish if surrounded by yellow.</blockquote>

According to the World Health Organization (WHO);

  * Globally, at least 2.2 billion people have a vision impairment or blindness, of whom at least 1 billion have a vision impairment that could have been prevented or has yet to be addressed.
  * This 1 billion people includes those with moderate or severe distance vision impairment or blindness due to unaddressed refractive error, as well as near vision impairment caused by unaddressed presbyopia.
  * Globally, the leading causes of vision impairment are uncorrected refractive errors and cataracts.
  * The majority of people with vision impairments are over the age of 50 years.

<blockquote cite="Rachel R. Vasquez">Contrasting colors, also known as complementary colors, are colors from opposing segments of the color wheel. Colors that are directly across from one another on a basic color wheel provide maximum contrast.</blockquote>

#### Types of Color Blindness

There are seven total types of color blindness including monochromacy (the abscence of color perception).

__Red-green color blindness.__

The most common type of color blindness amkes it difficult to tell the difference between red and green. There are four types of red-green color blindness;

__Deuteranomaly:__ This is the most common type of red-green color blindness. This type is mild and usually does not hinder normal viewing or activities. It makes green look more red.

__Protoanomaly:__ This makes red look more green and less bright. This is also mild as well.

__Protonopia__ and __deutueranopia:__ Both of these make it so that you cannot tell the difference between red and green at all.

__Blue-yellow color blindness.__

This less-common type of color blondness makes it difficult for people to tell the difference between blue and green, and red and yellow. There are two types of blue-yellow color blindness;

__Tritananomaly:__ Which makes it hard to tell the difference between blue and green, and red and yellow.

__Tritanopia:__ Is when you are unable to tell the difference between blue and green, purple and red, and pink and yellow. Colors also look a lot less bright.

__Complete Color Blindness.__

__Monochromacy:__ Is also known as Complete Color Blindness. Where you cannot see colors at all.

__Stargardt's__

Stargardt's, a type of macular degeneration that means people who have it, lose vision in the center of the retina. It is an inherited disorder of the retina. A disease which causes vision loss during childhood or adolescence, although it may not be noticed until adulthood. [Here is an example of a site](https://twoblindbrothers.com/pages/reveal) that allows visitors to see through the eyes of the founders, and what they see when they navigate the internet.

<blockquote cite="Designer/Developer">&ldquo;I don't need to worry about this! Our customers are under 50!&rdquo;</blockquote>

What about temporary impairment or injury? Watery eyes by getting punched in the nose by an over-enthusiastic pet or child? (Yes, that was me) An eye injury when you socked yourself in the eye trying to adjust the sun visor in your car while driving? (Yes, that was me again). 

Use of one eye just for a short period of time? There are times where a temporary impairment comes into play more than likely, just as with other forms of accessibility issues (broken hand, wrist in a cast, eye patch, etc.).

Maybe Dad is looking online for a gift for his kids? Maybe the user under 50 has an impairment? You don't know this, so don't assume. We do not know our users. We do not know who the users are (unless you have done extensive user research, which we shold be doing) of whom will be using the sites we build or the apps we create.

There's no possible way anyone will interview every single user of the product. So assuming we know who the user is, is not something we should be doing. So do not assume that you know all your users or customers.

We as designers and developers should know at the very least, the basics of this. That ther are people out there with certain visual impairments that make it difficult for them to see certain colors and that we need to make our work more adjusted to them.

Sure, we have certain color palettes we like, but is the end result of our work we do for us as designers and developers? Or is it for the end user? The people that will view the work we do as we move on to other projects and maybe take a look at what we have done once in a great while?

We should all be working together to make sure that these levels of accessibility are met in our work. It is 2019 and we are still having this conversation, even more now than ever it seems.

Why aren't we at a place where this is part of accessibility testing? All it takes, is some really simple testing for color contrast. You can even do it in the [Firefox DevTools](https://developer.mozilla.org/en-US/docs/Tools)!

#### The Tools

Color contrast checkers. There are many. I mean *a lot*. There is one I use to make sure what I am doing uses the correct level of color contrasting, it is the [Colour Contrast Checker](https://colourcontrast.cc). I know there are a lot of tools and resources, and maybe some that aren't covered here. These are a few I use or have as a part of my workflow when checking for accessibility with color contrast.

Does color contrast have to meet those standards? In my opinion? Yes. There is debate around the contrast of white text on backgrounds as opposed to black text on backgrounds of the same color.

Tests have shown that people with visual imapriments find reading white text on a certain colored background are easier than reading the same text in black font. I ran into this when testing color contrast for a project I am working on regarding white and black text on certain orange and blue backgrounds. Text and interface components have different contrast ratios.

Designers should know about color contrast. Developers should understand color contrast. Again, at the least the very basics or theory of color contrast.

<div class="content__placeholder">
  <figure>
    <img class="content__image" src="/img/ccc.png" alt="The site colourcontrast.cc with a yellow-ish background with black text. A color contrast tool online that measures the color contrasts between background and foreground colors with hex values for colors, sliders for hue, saturation, and lightness. Also pass/fail indicators regarding WCAG 2.0 AA and AAA." />
    <figcaption>Colorcontrast.cc - A terrific color contrast checking tool for quick testing.</figcaption>
  </figure>
</div>

[Who Can Use](https://whocanuse.com) is another fantastic contrast checker that will become a staple in my accessibility testing most definitely. It gives you a look at the different contrasts and how they stack up versus the many different kinds of visual impairments.

<div class="content__placeholder">
  <figure>
    <img class="content__image" src="/img/wcu.png" alt="The site Who Can Use which gives color combinations, their contrast numbers, simulation of text, and the different impairments and their percentages in population, WCAG grading and much more." />
    <figcaption>Who Can Use - A phenomenal color contrast checking tool that is more in depth that most tools for testing against the different types of visual impairments.</figcaption>
  </figure>
</div>

[The WCAG Contrast Checker](https://contrastchecker.com/) is another option.

<div class="content__placeholder">
  <figure>
    <img class="content__image" src="/img/wcagcc.png" alt="The WCAG Contrast Checker. Which shows foreground and background color selection, sample text and ratio information along with pass/fail markers, a button to switch on/off for grayscale view, and much more." />
    <figcaption>The WCAG Contrast Checker.</figcaption>
  </figure>
</div>

Along with the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).

<div class="content__placeholder">
  <figure>
    <img class="content__image" src="/img/webaimcc.png" alt="The WebAIM Contrast Checker. Which shows foreground and background color selection, sample text and ratio information along with pass/fail markers, a button to switch on/off for grayscale view, and much more." />
    <figcaption>The WCAG Contrast Checker.</figcaption>
  </figure>
</div>

[The WAVE Web Extension](https://wave.webaim.org/extension/) and the [Axe Web Accessibility Extension](https://chrome.google.com/webstore/detail/axe-web-accessibility-tes/lhdoppojpmngadmnindnejefpokejbdd) are a couple of browser extensions/add-on's I use among other color contrast checking sites and tools.

[WAVE](https://wave.webaim.org/) and [Deque](https://www.deque.com/tools/) have great accessibility testing tools that not only check for color contrast issues, but all accessibility issues as well. Chrome and Firefox have add-on's for their respective browsers when it comes to color contrast checkers.

Color contrast checking is super important. Why? Do we really want to have instances in forms where we cannot read the form labels? With flat design being popular still, do we really want to be searching for a text field to input our information into a form we're trying to send to the people that run the website?

I want to be able to clearly see a form field so I can enter information into it. So imagine someone with an impairment visually, trying to do this. Text colors and form components have two different kinds of contrast ratios. They are not the same.

Getting the information to the user is crucial. If you're not getting that information to the user in an effective manner, then that's not good UX and it certainly is not good accessibility if people can't understand the content.

Have you even tried to read your phone with the glare of the sun on the screen? Probably, and you can't really read what you're trying to look at. You have to adjust so that the sun isn't hitting the screen on the phone in a way that you can read it.

You want to get the information off the device so you can understand what you're looking at.

Take a minute and squint at whatever you're looking at. Can you read it clearly? Probably not. So remember those who have visual deficiencies and get them the information they are looking for in a clear manner.

Some colors look good to some people (designers, I'm looking at you) but will they look good to people that have deuteranomaly? What about people with tritanopia? How is that information getting to them with your color scheme?

#### WCAG AA &amp; AAA Definitions

<blockquote cite="Internet Person">So what is an acceptable level of color contrast?</blockquote>

A minimum color contrast ratio recommended by ISO-9241-3 and ANSI-HFES-100-1988 is 3:1 for standard text and vision. The 4.5:1 ratio takes into account color deficiencies, low visual acuities, or loss of contrast sensitivity. 4.5:1 is also the chosen level for WCAG AA standards because &ldquo;*it compensated for the loss in contrast sensitivity usually experienced by users with visiion loss equivalent to approximately 20/40 vision*&rdquo;

The minimum level for WCAG AAA is 7:1 and the reason for that is;

<blockquote>&hellip;because it compensated for the loss in cotnrast sensitivity usually experienced by users with vision loss equivlent to approximately 20/80 vision. People with more than this degree of vision loss usually use assistive technologies to access their content (and the assistive technologies usually have contrast enhancing, as well as magnification capability built into them).</blockquote>

These calculations are made for the size of body text and a relaxed contrast ratio is provided for larger text, such as headings or any other text which is larger than the body copy. Remember to make link text stand out and underlined as well!

While these are the minimum and suggested ratios for each level (AA &amp; AAA), interface components do not have the same contrast ratios. While text is 4.5:1 in WCAG AA, interface components are 3:1.

Text requires a higher contrast because people are trying to reead it. Interface components do not and therefore have a lower standard.

#### Forms

Picture yourself on a website looking for some conference tickets, you're shopping around for information and doing some research on conferences. You're looking for a newsletter to sign up with to keep in the loop or to learn something. Now you run into something like this;

<div class="content__placeholder">
  <figure>
    <img class="content__image" src="/img/si1.png" alt="A blue form on a website, with darker blue form fields that aren't very discernable, with black text in the form fields with a hot pink submit button." />
    <figcaption>A case of dreadful color contrast.</figcaption>
  </figure>
</div>

This was a challenge for me when I came across it, so imagine what it must be like for someone with a visual impairment. Whiel someone with a visual impairment can differentiate between colors, the contrast fo this form andmany others I have seen aren't that good. This is where color contrast comes into the conversation. A conversation we *really* need to have. Still.

Then why are we running into instances of this?

<div class="content__placeholder">
  <figure>
    <img class="content__image" src="/img/ewww.png" alt="A form submission message in white font on a neon yellow background which makes reading nearly impossible and color contrast almost non-existant." />
    <figcaption>Wait, what?</figcaption>
  </figure>
</div>

How is someone with good vision supposed to read that? How is someone with a vision impairment supposed to read that if they do not use a screen reader?

This kind of color contrast is not helpful. This is unreadable even to someone like myself who has good eyesight, so what about someone that doesn;t have good eyesight, someone that is older? It has to be nex tto impossible to get the information from this confirmation message.

I had the hardest time reading this and making out the sentence, *"Thanks for subscribing! Please check your email for further instructions."* Why is this happening in this day and age? It got me thinking, my vision (for now) is just fine, but what about people that have visual impairments? How could, and how *would* they read that?!

If I have submitted a form, I would like to be able to read any confirmation messages after the submission. I don't know about other folks, but I just like to read the information relayed to me after submission in case there is anything I shouldn't miss or some tidbit of information that I need to know.

For example;

*&ldquo;Please check your inbox to confirm your subscription.&rdquo;*
*&ldquo;Your confirmation number will be sent to __user@address.com__&rdquo;* or,
*&ldquo;Your ticket number is 98765. Check your inbox to confirm receipt.&rdquo;*

So if your form uses a color contrast that isn't as sharp as it needs to be, there could be a lot of peoplenot getting the information you're trying to get to them or unable to get information from your user(s) because they cannot read the information displayed. A confirmation message needs to be relayed clearly so as to also relay anything the user should knnow upon submission as I outlined above.

#### What Can We Do?

We as designers need to do better, to have a system of checks and balances to make sure that color contrast is an integral part of the design process. We have learned through many mistakes we have seen over the last few years that accessibility reaches a far wider scope that sometimes is ignored by the masses, myself included.

How can we make sure we are paying attention to color contrast when we design and develop websites?

__Test with persons with vision impairments.__ If we can ask on Twitter for users of a specific demographic, then we can ask for persons to test with vision impairments. Even going as far as hiring those people to work on your teams to make the process better.

__Make accessibility inclusive in the design and developemnt process.__ If we are including time to make sure what we are doing right from the start is accessible, then we are halfway there. And be even more inclusive&hellip; Hire persons with visual impairments to your team to help with the process with their expertise on the matter!

__Don't follow the WCAG guidelines focusing solely on color contrast for text.__ Different components of a site or application have different color contrasts. Forms, buttons, text, interface components. Use good judgment and you will be able to differentiate between them all and use a [color-blindness simulator](https://www.color-blindness.com/coblis-color-blindness-simulator/) [there are some](https://www.colororacle.org/) [to choose](http://www.webexhibits.org/causesofcolor/index.html) fromt hat are good. There is even an extension for Chrome called [Colorblindly](https://chrome.google.com/webstore/detail/colorblindly/floniaahmccleoclneebhhmnjgdfijgg) and one called [Colorblinding](https://chrome.google.com/webstore/detail/colorblinding/dgbgleaofjainknadoffbjkclicbbgaa) as well.

__Be sensible with colors.__ Ask yourself, &ldquo;Would this color scheme work for others with vision impairments?&rdquo; Use color schemes and palettes that work and that make sense. Pastels are okay, but not in a Miami Vice nightmare landscape kind of horrible way. And&hellip; Color-blind people can tell the difference between colors, they just have  hard time distinguishing between those colors. And&hellip;

__Use the tools!__ Color contrast checkers like in the examples I have provided and accessibility tools that are plentiful out there, use them! That's why they are there! They will inform you of issues before you push to production or go live, saving you (and/or your company) time and money.

### Summary

Following the WCAG guidelines is something we should do, but an accessible design is something we have to do. With that said, right now a 100% WCAG compliant site cannot be achieved if you followed every WCAG requirement.

There is a lot of talk about accessibility and we have taken tremendous strides to making the web more accessible and inclusive but we have a long way to go still from it being all-inclusive. So let's make the web more inclusiv, but also remember how and why. Also reminding ourselves to actually do it!

There is a broad spectrum of vision deficiencies and impairments we need to address during the design phase of the process. Making this process more inclsuive by taking the time to make sure color contrast (and other aspects of accessibility) work.

Let us remind ourselves of the fact not everyone has perfect or near perfect vision. Embrace the process of color contrast, avoid illegible parts of websites that are created and unintelligible forms like in the examples I provided.

[Jeffrey Zeldman](https://twitter.com/zeldman) summarized it up in his post on Blue Beanie Day (November 30th) when he wrote;

<blockquote cite="Jeffrey Zeldman">&hellip;our industry as a whole thinks less and less about accessibility (not that we ever had an A game on the subject), and talks less and less about progressive enhancement, preferring to chase the ephemeral goal posts of over-engineered soultions to non-problems.</blockquote>

#### Closing

We as architects and craftspersons of the web community must keep everyone in mind when it comes to not only color contrast with fonts, websites, User Experience, forms, and colors, but all areas of accessibility and inclusive design as well.

While we should follow WCAG rules explicitly, we have to remember again that certain components of a website or an application have two different types of contrast to them. Toggles, components, text, buttons, form labels. Keep in mind the contrast ratios between each and we can make things that are great.

Clear color contrast is just the beginning, but it's one of the great ways to start building, creating, and handcrafting great, accessible sites for all.
