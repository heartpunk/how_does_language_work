how_does_language_work
======================

### What it is

This is an experiment in making a programming language who's sole purpose is teaching how programming languages work.  It won't teach everything, but it will give me a starting point for going further with this later.

This go will be in Javascript (until I decide otherwise), for a few reasons:

1. It's probably the language the most people know.  For those who don't, the subset of it I'll use is probably not that different from whatever language you have used, if you already know one.
2. I want as many people to have access to it with as little effort as possible.  More people have a Javascript interpreter at hand than any other option.
3. A central goal is visualizing the lexing, parsing, and evaluation process.  Building this in Javascript simplifies the choice of how to approach that drastically (and again, lowers the barrier to adoption).

### The language

I actually don't know much about the language yet.  I haven't made it.  I'm drawn to making a lisp (because it's probably the tiniest language I could implement), but unfortunately lisp scares people.  I'm equally drawn to making an extremely simplified ruby, but the lexing and parsing would be much more involved there.  I'd have to actually learn things, which is not so bad, in itself, but certainly makes the project less likely to happen at all.

As a result, it's a language entirely in flux.  Syntax and semantics will change without the slightest notice.  After all, the language isn't the point, but rather learning about languages.  The starting point will probably have lisp syntax, and since I'm really lazy something vaguely like lisp semantics.  At that point the next step will likely be building a fancier parser and lexer to support more familiar syntax(es).  That could very well be where this project dies, and the next incarnation begins.
