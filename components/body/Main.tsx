import Aos from "aos";
import { useEffect } from "react";
import { AboutMy } from "./AboutMu";
import { Contact } from "./contact/Contact";
import { Heros } from "./Heros";
import { Menu } from "./Menu";
import { Projects } from "./projects/Projects";
import { Skils } from "./skills/Skills";
import { WorkExperience } from "./work_experience/WorkExperience";
import "aos/dist/aos.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  getFirestore,
  setDoc,
  Timestamp,
  doc,
  updateDoc,
  increment,
  getDoc,
  addDoc,
  collection,
} from "firebase/firestore/lite";
import { getConfirmFromUser } from "./alert";
import firebaseApp from "../../utils/db/Firebase";

const Main = () => {
  const geDate = () => {
    const date = new Date();
    var day = date.getDate() + 3;
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var string = formatS(day) + "-" + formatS(month) + "-" + year;
    return string;
  };

  const formatS = (num: number): string => {
    if (num > 9) {
      return `${num}`;
    }
    return `0${num}`;
  };
  const getData = async () => {
    const res = await axios.get("https://ipapi.co/json");
    return res.data;
  };
  const saveVisit = async () => {
    const db = getFirestore(firebaseApp);
    let id: string = geDate();
    try {
      const data = await getData();

      const docRef = await addDoc(collection(db, "visits", id, "visits"), {
        date: Timestamp.now(),
        data: data,
      });

      const usersRef = await getDoc(doc(db, "visits", id));

      if (usersRef.exists()) {
        await updateDoc(doc(db, "visits", id), {
          total: increment(1),
        });
      } else {
        await setDoc(doc(db, "visits", id), {
          total: increment(1),
        });
      }
    } catch (e) {}
  };
  useEffect(() => {
    getConfirmFromUser(
      "Note that is not the final content\nThe Site is under developing"
    );
    //! On red
    saveVisit();
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="container">
      <Menu />
      <Heros />
      <AboutMy />
      {/* <Facts /> */}
      <Skils />
      <WorkExperience />
      <Projects />
      <Contact />
    </div>
  );
};

export default Main;
