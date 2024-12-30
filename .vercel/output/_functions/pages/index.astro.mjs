/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, a as createAstro, b as addAttribute, e as createTransitionScope, f as renderComponent, g as renderScript, h as renderHead, i as renderSlot } from '../chunks/astro/server_D8GAQLqO.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$i = createAstro();
const $$Sun = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Sun;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path> <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path> </svg>`;
}, "C:/Users/54388/Desktop/portfolio-astro/src/components/icons/Sun.astro", void 0);

const $$Astro$h = createAstro();
const $$Moon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Moon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path> </svg>`;
}, "C:/Users/54388/Desktop/portfolio-astro/src/components/icons/Moon.astro", void 0);

const $$Astro$g = createAstro();
const $$System = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$System;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z"></path> <path d="M7 20h10"></path> <path d="M9 16v4"></path> <path d="M15 16v4"></path> </svg>`;
}, "C:/Users/54388/Desktop/portfolio-astro/src/components/icons/System.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  const THEMES = ["Light", "Dark", "System"];
  return renderTemplate(_a || (_a = __template(["", '<div class="relative ml-1 mr-1" data-astro-cid-x3pjskd3> <button id="theme-toggle-btn" class="appearance-none border-none flex hover:scale-125 transition" data-astro-cid-x3pjskd3', '> <span class="sr-only" data-astro-cid-x3pjskd3>Chose a Theme</span> ', " ", " ", ' </button> <div id="themes-menu" class="absolute hidden scale-80 top-8 right-0 text-sm p-1 min-w-[8rem] rounded-md border border-gray-100 bg-white/90 dark:bg-gray-900/90 dark:border-gray-500/20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-md" data-astro-cid-x3pjskd3', "> <ul data-astro-cid-x3pjskd3> ", ` </ul> </div> </div>  <script>
  let remove = null
  const matchMedia = window.matchMedia("(prefers-color-scheme: dark)")
  const themesMenu = document.getElementById("themes-menu")

  const getThemePreference = () => {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem("theme") ?? "system"
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  }

  const updateIcon = (themePreference) => {
    document.querySelectorAll(".theme-toggle-icon").forEach((element) => {
      element.style.scale = element.id === themePreference ? "1" : "0"
    })
  }

  const updateTheme = () => {
    if (remove != null) {
      remove()
    }
    matchMedia.addEventListener("change", updateTheme)
    remove = () => {
      matchMedia.removeEventListener("change", updateTheme)
    }

    const themePreference = getThemePreference()
    const isDark =
      themePreference === "dark" ||
      (themePreference === "system" && matchMedia.matches)

    updateIcon(themePreference)
    document.documentElement.classList[isDark ? "add" : "remove"]("dark")
  }

  updateTheme()

  document.addEventListener("click", () => themesMenu.classList.remove("open"))

  document.getElementById("theme-toggle-btn").addEventListener("click", (e) => {
    e.stopPropagation()
    const isClosed = !themesMenu.classList.contains("open")
    themesMenu.classList[isClosed ? "add" : "remove"]("open")
  })

  document.querySelectorAll(".themes-menu-option").forEach((element) => {
    element.addEventListener("click", (e) => {
      localStorage.setItem("theme", e.target.innerText.toLowerCase().trim())
      updateTheme()
    })
  })

  document.addEventListener('astro:after-swap', () => {
    updateTheme();
    window.scrollTo({ left: 0, top: 0, behavior: 'instant' });
  })
<\/script>`])), maybeRenderHead(), addAttribute(createTransitionScope($$result, "ko5uysgj"), "data-astro-transition-persist"), renderComponent($$result, "SunIcon", $$Sun, { "id": "light", "class": "theme-toggle-icon size-5 transition-all", "data-astro-cid-x3pjskd3": true }), renderComponent($$result, "MoonIcon", $$Moon, { "id": "dark", "class": "theme-toggle-icon absolute size-5 transition-all", "data-astro-cid-x3pjskd3": true }), renderComponent($$result, "SystemIcon", $$System, { "id": "system", "class": "theme-toggle-icon absolute size-5 transition-all", "data-astro-cid-x3pjskd3": true }), addAttribute(createTransitionScope($$result, "d5hlxqxh"), "data-astro-transition-persist"), THEMES.map((theme) => renderTemplate`<li class="themes-menu-option px-2 py-1.5 cursor-default hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm" data-astro-cid-x3pjskd3> ${theme} </li>`));
}, "C:/Users/54388/Desktop/portfolio-astro/src/components/ThemeToggle.astro", "self");

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    {
      title: "Experience",
      label: "experience",
      url: "/#experience"
    },
    {
      title: "Projects",
      label: "projects",
      url: "/#projects"
    },
    {
      title: "About me",
      label: "about-me",
      url: "/#about-me"
    },
    {
      title: "Contact",
      label: "contact",
      url: "mailto:ezequiel.murga13@gmail.com"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2" data-astro-cid-3ef6ksr2> <nav class="flex px-3 text-sm font-medium rounded-full justify-center items-center text-gray-600 dark:text-gray-200" data-astro-cid-3ef6ksr2> ${navItems.map((link) => renderTemplate`<a class="relative block px-2 py-2 transition hover:text-blue-500 dark:hover:text-blue-500"${addAttribute(link.label, "aria-label")}${addAttribute(link.url, "href")} data-astro-cid-3ef6ksr2> ${link.title} </a>`)} ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "data-astro-cid-3ef6ksr2": true })} </nav> </header> ${renderScript($$result, "C:/Users/54388/Desktop/portfolio-astro/src/components/Header.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/54388/Desktop/portfolio-astro/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="opacity-80 m-4 min-[375px]:pl-4 md:pl-0 mt-16 w-full mx-auto container lg:max-w-4xl md:max-w-2xl mb-10 flex justify-center"> <div class="rounded-lg w-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between py-4"> <span class="text-sm sm:text-center text-zinc-800/90 dark:text-zinc-200/90">© ${currentYear} </span> <ul class="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0"> <li> <a href="/#about-me" class="hover:underline me-4 md:me-6">About me</a> </li> <li> <a id="contact" href="mailto:ezequiel.murga13@gmail.com" class="hover:underline">Contact</a> </li> </ul> </div> </footer>`;
}, "C:/Users/54388/Desktop/portfolio-astro/src/components/Footer.astro", void 0);

const $$Astro$f = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/54388/Desktop/portfolio-astro/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/54388/Desktop/portfolio-astro/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro$e = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Layout;
  const { description, title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ClientRouter, {})}${renderHead()}</head> <body class="relative text-black dark:text-white"> <div class="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})}  </body> </html>`;
}, "C:/Users/54388/Desktop/portfolio-astro/src/layouts/Layout.astro", void 0);

const $$Astro$d = createAstro();
const $$SectionContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  const { class: className, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(id, "data-section")}${addAttribute(`section ${className} scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl`, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "C:/Users/54388/Desktop/portfolio-astro/src/components/SectionContainer.astro", void 0);

const $$Badge = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center"> <span class="relative inline-flex rounded-full p-[1px] overflow-hidden"> <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span> <div class="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap"> ${renderSlot($$result, $$slots["default"])} </div> </span> </div>`;
}, "C:/Users/54388/Desktop/portfolio-astro/src/components/Badge.astro", void 0);

const $$Astro$c = createAstro();
const $$SocialPill = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$SocialPill;
  return renderTemplate`${maybeRenderHead()}<a${spreadAttributes(Astro2.props)} target="_blank" rel="noopener noreferrer" role="link" class="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 dark:text-white focus-visible:ring-yellow-500/80 text-md hover:bg-gray-900 hover:border-gray-700 hover:text-white dark:hover:bg-gray-100 dark:hover:border-gray-300 dark:hover:text-black group max-w-fit focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/54388/Desktop/portfolio-astro/src/components/SocialPill.astro", void 0);

const $$Astro$b = createAstro();
const $$LinkedIn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$LinkedIn;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg>`;
}, "C:/Users/54388/Desktop/portfolio-astro/src/components/icons/LinkedIn.astro", void 0);

const $$Astro$a = createAstro();
const $$MailIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$MailIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail-forward" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path><path d="M3 6l9 6l9 -6"></path><path d="M15 18h6"></path><path d="M18 15l3 3l-3 3"></path></svg>`;
}, "C:/Users/54388/Desktop/portfolio-astro/src/components/icons/MailIcon.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const personalImageAlt = "Ezequiel Murga";
  return renderTemplate`${maybeRenderHead()}<div class=" max-w-xl"> <div class="flex gap-4 mb-4 "> <img class="rounded-full shadow-lg size-16 aspect" src="/hero.webp"${addAttribute(personalImageAlt, "alt")}> <a href="https://www.linkedin.com/in/sof%C3%ADa-hoyos-722624252/" target="_blank" rel="noopener" class="flex items-center transition md:justify-center md:hover:scale-105"> ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result2) => renderTemplate`Open to work` })} </a> </div> <h1 class=" text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white">
Hola, soy Sofia Hoyos
</h1> <p class="mt-6 text-xl text-gray-800 dark:[&>strong]:text-yellow-200 [&>strong]:text-yellow-500 [&>strong]:font-semibold dark:text-gray-300">
1 año de experiencia.
<strong>Soy comunicadora digital recibida de la Universidad Nacional de Jujuy con honores.</strong>
De Jujuy, Argentina.
</p> <nav class="flex flex-wrap gap-4 mt-8"> ${renderComponent($$result, "SocialPill", $$SocialPill, { "href": "mailto:florenciasofihoyos.com" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MailIcon", $$MailIcon, { "class": "size-4" })}
Contact Me
` })} ${renderComponent($$result, "SocialPill", $$SocialPill, { "href": "https://www.linkedin.com/in/sof%C3%ADa-hoyos-722624252/" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LinkedInIcon", $$LinkedIn, { "class": "size-4" })}
LinkedIn
` })} </nav> </div>`;
}, "C:/Users/54388/Desktop/portfolio-astro/src/components/Hero.astro", void 0);

const $$Astro$9 = createAstro();
const $$TitleSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$TitleSection;
  return renderTemplate`${maybeRenderHead()}<h2${addAttribute(`flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white ${Astro2.props.className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </h2>`;
}, "C:/Users/54388/Desktop/portfolio-astro/src/components/TitleSection.astro", void 0);

const $$Astro$8 = createAstro();
const $$Briefcase = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Briefcase;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path><path d="M12 12l0 .01"></path><path d="M3 13a20 20 0 0 0 18 0"></path></svg>`;
}, "C:/Users/54388/Desktop/portfolio-astro/src/components/Briefcase.astro", void 0);

const $$Astro$7 = createAstro();
const $$LinkInline = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$LinkInline;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} role="link" class="inline-flex items-center text-lg font-medium text-yellow-500 dark:text-yellow-200 dark:hover:text-yellow-300 hover:text-yellow-700"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/54388/Desktop/portfolio-astro/src/components/LinkInline.astro", void 0);

const $$Astro$6 = createAstro();
const $$ExperienceItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ExperienceItem;
  const { title, company, description, link, date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]"> <div class="relative pb-12 md:col-span-2"> <div class="sticky top-0"> <span class="text-yellow-400 -left-[42px] absolute rounded-full text-5xl">&bull;</span> <h3 class="text-xl font-bold text-yellow-400">${title}</h3> <h4 class="font-semibold text-xl text-gray-600 dark:text-white">${company}</h4> <time class="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">${date}</time> </div> </div> <div class="relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3"> ${description} ${link && renderTemplate`${renderComponent($$result, "LinkInline", $$LinkInline, { "href": link }, { "default": ($$result2) => renderTemplate`
Know more${" "}<svg xmlns="http://www.w3.org/2000/svg" class="w-5 icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <fragment> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M9 6l6 6l-6 6"></path> </fragment> </svg> ` })}`} </div> </div>`;
}, "C:/Users/54388/Desktop/portfolio-astro/src/components/ExperienceItem.astro", void 0);

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const EXPERIENCE = [
    {
      date: "November 2024 - Actualidad",
      title: "Comunity manganger y content creator",
      company: "Miriam Alfaro Peluquer\xEDa",
      description: "Manejo de redes sociales y cracion de contenido. Logre incrementar la cantidad de interacciones en publicaciones, aumento de seguidores y clientela en un 20% en pocas semanas."
    },
    {
      date: "Julio 2024",
      title: "Comunicadora digital?",
      company: "Mas Fe - La Iglesia de Jescristo de los Santos de los Ultimos Dias",
      description: "Reportage, fotografia y planificacion de post en la dedicacion de un Templo que es de gran importacia religiosa en el noroeste argentio alcanzando cientos de miles de visaulizaciones."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<ol class="relative mt-16"> ${EXPERIENCE.map((experience) => renderTemplate`<li class=""> ${renderComponent($$result, "ExperienceItem", $$ExperienceItem, { ...experience })} </li>`)} </ol>`;
}, "C:/Users/54388/Desktop/portfolio-astro/src/components/Experience.astro", void 0);

const $$Astro$5 = createAstro();
const $$Code = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Code;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 8l-4 4l4 4"></path><path d="M17 8l4 4l-4 4"></path><path d="M14 4l-4 16"></path></svg>`;
}, "C:/Users/54388/Desktop/portfolio-astro/src/components/icons/Code.astro", void 0);

const $$Astro$4 = createAstro();
const $$GitHub = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$GitHub;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>`;
}, "C:/Users/54388/Desktop/portfolio-astro/src/components/icons/GitHub.astro", void 0);

const $$Astro$3 = createAstro();
const $$NextJS = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$NextJS;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="256" height="256" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"> <defs> <linearGradient id="c" x1="55.633%" x2="83.228%" y1="56.385%" y2="96.08%"> <stop offset="0%" stop-color="#FFF"></stop> <stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop> </linearGradient> <linearGradient id="d" x1="50%" x2="49.953%" y1="0%" y2="73.438%"> <stop offset="0%" stop-color="#FFF"></stop> <stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop> </linearGradient> <circle id="a" cx="128" cy="128" r="128"></circle> </defs> <mask id="b" fill="#fff"> <use xlink:href="#a"></use> </mask> <g mask="url(#b)"> <circle cx="128" cy="128" r="128"></circle> <path fill="url(#c)" d="M212.634 224.028 98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128.433 128.433 0 0 0 13.524-10.418Z"></path> <path fill="url(#d)" d="M163.556 76.8h17.067v102.4h-17.067z"></path> </g> </svg>`;
}, "C:/Users/54388/Desktop/portfolio-astro/src/components/icons/NextJS.astro", void 0);

const $$Python = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!--?xml version="1.0" ?-->${maybeRenderHead()}<svg height="16px" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="16px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="_x32_67-python"><g><path d="M194.005,240.252h105.054c29.216,0,52.529-24.101,52.529-53.414V86.603    c0-28.525-24.002-49.871-52.529-54.691c-35.214-5.804-73.478-5.509-105.054,0.097c-44.462,7.87-52.527,24.298-52.527,54.693    v21.453H246.63v31.959H102.033c-30.591,0-57.349,18.394-65.709,53.315c-9.64,40.035-10.033,65.02,0,106.826    c7.476,31.085,25.28,53.314,55.872,53.314h36.101v-48.001C128.296,270.845,158.298,240.252,194.005,240.252L194.005,240.252z" style="fill:#347AB4;"></path><path d="M474.975,209.372c-7.575-30.395-21.935-53.315-52.527-53.315h-39.443v46.626    c0,36.199-30.692,66.691-65.71,66.691H212.24c-28.724,0-52.528,24.594-52.528,53.414v100.138    c0,28.524,24.788,45.246,52.528,53.413c33.247,9.737,65.215,11.509,105.054,0c26.462-7.675,52.529-23.116,52.529-53.413v-20.997    H264.867v-32.417h157.58c30.593,0,41.904-21.346,52.527-53.314C485.992,283.244,485.501,251.57,474.975,209.372L474.975,209.372z" style="fill:#FFCA1D;"></path><path d="M187.415,89.594c-10.479,0-18.975-8.591-18.975-19.164c0.094-10.668,8.496-19.259,18.975-19.259    c10.385,0,18.976,8.685,18.976,19.259C206.39,81.003,197.894,89.594,187.415,89.594z" style="fill:#FFFFFF;"></path><path d="M314.908,460.076c-10.479,0-18.976-8.591-18.976-19.164c0.095-10.668,8.496-19.259,18.976-19.259    c10.385,0,18.976,8.685,18.976,19.259C333.884,451.485,325.388,460.076,314.908,460.076z" style="fill:#FFFFFF;"></path></g></g><g id="Layer_1"></g></svg>`;
}, "C:/Users/54388/Desktop/portfolio-astro/src/components/icons/Python.astro", void 0);

const $$Astro$2 = createAstro();
const $$Tailwind = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Tailwind;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33"><g clip-path="url(#a)"><path fill="#38bdf8" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h54v32.4H0z"></path></clipPath></defs></svg>`;
}, "C:/Users/54388/Desktop/portfolio-astro/src/components/icons/Tailwind.astro", void 0);

const $$Astro$1 = createAstro();
const $$LinkButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LinkButton;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a target="_blank"${addAttribute(href, "href")} role="link" class="inline-flex bg-gray-100 text-gray-800 border-gray-300 items-center justify-center gap-2 px-3 py-2 space-x-2 text-base transition dark:text-white dark:bg-gray-800 border dark:border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/54388/Desktop/portfolio-astro/src/components/LinkButton.astro", void 0);

const $$Astro = createAstro();
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Link;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`;
}, "C:/Users/54388/Desktop/portfolio-astro/src/components/icons/Link.astro", void 0);

const $$Flet = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="16px" height="16px" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 285 285" xmlns:xlink="http://www.w3.org/1999/xlink"> <g id="Layer_x0020_1"> <metadata id="CorelCorpID_0Corel-Layer"></metadata> <rect fill="none" width="285" height="285" rx="9.03" ry="8.12"></rect> <path fill="#EE3167" d="M39.28 144.74c-0.85,-1.52 -0.66,-2.61 0.1,-4.13 31.41,-58.36 78.81,-94.15 138.53,-119.75 2.03,-0.86 5.04,1.52 4.31,3.65 -8.9,25.91 -15.18,51.13 -18.82,78.23 -3.32,24.97 -4.24,50.79 -0.87,77.77 3.56,30.59 10.88,55.99 19.68,83.36 0.98,3.05 -2.14,4.43 -4.51,3.26 -62.19,-30.61 -109.33,-70.65 -138.42,-122.39z"></path> <path fill="#0098DA" fill-opacity="0.639216" d="M224.53 198.59c-34.39,-10.79 -65.15,-29.06 -92.4,-53.2 -1.82,-1.62 -1.61,-3.87 0.03,-5.44 27.07,-25.88 57.79,-46.19 91.74,-60.56 2.99,-1.27 5.45,1.2 4.56,4.62 -9.62,36.91 -11.74,73.39 0.13,109.95 0.98,3.05 -1.47,5.44 -4.06,4.63z"></path> <path fill="#5ABAE7" d="M224.53 198.59c-22.64,-7.1 -43.71,-17.45 -63.24,-30.58 -1.35,-20.9 -1.47,-30.2 0.73,-53.26 19.19,-14.22 39.86,-26.04 61.88,-35.36 2.99,-1.27 5.45,1.2 4.56,4.62 -9.62,36.91 -11.74,73.39 0.13,109.95 0.98,3.05 -1.47,5.44 -4.06,4.63z"></path> </g> </svg>`;
}, "C:/Users/54388/Desktop/portfolio-astro/src/components/icons/Flet.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const TAGS = {
    NEXT: {
      name: "Next.js",
      class: "bg-black text-white",
      icon: $$NextJS
    },
    TAILWIND: {
      name: "Tailwind CSS",
      class: "bg-[#003159] text-white",
      icon: $$Tailwind
    },
    PYTHON: {
      name: "Python",
      class: "bg-gray-800 text-white",
      icon: $$Python
    },
    FLET: {
      name: "Flet",
      class: "bg-gray-800 text-white",
      icon: $$Flet
    }
  };
  const PROJECTS = [
    {
      title: "PokeDex - Famous instrument used on the Pokemon anime",
      description: "Recreation of the iconic artefact used on the anime Pokemon with interactive buttons.",
      github: "https://github.com/exekyelmurga/pokedex",
      image: "/projects/pokedex.webp",
      tags: [TAGS.PYTHON, TAGS.FLET],
      link: ""
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-y-16"> ${PROJECTS.map(({ image, title, description, tags, link, github }) => renderTemplate`<article class="flex flex-col space-x-0 space-y-8 md:flex-row md:space-x-8 md:space-y-0"> <div class="w-full md:w-1/2"> <div class="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50"> <img alt="Pokedex example" class="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105 hover:scale-105" loading="lazy"${addAttribute(image, "src")}> </div> </div> <div class="w-full md:w-1/2 md:max-w-lg"> <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-100"> ${title} </h3> <div class="flex flex-wrap mt-2"> <ul class="flex flex-row mb-2 gap-x-2"> ${tags.map((tag) => renderTemplate`<li> <span${addAttribute(`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2`, "class")}> ${renderComponent($$result, "tag.icon", tag.icon, { "class": "size-4" })} ${tag.name} </span> </li>`)} </ul> <div class="mt-2 text-gray-700 dark:text-gray-400">${description}</div> <footer class="flex items-end justify-start mt-4 gap-x-4"> ${github && renderTemplate`${renderComponent($$result, "LinkButton", $$LinkButton, { "href": github }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GitHub", $$GitHub, { "class": "size-6" })}
Code
` })}`} ${link && renderTemplate`${renderComponent($$result, "LinkButton", $$LinkButton, { "href": link }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Link", $$Link, { "class": "size-4" })}
Preview
` })}`} </footer> </div> </div> </article>`)} </div>`;
}, "C:/Users/54388/Desktop/portfolio-astro/src/components/Projects.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sofia Guadalupe Hoyos - Comunity manager y comunicadora digital", "description": "Contrata a Sofia para impulsar tu emprendimiento, negocio o empresa. Graduada con honores." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-4"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "py-16 md:py-36" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, {})} ` })} <div class="space-y-24"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "experience" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TitleSection", $$TitleSection, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Briefcase", $$Briefcase, { "class": "size-8" })}
Experiencia profesional
` })} ${renderComponent($$result3, "Experience", $$Experience, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "projects" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TitleSection", $$TitleSection, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CodeIcon", $$Code, { "class": "size-7" })}
Proyectos
` })} ${renderComponent($$result3, "Projects", $$Projects, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, {}, { "default": ($$result3) => renderTemplate`Sobre mi` })} </div> </main> ` })}`;
}, "C:/Users/54388/Desktop/portfolio-astro/src/pages/index.astro", void 0);

const $$file = "C:/Users/54388/Desktop/portfolio-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
