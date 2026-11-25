// 発表を追加するときは category と日本語の記録を1件追加。国際会議のみ英語 en も記入します。
const presentations = [
  {
    "category": "international",
    "ja": "Takayuki Yokoyama, Yasuhiro Tada, “Strain-induced Quantum Oscillation of Majorana Fermi Surfaces in a Kitaev Spin Liquid”, Exotic Quantum Phases in Equilibrium and Driven Matter（Tanzania）, 2026年7月（査読あり）",
    "en": "Takayuki Yokoyama, Yasuhiro Tada, “Strain-induced Quantum Oscillation of Majorana Fermi Surfaces in a Kitaev Spin Liquid”, Exotic Quantum Phases in Equilibrium and Driven Matter (Tanzania), July 2026 (peer-reviewed poster)"
  },
  {
    "category": "international",
    "ja": "Takayuki Yokoyama, Yasuhiro Tada, “Majorana Quantum Oscillations in a Strained Kitaev Spin Liquid”, 2nd Japan-Germany Workshop Correlated and Topological Quantum Materials（北海道）, 2026年3月（査読あり）",
    "en": "Takayuki Yokoyama, Yasuhiro Tada, “Majorana Quantum Oscillations in a Strained Kitaev Spin Liquid”, 2nd Japan-Germany Workshop Correlated and Topological Quantum Materials (Hokkaido, Japan), March 2026 (peer-reviewed poster)"
  },
  {
    "category": "international",
    "ja": "Takayuki Yokoyama, Yasuhiro Tada, “Quantized polarization amplitude of quantum spin liquids on an infinite cylinder”, New Frontiers of Geometry and Topology in Condensed Matter Physics（千葉）, 2026年1月",
    "en": "Takayuki Yokoyama, Yasuhiro Tada, “Quantized polarization amplitude of quantum spin liquids on an infinite cylinder”, New Frontiers of Geometry and Topology in Condensed Matter Physics (Chiba, Japan), January 2026 (poster)"
  },
  {
    "category": "international",
    "ja": "Takayuki Yokoyama, Yasuhiro Tada, “Enhancement of Néel order in the J1-J2 square model by gauge fluxes”, The 3rd young researchers' workshop of the Extreme Universe Collaboration & The 6th Extreme Universe School（北海道）, 2024年9月",
    "en": "Takayuki Yokoyama, Yasuhiro Tada, “Enhancement of Néel order in the J1-J2 square model by gauge fluxes”, The 3rd Young Researchers' Workshop of the Extreme Universe Collaboration & The 6th Extreme Universe School (Hokkaido, Japan), September 2024 (poster)"
  },
  {
    "category": "domestic_oral",
    "ja": "横山貴之、多田靖啓「マヨラナフェルミ面を持つキタエフスピン液体における歪み誘起量子振動 」 日本物理学会第81回年次大会（東大駒場）, 2026年9月　学生優秀発表賞"
  },
  {
    "category": "domestic_oral",
    "ja": "横山貴之、多田靖啓「強相関ボーズ超流動体におけるType-I, II的な磁場応答」 第8回冷却原子研究会「アトムの会」（神奈川）, 2026年8月　学生優秀発表賞"
  },
  {
    "category": "domestic_oral",
    "ja": "横山貴之、多田靖啓「無限に長い準一次元系における量子化分極とその応用」日本物理学会 2026年春季大会（オンライン）, 2026年3月　学生優秀発表賞"
  },
  {
    "category": "domestic_oral",
    "ja": "横山貴之、多田靖啓「スピン超流動体における Type-I 及び Type-II 的な磁束応答と格子構造」第31回渦糸物理ワークショップ（東大柏の葉）, 2025年12月"
  },
  {
    "category": "domestic_oral",
    "ja": "横山貴之、多田靖啓「フラストレート磁性体におけるひねり演算子とエネルギーギャップ」第21回量子スピン系研究会（山口）, 2025年12月"
  },
  {
    "category": "domestic_oral",
    "ja": "横山貴之、多田靖啓「スピン超流動体における Type-I 及び Type-II 的な磁束応答と格子構造」日本物理学会第80回年次大会（広島大学）, 2025年9月"
  },
  {
    "category": "domestic_oral",
    "ja": "Takayuki Yokoyama, Yasuhiro Tada, “Geometric frustration and flux responses in spin-superfluid states”, 基研研究会「高次にもつれた量子相探索の展開」（京大基研）, 2025年9月"
  },
  {
    "category": "domestic_oral",
    "ja": "横山貴之、多田靖啓「S=1/2 三角格子ハイゼンベルグモデルのスピン超固体相における擬磁場応答」日本物理学会 2025年春季大会（オンライン）, 2025年3月"
  },
  {
    "category": "domestic_oral",
    "ja": "横山貴之、多田靖啓「量子スピン液体の U(1) ゲージフラックスに対する安定性」日本物理学会第79回年次大会（北海道大学）, 2024年9月"
  },
  {
    "category": "domestic_oral",
    "ja": "横山貴之、多田靖啓「量子スピン液体におけるU(1)ゲージ場応答」第69回物性若手夏の学校（愛知）, 2024年8月"
  },
  {
    "category": "domestic_oral",
    "ja": "横山貴之、多田靖啓「正方格子 J1-J2 モデルにおけるゲージフラックスの効果」日本物理学会 2024年春季大会（オンライン）, 2024年3月"
  },
  {
    "category": "domestic_poster",
    "ja": "横山貴之、多田靖啓「フラックス中の量子スピン系における異常なmagnetic catalysis」 計算物理春の学校（沖縄）, 2025年3月"
  },
  {
    "category": "domestic_poster",
    "ja": "横山貴之、多田靖啓「マグノンランダウ準位とNeel反強磁性状態の安定性」第69回物性若手夏の学校（愛知）, 2024年8月"
  }
];
