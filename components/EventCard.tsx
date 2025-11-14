import Link from "next/link";
import Image from "next/image";

interface Props {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

const EventCard = ({ title, image, slug, location, date, time }: Props) => {
  return (
    <Link href={`/events/${slug}`} id="event-card">
      <Image
        src={image}
        alt={title}
        width={410}
        height={300}
        className="h-[300px] w-full rounded-lg object-cover"
      />

      <div className="flex items-center gap-2 mt-3">
        <Image src={"/icons/pin.svg"} alt={location} width={14} height={14} />
        <p className="eventcard-info">{location}</p>
      </div>

      <h4 className="my-3 text-white font-bold text-xl">{title}</h4>

      <div className="flex gap-8 items-center">
        {/* date */}
        <div className="flex items-center gap-2">
          <Image
            src={"/icons/calendar.svg"}
            alt={location}
            width={14}
            height={14}
          />
          <p className="eventcard-info">{date}</p>
        </div>

        {/* times */}
        <div className="flex items-center gap-2">
          <Image
            src={"/icons/clock.svg"}
            alt={location}
            width={14}
            height={14}
          />
          <p className="eventcard-info">{time}</p>
        </div>
      </div>
    </Link>
  );
};
export default EventCard;
