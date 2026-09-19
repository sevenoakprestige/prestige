export interface ResourcesTranslation {
  guides: {
    meta: {
      title: string;
      description: string;
      ogTitle: string;
      ogDescription: string;
    };
    hero: {
      eyebrow: string;
      title: string;
      subtitle: string;
    };
    items: Array<{
      kicker: string;
      title: string;
      body: string;
      covered: string;
    }>;
    cta: {
      title: string;
      subtitle: string;
      whatsapp: string;
      faq: string;
    };
  };

  bankingReadiness: {
    meta: {
      title: string;
      description: string;
    };
    hero: {
      badge: string;
      title1: string;
      title2: string;
      subtitle: string;
      btnDownload: string;
      btnExplore: string;
      trustList: string[];
    };
    framework: {
      eyebrow: string;
      title: string;
      desc: string;
      centerText1: string;
      centerText2: string;
      nodes: Array<{num: string, title: string, desc: string}>;
    };
    executiveSummary: {
      eyebrow: string;
      title: string;
      p1: string;
      p2: string;
      p2link1: string;
      p2link2: string;
      btnDownload: string;
      btnExplore: string;
    };
    context: {
      title1: string;
      title2: string;
      p1Part1: string;
      p1Link1: string;
      p1Part2: string;
      p1Link2: string;
      p1Part3: string;
      p2: string;
      p3: string;
      whatIsTitle: string;
      whatIsDesc: string;
      checklist: string[];
    };
    fivePillars: {
      eyebrow: string;
      title: string;
      desc: string;
      pillars: Array<{
        num: string;
        title: string;
        desc: string;
        items: Array<{title: string, desc: string}>;
      }>;
    };
    scorecard: {
      eyebrow: string;
      title: string;
      desc: string;
      btn: string;
    };
    timeline: {
      eyebrow: string;
      title: string;
      desc: string;
      phases: Array<{
        title: string;
        desc: string;
        weeks: string;
        items: string[];
      }>;
    };
    faq: {
      eyebrow: string;
      title: string;
      desc: string;
      items: Array<{q: string, a: string}>;
    };
    cta: {
      title: string;
      desc: string;
      btnDownload: string;
      btnConsultation: string;
    };
    relatedGuides: {
      title: string;
      guides: Array<{title: string, desc: string}>;
    };
  };

}
