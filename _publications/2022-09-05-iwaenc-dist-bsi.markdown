---
title: "Distributed Cross-Relation-based Frequency-Domain Blind System Identification using Online-ADMM"
date: 2022-09-05 00:00:00 +0200
image: 
  path: /images/20220905_iwaenc_dist_bsi/NPM_over_SNR.png
  thumbnail: /images/20220905_iwaenc_dist_bsi/NPM_over_SNR.png
---

In this paper, we propose a distributed cross-relation-based adaptive algorithm for blind
identification of single-input multiple-output (SIMO) systems in the frequency domain,
using the alternating direction method of multipliers (ADMM) in a wireless sensor network
(WSN).  The network consists of a fixed number of nodes each equipped with a processing
unit and a sensor that represents an output channel of the SIMO system.  The proposed
algorithm exploits the separability of the cross-channel relations by splitting the
multichannel identification problem into sub-problems containing a subset of channels, in
a way that is determined by the network topology.  Each node delivers estimates for the
subset of channel frequency responses, which are then combined into a consensus estimate
per channel using general-form consensus ADMM in an adaptive updating scheme.  Using
numerical simulations, we show that it is possible to achieve convergence speeds and
steady-state misalignment values comparable to fully centralized low-cost frequency-domain
algorithms.
