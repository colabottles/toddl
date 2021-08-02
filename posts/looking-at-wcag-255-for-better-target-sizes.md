---
title: Looking at WCAG 2.5.5 for Better Target Sizes
description: Looking at better target sizes for mobile devices to improve the user experience.
date: 2021-07-29
tags:
  - accessibility
  - a11y
  - wcag
  - targetsize
  - mobile
layout: layouts/post.njk
---

Have you ever experienced the frustration of trying to tap a button on a mobile device only to have it do nothing because the target size is just not large enough **and it’s not picking up on your press? Maybe you have larger fingers, like I do, or maybe it’s due to limited dexterity. This is because the sadly ever-decreasing target area of elements we, the users, have to interact with.

Let’s talk about target size and how to make it large enough for users to easily interact with an element. This is an especially big deal if a user is accessing content on a small hand-held touch screen device where real estate is much tighter.

### Success criterion revisited

I touched (no pun intended) on Success Criterion in [a previous article](https://css-tricks.com/whats-new-in-wcag-2-1-label-in-name/#you-lost-me-at-success-criterion) covering the WCAG 2.1 criterion, Label in Name. In short, the WCAG criteria is the baseline from which we determine whether our work is “accessible.”

If you’re wondering whether there’s a criterion for target size, the answers is yes. It’s WCAG 2.5.5. Pulling straight from the guidelines. passing [WCAG 2.5.5](https://www.w3.org/TR/WCAG21/#target-size) with a AAA grade requires “the size of the target for pointer inputs is at least 44 by 44 CSS pixels except when:

* Equivalent: The target is available through an equivalent link or control on the same page that is at least 44×44 CSS pixels;
* Inline: The target is in a sentence or block of text;
* User Agent Control: The size of the target is determined by the user agent and is not modified by the author;
* Essential: A particular presentation of the target is essential to the information being conveyed.”

### What could possibly go wrong?

It’s just a size, right? Easy peasy. Nothing can possibly go awry.

Or can it?

Small target sizes can cause accessibility hurdles for many people. Have you ever been traveling in a vehicle on a bumpy road and you’re trying to interact with an app on your mobile can not press on an element? That is an accessibility hurdle. Those with motor skill or cognitive impairments will have a much harder time because it is much harder for them if the target size is too small and does not meet WCAG requirements.

I don’t mean to pick on Twitter here, but it’s the first notable example I found while hunting for examples of small targets.

![A timeline from Twitter with some really small target area to close out topics if you don't want to see them and plus icons if you want to add them.](https://res.cloudinary.com/colabottles/image/upload/v1627617619/images/timeline.webp)

<figcaption>There are some good examples of small targets in here, from the tiny contextual menu to the actions in the footer of a tweet, and even the small icons to add topics to a timeline. And notice that even with a properly sized target, like the floating button to compose a tweet, it overlaps with another target, obstructing access to it.</figcaption>

Another favorite example I see quite often? Ads. Have you ever struggled to click the minuscule “X” button to close them?

![Ad for a bike with a very small target area and difficult way to close the ad.](https://res.cloudinary.com/colabottles/image/upload/v1627862500/images/ad-close.png)

<figcaption>You’re not alone if you’ve ever struggled to click, let alone even locate, the close button.</figcaption>

Having no motor skill or cognitive disabilities personally, I find myself fumbling around and taking multiple times to hit some target areas. The fact that someone who needs to use something like a pen or stylus on a target size that is not a minimum of 44×44 pixels can be a difficult task. These targets shouldn’t need multiple attempts to activate when the target size doesn’t meet recommended guidelines.

### Target size considerations

WCAG 2.5.5 goes into specific detail to help us account for these things by defining the four types of controls we just saw: equivalent, inline, User Agent, and essential.

We’re going to look at different considerations for determining target sizes and hold them up next to the WCAG guidelines to help steer us toward making good, accessible design decisions.

#### Consider the difference between “click” and “tap”

This success criteria ensures that target sizes are large enough for users to easily activate targets, even if the user is accessing these targets on handheld devices. We typically associate small screens with “taps” instead of “clicks” when it comes to activating targets. And that’s something we need to consider in our target sizing.

Mice and similar input devices use a pointer on the screen, which is considered “fine” precision because it allows a user to access an element on the screen with exact precision. Fine precision makes it easier to access smaller target sizes in theory. The trouble is, that sort of input device can be tough for some users, whether it’s with gripping the device, or some other cognitive or motor skill. So, even with fine precision, having a clear target is still a benefit.

![A comparison of mobile screens side-by-side comparing targets of links as opposed to buttons.](https://res.cloudinary.com/colabottles/image/upload/v1627620899/images/mobile1.webp)

<figcaption>A Tale of Two Targets: Combining padding and color can help increase the size of a tap target while making it visually clear.</figcaption>

Touch, on the other hand, can be problematic as it is an input mechanism with very “coarse” precision. Users can lack a level of fine control when using a mouse or stylus, for example. A finger, which is larger than a mouse pointer, generally obstructs a user’s view of the exact location on the screen that is being activated or touched. Hence, “coarse” precision.

![A mobile device with two sections, the bottom section with a thumb shown clicking the target area as opposed to the upper half using a pointer.](https://res.cloudinary.com/colabottles/image/upload/v1627621013/images/mobile2.webp)

<figcaption>A smaller pointer offers more precision than a larger thumb when it comes to interacting with an element.</figcaption>

This issue is exacerbated in responsive design, which needs to accommodate for numerous types of fine and coarse inputs. Both input types must be supported for a site that can be accessed by a desktop or laptop with a mouse, as well as a mobile device or tablet with a touch screen.

That makes the actual size we use for a target a pretty important detail. Depending on who is using a control, what that control does, how often it’s used, and where it’s located, we ought to consider using larger, clearer targets to prevent things like unintended actions.

But with all this said, [we do actually have a CSS media query](https://www.w3.org/TR/mediaqueries-4/#pointer) that can detect a pointer device so we can target certain styles to either fine or coarse input interactions, [and it’s well-supported](https://caniuse.com/css-media-interaction). Here’s an example pulled right out of the spec:

```css
  /* Make radio buttons and check boxes larger if we have an inaccurate primary pointing device */
    @media (pointer: coarse) {
      input[type="checkbox"], input[type="radio"] {
        min-width: 30px;
        min-height: 40px;
        background: transparent;
      }
    }
```

But wait. While this is great and all, Patrick H. Lauke offers a word of caution about this interaction media query and [it’s potential for making incorrect assumptions](https://css-tricks.com/interaction-media-features-and-their-potential-for-incorrect-assumptions/).

#### Consider that different platforms have different requirements

When WCAG specifies exact values, it’s worth paying attention. Notice that we’re advised to make target sizes at least 44×44 pixels, which is mentioned no fewer than 18 times in the [WCAG 2.5.5 explainer](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html).

However, you may have also seen similar requirements with different guidance from the likes of Apple’s “Human Interface Guidelines” for iOS, and Google’s “Material Design” in their platform design requirements.

![Side by side iPhones showing target size dimensions on two different devices.](https://res.cloudinary.com/colabottles/image/upload/v1627666743/images/apple1.webp)

<figcaption>“Try to maintain a minimum tappable area of 44pt x 44pt for all controls.” (Apple, [“Human Interface Guidelines”](https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/adaptivity-and-layout/))</figcaption>

![Material Design target sizes.](https://res.cloudinary.com/colabottles/image/upload/v1627666769/images/android1.webp)

<figcaption>“Consider making pointer targets at least 44 x 44 dp.”
(Material Design, [“Accessibility”](https://www.material.io/design/usability/accessibility.html#layout-and-typography))</figcaption>

#### Consider the “tappable area” of a target

Notice that Apple’s platform requirements refer to a “tappable area” when describing the ideal target size. That means that we’re talking about space as much as we are about the appearance of a target. For example, Google’s Material Design suggests at least a 48×48 dp (density-independent pixels) target size for interactive elements. But what if your design requirements call for a 24×24 dp icon? It’s totally legit to use padding in our favor to create more interactive space around the icon, comprising the 48×48 dp target size. Or, [as it’s documented](https://www.material.io/design/usability/accessibility.html#layout-and-typography) in Material Design:

> Touch targets are the parts of the screen that respond to user input. They extend beyond the visual bounds of an element. For example, an icon may appear to be 24×24 dp, but the padding surrounding it comprises the full 48×48 dp touch target.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="zYZWzZm" data-user="css-tricks" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/team/css-tricks/pen/zYZWzZm">
  </a> by CSS-Tricks (<a href="https://codepen.io/team/css-tricks">@css-tricks</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

#### Consider responsive layout behavior

That’s right, we’ve gotta consider how things shift and move around in a design that’s meant to respond to different viewport sizes. One example might be buttons that stack on small screens but are inline on larger screen. We want to make sure that transition accounts for the placement of surrounding elements in order to prevent overlapping elements or targets.

![Two mobile devices showing inline button styles and their repective target areas.](https://res.cloudinary.com/colabottles/image/upload/v1627859821/images/target-size-button-inline.webp)

Speaking of inline, there’s a particular piece of the WCAG’s exception for inline targets that’s worth highlighting:

> _Inline: Content displayed can often be reflowed based on the screen width available (responsive design). In reflowed content, the targets can appear anywhere on a line and can change position based on the width of the available screen. Since targets can appear anywhere on the line, the size cannot be larger than the available text and spacing between the sentences or paragraphs, otherwise the targets could overlap. It is for this reason targets which are contained within one or more sentences are excluded from the target size requirements. (Emphasis mine)_

Now, we’re not necessarily talking about buttons that are side-by-side here. We can links within text and that text might break the target’s placement, possibly into two lines.

![A mobile device showing inline links and their target sizes](https://res.cloudinary.com/colabottles/image/upload/v1627860493/images/target-size-inline-links.webp)

<figcaption>While it might be difficult to tap one target without inadvertently tapping the other, the WCAG makes an exception for inline targets, like links within paragraphs.</figcaption>

#### Consider the target’s relationship to its surroundings

We just saw how inline links within a block of text are exempt from the 44×44 rule. There are similar exceptions depending on the target’s relationship to the elements around it.

Let’s take the example that the WCAG explainer provides, again, in it’s description of inline target exceptions:

> If the target is the full sentence and the sentence is not in a block of text, then the target needs to be at least 44 by 44 CSS pixels.

That’s a good one. We ought to consider whether the target is its own block or part of a larger block of text. If the target is its own block, then it needs to abide by the rules, whether it’s a button with a short label, or a complete sentence that’s linked up. On the flip side, a complete sentence that’s linked up inside another block of text doesn’t have to meet the target size requirements.

![Target size relation between two mobile devices one showing buttons and theother showing links in an article for each respectively.](https://res.cloudinary.com/colabottles/image/upload/v1627860568/images/target-size-relation.webp)

<figcaption>If the target is its own block of text (left), then it needs to adhere to the WCAG criterion. Otherwise, it is exempt (right).</figcaption>

You might think that something like a linked icon at the end of a sentence or paragraph would need to play by the rules, but the WCAG is clear that these targets are exempt:

> A footnote or an icon within or at the end of a sentence is considered to be part of a sentence and therefore are excluded from the minimum target size.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="rNydzOE" data-user="css-tricks" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/team/css-tricks/pen/rNydzOE">
  WCAG 2.5.5: Icons at the end of a sentence are exempt</a> by CSS-Tricks (<a href="https://codepen.io/team/css-tricks">@css-tricks</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

And that makes sense. Imagine content with a line height of, say 32 pixels and an icon at the end that’s all padded up to be 44×44 pixels and how easy it would be to inadvertently activate the icon.

#### Consider whether the target is styled by the User Agent

If the target is completely un-styled — in the sense that you’ve added no CSS to it — and instead takes on the default styles provided by the browser, then there’s no need to stress the 44×44 rule. That makes sense. The User Agent is like system-level UI so changing it superficially with our own styles would be overriding an entire system which could lead to inconsistencies in that UI.

![A submit button.](https://res.cloudinary.com/colabottles/image/upload/v1627861573/images/form-input-submit.webp)

<figcaption>You’re fine just as you are, little button.</figcaption>

So, yeah, if you’re rockin’ a default `<button>` or the like, and there are no other styles or sizing applied to it, then it’s good to go. But lots of us use resets to normalize UI elements across browsers, so watch for that in your codebase because that’s going to affect the User Agent styles of your target.

#### Consider if there are other ways to activate the functionality

We’ve all used in-page anchor links, right? Heck, CSS-Tricks often has a table of contents at the top of an article that’s merely a list of anchor links.

![A table of contents.](https://res.cloudinary.com/colabottles/image/upload/v1627861624/images/toc.webp)

<figcaption>Should these be at least 44×44 pixels?</figcaption>

WCAG actually uses anchor links as an example of something that’s off the hook as far as meeting the target size requirements. Why? Because it’s just as possible to manually scroll down to a specific location on a page as it is to click a link to jump there. There are two ways to accomplish the same thing, and one of those ways is built right into the browser.

But we still ought to use care when working with something like a table of contents. I’m not entirely clear here, but given that a table of contents is list of links, each link may very well constitute its own block of text that’s not part of a larger block of a text, like a paragraph. So, in this sort of case, maybe a little extra space between list items is still a good idea. There’s less change of accidentally clipping or tapping two or more targets at once.

### Wrapping up

WCAG 2.5.5 criterion provides guidance for applying target sizes that are clear, unobstructed, and easy to activate. As we saw, there are plenty of cases where the size of a target can make all the difference in the world when it comes to completing an action.

The interesting thing about the target size guidelines is what is exempted from them. While we didn’t cover each specific exemption on its own, we did look at a bunch situations that require careful consideration for sizing a target, from the type of input device that’s in use to the relationship of the target to its surrounding elements, and plenty of things between.

The key to accessible target sizing isn’t necessary about using less styling on a target (although we did see that default User Agent styles are exempt), but rather having context and styling accordingly. There are probably dozens more situations we could have covered here and examined how styles come into play — so if you have some, share!

And as far as styling goes, CSS specifications have specific features, like the interation media query for pointer, to make target sizing even better for people. Used well, it could be a great way to detect if a visitor is using a fine or coarse input device. That way, we can tailor things to make their experience better than if we treated those differences the same.

So, yes, target sizes are an easy thing to brush off and ignore. But hopefully now you’re like me and have a genuine appreciation for targets that are correctly sized now that you have the information to make correctly sized targets of your own.

### EDIT: 30 July, 2021

Adrian Roselli added:

> There is a [bookmarklet to test 2.5.5](https://codepen.io/aardrian/pen/eYZWNyv) that Jared Smith made last year and which I modified to allow you to dismiss on Esc.
There is plenty of evidence beyond Apple and Material Design (the latter being easy to dismiss for usability failures). [Nielsen Norman Group writes about](https://www.nngroup.com/articles/touch-target-size/) a 1cm × 1cm (0.4in × 0.4in) tap area, [BBC GEL recommends](https://www.bbc.co.uk/gel/guidelines/how-to-design-for-touch) 7mm, [Microsoft’s Fluent recommends](https://docs.microsoft.com/en-us/windows/uwp/design/input/guidelines-for-targeting#target-size) 40 × 40 effective pixels.
Hopefully the coming [2.5.8 Target Size (Minimum) SC](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) at Level AA will cover the gap that 2.5.5 at Level AAA left.

Patrick H. Lauke added:

> If you must use a `pointer` query, strongly suggest using `any-pointer:coarse` to detect the presence of _any_ coarse (generally, touch) pointer input (not just going by whatever the UA believes to be the primary).
