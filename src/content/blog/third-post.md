---
title: 'MyString — Wrapping Up the Basics'
description: 'The third post'
pubDate: 'June 22, 2026'
---

Since the last post I have been heads down finishing out the MyString class. What started as a constructor and a destructor has grown into something I am genuinely proud of.

The first real hurdle after getting the basics working was a double-free bug that showed up when I implemented the assignment operator. Two MyString objects ending up pointing at the same buffer and both trying to free it on destruction. The fix was move semantics — implementing a move constructor and move assignment operator that transfer ownership of the buffer and null out the source so it cannot double-free. Simple in hindsight, but it was a good reminder that manual memory management is unforgiving.

After sorting out the memory safety I added the rest of the operator overloads: `+` for concatenation, `+=` for in-place append, `==` for comparison, `[]` for indexing (with negative index support, Python-style), and `<<` so you can drop a MyString straight into `std::cout`. Then came the core methods — `append`, `insert`, `find`, `substring`, `split`, and `trim` — which rounded out the class into something that can actually do useful work.

One thing that felt particularly satisfying was adding a custom `Iterator` with `begin()` and `end()`, which lets MyString work in a range-based for loop. It is a small thing but it makes the class feel like a real first-class citizen alongside the standard library types.

Somewhere in the middle of all this I also cleaned up the project structure. I had everything jammed into one `.cpp` file, which works but is not how a modern C++ project is organized. I split it into a proper header (`.hpp`) and definition (`.cpp`) and added a Makefile to handle compilation and cleanup. Much cleaner.

Finally I wrote a test suite. Nothing fancy — just a `test.cpp` that runs each feature and prints `[PASS]` or `[FAIL]` with the expected and actual values side by side. Seeing a clean run of all passes was one of those small joys that reminds you why you got into this in the first place.

The class is complete for now. You can find the repo here: [GitHub](https://github.com/GavinHungaski/MyString). Next up I will be moving on to a more complex systems project as I continue working toward the robotics and ML path. Stay tuned.
