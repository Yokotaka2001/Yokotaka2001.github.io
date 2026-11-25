// 論文を追加するときは、この配列に1件追加してください。
// 掲載後は kind を 'journal' に変更し、雑誌へのリンクを links に追加します。
const publications = [
  {
    kind: 'journal',
    year: 2026,
    authors: 'Takayuki Yokoyama, Yasuhiro Tada',
    title: 'Artificial-gauge-field–driven reentrant charge-density-wave phase in a three-leg Bose-Hubbard ladder',
    links: [
      { label: 'PRA 114, 023328 (2026)', url: 'https://link.aps.org/pdf/10.1103/t1c6-cjqp' },
      { label: 'arXiv:2604.11169', url: 'https://arxiv.org/abs/2604.11169' },
    ],
  },
  {
    kind: 'journal',
    year: 2026,
    authors: 'Takayuki Yokoyama, Yasuhiro Tada',
    title: 'Diagnosing energy gap in quantum spin liquids via polarization amplitude',
    links: [
      { label: 'PRB 113, 174439 (2026)', url: 'https://journals.aps.org/prb/abstract/10.1103/nrbk-mqgz' },
      { label: 'arXiv:2602.12990', url: 'https://arxiv.org/abs/2602.12990' },
    ],
  },
  {
    kind: 'journal',
    year: 2025,
    authors: 'Takayuki Yokoyama, Yasuhiro Tada',
    title: 'Anomalous enhancement of Néel order in the S=1/2 square lattice Heisenberg model under fictitious magnetic field',
    links: [
      { label: 'PRB 111, 064415 (2025)', url: 'https://journals.aps.org/prb/abstract/10.1103/PhysRevB.111.064415' },
      { label: 'arXiv:2412.01435', url: 'https://arxiv.org/abs/2412.01435' },
    ],
  },
  {
    kind: 'preprint',
    year: 2026,
    authors: 'Takayuki Yokoyama, Yasuhiro Tada',
    title: 'Local wave-packet spectroscopy of the Drude weight in Tomonaga-Luttinger liquids',
    links: [{ label: 'arXiv:2610.22257', url: 'https://arxiv.org/abs/2610.22257' }],
  },
  {
    kind: 'preprint',
    year: 2025,
    authors: 'Takayuki Yokoyama, Yasuhiro Tada',
    title: 'Strain-induced quantum oscillation in Kitaev spin liquid with Majorana Fermi surface',
    links: [{ label: 'arXiv:2512.12570', url: 'https://arxiv.org/abs/2512.12570' }],
  },
];
