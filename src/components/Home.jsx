import { ProfileCard } from "@/components/Card";

export default function HomePage() {
  return (
    <div>
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Welcome to My Portfolio
        </h1>
      </div>

      <ProfileCard />
    </div>
  );
}
