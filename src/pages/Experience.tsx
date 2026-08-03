import React from 'react';
import TimelineCard from '../components/TimelineCard';

const Experience: React.FC = () => {
  const experiences: Array<{
    title: string;
    subtitle?: string;
    organization: string;
    period: string;
    logo?: string;
    logoFallback?: string;
    description: string[];
  }> = [
    {
      title: 'AI Engineer Consultant',
      organization: 'Kearney Activate – Dallas, TX',
      period: '05/2026 – Present',
      logo: '/assets/experience/kearney.png',
      logoFallback: 'K',
      description: [
        'Advise enterprise clients on AI strategy, use-case selection, and adoption as part of Kearney\'s Activate practice.',
        'Translate business problems into AI solution designs, guiding feasibility assessments and prioritization with stakeholders.',
        'Tech: Python, Google Cloud Platform (GCP).'
      ]
    },
    {
      title: 'Full-Stack Developer',
      organization: 'MyWayv – Boca Raton, FL',
      period: '05/2025 – 04/2026',
  logo: '/assets/experience/mywayv.png',
      description: [
        'Built an AI-driven, music-based emotional wellness platform delivering personalized user experiences.',
        'Developed reusable TypeScript / React Native interface components with attention to performance & accessibility.',
        'Accelerated iteration cycles via Vercel preview environments and close product/design collaboration.',
        'Integrated Supabase-backed APIs and refined data flows for secure, low-latency session interactions.',
        'Tech: TypeScript, React Native, Supabase, Vercel, GCP, Google Gemini Live API, Voice Agents.'
      ]
    },
    {
      title: 'MineTest Project - Undergraduate Research / Senior Project (Unpaid)',
      organization: 'University of Florida – Gainesville, FL',
      period: '01/2023 – 05/2024',
  logo: '/assets/education/uf.png',
      description: [
        'Progressed from junior contributor to team lead over 3 semesters driving Lua → C++ engine migration.',
        'Coordinated sprint-style meetings to surface blockers and maintain delivery momentum.',
        'Owned repository governance: code review standards, merge strategy, and branch hygiene.',
        'Directed senior project planning and task allocation to align technical scope with academic milestones.',
        'Tech: C++, Lua, Git, Engine Tooling.'
      ]
    }
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Experience</h1>
      <div className="space-y-6">
        {experiences.map((experience, index) => (
            <TimelineCard
              key={index}
              title={experience.title}
              subtitle={experience.subtitle}
              organization={experience.organization}
              period={experience.period}
              description={experience.description}
              logo={experience.logo}
              logoFallback={experience.logoFallback}
            />
        ))}
      </div>
    </div>
  );
};

export default Experience;
