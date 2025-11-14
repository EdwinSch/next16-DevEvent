import Hero from "@/components/Hero";
import EventCard from "@/components/EventCard";
import { events } from "@/lib/constants";

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Events Map */}
      <h3 className="text-white text-2xl font-bold mb-4">Featured Events</h3>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6" id="events">
        {events.map((event) => {
          return (
            <article key={event.title}>
              <EventCard {...event} />;
            </article>
          );
        })}
      </section>
    </main>
  );
}
