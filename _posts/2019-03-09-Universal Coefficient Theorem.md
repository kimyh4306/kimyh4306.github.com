---
layout: post
title: Universal Coefficient Theorem For Cohomology
category: Algebraic Topology
description: I clarify some troubles I had with Hatcher
---


# 1. Free Modules are Projective
For a short exact sequence  $$0\mathcal{\to}M\mathcal{\to}N\mathcal{\to}F\mathcal{\to}0$$, where $$F$$ is free, 
the corresponding sequence is also exact: 
$$0\mathcal{\to} Hom(F,L) \mathcal{\to} Hom(N,L)\mathcal{\to} Hom(M,L) \mathcal{\to}0$$

Since $${Ext}$$  measures the failure of exactness for $${Hom}$$,
this means that $$Ext\mathcal{^1_R(F,)}$$ is zero.

# 2. Ext Measures the Non-exactness of Hom
The definition of the homology groups imply that  $$0\mathcal{\to im(\delta_n)\to ker(\delta_{n-1})\to H_n(C)\to 0}$$
