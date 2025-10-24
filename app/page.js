import AttendSection from "./components/AttendSection";
import Countdown from "./components/Countdown";
import CoupleCard from "./components/CoupleCard";
import FloatingMusicButton from "./components/FloatingMusicButton";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Program from "./components/Program";
import RSVPSection from "./components/RSVPSection";
import Venue from "./components/Venue";
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
      <Hero />

      <div
        style={{
          backgroundImage: "url(https://static.vecteezy.com/system/resources/previews/007/565/371/large_2x/greenery-watercolor-floral-background-with-brush-and-floral-frame-for-horizontal-banner-backdrop-wedding-invitation-thank-you-card-wallpaper-free-photo.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
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
      <Venue />
      <Program />
      <Gallery />
      <RSVPSection />
      <AttendSection/>
      <FloatingMusicButton/>
    </>
  );
}
