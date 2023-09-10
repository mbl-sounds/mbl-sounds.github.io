---
title: "Particle-filter tracking of sounds for frequency-independent 3D audio rendering from distributed B-format recordings"
date: 2021-04-30 00:00:00 +0200
image: 
  # path: /images/20230607-icassp-dist-norm-est/image.png
  thumbnail: /images/2021-ACTA-particle-tracking/image2.png
---

Six-Degree-of-Freedom (6DoF) audio rendering interactively synthesizes spatial audio
signals for a variable listener perspective based on surround recordings taken at multiple
perspectives distributed across the listening area in the acoustic scene. Methods that
rely on recording-implicit directional information and interpolate the listener
perspective without the attempt of localizing and extracting sounds often yield high audio
quality, but are limited in spatial definition. Methods that perform sound localization,
extraction, and rendering typically operate in the time-frequency domain and risk
introducing artifacts such as musical noise. We propose to take advantage of the rich
spatial information recorded in the broadband time-domain signals of the multitude of
distributed first-order (B-format) recording perspectives. Broadband time-variant signal
extraction retrieving direct signals and leaving residuals to approximate diffuse and
spacious sounds is less of a quality risk, and likewise is the broadband re-encoding to
enhance spatial definition of both signal types. To detect and track direct sound objects
in this process, we combine the directional data recorded at the single perspectives into
a volumetric multi-perspective activity map for particle-filter tracking. Our technical
and perceptual evaluation confirms that this kind of processing enhances the otherwise
limited spatial definition of direct-sound objects of other broadband but
signal-independent virtual loudspeaker object (VLO) or Vector-Based Intensity Panning
(VBIP) interpolation approaches.

Cite as:
*Matthias Blochberger, Franz Zotter, Particle-filter tracking of sounds for
frequency-independent 3D audio rendering from distributed B-format recordings, Acta
Acust., 5 (2021) 20*

DOI: [10.1051/aacus/2021012](https://doi.org/10.1051/aacus/2021012)

![center-aligned-image](/images/2021-ACTA-particle-tracking/image1.png){: .align-center}
![center-aligned-image](/images/2021-ACTA-particle-tracking/image2.png){: .align-center}
