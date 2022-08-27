export default function Texts(language) {
  const NAV_ITEMS_LT = [
    {
      label: "Pradžia",
      href: "/",
    },
    {
      label: "Paslaugos",
      children: [
        {
          label: "CNC Tekinimas",
          href: "/services/turning",
        },
        {
          label: "CNC Frezavimas",
          href: "/services/milling",
        },
        {
          label: "Projektavimas",
          href: "/services/design",
        },
      ],
    },
    {
      label: "Gamybiniai Pajėgumai",
      href: "/capabilities",
    },
    {
      label: "Galerija",
      href: "/gallery",
    },
    {
      label: "Karjera",
      href: "/career",
    },
    {
      label: "Kontaktai",
      href: "/contacts",
    },
  ];

  const NAV_ITEMS_EN = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Services",
      children: [
        {
          label: "CNC Turning",
          href: "/services/turning",
        },
        {
          label: "CNC Milling",
          href: "/services/milling",
        },
        {
          label: "Design",
          href: "/services/design",
        },
      ],
    },
    {
      label: "Production Capabilities",
      href: "/capabilities",
    },
    {
      label: "Gallery",
      href: "/gallery",
    },
    {
      label: "Career",
      href: "/career",
    },
    {
      label: "Contacts",
      href: "/contacts",
    },
  ];

  const NAV_ITEMS_NO = [
    {
      label: "Hjemmeside",
      href: "/",
    },
    {
      label: "Tjenester",
      children: [
        {
          label: "CNC Dreiing",
          href: "/services/turning",
        },
        {
          label: "CNC Fresing",
          href: "/services/milling",
        },
        {
          label: "Design",
          href: "/services/design",
        },
      ],
    },
    {
      label: "Muligheter",
      href: "/capabilities",
    },
    {
      label: "Galleri",
      href: "/gallery",
    },
    {
      label: "Karriere",
      href: "/career",
    },
    {
      label: "Kontakter",
      href: "/contacts",
    },
  ];

  switch (language) {
    case "LT":
      return NAV_ITEMS_LT;
    case "EN":
      return NAV_ITEMS_EN;
    case "NO":
      return NAV_ITEMS_NO;
    default:
      return NAV_ITEMS_LT;
  }
}
