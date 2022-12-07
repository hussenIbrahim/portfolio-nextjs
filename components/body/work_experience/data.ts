export let workExperienceData: Array<WorkExperienceModel> = [
  {
    jonTitle: "FLUTTER DEVELOPER",
    date: "4/2020 – 10/2020",
    companyName: "WITH FREELANCER TEAM",
    description: [
      "Develop tow mobile application, for booking taxi and real estate using flutter with firebase and Mapbox.",
    ],
  },

  {
    jonTitle: "REACTJS DEVELOPER",
    date: "Jan 2020 - Jan 2021",
    companyName: "FREELANCER ",
    description: [
      "Web app for laboratory: add visitor , create  tests , reports",
      "Web app for pharmacy: purchase and sells , reports ",
      "Web app for clinic: add patient  ,create delay visits , reports",
    ],
  },
  {
    jonTitle: "FLUTTER DEVELOPER",
    date: "11/2020 – 09/2022",
    companyName: "AT TECHEYE COMPANY",
    description: [
      "Responsible for UI design and implementation of existing UI",
      "Communicate regularly with stakeholders, project managers, quality assurance teams, and other developers regarding progress on long-term technology roadmap",
      "Monitor Applications Performance After release & Fix Bugs",
      "Develop many mobile application",
      "Tracker: for tracking calories and weight",
      "Garanty Post: post-delivery app",
      "Representative App",
    ],
  },
  {
    jonTitle: "FLUTTER DEVELOPER  Part Time",
    date: "Aug 2022 - Dec 2022",
    companyName: "AL-JAZARY COMPANY",
    description: [
      "Responsible for UI design and implementation of existing UI",
      "Monitor Applications Performance After release & Fix Bugs",
      "Add new features, improve existing features",
      "Develop Two App : Sell Applications and GYM App",
    ],
  },
];
export interface WorkExperienceModel {
  jonTitle: string;
  companyName: string;
  description: Array<string>;
  date: string;
}
