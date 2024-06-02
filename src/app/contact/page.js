
import { NavbarDark } from '@/components/navbar';
import { ProfileCard } from '@/components/Card';
import { SimpleFooter } from '@/components/footer';

export default function ContactPage() {
  return (
    <div>
      <NavbarDark />
      
     
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold text-center mb-8">Contact Me</h1>
      
      </div>

      <ProfileCard />

      <SimpleFooter />
    </div>
  );
}
