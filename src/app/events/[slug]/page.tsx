import EventHero from "@/components/events/EventHero";
import Speakers from "@/components/events/Speakers";
import Agenda from "@/components/events/Agenda";
import Sponsors from "@/components/events/Sponsors";
import Venue from "@/components/events/Venue";
import EventCTA from "@/components/events/EventCTA";

export default async function EventPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {

  const { slug } = await params;

  return (
    <main>

      <EventHero />

      <Speakers />

      <Agenda />

      <Sponsors />

      <Venue />

      <EventCTA />

    </main>
  );
}