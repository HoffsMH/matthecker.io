## This Site

And what went(and is probably still going) into it.

There are different types of personal websites.
interactive resume type sites, there are simple business cards with various means of contact, personal portfolio sites complete with fancy scroll animations and mockups. Here I'll detail the design and reasoning that is going into this website as I am creating it, I think it will probably make a good first blog post.

#### What I don't want
From previous attempts at a personal website I DO know that there are some things I want to avoid.

- A Backend
  - I have no idea why I thought at the time that it would be a good idea to make a personal website that sits atop a rails server in heroku, it went down in less than a year and I have no intention of maintaining something like that.
- Something with a subscription that could eventually expire or that could end up costing me alot of money
  - I've made sites before with non renewing domain thinking that I would be able to remember, years later to come in and renew with a new debit or credit card.
- Too many moving parts in general
  - I don't want to maintain, and I want this thing to be working for a long time.

#### What I do want
What I want to do here is set up a spectrum, not necessarily between "simple" and "complex" but between what I perceive to be differences in the projected personality that comes through in something like a personal website. I think it's missing the point to say that a personal website like [Donald Knuth's](https://www-cs-faculty.stanford.edu/~knuth/) website is "simple" (as well as inaccurate). The list of things not present on a personal website say just as much as what is actually on it. 

This website is for me
I just want a place to put down my thoughts
I just want a place where people can see how to get in touch with me and what Im about

I no longer think its even possible to impress someone with a personal website


- Ok so we it will be a simple blog and about/contact page

#### But where will the posts be stored?
Either in the app or gists

#### Design
just going to be a react frontend with some boilerplate data about myself and the ability to hit gist api for a github account that I set up for storing blog entries

#### education and fun wise what do I want to get out of this
#### Dev-ops

There are different approaches
just google  "impressive personal websites"

things I learned from previous attempts

This thing might too go the way of all the other personal website's I've made in the past




Ok so lets dive in

first theres aws
route 53
cloudfront not really sure why I need cloudfront but if this is the only way to get a green thing in the url next to my name I guess

