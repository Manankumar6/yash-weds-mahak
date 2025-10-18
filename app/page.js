import Countdown from "./components/Countdown";
import CoupleCard from "./components/CoupleCard";
import Hero from "./components/Hero";
import coupleData from "./data/coupleData";
import { WEDDING_DATE } from "./data/coupleData";

export default function Home() {
  // Convert to JavaScript Date
const targetDate = new Date(
  WEDDING_DATE.year,
  WEDDING_DATE.month - 1, // JS months are 0-indexed
  WEDDING_DATE.day,
  WEDDING_DATE.hour,
  WEDDING_DATE.minute
);
  return (
      <>
      <Hero/>
     
       <div
       className="w-full py-5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-bg-primary">
        {coupleData.map((person, index) => (
          <CoupleCard
            key={index}
            index={index}
            sonOf={person.sonOf}
            role={person.role}
            name={person.name}
            profession={person.profession}
            image={person.image}
            instagram={person.instagram}
          />
        ))}
      </div>
      <Countdown targetDate={targetDate} />
      </>
  );
}
