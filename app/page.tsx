import { Hero } from '@/components/sections/hero';
import { Timeline } from '@/components/sections/timeline';
import { BentoGrid } from '@/components/sections/bento-grid';
import { SkillsRadar } from '@/components/sections/skills-radar';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Timeline />
      <BentoGrid />
      <SkillsRadar />
    </>
  );
}
