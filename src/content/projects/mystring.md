---
title: "Custom C++ MyString String Class"
description: "A from-scratch C++ string class built to replace std::string, featuring full manual memory management, the Rule of Five, core string methods, operator overloads, a custom iterator, and an integrated test suite."
status: "completed"
repoUrl: "https://github.com/GavinHungaski/MyString"
tags: ["C++", "Systems Programming", "String"]
order: 1
section: "roadmap"
---

## Overview

MyString is a custom C++ string class built from the ground up as a replacement for `std::string`. The goal was to deeply understand how dynamic strings work under the hood by manually managing a heap-allocated character buffer, implementing proper memory safety patterns, and replicating the core functionality that `std::string` provides.

## Features

- **Rule of Five** — Full implementation of the constructor, destructor, copy constructor, move constructor, copy assignment operator, and move assignment operator, ensuring safe and efficient memory management
- **Core String Methods**
  - `append` — Concatenates another MyString onto the end
  - `insert` — Inserts a MyString at a given index
  - `find` — Returns the index of the first occurrence of a substring
  - `substring` — Returns a new MyString from a start index and length
  - `split` — Splits the string by a delimiter, returning an array of MyString objects
  - `trim` — Strips leading and trailing whitespace
- **Operator Overloads** — `+`, `+=`, `==`, `[]`, and `<<` (for `std::cout`)
- **Custom Iterator** — Implements `begin()` and `end()` so MyString works with range-based for loops
- **Test Suite** — A dedicated test file that validates every feature with pass/fail output

## Implementation Highlights

- The string data is stored in a heap-allocated `char*` buffer with a tracked `buffer_size`, requiring explicit allocation and deallocation
- The move constructor and move assignment operator transfer ownership of the buffer and null out the source, preventing double-free errors
- `operator[]` supports negative indexing, similar to Python, allowing access from the end of the string
- `c_str()` exposes the raw buffer, primarily used to assist the test suite in validating internal state

## Development Notes

- Started with a basic constructor/destructor, then encountered a double-free bug while implementing the assignment overloader — resolved by implementing proper move semantics
- Refactored from a single monolithic `.cpp` file into separate header (`.hpp`) and definition (`.cpp`) files following modern C++ project conventions
- Added a `Makefile` with `compile` and `clean` targets for streamlined building
- Integrated a full test suite that runs all constructors, operators, and methods with expected vs. actual output comparison
