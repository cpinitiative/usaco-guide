# Third Party Services

The following is a list of third party services that the USACO Guide /
Competitive Programming Initiative uses.

Note: This may be out of date.

## USACO Guide

- Hosted on Vercel (sponsored hosting, but the free hobby tier will likely
  suffice)
  - Can also host on Netlify
  - Can also host by yourself
- Firebase backend (pay-as-you-go plan, pretty generous free tier)
  - No easy replacement
  - Technically can function without Firebase -- user login wouldn't work,
    classes wouldn't work, but everything else will still work (including local
    progress tracking)
- Algolia for Search
  - Open source plan. With some optimizations you _might_ be able to get by with
    the free tier plan. Otherwise pay as you go.
  - No easy replacement. Without this, module search + problems search won't
    work.

## IDE

- https://github.com/thecodingwizard/ide
- Our custom serverless online judge is hosted on AWS Lambda.

## Forum

- Hosted on Microsoft Azure
  - Can host on any VPS
- Uses Discourse (open source, free)
  - One-click setup on DigitalOcean doesn't work -- manually configure app.yml
- Uses Mailgun as email provider (currently on pay-as-you-go plan, may or may
  not cost some \$\$ depending on scale)

## Domain Names

- https://joincpi.org/ -- Registered under Google Domains, \$12/yr
- https://usaco.guide/ -- Registered under NameCheap, \$40/yr (?)
- Google Search Console
- Google Analytics

## Competitive Programming Initiative

- Google Nonprofits
  - gsuite for Nonprofits
  - Google Ad Grant
- Microsoft Nonprofits
- Github Nonprofits
- Mailgun
