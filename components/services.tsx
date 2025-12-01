import { Cpu, Smartphone, LayoutPanelTop, Star } from "lucide-react";

const services = [
  {
    id: "frontend",
    title: "Aplikacje frontendowe",
    description:
      "Tworzę nowoczesne, w pełni responsywne aplikacje frontendowe, które świetnie wyglądają i działają na każdym urządzeniu.",
    icon: Cpu,
    bgClass: "bg-[#ff5f45]",
  },
  {
    id: "backend",
    title: "Aplikacje backendowe",
    description:
      "Projektuję nowoczesne aplikacje backendowe, w których znajduje się pełna logika biznesowa systemu.",
    icon: Smartphone,
    bgClass: "bg-[#242a3b]",
  },
  {
    id: "deployment",
    title: "Wdrożenie i utrzymanie aplikacji",
    description:
      "Zajmuję się wdrażaniem i utrzymaniem aplikacji, dbając o ich stabilne i bezawaryjne działanie.",
    icon: LayoutPanelTop,
    bgClass: "bg-[#1023b8]",
  },
  {
    id: "admin",
    title: "Administracja systemów",
    description:
      "Administruję serwerami, usługami i infrastrukturą potrzebną do działania systemów.",
    icon: Star,
    bgClass: "bg-[#4d8fe9]",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="flex w-full justify-center bg-background"
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 py-16 lg:py-20">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Moje usługi
          </h2>
          <p className="mx-auto max-w-[640px] text-sm text-muted-foreground md:text-base leading-relaxed">
            Łączę doświadczenie w tworzeniu aplikacji webowych z praktyczną
            administracją systemami, aby dostarczać kompletne i stabilne
            rozwiązania, dopasowane do potrzeb Twojego biznesu.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-3xl border border-border/40 shadow-lg md:grid-cols-2 md:grid-rows-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`${service.bgClass} flex flex-col justify-between px-6 py-16 text-white transition-colors hover:bg-red-600 md:px-8 md:py-28`}
              >
                <div>
                  <Icon className="h-10 w-10" aria-hidden="true" />
                  <h3 className="mt-6 text-xl font-semibold md:text-2xl lg:text-3xl">
                    {service.title}
                  </h3>
                </div>
                <p className="mt-4 max-w-[320px] text-sm leading-relaxed md:text-base">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


