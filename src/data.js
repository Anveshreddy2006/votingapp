// src/data.js
// src/data.js

import Thumbnail1 from "./assets/flag1.jpg";
import Thumbnail2 from "./assets/flag2.jpg";
import Thumbnail3 from "./assets/flag3.jpg";

import Candidate1 from "./assets/candidate1.jpg";
import Candidate2 from "./assets/candidate2.jpg";
import Candidate3 from "./assets/candidate3.jpg";
import Candidate4 from "./assets/candidate4.jpg";
import Candidate5 from "./assets/candidate5.jpg";
import Candidate6 from "./assets/candidate6.jpg";
import Candidate7 from "./assets/candidate7.jpg";

// ✅ Elections Data
export const elections = [
  {
    id: "e1",
    title: "Harvard Presidential Elections 2025",
    description: `The annual election for the position of Harvard University Student President. Candidates compete to represent the student body and lead campus initiatives.`,
    thumbnail: Thumbnail1,
    candidates: ["c1", "c2", "c3", "c4"],
    voters: ["v1", "v5", "v9", "v14"],
  },
  {
    id: "e2",
    title: "Legon SRC Presidential Elections 2025",
    description: `Legon SRC Presidential Elections aim to elect the next leader of the Student Representative Council. Candidates will present their policies on student welfare and campus development.`,
    thumbnail: Thumbnail2,
    candidates: ["c5", "c6", "c7"],
    voters: ["v3", "v7", "v11", "v17"],
  },
  {
    id: "e3",
    title: "Stanford Cultural Committee Elections 2025",
    description: `The Stanford Cultural Committee elections select the students responsible for planning, promoting, and managing cultural events and activities throughout the year.`,
    thumbnail: Thumbnail3,
    candidates: [],
    voters: ["v2", "v10", "v12", "v16", "v20"],
  },
];
// ✅ Candidates Data
export const candidates = [
  {
    id: "c1",
    fullName: "Enoch Ganyo",
    image: Candidate1,
    motto: `Leadership is service, not privilege.`,
    voteCount: 23,
    election: "e1",
  },
  {
    id: "c2",
    fullName: "John Asiamah",
    image: Candidate2,
    motto: `Together, we can make a difference.`,
    voteCount: 18,
    election: "e1",
  },
  {
    id: "c3",
    fullName: "Mary Owusu",
    image: Candidate3,
    motto: `Building a brighter tomorrow for all.`,
    voteCount: 34,
    election: "e2",
  },
  {
    id: "c4",
    fullName: "Kwame Mensah",
    image: Candidate4,
    motto: `Transparency, unity, and progress.`,
    voteCount: 27,
    election: "e2",
  },
  {
    id: "c5",
    fullName: "Diana Ayi",
    image: Candidate5,
    motto: `Innovation and inclusiveness for every student.`,
    voteCount: 40,
    election: "e3",
  },
  {
    id: "c6",
    fullName: "Michael Addo",
    image: Candidate6,
    motto: `Empower the youth, empower the nation.`,
    voteCount: 29,
    election: "e3",
  },
  {
    id: "c7",
    fullName: "Sarah Boateng",
    image: Candidate7,
    motto: `Your voice, your choice — let’s move forward.`,
    voteCount: 35,
    election: "e3",
  },
  {
    id: "c8",
    fullName: "modi",
    // image: Candidate1,
    motto: `Leadership is service, not privilege.`,
    voteCount: 45,
    election: "e1",
  },
];

//voters data
export const voters = [
  {
    id: "v1",
    fullName: "Ravi Kumar",
    email: "ravi.kumar@gmail.com",
    password: "ravi123",
    isAdmin: true,
    votedElections: ["e2", "e1", "e3"],
  },
  {
    id: "v2",
    fullName: "Vikram Singh",
    email: "vikram.singh@gmail.com",
    password: "vikram123",
    isAdmin: false,
    votedElections: ["e1", "e2"],
  },
  {
    id: "v3",
    fullName: "Aditya Rao",
    email: "aditya.rao@gmail.com",
    password: "aditya123",
    isAdmin: false,
    votedElections: ["e1", "e2"],
  },

  {
    id: "v4",
    fullName: "Aditi Nair",
    email: "aditi.nair@gmail.com",
    password: "aditi123",
    isAdmin: true,
    votedElections: ["e1"],
  },
];
