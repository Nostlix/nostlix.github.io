import Hero from "./sections/hero"
import CardsArea from "./sections/cards_area";
import Card from "./components/card";

export default function Home() {
  return (
    <main>
      <Hero/>
      <CardsArea
        title="About me"
        subtitle="Since the age of 12 years old, i’m passionated by new technologies. That’s why I started to learn coding by myself. Now I use what i learned into my school Epitech !"
      >
        <Card
          title="Strategic"
          description="Instead of simply completing my tasks, I find smart ways to save time later. I’m always documenting."
          img="/icons/strategic.svg"
          imgAlt="Strategic icon"
          imgHeight={80}
          imgWidth={80}
        />
      </CardsArea>
      <CardsArea
        title="Skills"
        subtitle="Discover what I've learned to use throughout my journey"
      />
    </main>
  );
}
