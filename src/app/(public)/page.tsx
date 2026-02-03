import { Hero } from "@/components/hero";


export default function Home() {
  return (
    <div className="max-w-7xl mx-auto font-sans dark:bg-black">
      <Hero
        badge="Your Own Food Fub"
        heading="Discover Delicious Recipes and Food Ideas"
        description="Explore a world of culinary delights with FoodHub. Find recipes, cooking tips, and food inspiration all in one place."
        buttons={{
          primary: {
            text: "Explore Recipes",
            url: "/allfoods",
          },
          secondary: {
            text: "View on GitHub",
            url: "https://www.shadcnblocks.com",
          },
        }}
        image={{
          src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
          alt: "Hero section demo image showing interface components",
        }}
        
        />
    </div>
  );
}
