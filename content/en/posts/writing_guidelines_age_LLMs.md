---
title: Writing annotation guidelines in the age of LLMs
draft: false
tags:
  - annotation
  - AI
  - guidelines
  - en
date:
---
"Do we even need annotation guidelines anymore? Can't we just use LLMs?"

The short answer: **Yes, you absolutely still need good annotation guidelines.** 

Some teams might get the feeling that annotations aren't necessary anymore, that LLMs can simply do the heavy lifting.  It's true that LLMs have changed the way annotations are done and have speed up the process, but they too need guidelines to complete tasks as expected. This means that the way you would normally write and test guidelines may have changed, but the need for good, clear guidelines that can be followed independently is bigger than ever.

## Why Annotation Still Matters

Even today, with powerful LLMs everywhere, you still need high-quality annotated data for:

**Evaluation.** How do you know your AI system is working as you expect? You need (a) ground truth dataset(s) to measure against. LLMs can be part of creating that dataset, but you need clear guidelines to ensure consistency—whether humans, AI or both are doing the annotation.

**Domain expertise.** Many problems require subject matter experts (SMEs) to evaluate correctly. Medical text, legal documents, financial analysis—these need human judgment grounded in deep expertise. Your annotation guidelines are how you transfer that expertise into consistent labels.

**Training data for fine-tuned models.** If you're building anything beyond a simple LLM wrapper, you need quality training data. And quality requires clear, testable guidelines.

The difference now? Your guidelines need to work for both human and AI annotators.

## Guidelines as Prompts

Here's the mindset shift: **think of your annotation guidelines as prompts.**

Traditional guidelines were written only for humans, assuming they could handle ambiguity, ask clarifying questions, and apply common sense. AI annotators can't do that. They need explicit instructions, clear definitions, and good examples—exactly what makes a good prompt.

This turns out to improve guidelines for humans too. Clearer definitions, better examples, less ambiguity—these help everyone, not just the LLMs.

So when you're writing guidelines now, you're really writing a dual-purpose document: instructions for humans and a prompt for AI.

## My Workflow: Iterating with LLMs

Here's how I develop annotation guidelines now. The process is much faster than traditional approaches, and it catches problems early.

### Step 1: Collect Real Examples

Start with a few examples from your actual data. These should cover all labels and represent the variety you'll encounter—easy cases, edge cases, ambiguous situations.

If you work with data that needs to remain private, create realistic mockups instead. The key is that they feel like your real data, with similar complexity and ambiguity.

### Step 2: Draft Your Guidelines

Write your initial guidelines as you normally would, but pay extra attention to:

- **Label definitions:** Can you explain each label without ambiguity?
- **Examples:** Do they clearly demonstrate the distinction between labels?
- **Edge case handling:** What happens with borderline cases?

### Step 3: Test with Multiple LLMs

This is where the iteration happens. I use [Groq's playground](https://console.groq.com/playground) because I can quickly test the same prompt across multiple models, but any similar tool works.

**Setup:**

- Paste your guidelines into the **system prompt**
- Paste the text you want annotated into the **user prompt**
- Sometimes adding a brief instruction just above the text helps: "Annotate the following text according to the guidelines." Experiment with this.

If your tool doesn't have a separated system prompt, pasting both the guidelines and the text in the user prompt should work as well.

**Important caveat:** Humans can use more sophisticated annotation tools than plain text (highlighting, multi-label interfaces, structured forms). This means that how you describe the methodology used for the annotation may not be the same for the LLMs as it is for humans, but make sure your label definitions and examples are the same, so that you can test whether they lead to consistent, correct annotations.

### Step 4: Iterate on Failures

When the LLM's annotation doesn't match what you expected, resist the urge to blame the model. Instead, ask: **what in my guidelines is unclear?**

Common issues I find:

- **Vague definitions:** "Relevant information" means different things to different people (and models)
- **Implicit assumptions:** You know what counts as a "complaint" vs a "question," but did you actually define it?
- **Poor examples:** Your examples all show clear-cut cases, but most real data is messier
- **Missing context:** The model (and humans) need to know what to do with edge cases

Each failed annotation is a gift—it's showing you where your guidelines need work.

### Step 5: Try Multiple Models

Different LLMs behave differently. I test with at least 3 models because:

- If **all models** get it wrong the same way → your definition is probably unclear
- If **all models** get it right → your guideline is solid
- If **models disagree** → you've found an ambiguous case that needs explicit handling

This is much faster than iterating on your guidelines with human annotators. You may sometimes need the initial guidance of SMEs to make the mockups and understand how they should be labelled, but what used to take weeks and several rounds of annotations, you can now do in a few days. 

> [!warning]
>
>Even if you've followed all the steps to iterate on your guidelines with LLMs, do a round of annotations to calculate inter-annotator agreement, just to make sure your team of annotators understand the guidelines as well as an LLM.

## The Bottom Line

Annotation isn't dead—it's evolved. The fundamentals still matter: clear definitions, good examples, thoughtful edge case handling. But now you have new tools for testing and iterating on your guidelines before committing to large-scale annotation.

LLMs haven't replaced annotation. They've made it possible to write better guidelines, faster.

Start thinking of your annotation guidelines as prompts, test them with multiple models, and use their failures to improve your definitions. Your human annotators (and your model) will thank you.
