export let skils: Array<SkilModel> = [
  { name: "Dart", progress: "90", total: "100" },
  { name: "Java", progress: "75", total: "100" },
  { name: "TypeScript", progress: "90", total: "100" },
  { name: "JavaScript", progress: "90", total: "100" },
  { name: "C#", progress: "70", total: "100" },
  { name: "Html", progress: "70", total: "100" },
  { name: "CSS", progress: "60", total: "100" },
];
export let langsSkils: Array<LangusSkillModel> = [
  {
    name: "Flutter",
    knowledge: [
      "Using maps, and routes API’s (Google map , MapBox)",
      "Firebase: Authentications, Firestore database, Real-Time database, Fire Storage, crashlytics reports and firebase messaging.",
      "API integrations.",
      "Social logins.",
      "Third-Party packages",
      "One Signal (messaging)",
      "State Managements (Bloc, Provider).",
      "TDD architecture",
      "Background location",
      "Live Location",
      "SOLID principle",
      "SQLite  and Sembast database",
      "Connect Apps to Thermal Printers",
    ],
  },
  {
    name: "Reactjs",
    knowledge: [
      "Redux for state managements with Redux toolkits ",
      "Axios",
      "Firebase",
    ],
  },
  {
    name: "Asp .Net Core",
    knowledge: ["Build Rest API", "Use DTO"],
  },
];
export interface SkilModel {
  name: string;
  total: string;
  progress: string;
}
export interface LangusSkillModel {
  name: string;
  knowledge: Array<string>;
}
export function chunkArray<T>(arr: Array<T>, n: number) {
  var chunkLength = parseInt(Math.max(arr.length / n, 1).toString());

  chunkLength = 3;
  let newData = [...arr];
  var chunks = [];
  while (newData.length > 0) {
    chunks.push(newData.splice(0, n));
  }

  return chunks;
}

export interface TechniclSkills {
  name: string;
  data: Array<string>;
}
export let techniclSkills: Array<TechniclSkills> = [
  { name: "Version Control", data: ["Git", "GitHub"] },
  {
    name: "Editors and IDE",
    data: ["vs code", "android studio", "IntelliJ IDEA", "NetBeans"],
  },
  { name: "Database", data: ["Redis", "MySQL", "SQL Server", "SQLite"] },
];
