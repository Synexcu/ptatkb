import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderSlot, j as renderComponent, k as renderHead } from '../astro_D_VqFNfE.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                          */
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { $ as $$Image } from './generic_88yurZGm.mjs';
import { Facebook, Instagram, Twitter, Linkedin, ChevronRight, User } from 'lucide-react';
import { jsx } from 'react/jsx-runtime';
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const $$Astro$5 = createAstro();
const $$MaxWidthWrapper = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$MaxWidthWrapper;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn(`mx-auto w-full max-w-screen-xl px-2.5 md:px-20`, className), "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/realg/Desktop/Work/testProject/ptatkb/src/components/MaxWidthWrapper.astro", void 0);

const $$Astro$4 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<div class="bg-second text-first"> <div class="container flex items-center justify-between py-12"> <div class="flex gap-4"> <div> ${renderComponent($$result, "Image", $$Image, { "src": "/logo.png", "width": 300, "height": 100, "alt": "logo" })} </div> </div> <div class="flex gap-4"> <div>About</div> <div>Service</div> <div>Project</div> <div>Testimonies</div> <div>Contact</div> </div> <div class="flex gap-4"> ${renderComponent($$result, "Facebook", Facebook, {})} ${renderComponent($$result, "Instagram", Instagram, {})} ${renderComponent($$result, "Twitter", Twitter, {})} ${renderComponent($$result, "Linkedin", Linkedin, {})} </div> </div> </div>`;
}, "C:/Users/realg/Desktop/Work/testProject/ptatkb/src/components/Footer.astro", void 0);

const $$Astro$3 = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Navbar;
  return renderTemplate`${maybeRenderHead()}<nav class="h-20 bg-third z-30 shadow-lg w-full fixed"> ${renderComponent($$result, "MaxWidthWrapper", $$MaxWidthWrapper, { "className": "h-full" }, { "default": ($$result2) => renderTemplate` <div class="flex justify-between items-center h-full"> <div class="flex justify-center items-center"> ${renderComponent($$result2, "Image", $$Image, { "src": "/logo.png", "width": 300, "height": 300, "alt": "logo" })} </div> <div class="flex gap-8"> <div>About</div> <div>Service</div> <div>Project</div> <div>Testimonies</div> <div>Contact</div> </div> </div> ` })} </nav>`;
}, "C:/Users/realg/Desktop/Work/testProject/ptatkb/src/components/Navbar.astro", void 0);

const $$Astro$2 = createAstro();
const $$FloatSocials = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FloatSocials;
  return renderTemplate`${maybeRenderHead()}<div class="group fixed bottom-5 right-5 p-1  flex items-end justify-end w-16 h-48 "> <!-- main --> <div class="text-white shadow-xl flex items-center justify-center p-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 z-50 absolute"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5 group-hover:scale-0 transition  transition-all duration-[0.6s]" class="bi bi-chat-dots-fill" viewBox="0 0 16 16"> <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"></path> </svg> </div> <!-- main
    <div class = "text-white shadow-xl flex items-center justify-center p-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 absolute z:50">
        <svg xmlns="http://www.w3.org/2000/svg" class="scale-100" width="16" height="16" fill="currentColor" class="w-5 h-5 group-hover:scale-100 transition  transition-all duration-[0.6s]" class="bi bi-emoji-smile" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
        </svg>
    </div> --> <!-- sub mail --> <div class="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-16  flex  p-5 hover:p-5 bg-red-400 hover:bg-red-400  text-white"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" stroke-width="1.5" class="w-5 h-5" class="bi bi-envelope-at" viewBox="0 0 16 16"> <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"></path> <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"></path> </svg> </div> <!-- sub whatsapp --> <div class="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-32  flex  p-5 hover:p-5 bg-green-400 hover:bg-green-500  text-white"> <link href="wa.me/6281351552541"> <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" stroke-width="1.5" stroke="none" class="w-5 h-5" class="bi bi-whatsapp"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path> </svg> </div> <!-- sub call --> <div class="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-48  flex  p-5 hover:p-5 bg-blue-400 hover:bg-blue-500  text-white"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5" class="bi bi-telephone" viewBox="0 0 16 16"> <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path> </svg> </div> </div>`;
}, "C:/Users/realg/Desktop/Work/testProject/ptatkb/src/components/FloatSocials.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "FloatSocials", $$FloatSocials, {})} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/realg/Desktop/Work/testProject/ptatkb/src/layouts/Layout.astro", void 0);

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Selamat datang di PT Anugrah Teknologi Kecerdasan Buatan" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <!-- Hero --> <div class="bg-[url('/alt.jpg')] bg-no-repeat bg-right opacity-85"> <!-- <div class="bg-[url('/alt.png')] bg-no-repeat bg-right"> --> ${renderComponent($$result2, "MaxWidthWrapper", $$MaxWidthWrapper, { "className": "min-h-screen pt-20 flex" }, { "default": ($$result3) => renderTemplate` <div class="w-[50%] h-[calc(100vh-5rem)] pt-20 flex flex-col justify-center gap-4"> <div class="text-6xl text-white ">PT. Anugrah Teknologi Kecerdasan Buatan</div> <div class="text-white">
Welcome to PT. Anugrah Teknologi Kecerdasan Buatan (PT. ATKB)!
          We are a forward-thinking company dedicated to advancing the field of Artificial Intelligence (AI) 
          and empowering businesses and individuals with cutting-edge solutions. 
          Let’s dive into what makes us unique:
</div> <div> ${renderComponent($$result3, "Button", Button, { "className": "bg-first hover:bg-first/50" }, { "default": ($$result4) => renderTemplate`
More About Us
` })} </div> </div> ` })} </div> <!-- About Us --> <div class="min-h-screen flex items-center justify-center"> <!-- <Image
        src={"/blob-haikei.png"}
        width={750}
        height={500}
        alt="blob"
        class="flex-shrink-0"
      /> --> ${renderComponent($$result2, "Image", $$Image, { "src": "/businesswork.jpg", "class": "flex-shrink-0 object-cover h-full", "width": 600, "height": 200, "alt": "Image by gpointstudio on Freepik", "class": "flex-shrink-0" })} <!-- <div class="grid grid-cols-5 grid-rows-2 grid-flow-col bg-black">
        <div class="font-bold text-4xl col-span-1 row-span-1 bg-red-400">About Us</div>
        <div class="col-span-3 row-span-1 bg-blue-400">
          We are a forward-thinking IT consulting company based in Indonesia,
          specializing in cutting-edge artificial intelligence (AI) technologies.
          <br />
          Our mission is to empower businesses and individuals by harnessing the power of A
          to drive innovation, efficiency, and growth.
        </div>
      </div> --> <div class="flex flex-col"> <div class="font-bold text-4xl">About Us</div> <br> <div>
We are a forward-thinking IT consulting company based in Indonesia,
          specializing in cutting-edge artificial intelligence (AI) technologies.
<br>
Our mission is to empower businesses and individuals by harnessing the power of A
          to drive innovation, efficiency, and growth.
</div> </div> </div> <!-- Carousel --> <div class="min-h-screen flex items-center bg-second"> ${renderComponent($$result2, "MaxWidthWrapper", $$MaxWidthWrapper, { "className": "flex flex-col gap-12" }, { "default": ($$result3) => renderTemplate` <div class="flex flex-col"> <div class="text-first text-xl">Services</div> <div class="font-bold text-4xl">Provided Services</div> </div> <div class="grid grid-cols-3 gap-14"> <div class="bg-white flex flex-col gap-4 px-8 py-16 rounded-2xl items-center"> <div class="w-20 h-20"> <img src="/website.svg"> </div> <div class="text-first text-2xl font-bold text-center">
Web Development
</div> <div class="text-center">
Our skilled team of developers creates dynamic, user-friendly websites tailored to your specific needs.
</div> </div> <div class="bg-white flex flex-col gap-4 px-8 py-16 rounded-3xl items-center"> <div class="w-20 h-20"> <img src="/courses.svg"> </div> <div class="text-first text-2xl font-bold text-center">
IT Training
</div> <div class="text-center">
We offer comprehensive IT training programs, 
              equipping learners with the skills needed to thrive in a digital world.
</div> </div> <div class="bg-white flex flex-col gap-4 px-8 py-16 rounded-3xl items-center"> <div class="w-20 h-20"> <img src="/research.svg"> </div> <div class="text-first text-2xl font-bold text-center">
Research
</div> <div class="text-center">
Our dedicated research team delves into the latest AI advancements,
              exploring novel algorithms, applications, and breakthroughs.
              We collaborate with industry partners, academic institutions to push the boundaries of what AI can achieve.
</div> </div> <div class="bg-white flex flex-col gap-4 px-8 py-16 rounded-3xl items-center"> <div class="w-20 h-20"> <img src="/journal.svg"> </div> <div class="text-first text-2xl font-bold text-center">
Journal Publishing
</div> <div class="text-center">
We provide the support to help you Publish your hard-researched Journal and make it available to the world.
</div> </div> <div class="bg-white flex flex-col gap-4 px-8 py-16 rounded-3xl items-center"> <div class="w-20 h-20"> <img src="/education.svg"> </div> <div class="text-first text-2xl font-bold text-center">
Education Training
</div> <div class="text-center">
We provide training and bootcamps especially for IT educations.
              We are hoping to increase the amount of IT workforce and quality by doing this.
</div> </div> <div class="bg-white flex flex-col gap-4 px-8 py-16 rounded-3xl items-center"> <div class="w-20 h-20"> <img src="/thesis.svg"> </div> <div class="text-first text-2xl font-bold text-center">
Thesis Consultation
</div> <div class="text-center">
Navigating the complexities of thesis writing?
              Our experienced consultants provide guidance, feedback, and support throughout the thesis process.
</div> </div> </div> <div class="w-full flex justify-center"> ${renderComponent($$result3, "Button", Button, { "className": "bg-first hover:bg-first/50 rounded-full px-12" }, { "default": ($$result4) => renderTemplate`
More Details
` })} </div> ` })} </div> <!-- Projects --> <div class="h-screen flex flex-row"> <div class="flex-[65] bg-first px-12 py-20"> <div class="flex flex-col gap-4"> <div class="text-7xl text-white">Our Projects</div> <div class="text-white">
Throughout our journey, we’ve had the privilege of collaborating on various exciting ventures.
            From innovative startups to established brands, our portfolio reflects our commitment to excellence.
            Here’s a glimpse of some remarkable projects:
</div> <div> ${renderComponent($$result2, "Button", Button, { "className": "bg-second hover:bg-second/50 text-first flex justify-between" }, { "default": ($$result3) => renderTemplate` <div>Read More</div> ${renderComponent($$result3, "ChevronRight", ChevronRight, {})} ` })} </div> </div> </div> <div class="flex-[127]"> <div class="px-32 h-full"> <div class="flex-col flex gap-8 justify-center h-full"> <div class="flex gap-4"> <div class="bg-first px-8 py-6 rounded-md text-xl text-white text-center h-fit">
Sep <br> 2023
</div> <div class="flex-shrink-0 rounded-md"> ${renderComponent($$result2, "Image", $$Image, { "src": "/PuskesmasKertasemaya.png", "alt": "project1", "width": 125, "height": 500, "class": "rounded-md" })} </div> <div class="flex flex-col gap-2"> <div class="text-first text-2xl font-semibold">
PUSKESMAS KERTASEMAYA
</div> <div class="flex flex-1">
At UPTD Puskesmas Kertasemaya, we’ve crafted a dynamic website with a clear mission: to enhance accessibility to essential health information for our local community.
                  Our commitment lies in digitizing crucial services, ensuring residents can easily access our daily schedules, preventive measures, and community updates.
</div> </div> </div> <div class="flex gap-4"> <div class="bg-first px-8 py-6 rounded-md text-xl text-white text-center h-fit">
Nov <br> 2023
</div> <div class="flex-shrink-0 rounded-md"> ${renderComponent($$result2, "Image", $$Image, { "src": "/PuskesmasTerisi.png", "alt": "project1", "width": 125, "height": 500, "class": "rounded-md" })} </div> <div class="flex flex-col gap-2"> <div class="text-first text-2xl font-semibold">
PUSKESMAS TERISI
</div> <div class="flex flex-1">
Welcome to UPTD Puskesmas Terisi! Our commitment lies in bridging the gap between healthcare and technology, ensuring that essential health information reaches our local community with ease.
<br> <br>
At Puskesmas Terisi, we believe that health should be accessible to all,
                  regardless of physical boundaries. Our digital platform serves as a beacon,
                  guiding residents toward better well-being.
</div> </div> </div> <div class="flex gap-4"> <div class="bg-first px-8 py-6 rounded-md text-xl text-white text-center h-fit">
01 <br> Aug
</div> <div class="flex-shrink-0 rounded-md"> ${renderComponent($$result2, "Image", $$Image, { "src": "/project3.jpeg", "alt": "project1", "width": 125, "height": 500, "class": "rounded-md" })} </div> <div class="flex flex-col gap-2"> <div class="text-first text-2xl font-semibold">
LOREM IPSUM SI AMET
</div> <div class="flex flex-1">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima repellat, perspiciatis similique ipsam illo ipsum eum
                  quam at, id provident aspernatur eaque numquam quidem sunt
                  veniam soluta hic. Autem, minima?
</div> </div> </div> </div> </div> </div> </div> <!-- Testimonial --> <div class="min-h-screen bg-[#C6D7E8]"> <div class="container py-12 flex flex-col gap-12"> <div class="flex flex-col"> <div class="text-[#326BA4] font-bold text-6xl">Testimonials</div> <div class="flex justify-between"> <div class="flex-1 text-xl">
SEE WHAT OUR CUSTOMERS <br> THINK ABOUT US
</div> <div class="flex-1 text-right text-sm">
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
              provident optio quibusdam quisquam quas distinctio pariatur
              maiores dignissimos, et a odit recusandae fugiat reprehenderit,
              accusamus at asperiores? Corporis, aperiam tenetur?
</div> </div> </div> <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8"> <div class="flex flex-col bg-[#DFE6EC] rounded-md p-8 gap-4 border-b-8 border-[#326BA4] shadow-2xl"> <div class="text-[#326BA4] text-2xl font-bold">
&quot;LOREM UPSUM SI AMET&quot;
</div> <div class="text-justify text-sm">
Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis ab nostrum minus repudiandae, libero, voluptates
              dicta ullam magni atque laborum consequuntur dolorem voluptatibus
              cumque enim totam porro inventore numquam architecto!
</div> <div class="flex gap-4"> <div class="rounded-full bg-white p-2"> ${renderComponent($$result2, "User", User, {})} </div> <div class="flex items-center">Kaede Nakamura</div> </div> </div> <div class="flex flex-col bg-[#DFE6EC] rounded-md p-8 gap-4 border-b-8 border-[#326BA4] shadow-2xl"> <div class="text-[#326BA4] text-2xl font-bold">
&quot;LOREM UPSUM SI AMET&quot;
</div> <div class="text-justify text-sm">
Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis ab nostrum minus repudiandae, libero, voluptates
              dicta ullam magni atque laborum consequuntur dolorem voluptatibus
              cumque enim totam porro inventore numquam architecto!
</div> <div class="flex gap-4"> <div class="rounded-full bg-white p-2"> ${renderComponent($$result2, "User", User, {})} </div> <div class="flex items-center">Kaede Nakamura</div> </div> </div> <div class="flex flex-col bg-[#DFE6EC] rounded-md p-8 gap-4 border-b-8 border-[#326BA4] shadow-2xl"> <div class="text-[#326BA4] text-2xl font-bold">
&quot;LOREM UPSUM SI AMET&quot;
</div> <div class="text-justify text-sm">
Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis ab nostrum minus repudiandae, libero, voluptates
              dicta ullam magni atque laborum consequuntur dolorem voluptatibus
              cumque enim totam porro inventore numquam architecto!
</div> <div class="flex gap-4"> <div class="rounded-full bg-white p-2"> ${renderComponent($$result2, "User", User, {})} </div> <div class="flex items-center">Kaede Nakamura</div> </div> </div> </div> <div class="flex w-full justify-center"> ${renderComponent($$result2, "Button", Button, { "className": "bg-[#326BA4] hover:bg-[#326BA4]/50 flex justify-between" }, { "default": ($$result3) => renderTemplate` <div>Read More</div> ${renderComponent($$result3, "ChevronRight", ChevronRight, {})} ` })} </div> </div> </div> <!-- Contact --> <div class="grid grid-rows-5 grid-cols-5 items-center gap-8 py-12 bg-[url('/indo.jpeg')] bg-cover text-white"> <div class="text-4xl font-bold row-span-1 col-span-1 col-start-3 text-center bg-black">Contact Us</div> <div class="row-span-1 col-span-1 bg-red-500">Hello</div> <!-- <div class="text-4xl font-bold">Contact Us</div>
      <Input
        placeholder="Name"
        className={cn(
          "max-w-lg bg-transparent border-t-0 border-x-0 rounded-none border-b-2 border-white placeholder:text-white focus-visible:ring-0 focus-visible:ring-offset-0"
        )}
      />
      <Input
        placeholder="Email"
        className="max-w-lg bg-transparent border-t-0 border-x-0 rounded-none border-b-2 border-white placeholder:text-white focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      <Textarea
        placeholder="Message"
        rows={5}
        className="max-w-lg bg-transparent rounded-none border-2 border-white placeholder:text-white focus-visible:ring-0 focus-visible:ring-offset-0"
      /> --> </div> </main> ` })}`;
}, "C:/Users/realg/Desktop/Work/testProject/ptatkb/src/pages/index.astro", void 0);

const $$file = "C:/Users/realg/Desktop/Work/testProject/ptatkb/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
