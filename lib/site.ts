export const site = {
  conferenceName: "IPNaCS–IPoPS 2026",
  description:
    "Connected Innovation: Digital Transformation in Wellness, Longevity and Therapy",
} as const;

export const schedule = [
  {
    key: "day-1",
    label: "Day 1",
    date: "Thursday, 13 August 2026",
    items: [
      {
        time: "08:00–09:00",
        title: "Registration",
      },
      {
        time: "09:00–09:30",
        title: "Opening Ceremony",
        descriptionLines: [
          "Doa Recital and Welcome Address by the Dean, Faculty of Pharmacy",
        ],
      },
      {
        time: "09:30–10:00",
        title: "Opening Speech",
        descriptionLines: [
          "Opening Speech by the Vice Chancellor of Universiti Teknologi MARA (UiTM)",
        ],
      },
      {
        time: "10:00–11:00",
        title: "Tea Break & Poster Session",
      },
      {
        time: "11:00–12:00",
        title: "Keynote Lecture",
        descriptionLines: [
          "Dr Azuana Ramli, Ministry of Health Malaysia",
          "_Stewarding Connected Innovation: Advancing Digital Transformation Across the Pharmaceutical Ecosystem_",
        ],
      },
      {
        time: "12:00–12:50",
        title: "Plenary Session I",
        descriptionLines: [
          "Prof Dr Suzana Shahar, Universiti Kebangsaan Malaysia",
          "_Neuroprotective Model for Healthy Aging: The Value of Nutraceutical and Lifestyle Modification_",
        ],
      },
      {
        time: "13:00–14:00",
        title: "Lunch & Networking",
      },
      {
        time: "14:00–14:50",
        title: "Parallel Plenary Sessions",
        tracks: [
          {
            label: "Plenary Session II · Hall A",
            name: "Prof Dr Rohana Abd Ghani",
            role: "Universiti Teknologi MARA (UiTM)",
            title:
              "_Digital Frontier in Obesity Management: Leveraging Digital Transformation for Better Outcomes_",
          },
          {
            label: "Plenary Session III · Hall B",
            name: "Prof Dr Kazunori Akimoto",
            role:
              "Faculty of Pharmaceutical Sciences, Tokyo University of Science (TUS)",
            title:
              "_Data-Driven Integrative Cancer Research: Bridging Computational Discovery, Molecular Mechanisms, and Clinical Outcomes_",
          },
        ],
      },
      {
        time: "15:00–15:30",
        title: "Parallel Invited Talks (Tracks 1–4)",
        tracks: [
          {
            label: "Track 1",
            name: "Dr Ismat binti Mohd Sulaiman",
            role:
              "Ketua Penolong Pengarah Kanan, Pusat Informatik Kesihatan",
            title:
              "_Connected Data, Transforming Pharma: Lessons from MyHDW and AI Potential_",
          },
          {
            label: "Track 2",
            name: "Associate Professor Dr Kosuke Kusamori",
            role: "Tokyo University of Science (TUS)",
            title:
              "_Regenerative Cell-Based Therapy for Lymph Node Reconstruction_",
          },
          {
            label: "Track 3",
            name: "Prof Wong Tin Wui",
            role: "Universiti Teknologi MARA (UiTM)",
            title:
              "_Natural Product Discovery and Delivery: Modulation of the Gut–Liver Axis for Hepatic Diseases_",
          },
          {
            label: "Track 4",
            name: "Associate Professor Ho Ket Li",
            role: "International Medical University (IMU)",
            title:
              "_AI Revolution: Transformation of Health Education_",
          },
        ],
      },
      {
        time: "15:30–17:00",
        title: "Oral Presentations",
        oralTracks: [
          {
            key: "track-1",
            label: "Track 1",
            name: "Pharmacy & Digital Health / Policy, Regulation & Ethics",
            location: "Track 1",
            presentations: [
              {
                id: "OP049",
                title:
                  "A Mobile Health RCT on Blood Pressure Control in Hypertension",
                track: "Pharmacy & Digital Health",
              },
              {
                id: "OP059",
                title:
                  "Patient-Reported Instruments for Assessing Inhaler Adherence in Asthma and COPD in Low- and Middle-Income Countries: A Scoping Review",
                track: "Pharmacy & Digital Health",
              },
              {
                id: "OP111",
                title:
                  "Efficacy and Durability of Pharmacist-Led Diabetes Therapy Management Interventions on Medication Adherence, Glycemic Control, and Quality of Life in Outpatients with Type 2 Diabetes Mellitus: A Systematic Review of Randomized Controlled Trials",
                track: "Pharmacy & Digital Health",
              },
              {
                id: "OP024",
                title:
                  "REGULATORY GOVERNANCE OF OVER-THE-COUNTER MEDICINE DISTRIBUTION IN NON-PHARMACY RETAIL SETTINGS: A COMPARATIVE POLICY ANALYSIS OF MALAYSIA AND INDONESIA",
                track: "Policy, Regulation & Ethics",
              },
              {
                id: "OP055",
                title:
                  "DOES HEALTH INSURANCE STATUS INFLUENCE PATIENT SATISFACTION WITH PHARMACEUTICAL SERVICES? A SERVQUAL-BASED STUDY AMONG INDONESIAN OUTPATIENTS",
                track: "Policy, Regulation & Ethics",
              },
              {
                id: "OP056",
                title:
                  "TUBERCULOSIS KNOWLEDGE, ATTITUDE, AND PRACTICE AMONG COMMUNITY PHARMACISTS IN A HIGH-BURDEN TUBERCULOSIS SETTING IN INDONESIA",
                track: "Policy, Regulation & Ethics",
              },
            ],
          },
          {
            key: "track-2",
            label: "Track 2",
            name: "Pharmacology & Precision Medicine",
            location: "Track 2",
            presentations: [
              {
                id: "OP001",
                title:
                  "INTEGRATING NETWORK PHARMACOLOGY, VIRTUAL SCREENING AND MOLECULAR DYNAMICS SIMULATIONS TO IDENTIFY POTENTIAL DUAL-TARGETING MEDICINAL COMPOUNDS FOR PERIODONTITIS AND CORONARY ARTERY DISEASE",
                track: "Pharmacology & Precision Medicine",
              },
              {
                id: "OP006",
                title:
                  "Glycemic, Metabolic, and Safety Outcomes of Metformin Extended-Release (XR) in Type 2 Diabetes Mellitus",
                track: "Pharmacology & Precision Medicine",
              },
              {
                id: "OP022",
                title:
                  "Nuclear PKCλ promotes cervical cancer progression through a TCF7L2-dependent transcriptional program",
                track: "Pharmacology & Precision Medicine",
              },
              {
                id: "OP033",
                title:
                  "Mechanical stimuli and mechanosensitive ion channels modulate radiation-induced cellular responses",
                track: "Pharmacology & Precision Medicine",
              },
              {
                id: "OP045",
                title:
                  "Combined PKCζ, CTNNBIP1, and ALDH1A3 expression is associated with poor outcomes in endocrine therapy-treated luminal B breast cancer",
                track: "Pharmacology & Precision Medicine",
              },
              {
                id: "OP054",
                title:
                  "Advances in Physiologically Based Biopharmaceutics Modeling: Toward Virtual Bioequivalence Simulations",
                track: "Pharmacology & Precision Medicine",
              },
            ],
          },
          {
            key: "track-3",
            label: "Track 3",
            name: "Pharmaceutical Technology / Pharmaceutical Chemistry",
            location: "Track 3",
            presentations: [
              {
                id: "OP029",
                title:
                  "Rapidly Dissolving Microneedle Patch Integrated with Benidipine-Loaded Transethosomes for Enhanced Transdermal Delivery and Bioavailability",
                track: "Pharmaceutical Technology",
              },
              {
                id: "OP037",
                title:
                  "Physicochemical and microbiological stability of specialised parenteral nutrition formulations for patients at risk of refeeding syndrome",
                track: "Pharmaceutical Technology",
              },
              {
                id: "OP040",
                title:
                  "Microalgae-derived Extracellular Vesicles as Sustainable Nanocarriers : Advances in Production, Isolation and Biomedical Applications",
                track: "Pharmaceutical Technology",
              },
              {
                id: "OP023",
                title:
                  "Guiding Peptide Nanonet Formation and Antibacterial Activity through Aromatic Hydrophobicity Engineering for Sepsis Control",
                track: "Pharmaceutical Technology",
              },
              {
                id: "OP067",
                title:
                  "Development and Optimization of Alcaftadine Ocular In Situ Gel for Sustained Drug Delivery Employing a 3² Full Factorial Design",
                track: "Pharmaceutical Technology",
              },
              {
                id: "OP061",
                title:
                  "Synthesis of three 2’-aminomethoxy chalcone derivatives and in vitro hemin polymerization inhibition activity testing",
                track: "Pharmaceutical Chemistry",
              },
            ],
          },
          {
            key: "track-4",
            label: "Track 4",
            name: "Pharmaceutical Chemistry",
            location: "Track 4",
            presentations: [
              {
                id: "OP004",
                title:
                  "ANTI-METASTATIC EFFECTS OF ANDROGRAPHOLIDE AND ITS DERIVATIVES IN TRIPLE-NEGATIVE BREAST CANCER (MDA-MB-231)",
                track: "Pharmaceutical Chemistry",
              },
              {
                id: "OP005",
                title:
                  "BIOTRANSFORMATION OF TESTOSTERONE BY TROPICAL FUNGI: PRELIMINARY ANALYTICAL PROFILING AND POTENTIAL NEUROPROTECTIVE APPLICATIONS",
                track: "Pharmaceutical Chemistry",
              },
              {
                id: "OP007",
                title: "Drug Discovery and Natural Products: Microbes as Hidden Architects",
                track: "Pharmaceutical Chemistry",
              },
              {
                id: "OP014",
                title:
                  "Green Synthesis of Copper Oxide Nanoparticles using Annona muricata Leaf Extract: Optimization, Characterization and Antimicrobial Activity",
                track: "Pharmaceutical Chemistry",
              },
              {
                id: "OP019",
                title:
                  "Technological Acceptability of a Predictive Chemical Toxicity Software for Science-Related Undergraduate Programs in a Catholic School in Davao City",
                track: "Pharmaceutical Chemistry",
              },
              {
                id: "OP036",
                title:
                  "COMPUTATIONAL INVESTIGATION OF KAEMFEROL, MYRICETIN, CATECHIN, MANGIFERIN, AND NARINGIN FOR ANTIMALARIAL DRUG DEVELOPMENT",
                track: "Pharmaceutical Chemistry",
              },
            ],
          },
        ],
      },
      {
        time: "17:00–18:30",
        title: "Hi-Tea & Networking",
      },
    ],
  },
  {
    key: "day-2",
    label: "Day 2",
    date: "Friday, 14 August 2026",
    items: [
      {
        time: "09:00–09:50",
        title: "Parallel Plenary Sessions",
        tracks: [
          {
            label: "Plenary Session IV · Hall A",
            name: "Prof Dr Varisa Pongrakhananon",
            role: "Chulalongkorn University",
            title:
              "_Reprogramming Cancer through Integrative Omics and Computational Pharmacology: From Biomarker Discovery to Precision Targeting of Cellular Signaling_",
          },
          {
            label: "Plenary Session V · Hall B",
            name: "Associate Professor Ee Pui Lai, Rachel",
            role:
              "Department of Pharmacy and Pharmaceutical Sciences, National University of Singapore",
            title:
              "_Precision Design and Programming Trap-and-Kill Peptide Nanonets for Novel Antimicrobial Therapy_",
          },
        ],
      },
      {
        time: "10:00–10:30",
        title: "Tea Break & Poster Session",
      },
      {
        time: "10:30–11:00",
        title: "Parallel Invited Talks (Tracks 5–8)",
        tracks: [
          {
            label: "Track 5",
            name: "Associate Professor Dr Shazia Jamshed",
            role: "International Medical University (IMU)",
            title:
              "_Applications of Digital Health: Current Insights and Future Directions_",
          },
          {
            label: "Track 6",
            name: "Prof Dr Teh Lay Kek",
            role: "Universiti Teknologi MARA (UiTM)",
            title:
              "_From Pharmacogenomics to Pharmacophytogenomics: Diversity-Driven Pathways in Precision Health_",
          },
          {
            label: "Track 7",
            name: "Prof Dr Takehisa Hanawa",
            role: "Tokyo University of Science (TUS)",
            title:
              "_Pharmaceutical Technology for the Improvement of the Bioavailability of Drugs_",
          },
          {
            label: "Track 8",
            name: "Prof Aleth Therese Dacanay",
            role: "Dean, Faculty of Pharmacy, University of Santo Tomas",
            title:
              "_From Classroom to Connected Care: Digital Transformation of Pharmacy Education and Practice_",
          },
        ],
      },
      {
        time: "11:00–12:15",
        title: "Oral Presentations",
        oralTracks: [
          {
            key: "track-5",
            label: "Track 5",
            name: "Pharmacy & Digital Health / Policy, Regulation & Ethics",
            location: "Track 5",
            presentations: [
              {
                id: "OP083",
                title:
                  "Bridging the Adherence Gap in Tuberculosis Care: The Emerging Role of Pharmacist-Led Interventions",
                track: "Policy, Regulation & Ethics",
              },
              {
                id: "OP088",
                title:
                  "Analysis of Anti-Tuberculosis Medication Adherence and Its Impact on Clinical Outcome Achievement Among Pulmonary Tuberculosis Patients in Primary Health Care Centers in Pekanbaru, Riau, Indonesia",
                track: "Policy, Regulation & Ethics",
              },
              {
                id: "OP097",
                title:
                  "GENETIC MODIFICATION: A LEGAL AND ETHICAL PERSPECTIVE",
                track: "Policy, Regulation & Ethics",
              },
              {
                id: "OP060",
                title:
                  "EVALUATION OF ANTICOAGULAN IN COVID-19 PATIENTS AT A HOSPITAL IN SIAK DISTRICT",
                track: "Pharmacy & Digital Health",
              },
              {
                id: "OP009",
                title:
                  "Trustworthy renal decision support in the artificial intelligence era: reducing alert burden through the PANDU pipeline",
                track: "Pharmacy & Digital Health",
              },
            ],
          },
          {
            key: "track-6",
            label: "Track 6",
            name: "Pharmaceutical Chemistry",
            location: "Track 6",
            presentations: [
              {
                id: "OP038",
                title:
                  "METABOLIC FINGERPRINTING OF MEDICINAL PLANTS AND FUNGI: NMR-BASED STRATEGIES FOR UNCOVERING NEUROTHERAPEUTIC AGENTS",
                track: "Pharmaceutical Chemistry",
              },
              {
                id: "OP039",
                title:
                  "Design and Synthesis of Antiviral Small Molecule Drugs Inspired by Antimalarial Drugs",
                track: "Pharmaceutical Chemistry",
              },
              {
                id: "OP048",
                title:
                  "Synthesis of Macrocyclic Oligosaccharides by One-pot Glycosylation of Glycosyl Donor/Acceptors and Complex with Metal Cations",
                track: "Pharmaceutical Chemistry",
              },
              {
                id: "OP050",
                title:
                  "Phosphate Monoester Hydrolysis by Metallosupramolecular Phosphatases Functionalized with Lewis Acidic Moieties in Two-Phase Solvent Systems",
                track: "Pharmaceutical Chemistry",
              },
              {
                id: "OP069",
                title:
                  "AI Techniques for Water Quality Monitoring and River Pollution Control",
                track: "Pharmaceutical Chemistry",
              },
              {
                id: "P100",
                title:
                  "FROM OCEAN TO ONCOLOGY: ML-DRIVEN DISCOVERY OF MARINE PIM1 KINASE INHIBITORS WITH MULTISCALE VALIDATION",
                track: "Pharmaceutical Chemistry",
              },
            ],
          },
          {
            key: "track-7",
            label: "Track 7",
            name: "Pharmaceutical Technology / Cosmetic Science & Innovation",
            location: "Track 7",
            presentations: [
              {
                id: "OP002",
                title:
                  "Development of Nanoemulgel Containing Ixora coccinea Leaves Extract for Antioxidant Property",
                track: "Pharmaceutical Technology",
              },
              {
                id: "OP010",
                title:
                  "Fish oil alginate microspheres produced via wave-based drop-on-demand jetting electrospray: Improving stability and palatability",
                track: "Pharmaceutical Technology",
              },
              {
                id: "OP017",
                title:
                  "DEVELOPMENT AND OPTIMISATION OF A MUCOADHESIVE IN SITU NASAL GEL OF BUDESONIDE FOR ENHANCED INTRANASAL DELIVERY",
                track: "Pharmaceutical Technology",
              },
              {
                id: "OP028",
                title:
                  "DEVELOPMENT AND CHARACTERIZATION OF PREDNISOLONE-LOADED SOLID LIPID NANOPARTICLES FOR TRANSDERMAL APPLICATION",
                track: "Pharmaceutical Technology",
              },
              {
                id: "OP003",
                title:
                  "Facial Pigmentation in Bangladeshi Adults: Prevalence and Associated Factors",
                track: "Cosmetic Science & Innovation",
              },
              {
                id: "OP035",
                title:
                  "FORMULATION DEVELOPMENT AND STABILITY EVALUATION OF AN ASTAXANTHIN NANOEMULSION LOTION",
                track: "Cosmetic Science & Innovation",
              },
            ],
          },
          {
            key: "track-8",
            label: "Track 8",
            name: "Regenerative & Translational Medicine / Pharmacology & Precision Medicine / Nutraceutical Science",
            location: "Track 8",
            presentations: [
              {
                id: "OP066",
                title:
                  "Lymph nodes provide an immune-regulatory niche for islet organoid engraftment and endocrine function",
                track: "Regenerative & Translational Medicine",
              },
              {
                id: "OP103",
                title:
                  "Beyond Glutathione S-Transferase: A Novel Sulfide-Mediated Pathway for cis Urocanic Acid Conjugation",
                track: "Pharmacology & Precision Medicine",
              },
              {
                id: "OP021",
                title:
                  "Whole-culture–derived postbiotics from local lactic acid bacteria exhibit antimicrobial and skin barrier–protective effects",
                track: "Nutraceutical Science",
              },
              {
                id: "OP068",
                title:
                  "Pharmacognostic Study, Phytochemical Screening and Formulation Development from Achras Sapota Bark Extract for Wound Healing",
                track: "Nutraceutical Science",
              },
            ],
          },
        ],
      },
      {
        time: "12:30–14:30",
        title: "Lunch & Networking",
      },
      {
        time: "14:30–14:45",
        title: "Registration",
      },
      {
        time: "14:45–16:30",
        title: "Closing Plenary & Professorial Lecture",
        descriptionLines: [
          "Prof Dr Kalavathy Ramasamy",
          "_Listen to Your Gut_",
        ],
      },
      {
        time: "16:30–17:00",
        title: "Tea Break",
      },
      {
        time: "17:00–17:30",
        title: "Prize-Giving",
        descriptionLines: [
          "Awards for Best Oral & Poster Presentations and Collaborator Recognition",
        ],
      },
      {
        time: "17:30–18:00",
        title: "Closing Remarks",
        descriptionLines: ["Next Steps & Farewell"],
      },
    ],
  },
] as const;