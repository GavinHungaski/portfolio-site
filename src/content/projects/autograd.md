---
title: "Custom Autograd Engine"
description: "A from-scratch automatic differentiation engine built in Python to deeply understand backpropagation — the core algorithm behind how neural networks learn. Builds a dynamic computational graph of scalar operations and propagates gradients backward through it via the chain rule."
status: "in-progress"
tags: ["Python", "Machine Learning", "Neural Networks", "Backpropagation"]
order: 2
section: "roadmap"
---

## Overview

This project is a from-scratch automatic differentiation (autograd) engine built in Python. The goal is to deeply understand backpropagation — not just use it through a framework like PyTorch, but to implement the actual mechanics of how gradients flow through a computation.

The engine works at the scalar level: every number is wrapped in a `Value` object that records what operation produced it and which other `Value` objects were its inputs. When a forward pass is computed, this builds up a dynamic computational graph. Calling `.backward()` on the output then walks the graph in reverse topological order, applying the chain rule at each node to accumulate gradients all the way back to the inputs.

## Goals

- **`Value` class** — Wraps a scalar, tracks its gradient, and stores references to the operation and parent nodes that produced it
- **Operation support** — `+`, `*`, `-`, `/`, `**`, `relu`, `tanh`, and other activations, each with a hand-written local gradient rule
- **Backward pass** — Topological sort of the computation graph followed by reverse traversal, accumulating `grad` via the chain rule at each step
- **Neuron / Layer / MLP primitives** — Simple neural network building blocks constructed entirely on top of `Value`, with no external ML libraries
- **Training demo** — A small multi-layer perceptron trained on a toy dataset, demonstrating that the hand-rolled gradients produce correct weight updates and the loss actually decreases

## Why

Most ML practitioners use PyTorch or TensorFlow and call `.backward()` without ever thinking about what it does. Building this engine from zero removes that abstraction entirely. Every gradient rule has to be written by hand, which forces a real understanding of the chain rule in practice — not just in theory. This is the foundational knowledge I want before moving into more serious ML and robotics work.
