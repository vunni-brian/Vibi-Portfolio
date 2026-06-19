/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Client, Service } from './types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'project1',
    title: 'Lumina Cafe',
    category: 'Brand Identity',
    client: 'Lumina Roasters',
    description: 'A comprehensive rebrand for a boutique coffee roaster focusing on tactile touchpoints. The identity strips away superfluous elements, relying entirely on structured typography and premium materiality to communicate quality.',
    tags: ['Logo Design', 'Storefront Mockup', 'Menu Layout'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-Qi82lGI9lJF5L7IxAfaENIC0DhZPFABHyvNSrvwKIfynfHm0MvUhVYkeCaWa9BUDgNrhEvgTTOmjESQEduXV2btcH3Bk6Kz-TvaDMLzdqNEmLX_Td6JjoJWP5ZYeS-CDah3TZdag1oY1Gk8oja5_-xZeEqQvHr9MX3NhavpCUgHe_MR8gK07x8osCOsZVo1eHa5IiifanN-ggRXUXJgUAhSjtHg7ugGO864ojcX_t8IojQZPm5N7wGo2PjKAiPLn8mqnthByJEI',
    year: '2024'
  },
  {
    id: 'project3',
    title: 'Aura Botanica',
    category: 'Brand Identity',
    client: 'Aura Skincare Inc.',
    description: 'Packaging system designed to reflect the raw, natural ingredients of the product line. We utilized unbleached, heavyweight paper stocks and subtle debossing to create a quiet, luxurious unboxing experience.',
    tags: ['Packaging Identity', 'Logo Design', 'Material Sourcing'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7EyNfKsDcc11C-DZ-2gBaMw9eT-cgfj_sfXQLwtW06NtJMQ-iBuRq4g1xa7hx5nt3MhFScwXu0xx1Rz22wX-FHUELmhorCdkSJ_merGLWeghlfKtk5eXwqw3KgCwUxE9eIeZyWdaWxBkEsIVdTHFz75PIL5-qN93yeJdawwxEW9aAyFZ6SYnnuPTkiVcmJTI7sMtrKYqa-XJ3OToGGrfzEOb46bWRt8KOUYEMaeEKMrNYNAn-f5ukcEKau1LUI2jOapcbcdm2CFU',
    year: '2024'
  },
  {
    id: 'project5',
    title: 'Elysium Furniture',
    category: 'Brand Identity',
    client: 'Elysium Living',
    description: 'A visual architecture project detailing premium interior design, bespoke typographic branding, and tactile metal/wood signage. Tailored for editorial presentation in architectural digests.',
    tags: ['Logo & Brand Mark', 'Signage Design', 'Visual System'],
    imageUrl: 'https://lh3.googleusercontent.com/aida/AP1WRLuW0FOqKlSkM5uGF5TSaYiQJXauZovivYZetvdYr6khDN5yGnb95_j95ecxUweWa5iG1zptwqQhkSqOzJIFeNFh8BXtiElr1ZJ_gU3gqJFiY0xhZhT_DHlB0Cdn1u2YU41krot_a4079AE4pJNKhGLg3XhA5G_4JNkTFCiEInGtVEiXcmUX00HvUZTWitiyfx_tbd_WK-mxBN5XDQWrzSQvlZ8c0IkOhfSmj5zSOwSkWhavXBvwW9zuXRo',
    year: '2024'
  },
  {
    id: 'project6',
    title: 'Lumi Skincare',
    category: 'Brand Identity',
    client: 'Lumi Sustainable Skincare',
    description: 'Minimalist brand expression featuring compostable container structures, organic line patterns, and warm cream surfaces that convey standard sensory calmness and natural luxury.',
    tags: ['Packaging Design', 'Identity System', 'Sustainability'],
    imageUrl: 'https://lh3.googleusercontent.com/aida/AP1WRLtTdT_fUfaS76OBgmgJQIv1tOLztejs3tKJUTG2ZR89Hx4G0ZsjvvUKYu4DNnAYPe2PyR0cpVlrT-fWFYYe8-ORFqjHtQsiRjRl2scvnTMPQ-bas94UJ5s0qHyzFKcbRH-A8KLilr-0vxugn044dnYXivr6AfmiLs7L_jli5dNM9xXt7PIEKmMc6mVuKi-TaFHF0kzaqR3aqOtNHYLqpxxwWT1JpUt2Crp0_-VUzhIWIG87ftv5rpYFLY8',
    year: '2023'
  },
  {
    id: 'project2',
    title: 'Echo Sound',
    category: 'Print & Editorial',
    client: 'Echo Music Productions',
    description: 'Visual identity and promotional materials for an independent outdoor music festival. The design utilizes deep, earthy tones and rigorous grid systems to ground the eclectic nature of the lineup.',
    tags: ['Festival Flyer', 'Poster Design', 'Typography'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEI8qBz6j9oQqR0y-hyaki2Lr6ISmh-3XRjOMTlh6f9bX6SI5xy4R_feY34IR8VAmJwgvA8OTCfs2jxcjVpoOoB8JQCGuRxsgbNpbkA7_CJNsryhRL1MZnm0wukP8_We8780iT0VA0jkw-5brKyf5CtvQR9n0vxd1ixP4VQEE70ONh1yTc0b9jYFkhvzosaQlK4hsXdN-nw-w1dYYnOuRThX-hrP0XE_iU4GcDn0F8h-ofcAYKstxLgisX7Xgh3pO9gPnDPGhmP5o',
    year: '2024'
  },
  {
    id: 'project4',
    title: 'Void Monograph',
    category: 'Print & Editorial',
    client: 'Gallery Void',
    description: 'A limited-run exhibition catalogue celebrating minimalist architecture. The layout treats negative space as a structural element, forcing the reader to slow down and engage with individual photographic works.',
    tags: ['Editorial Layout', 'Print Production', 'Art Direction'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDm3VfPkegOt21zrue0QJAKH2p-BwgeFpaIho6osAWSjEEbPVZK6T1uj9yxLA_30nshaTSAngFjcvfONpCK-8sh4CP_uXfcwI8KHnGTH6qEtisK03oapGrJAjFMAx8IUyqtJbgr6TLIZxwnkb46V-xVrsacH3NCUfquvYday_93AuVIvO9Y249_mvLhK5KMcz3KtWcrguKylckvEVe2fnRgggAJk9cIQqgElhiaXNPhRZTJXjuyTmf_5cc3Z6ArsIwBHB8_Kqt6XHI',
    year: '2024'
  },
  {
    id: 'project7',
    title: 'Art Exhibition',
    category: 'Print & Editorial',
    client: 'Contemporary Institute of Art',
    description: 'A striking structural poster featuring abstract graphic patterns on raw concrete canvas, blending geometrical layouts with terracotta and sage green inks.',
    tags: ['Poster Design', 'Curatorial Catalog', 'Print Layout'],
    imageUrl: 'https://lh3.googleusercontent.com/aida/AP1WRLvhN9NTI0xhYs3RJDGwti6e7JzI01AMl6ZpYVL0s1DRk8ifylUyVmcBUbwSaAT0Mk5jyXG0Hj6RiOxnB6Mv2g57T6USRzvzw8zYrm9X2stdQaaQ1-1n5k7b4rvtzgrhVwh_OGAxMH9NxtUftfGndIqD4z0tV-smQai3p5fYatS-iq30JA6guCzWm-lsTwd-JADw6pkj4zaZarV6j0atgbkv0VirftB0MtV0TXyg5YYKNf6gKit3g-Tr--k',
    year: '2024'
  },
  {
    id: 'project8',
    title: 'Harvest & Bloom',
    category: 'Print & Editorial',
    client: 'The Neighborhood Patch',
    description: 'An organic sensory invite featuring watercolor flora, fine line detailing, and uncoated textured stock. Infuses warmth, human nature, and community spirit.',
    tags: ['Event Flyer', 'Botanical Illustration', 'Tactile Print'],
    imageUrl: 'https://lh3.googleusercontent.com/aida/AP1WRLuT1-ec6yx-ew_VZngdMPS4F0QtoAF3E6W66CN7iFnlFTP03z1AZdlvAnIxN3SyfGmAz-w-uNXVVmETHoZoJxkQ_ynvTYjj-TnYVgkgK6gqMtT7rxnKyyweO9PsaDrxweypP66kPWkLDifW5TTpgyOhzETZdvmzjfaAetlBcRW5h3FVIzp1oFXq_aiF7Nai3EvPqbwigx_QIYcaI8qwa4ZmxJK_L1prnxX8jsjWamQwjCjugbu5ys9y9eU',
    year: '2023'
  }
];

export const CLIENTS_DATA: Client[] = [
  {
    name: 'Luxury Brand Co.',
    logoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5bdJVk4FWBQB_K_H6pEWuTvn2Q3aogTkNKB3-rjJzYYF0trjZFp9zLgrwyHYP_uaR9H_l5eY0gf06DZNKGFI2PqIPgYdJV1MUu52LN-n9smbHjmNJUr9748rlKheqLgzX5yVeup3-8kVd4QCAg0Amrs6_KR0Fz0bpS042xFQwee99gm_96uxZNQ0bfVNYppwwEXHd-dO0GtHP4u32Mg0SGaLD4rhiggQEi_UbPIZKWdx2OLuoJvPj6xCV3TulSGB9o_JspDv8Wns',
    altText: 'Typographic logo for luxury brand'
  },
  {
    name: 'Atelier Architecture',
    logoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARM3_LXU-qWEDjT3ulsCbffJvfWMd_OJBzYNdy17kXOjPOAPjRd44K3e6mRqAP2nweDYu430xYwiMsOpIN8IeUlE6uvIy6B7QJ0U3qfKwn65JeNEcRzyY2abAsQr2RA58qyJT9Gi7jnmQAEXI1QUdn3McHRA95xud2Ow9LvSaA0NwlXNJudaTLMLGt9-7y_vzDB0YHWB75GyA2vkXadXOXLM_lEx1GUA3gSiA2DE5aDCVYTSjJ4sw0Rx0gLgZnpkdYOezME-yW5FQ',
    altText: 'Geometric architecture logo'
  },
  {
    name: 'Boutique Gallery',
    logoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcgF1vGoiXLvAwIcHFNv0GzY_MkRTGptHUdBAGcclIZx_LVP5vwL_vEUfOashAom6lS-KUMzPrCNKE6-HTtrMPCzWyjpmTXivmmqqFBSgcerALmThqAJH8yIUmDjmLeXgyB6s00KlW5Xyq4DE-9ZMny_vw3t6FAm-e4pSSsZejvPxtvWcvx0BAm9qTW3MWX-NTvhsX5Mmj2Tre3JSiqBNQY8LYj5-OqWwVYnS15t18JioHqXBY-vDxxazHmU76dMm2aTag0P5-vZI',
    altText: 'Classic monogram logo'
  },
  {
    name: 'Interiors Studio',
    logoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwQnssrh-gnLVT79ngyHc1PSERFUlxr6I7TuBLebgoslNYkgxIrMTcpvYGf31-mmqg4EaHXWBhyEwpEGwiGqVjBmmxorf-vrb2tCE8CjhX7qbwgz55lGtHzz-OW1KHjCqyaPFMpT2k6ZCrZXC4KHn7_L6JoNSY_47cqrvcHIyGCz4mbtjyPIhgOnyzv92Hxx8XtwrCqLU6Hc60QDgrwOPDRvXe7R8Nw3eOL4G3pPgxIx3raCBHej_210ejGrbIL_043szYW2DRx1k',
    altText: 'Swiss wordmark logo'
  },
  {
    name: 'Niche Perfumer',
    logoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmoOV1tqT9WJ0r6ZRjDzAV0AZedJ-15eOhFMg7LmjVgcgtJhadtdWXIZxKhDRrGDecpxB22qT8k-8sg0dVzaX8H71esluAcRQLjrLAiI9Jd6Me7-qGv5Z25tjU0JuRrEDz-EHRkr98ojg2HEDTemESwiDC0gQsWqvD8ksqgH-c5x972Oy35Hu0Wp9EwJtN7hLAa3DJP6a0TVZCmESjwp4pTEdjuWeAdHGXP9BnsWlgb6-o0vEwYf92ZCufosGs51m8w34aKTkBbgU',
    altText: 'Fluid perfume brand logo'
  },
  {
    name: 'Cultural Institute',
    logoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPrcNnwbu7uJpVcvofmtIL2Ee5xhZOe9-j8f5H7J7KDi8Ui07h-uApUBZa7UW4DYyJzl4OcOsNK7WrT-GaANP2cVRYUFcoSVN85u1x5i-qBtErOUd60yDp5goUt4h7RLPbxHI0H5YT8iIkcoRCBkUXKV9qZoxDl9PaTK5fRsMZrBkGQzx-zTlTbC_uYBpRUtkzvjoupSi-SKmPbYT9Yv-4Q9QeW7JtcO2r_oOFblxobu2JK47nSL04l9al7dAqWMDN9312J2qPpWI',
    altText: 'Stark minimalist crest logo'
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'brand-identity',
    icon: 'Compass', // Named Lucide icon
    title: 'Brand Identity',
    description: 'Comprehensive visual systems, naming, and strategic positioning. We build identities that act as enduring anchors for cultural and commercial brands.',
    steps: ['01 / Strategy', '02 / Visual Language', '03 / Guidelines']
  },
  {
    id: 'print-editorial',
    icon: 'BookOpen', // Named Lucide icon
    title: 'Print & Editorial',
    description: 'Physical manifestations of brand narratives. We specialize in monographs, packaging, and exhibition collateral that demand tactile engagement.',
    steps: ['01 / Book Design', '02 / Packaging', '03 / Exhibition']
  },
  {
    id: 'digital-design',
    icon: 'Monitor', // Named Lucide icon
    title: 'Digital Design',
    description: 'Immersive web experiences and digital platforms. Translating tactile aesthetics into responsive, performant digital environments.',
    steps: ['01 / UX/UI Design', '02 / Web Development', '03 / Digital Systems']
  }
];
