export const site = {
  conferenceName: "IPNaCS–IPoPS 2026",
  description:
    "Connected Innovation: Digital Transformation in Wellness, Longevity and Therapy",
} as const;

export const schedule = [
  {
    key: "day-1",
    label: "Day 1",
    date: "13 Aug 2026",
    items: [
      { time: "08:00 - 09:00", title: "Registration" },

      {
        time: "09:00 - 10:00",
        title: "Opening Ceremony",
        descriptionLines: [
          "Opening Ceremony",
          "Doa recital and welcome address by the Dean, Faculty of Pharmacy, UiTM (TBC)",
          "Opening speech by the Vice Chancellor, Universiti Teknologi MARA (UiTM) (TBC)",
        ],
      },

      { time: "10:00 - 11:00", title: "Tea Break and Poster Session" },

      {
        time: "11:00 - 12:00",
        title: "Keynote Lecture",
        descriptionLines: [
          "Dr Azuana Binti Ramli",
          "Deputy Director General of Health (Pharmaceutical Services), Ministry of Health Malaysia",
          "Title: TBC",
        ],
      },

      {
        time: "12:00 - 12:50",
        title: "Plenary Session I",
        descriptionLines: [
          "Professor Dr Suzana Shahar",
          "Dean, Faculty of Health Sciences, The National University of Malaysia (UKM)",
          "Title: Nutraceuticals and Personalised Nutrition",
        ],
      },

      { time: "13:00 - 14:00", title: "Lunch and Networking" },

      {
        time: "14:00 - 14:50",
        title: "Plenary Session II (Hall A)",
        descriptionLines: [
          "International Speaker",
          "Chulalongkorn University",
          "Title: TBC",
        ],
      },

      {
        time: "14:00 - 14:50",
        title: "Plenary Session III (Hall B)",
        descriptionLines: [
          "Professor Dr Kazunori Akimoto",
          "Professor, Faculty of Pharmaceutical Sciences, Tokyo University of Science (TUS)",
          "Title: TBC",
        ],
      },

      {
        time: "15:00 - 15:30",
        title: "Parallel Invited Talks (Tracks 1–4)",
        tracks: [
          {
            label: "Track 1",
            name: "Associate Professor Dr Shazia Jamshed",
            role: "School of Pharmacy, IMU University",
            title: "TBC",
          },
          {
            label: "Track 2",
            name: "Dr Kosuke Kusanomori",
            role:
              "Associate Professor, Faculty of Pharmaceutical Sciences, Tokyo University of Science",
            title:
              "Regenerative cell-based therapy for lymph node reconstruction",
          },
          {
            label: "Track 3",
            name: "Professor Dr Wong Tin Wui",
            role: "Faculty of Pharmacy, Universiti Teknologi MARA",
            title: "TBC",
          },
          { label: "Track 4", name: "TBC", role: "TBC", title: "TBC" },
        ],
      },

      { time: "15:30 - 16:45", title: "Oral Presentations" },

      { time: "17:00 - 18:30", title: "Tea Break and Networking" },

      {
        time: "19:30 - 22:30",
        title: "Gala Dinner",
        descriptionLines: [
          "Gala Dinner",
          "25th Anniversary Celebration",
          "Cultural performances and networking",
        ],
      },
    ],
  },
  {
    key: "day-2",
    label: "Day 2",
    date: "14 Aug 2026",
    items: [
      {
        time: "09:00 - 09:50",
        title: "Plenary Session IV (Hall A)",
        descriptionLines: [
          "Professor Dr Rohana Abd Ghani",
          "Consultant Endocrinologist. Professor of Medicine, Faculty of Medicine, Universiti Teknologi MARA",
          "Title: TBC",
        ],
      },

      {
        time: "09:00 - 09:50",
        title: "Plenary Session V (Hall B)",
        descriptionLines: ["International Speaker", "Kyoto, Japan", "Title: TBC"],
      },

      { time: "10:00 - 10:30", title: "Tea Break and Poster Session" },

      {
        time: "10:30 - 11:00",
        title: "Parallel Invited Talks (Tracks 5–8)",
        tracks: [
          {
            label: "Track 5",
            name: "Dr Ismat Binti Mohd Sulaiman",
            role:
              "Senior Assistant Director, Health Informatics Centre, Ministry of Health Malaysia",
            title:
              "Connected Data, Transforming Pharma: Lessons from MyHDW and AI Potential",
          },
          {
            label: "Track 6",
            name: "Professor Dr Teh Lay Kek",
            role: "Faculty of Pharmacy, Universiti Teknologi MARA",
            title: "TBC",
          },
          {
            label: "Track 7",
            name: "Professor Dr Takehisa Hanawa",
            role: "Tokyo University of Science",
            title: "TBC",
          },
          { label: "Track 8", name: "TBC", role: "TBC", title: "TBC" },
        ],
      },

      { time: "11:00 - 12:00", title: "Oral Presentations" },

      { time: "12:30 - 14:45", title: "Lunch and Networking" },

      {
        time: "14:45 - 16:00",
        title: "Closing Plenary",
        descriptionLines: [
          "Professor Dr Kalavathy Ramasamy",
          "Faculty of Pharmacy, Universiti Teknologi MARA",
          "Title: TBC",
        ],
      },

      { time: "16:30 - 17:00", title: "Tea Break" },

      {
        time: "17:00 - 17:30",
        title: "Prize-Giving Ceremony",
        descriptionLines: [
          "Prize-Giving Ceremony",
          "Awards for Best Oral Presentations",
          "Collaborator Recognition",
        ],
      },

      {
        time: "17:30 - 18:00",
        title: "Closing Remarks",
        descriptionLines: ["Closing Remarks", "Next steps", "Farewell"],
      },
    ],
  },
] as const;