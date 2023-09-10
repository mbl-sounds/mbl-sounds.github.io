---
title: "Distributed Adaptive Norm Estimation For Blind System Identification in Wireless Sensor Networks"
date: 2022-09-05 00:00:00 +0200
image: 
  # path: /images/20230607-icassp-dist-norm-est/image.png
  thumbnail: /images/20230607-icassp-dist-norm-est/thumb.png
---

Distributed signal-processing algorithms in (wireless) sensor networks often aim to
decentralize processing tasks to reduce communication cost and computational complexity or
avoid reliance on a single device (i.e., fusion center) for processing.  In this
contribution, we extend a distributed adaptive algorithm for blind system identification
that relies on the estimation of a stacked network-wide consensus vector at each node, the
computation of which requires either broadcasting or relaying of node-specific values
(i.e., local vector norms) to all other nodes.  The extended algorithm employs a
distributed-averaging-based scheme to estimate the network-wide consensus norm value by
only using the local vector norm provided by neighboring sensor nodes.  We introduce an
adaptive mixing factor between instantaneous and recursive estimates of these norms for
adaptivity in a time-varying system.  Simulation results show that the extension provides
estimation results close to the optimal fully-connected-network or broadcasting case while
reducing inter-node transmission significantly.

Cite as: *Matthias Blochberger, Filip Elvander, Randall Ali, Jan Østergaard, Jesper Jensen,
Marc Moonen, Toon van Waterschoot, "Distributed Adaptive Norm Estimation for Blind System
Identification in Wireless Sensor Networks," ICASSP 2023 - 2023 IEEE International
Conference on Acoustics, Speech and Signal Processing (ICASSP), Rhodes Island, Greece,
2023, pp. 1-5, doi: 10.1109/ICASSP49357.2023.10096574.*

DOI: [10.1109/ICASSP49357.2023.10096574](https://doi.org/10.1109/ICASSP49357.2023.10096574)

arXiv: [arxiv.org/abs/2303.00832](https://arxiv.org/abs/2303.00832)

![center-aligned-image](/images/20230607-icassp-dist-norm-est/image.png){: .align-center}
