import { HeroSection } from '@/components/home/HeroSection';
import { AllianceDifference } from '@/components/home/AllianceDifference';
import { CentenaryMoments } from '@/components/home/CentenaryMoments';
import { Brotherhood } from '@/components/home/Brotherhood';
import { WhyCentenaryMatters } from '@/components/home/WhyCentenaryMatters';
import { LegacyProjects } from '@/components/home/LegacyProjects';
import { VoicesOfAlliance } from '@/components/home/VoicesOfAlliance';
import { FutureWeOwe } from '@/components/home/FutureWeOwe';
import { JoinCentenary } from '@/components/home/JoinCentenary';

const Index = () => {
  return (
    <main>
      <HeroSection />
      <AllianceDifference />
      <CentenaryMoments />
      <Brotherhood />
      <WhyCentenaryMatters />
      <LegacyProjects />
      <VoicesOfAlliance />
      <FutureWeOwe />
      <JoinCentenary />
    </main>
  );
};

export default Index;
