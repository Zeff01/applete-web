import NavbarLanding from "@/components/NavbarLanding";
import { Button } from "@/components/ui/button";
import { FaQuoteLeft } from "react-icons/fa";
import { FiChevronsUp } from "react-icons/fi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowLeft, ArrowRight, PlayIcon } from "lucide-react";
import { BsGooglePlay } from "react-icons/bs";
import { PiAppleLogoFill } from "react-icons/pi";

const Landing = () => {
  return (
    <div className="relative antialiased isolate border-red-500 overflow-x-clip">
      <img
        src="landing/hero-background.webp"
        className="absolute object-cover inset-0 w-full h-dvh -z-[2]"
        alt="hero-background"
      />
      <div className="absolute -z-[1] bg-gradient-to-b from-transparent  to-custom-background top-0 w-full h-dvh" />
      {/* LandingPage Main Wrapper */}
      <main className="max-w-[calc(1600px+2rem)] px-4 mx-auto flex w-full flex-col">
        <Hero />
        <WhyApplete />
        <MoreThanJustAnApp />
        <InfiniteScrollText />
        <Discorver />
        <Testimonials />
        <AppPreview />
      </main>
      <Effortless />
      <Footer />
    </div>
  );
};

const Hero = () => {
  return (
    <section className="h-dvh max-h-[75rem] w-full bg-transparent relative">
      <NavbarLanding />
      <img
        src="landing/figure1.webp"
        className="absolute object-cover translate-x-[100px] translate-y-[20px] aspect-[1.585] w-[50vw] max-w-[824px]"
        alt="figure1"
      />
      <div className="absolute right-0 bottom-0 translate-y-[-490px] ">
        <p className="relative">
          <span className="flex font-medium text-3xl ">
            <FaQuoteLeft className="size-4 mr-2" />
            Vibrant Community
          </span>
          <span className="ml-6 font-thin text-custom-text/50 text-2xl">
            Connect with the Applete Community
          </span>
        </p>
      </div>
      <img
        src="landing/figure2.webp"
        className="absolute object-cover bottom-0 translate-y-[-61px] right-0 w-[50vw] max-w-[792px]"
        alt="figure2"
      />
      <div className="absolute bottom-[94px] left-0">
        <p className="text-3xl">
          Join exciting events and{" "}
          <span className="text-green-600">
            make <br /> new memories
          </span>{" "}
          today!
        </p>
        <div className="flex mt-4 items-center">
          <Button className="rounded-full text-base p-4">
            Start Your Adventure
          </Button>
          <FiChevronsUp className="ml-2 size-8" />
        </div>
        <div className="flex mt-4">
          <img src="landing/playstore.png" alt="playstore-download" />
          <img src="landing/appstore.png" alt="appstore-download" />
        </div>
      </div>
      <p className="absolute bottom-[57px] left-1/2 -translate-x-1/2">
        Unlock Your Fun
      </p>
    </section>
  );
};

const WhyApplete = () => {
  const landingCards = [
    {
      name: "User-friendly Interface",
      description:
        "Simple and intuitive design that makes organizing and booking events a breeze.",
    },
    {
      name: "Access Anytime, Anywhere",
      description:
        "Available on both iOS and Android, so you can manage your sports life no matter where you are.",
    },
    {
      name: "Community Focused",
      description:
        "Build and grow your sports community by connecting with others, sharing events, and chatting directly.",
    },
    {
      name: "Secure Payment System",
      description:
        "Enjoy seamless transactions with our integrated payment solutions for all court bookings.",
    },
  ];
  return (
    <section className="py-16">
      <article className="flex justify-between">
        <h1 className="uppercase text-6xl ">
          Why applete stands out <br /> from the rest
        </h1>
        <p className="w-[558px] text-2xl">
          A Movement where convenience meets community, and where athletes,
          teams, and courts come together to make every match count.
        </p>
      </article>
      <img src="landing/figure3.webp" alt="figure3" className="mx-auto mt-20" />
      <section className="flex gap-5 mt-16 flex-wrap flex-row  justify-center">
        {landingCards.map((cardItem, index) => (
          <article
            className="bg-custom-backdrop p-7 rounded-xl w-full flex-1 min-w-[350px] max-w-[600px]"
            key={`feature-${index}`}
          >
            <h1 className="text-6xl text-white/50">{`${index + 1 < 10 ? "0" : ""}${index + 1}`}</h1>
            <h3 className="text-2xl font-bold mt-7">{cardItem.name}</h3>
            <p className="text-white/50 text-xl ">{cardItem.description}</p>
          </article>
        ))}
      </section>
    </section>
  );
};

const MoreThanJustAnApp = () => {
  return (
    <section className="bg-custom-primary p-10 rounded-3xl">
      <figure className="flex relative gap-14 flex-col lg:flex-row">
        <img src="landing/figure4.webp" alt="figure4" />
        <h1 className="font-bold text-[80px] leading-none self-end mb-8 ">
          <span className="text-neutral-800">More Than Just an App,</span>{" "}
          <br />
          It{"'"}s Your Sports Lifestyle
        </h1>
      </figure>
      <figure className="flex flex-col 2xl:flex-row text-right text-3xl gap-10">
        <article className="self-end mt-4 2xl:mt-0">
          <p>
            Applete is here to enhance your sports experience, whether you
            {"’"}re looking to stay organized, connect with others, or simply
            enjoy the game.
          </p>
          <div className="flex items-center gap-2 float-right mt-4">
            <img
              src="agreement.svg"
              alt="agreement"
              className="bg-white p-2 rounded-full"
            />
            <Button className="bg-neutral-800 p-4 px-8 rounded-full">
              Sports Community That Grows <br />
              With You
            </Button>
          </div>
        </article>
        <img src="landing/figure5.webp" alt="figure5" />
      </figure>
    </section>
  );
};

const InfiniteScrollText = () => {
  const designText = ["Innovative", "Modern", "Convenient", "Connected"];
  return (
    <div className="animate_infinite_scrolling flex w-[max-content] items-center gap-x-4 py-16">
      {[...designText, ...designText, ...designText].map((text, index) => {
        return (
          <div className="flex items-center gap-x-4" key={`text-${index}`}>
            {index > 0 && (
              <p className="text-custom-primary font-extrabold text-4xl">/</p>
            )}
            <h1 className="text-[128px] font-bold">{text}</h1>
          </div>
        );
      })}
    </div>
  );
};

const Discorver = () => {
  const accordion = [
    {
      name: "Users",
      description: [
        {
          name: "Create Sports Events",
          sub: "Quickly create and organize events with a simple interface.",
        },
        {
          name: "Book Courts with Ease",
          sub: "Reserve courts based on location, availability, and price.",
        },
        {
          name: "Manage Your Schedule",
          sub: "Use our built-in calendar to view and track upcoming events and bookings",
        },
        {
          name: "Connect with Teams",
          sub: "Communicate with your teammates and stay connected to your sports community.",
        },
      ],
    },
    {
      name: "Court Owners",
      description: [],
    },
    {
      name: "Terms & Clubs",
      description: [],
    },
  ];
  return (
    <section>
      <h1 className="text-4xl font-light">
        Discover the <span className="text-custom-primary">Key Features</span>{" "}
        Designed to <br />
        <span className="text-custom-green font-medium text-5xl">
          Enhance Your Experience!
        </span>
      </h1>
      <article className="mt-8">
        <Accordion
          defaultValue={accordion[0]!.name}
          type="single"
          collapsible
          className="space-y-6"
        >
          {accordion.map((item) => {
            return (
              <AccordionItem
                value={item.name}
                key={item.name}
                className="border-b border-t  border-custom-backdrop/60"
              >
                <AccordionTrigger className="text-4xl px-6 hover:no-underline">
                  {item.name}
                </AccordionTrigger>
                {item.description.map((desc) => (
                  <AccordionContent
                    key={desc.name}
                    className="py-8 bg-custom-backdrop/10"
                  >
                    <article className="flex flex-col w-full max-w-[694px] px-6">
                      <h1 className="text-4xl">{desc.name}</h1>
                      <p className="text-white/50 mt-2 text-2xl">{desc.sub}</p>
                    </article>
                  </AccordionContent>
                ))}
              </AccordionItem>
            );
          })}
        </Accordion>
      </article>
    </section>
  );
};

const Testimonials = () => {
  const testiimonials = [
    {
      name: "Lauryn Hubbard",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Recusandae, fuga pariatur quisquam qui, necessitatibus doloremque consequuntur harum maiores veritatis dolor placeat officiis eaque quos. Adipisci, accusamus. At, consequatur corrupti. Natus.",
      image: "landing/testimonial-1.png",
    },

    {
      name: "Romeo West",
      image: "landing/testimonial-2.png",
      description:
        "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text",
    },
    {
      name: "Lennon Peck",
      image: "landing/testimonial-3.png",
      description:
        "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text",
    },
    {
      name: "Mitchell Burnett",
      image: "landing/testimonial-4.png",
      description:
        "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text",
    },
    {
      name: "Maia Fuller",
      image: "landing/testimonial-5.png",
      description:
        "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text",
    },
    {
      name: "Grayson Robinson",
      image: "landing/testimonial-6.png",
      description:
        "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text",
    },
  ];
  return (
    <section className="py-32">
      <h1 className="text-6xl font-normal capitalize">
        See What Our <br />
        Happy Users are saying about us!
      </h1>
      <article className="grid grid-cols-3 gap-3 mt-12">
        {testiimonials.map((item, i) => (
          <div
            className="rounded-xl bg-custom-backdrop py-6 px-8 flex flex-col h-[381px]"
            key={`${item.name}-${i}`}
          >
            <img
              src={item.image}
              alt="testimonial-1-profile"
              className="size-16"
            />
            <h3 className="mt-2 font-medium text-xl">{item.name}</h3>
            <p className="mt-2 text-lg leading-tight font-light">
              {item.description}
            </p>
            <div className="flex justify-between items-center mt-auto">
              <p className="text-sm text-custom-gray">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="font-medium">Applete</p>
            </div>
          </div>
        ))}
      </article>
      <div className="flex float-right mt-6 gap-x-8 items-center">
        <span className="flex items-center cursor-pointer">
          <ArrowLeft className="mr-2 size-4" />
          Previous
        </span>
        <span className="flex items-center cursor-pointer">
          Next
          <ArrowRight className="ml-2 size-4" />
        </span>
      </div>
    </section>
  );
};

const AppPreview = () => {
  return (
    <section className="py-16 ">
      <div className="flex items-center w-full max-w-7xl mx-auto ">
        <figure className="relative">
          <img
            src="landing/app-preview.png"
            alt="app-preview-phone"
            className="brightness-50"
          />
          <span className="size-16 flex items-center justify-center rounded-full bg-custom-backdrop opacity-80 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:bg-custom-background transition-colors">
            <PlayIcon />
          </span>
        </figure>
        <div className="flex-1 px-12">
          <h1 className="[text-wrap:balance] text-6xl leading-snug">
            Your all-in-one platform for connecting, creating, and managing
            events
          </h1>
          <p className="[text-wrap:balance] mt-8 text-lg font-light">
            With Applete, you can join or create exciting events, manage
            everything seamlessly, and engage with like-minded people through
            community clubs.{" "}
          </p>
          <p className="mt-8 [text-wrap:balance] text-lg font-light">
            Share posts, connect with others, and enjoy a secure online payment
            system for a smooth experience. Whether you're planning an event or
            joining one, Applete makes it easy, safe, and fun!
          </p>
        </div>
      </div>
    </section>
  );
};

const Effortless = () => {
  return (
    <section className="pt-32 pb-44 bg-texture">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-7xl font-bold tracking-tight text-center">
          Effortless.
        </h1>
        <p className="text-center text-lg font-light mt-8">
          Join the Applete community now and start organizing your sports events
          effortlessly. Register today to book courts, manage schedules, and
          stay connected with your team, all while enjoying a seamless
          experience at your fingertips!
        </p>
        <Button
          className="mt-10 rounded-full py-3 bg-white text-custom-background"
          variant={"secondary"}
          size={"lg"}
        >
          Reginster Online
        </Button>
        <p className="mt-6">OR</p>
        <p className="mt-6">Download it on</p>
        <div className="flex items-center gap-x-8 mt-6">
          <div className="flex items-center font-semibold">
            <BsGooglePlay className="mr-2 size-8" />
            Goole Play
          </div>
          <div className="flex items-center font-semibold">
            <PiAppleLogoFill className="mr-2 size-8" />
            App Store
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-28 bg-custom-backdrop/20 rounded-t-3xl border border-custom-backdrop relative overflow-hidden isolate antialiased">
      <h1 className="uppercase text-[15rem] stroked-text font-bold  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-[1]">
        APPLETE
      </h1>
      <div className="flex  w-full max-w-7xl mx-auto justify-between items-center gap-16">
        <img src="applete-logo-row.png" alt="applete-logo-row" />
        <div className="flex items-center gap-24">
          <ul className="flex flex-col gap-2 text-xl">
            <li>About App</li>
            <li>Support</li>
            <li>Reviews</li>
            <li>Tutorial</li>
            <li>Developer</li>
          </ul>
          <ul className="flex flex-col gap-2 text-xl">
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
          </ul>
          <ul className="flex flex-col gap-2 text-xl">
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl">Cookies Policy</h3>
          <div className="flex items-center gap-x-4 mt-2">
            <Button className="rounded-full">Accept</Button>
            <p className="text-custom-primary font-light text-sm">
              Find Out More
            </p>
          </div>
          <p className="mt-2">&copy; 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Landing;
