---
title: Some thoughts on ALIA and the Public AI Forum
draft: true
tags:
  - example-tag
date:
---
Last week, I attended the ALIA Public AI Forum organised by the Barcelona Supercomputing Center (BSC), where researchers, companies, and institutions gathered to discuss Spain's ambitious public AI infrastructure project. The event was short but thought-provoking, with many highlights about the challenges in the AI space and especially in Europe. 

First, in case you don't know it, [ALIA](https://alia.gob.es/) is a model family developed publicly by the BSC to promote the development of AI in all official and co-official languages in Spain. They are 100% open-source (open weights, open code AND open data!) and cover multiple modalities (text, voice, translation and multimodal).

Having these resources available to anyone is definitely a huge step forward to having public, European AI. However, the comments of the attendants surfaced many of the challenges that companies face when it comes to adopting these models instead of relying on the big US AI providers. In fact, I have faced these same challenges myself.

## The Inference Problem: The Quiet Killer of AI Businesses

Here's what caught my attention during the forum: **model deployments are now the primary bottleneck for anyone offering AI at scale**, specially when we're dealing with synchronous inference.

AI public infrastructure has focused on the training phase, offering thousands of node-hours in their supercomputers through their [EuroHPC JU](https://www.eurohpc-ju.europa.eu/index_en) programe, that allows researchers and companies to train and fine-tune huge models and also to process big amounts of data. 

But that's only half of the story. If you want to build a service on top of your model, you'll need to deploy it, whether in a local server or to the cloud, so users can actually use it without the need to send asynchronous batch jobs. This is where the technical difficulties and huge costs start piling up.

Of course, there's always the issue that most projects asking for AI and LLMs, don't need these at all and could do with much simpler methodologies or models that could run on much cheaper infrastructure, but for those who do, it looks like at the BSC they're working to offer inference services in the future. They didn't give too many details about how they would work or when they plan to have this available, so we'll need to stay tuned to find out more about this. 

## The Big Tech Lock-In & the Data Advantage

There's a strategic dimension here that's rarely discussed openly. The major AI providers have every incentive to make self-hosting more difficult. Making ever-growing LLMs (both in terms of capabilities and size) the new normal only speeds up the need for massive infrastructure requirements to be able to catch up with the big players. 

The huge costs and technical complexity of having a competitive alternative is what makes the prices of those providers to seem reasonable, at least initially. However, in the long-term nobody is sure if the rise of the prices of those providers could kill their companies.

But there's an even more insidious advantage big providers have: **user data**.

Every time you send a prompt to OpenAI, Anthropic, or Google, you're potentially contributing to their next training run. Yes, there are opt-out options buried in settings. But let's be honest—many users don't do it or still use free versions that don't have these options.

This creates a compounding advantage: **big providers get millions of real-world interactions daily and they continuously improve models using those conversations**.

Not to mention that many of the closed-source models were trained on copyrighted content without permission. Their advantage isn't just technical—it's built on ethically questionable foundations.

Public models like ALIA play by different rules. They use curated, properly licensed data. They respect copyright and user data. This means that they don't have access to the amounts of data that big providers have and that **the capability gap can widen very rapidly** over time.

## The Alternative: European AI Sovereignty

During the forum, some speakers emphasized: **"ALIA somos todos"** (ALIA is all of us)—echoing the Spanish tax agency's motto "Hacienda somos todos."

The message? Public AI infrastructure only works if there's genuine collaboration between the institutions building it and the users deploying it.

Unlike big tech, where you're locked out of the improvement loop, public models need active feedback from:

- Companies using them in production
- Researchers finding edge cases
- Institutions deploying them for public services

This isn't a weakness—it's a different model. One where users aren't just consumers, but participants in improving the infrastructure they depend on.

It looks like, for now, most companies don't see ALIA and their models as a real competitive alternative, at least given the technical complexity  and infrastructure costs. But the forum emphasized that this shouldn't be just a technical issue, but also a strategic one: But can Europe build AI capabilities that genuinely compete with US tech giants? Will companies step up to engage with public AI initiatives? Or will they take the easy path of calling a big tech API and hope the lock-in and rising costs don't bite them later?

This isn't about nationalism. It's about:

- **Governance**: Who controls the AI systems that increasingly power critical infrastructure?

- **Sovereignty**: Can European companies and governments make independent decisions about their AI strategy?

- **Sustainability**: Both environmental (inference costs = energy costs) and economic (sustainable business models).

- **Cultural representation**: Models trained on and optimized for European languages, contexts and values.

## My Take

I left the ALIA Public AI Forum with mixed feelings about the future of public AI in Europe. There are real efforts to make this a reality and very capable people are working on it. However, there's lots of work to be done so that the public models and infrastructure can solve the real needs of institutions and companies, and they start at a disadvantage. 

I think everyone in that room and the public in general wouldn't have second thoughts about using public AI instead of having to stick with the big providers and the risks they entail, like rising costs and data privacy concerns. But the convenience of these providers and their huge capabilities make it hard to go with the public alternative at this moment. 

Still, if you're working on AI products—especially in Europe—it's worth paying attention to what the BSC is building. Not just the models themselves, but the entire infrastructure stack that makes independent, ethical AI deployments possible. 

And before you jump on the AI bandwagon, ask the hard question: do you actually need AI? Or do you need better data management, clearer requirements, and simpler solutions that don't require constant inference costs?

Sometimes the best AI strategy is not using AI at all.