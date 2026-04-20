export const site = {
  conferenceName: "IPNaCS–IPoPS 2026",
  description:
    "Connected Innovation: Digital Transformation in Wellness, Longevity and Therapy",
} as const;

export const schedule = [
  {
    key: "day-1",
    label: "Day 1",
    date: "13 August 2026",
    items: [
      { time: "08:00 - 09:00", title: "Registration" },

      {
        time: "09:00 - 10:00",
        title: "Opening Ceremony",
        descriptionLines: [
          "Doa recital and welcome address by the Dean, Faculty of Pharmacy",
          "Opening speech by the Vice Chancellor, Universiti Teknologi MARA (UiTM)",
        ],
      },

      { time: "10:00 - 11:00", title: "Tea Break and Poster Session" },

      {
        time: "11:00 - 12:00",
        title: "Keynote Lecture",
        descriptionLines: [
          "Dr Azuana Ramli",
          "Title: _TBC_",
        ],
      },

      {
        time: "12:00 - 12:50",
        title: "Plenary Session I",
        descriptionLines: [
          "Prof. Dr. Suzana Shahar",
          "Title: _Nutraceuticals and Personalised Nutrition_",
        ],
      },

      { time: "13:00 - 14:00", title: "Lunch and Networking" },

      {
        time: "14:00 - 14:50",
        title: "Parallel Plenary Sessions",
        tracks: [
          {
            label: "Hall A",
            name: "Prof Dr. Varisa Pongrakhananon",
            role: "Chulalongkorn University",
            title: "_TBC_",
          },
          {
            label: "Hall B",
            name: "Prof Dr. Kazunori Akimoto",
            role:
              "Professor, Faculty of Pharmaceutical Sciences, Tokyo University of Science (TUS)",
            title: "_TBC_",
          },
        ],
      },

      {
        time: "15:00 - 15:30",
        title: "Parallel Invited Talks (Tracks 1–4)",
        tracks: [
          {
            label: "Track 1",
            name: "AP Dr Shazia Jamshed",
            role: "IMU University",
            title:
              "_Applications of Digital Health: Current Insights and Future Directions_",
          },
          {
            label: "Track 2",
            name: "AP Dr Kosuke Kusamori",
            role: "Tokyo University of Science (TUS)",
            title: "_TBC_",
          },
          {
            label: "Track 3",
            name: "Prof Wong Tin Wui",
            role: "Universiti Teknologi MARA (UiTM)",
            title:
              "_Natural product discovery and delivery: Modulation of gut-liver axis for hepatic diseases_",
          },
          {
            label: "Track 4",
            name: "TBC",
            role: "TBC",
            title: "_TBC_",
          },
        ],
      },

      { time: "15:30 - 15:45", title: "Oral Presentation 1" },
      { time: "15:45 - 16:00", title: "Oral Presentation 2" },
      { time: "16:00 - 16:15", title: "Oral Presentation 3" },
      { time: "16:15 - 16:30", title: "Oral Presentation 4" },
      { time: "16:30 - 16:45", title: "Oral Presentation 5" },

      { time: "17:00 - 18:30", title: "Tea Break and Networking" },

      {
        time: "19:30 - 22:30",
        title: "Gala Dinner",
        descriptionLines: [
          "25th Anniversary Celebration",
          "Cultural performances",
          "Networking",
        ],
      },
    ],
  },

  {
    key: "day-2",
    label: "Day 2",
    date: "14 August 2026",
    items: [
      {
        time: "09:00 - 09:50",
        title: "Parallel Plenary Sessions",
        tracks: [
          {
            label: "Hall A",
            name: "Prof Dr Rohana Abd Ghani",
            role:
              "Consultant Endocrinologist and Professor of Medicine, Faculty of Medicine, UiTM",
            title:
              "_Digital Frontier in Obesity Management: Leveraging Digital Transformation for Better Outcomes_",
          },
          {
            label: "Hall B",
            name: "Associate Professor Ee Pui Lai, Rachel",
            role:
              "Department of Pharmacy and Pharmaceutical Sciences, National University of Singapore",
            title:
              "_Precision Design and Programming Trap-and-Kill Peptide Nanonets for Novel Antimicrobial Therapy_",
          },
        ],
      },

      { time: "10:00 - 10:30", title: "Tea Break and Poster Session" },

      {
        time: "10:30 - 11:00",
        title: "Parallel Invited Talks (Tracks 5–8)",
        tracks: [
          {
            label: "Track 5",
            name: "Dr 'Ismat binti Mohd Sulaiman",
            role:
              "Ketua Penolong Pengarah Kanan, Pusat Informatik Kesihatan",
            title:
              "_Connected data, transforming pharma: Lessons from MyHDW and AI potential_",
          },
          {
            label: "Track 6",
            name: "Prof. Teh",
            role: "UiTM",
            title:
              "_From Pharmacogenomics to Pharmacophytogenomics: Diversity Driven Pathways in Precision Health_",
          },
          {
            label: "Track 7",
            name: "Prof Dr. Takehisa Hanawa",
            role: "TUS",
            title:
              "_Pharmaceutical Technology for the Improvement of the Bioavailability of Drugs_",
          },
          {
            label: "Track 8",
            name: "Prof. Aleth Therese Dacanay",
            role: "Dean, Faculty of Pharmacy, University of Santo Tomas",
            title:
              "_From Classroom to Connected Care: Digital Transformation of Pharmacy Education and Practice_",
          },
        ],
      },

      { time: "11:00 - 11:15", title: "Oral Presentation 1" },
      { time: "11:15 - 11:30", title: "Oral Presentation 2" },
      { time: "11:30 - 11:45", title: "Oral Presentation 3" },
      { time: "11:45 - 12:00", title: "Oral Presentation 4" },
      { time: "12:00 - 12:15", title: "Oral Presentation 5" },

      { time: "12:30 - 14:45", title: "Lunch and Networking" },

      {
        time: "14:45 - 16:30",
        title: "Closing Plenary",
        descriptionLines: [
          "Professorial Lecture by Prof Dr Kalavathy Ramasamy",
        ],
      },

      { time: "16:30 - 17:00", title: "Tea Break" },

      {
        time: "17:00 - 17:30",
        title: "Prize-Giving",
        descriptionLines: [
          "Awards for Best Oral Presentations",
          "Collaborator Recognition",
        ],
      },

      {
        time: "17:30 - 18:00",
        title: "Closing Remarks",
        descriptionLines: ["Next Steps", "Farewell"],
      },
    ],
  },
] as const;