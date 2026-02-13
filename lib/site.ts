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
      { time: "08:00 - 09:00", title: "Registration and Morning Refreshments" },
      { time: "09:00 - 09:20", title: "Opening Ceremony and Welcome Address" },
      { time: "09:20 - 09:40", title: "Conference Overview and Scientific Briefing" },
      { time: "09:40 - 10:30", title: "Keynote Lecture I (To Be Announced)" },
      { time: "10:30 - 11:00", title: "Networking Break" },
      {
        time: "11:00 - 12:30",
        title: "Parallel Scientific Sessions I",
        description:
          "Pharmacology and Precision Medicine, Pharmacy and Digital Health, Nutraceutical Science",
      },
      { time: "12:30 - 14:00", title: "Lunch and Industry Engagement" },
      {
        time: "14:00 - 15:30",
        title: "Parallel Scientific Sessions II",
        description:
          "Pharmaceutical Technology, Cosmetic Science and Innovation, Policy Regulation and Ethics",
      },
      { time: "15:30 - 16:00", title: "Afternoon Break" },
      {
        time: "16:00 - 17:30",
        title: "IPoPS Postgraduate Symposium Sessions",
        description: "Oral presentations and moderated discussion",
      },
      { time: "17:30 - 18:00", title: "Day 1 Wrap-Up and Announcements" },
    ],
  },
  {
    key: "day-2",
    label: "Day 2",
    date: "14 Aug 2026",
    items: [
      { time: "08:30 - 09:00", title: "Morning Refreshments" },
      { time: "09:00 - 09:50", title: "Keynote Lecture II (To Be Announced)" },
      { time: "09:50 - 10:20", title: "Networking Break" },
      {
        time: "10:20 - 11:50",
        title: "Parallel Scientific Sessions III",
        description:
          "Regenerative Medicine, Pharmaceutical Chemistry, Pharmacy and Digital Health",
      },
      { time: "11:50 - 12:30", title: "Plenary Forum and Q and A" },
      { time: "12:30 - 14:00", title: "Lunch" },
      {
        time: "14:00 - 15:00",
        title: "Poster Session and Research Networking",
        description: "Structured poster viewing and discussion",
      },
      {
        time: "15:00 - 16:00",
        title: "Awards, Closing Remarks and Future Directions",
      },
      { time: "16:00", title: "Conference Adjournment" },
    ],
  },
] as const;
