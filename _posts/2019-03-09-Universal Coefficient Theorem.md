---
layout: post
title: Universal Coefficient Theorem For Cohomology
category: Algebraic Topology
description: I clarify some troubles I had with Hatcher
---


# 1. Free Modules are Projective
This simply means that for a short exact sequence 0 $$\mathcal{\to M\to N\to F\to}$$ 0, where $$\mathcal{F}$$ is free,
the corresponding sequence is also exact: 
0 $$\mathcal{\to Hom(F,L) \to Hom(N,L)\to Hom(M,L)\to}$$ 0

Since $$\mathcal{Ext}$$  measures the failure of exactness for $$\mathcal{Hom}$$,
this means that $$\mathcal{Ext^1_R(F,)}$$ is zero

# 2. Ext Measures the Non-exactness of Hom
The definition of the homology groups imply that 0 $$\mathcal{\to im(\delta_n)\to ker(\delta_(n-1))\to H_n(C)\to}$$ 0
