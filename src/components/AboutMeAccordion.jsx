import React, { useState } from "react";
import Button2 from "./Button2";

export default function AboutMeAccordion() {
  const aboutMeData = [
    {
      title: "About Me",
      intro: "Hello, I'm Loreli!",
      render: "paragraph",
      midRender: " ",
      block1:
        "I am a Junior Full Stack Developer and an experienced Digital Marketer based in Sydney, Australia.",
      block2:
        "I started my career in digital marketing and ran branding and performance driven campaigns in the past 10 years. Through out my career, I worked closely with development teams on projects and always found it fascinating to see tech and digital experiences as a whole created from the ground up. Fast forward to today, I took the big leap into software development as a late career changer and highly enjoy the challenge!",
      block3:
        "Outside my professional hat, I am a wife and mum to a beautiful baby girl (now almost 2 years old!) and two fur babies. Our family live an active lifestyle and enjoy the sea, surf, and sand that the land down under has to offer! 👨‍👩‍👧☀️🏄‍♀️🐶",
      block4: " ",
      block5: " ",
      block6: " ",
    },
    {
      title: "Life As A Dev",
      intro: "Developer - Digital Marketer Hybrid",
      render: "paragraph",
      midRender: "true",
      block1:
        "My previous roles in digital marketing have been pivotal in the way I operate today. I am able to carry with me the learnings I have had into my software development journey and it has helped me a lot.",
      block2:
        "🔎 Through the lens of a marketer, I am able to visualise what it means to have a relevant, enjoyable and optimised consumer journey online. If there is one thing I have learned is that consumers are impatient - thus, I am highly aware that projects not only need to be visually appealing but be optimised efficiently in the way it is built.",
      block3:
        "📅 My project management skills allow me to work more efficiently and effectively in the way I plan my development projects now. This is especially useful as I entered the development world, my planning & preparation helps me focus on the most important now - honing my expertise as a Junior Developer.",
      block4:
        "🤝🏽 My experience working with teams and independently has taught me the immeasurable value of collaboration. What I especially love about the dev community is the support and knowledge sharing between peers - it is so refreshing! With that, I welcome constructive feedback in my work and look forward to collaborating more with peers. ",
      block5:
        "📓 It has definitely re-wired the way I think and made my problem-solving journey more interesting. Somehow, I find it enjoyable to look through other people’s source code and learn how things work. This helps me code better and improve my productivity.",
      block6:
        "Life as a dev did not come without hard work - it is the most challenging and rewarding but I am enjoying every good (and bad) of it. It has been an interesting journey so far - delving into software development puts my growth to an upward trajectory!🚀",
    },
    {
      title: "(FUN) Facts",
      intro: "Some Random Facts About Me!",
      render: "grid",
      midRender: " ",
      block1:
        "📍 I lived in Melbourne, Gold Coast and Sydney in the past 10 years. I am orginally from the Philippines, and the tropical lady in me loves the sun and see Sydney as home in the foreseeable future.",
      block2:
        "🍀 I love coriander and can have it with almost any meal. I was once given a bouquet of coriander (instead of a flower) as birthday gift.",
      block3:
        "☕ I only ever started drinking coffee in the past 20 months - the same age as my daughter.",
      block4:
        "🐶 Funny coincidence, both our rescue doggos were originally named Luna. Imagine calling two Lunas at home, that would be chaos! We've renamed the younger one to Shadow.",
      block5:
        "🧃 I have always been so drawn to a good packaging design. I highly enjoy going to supermarkets for inspiration during my travels. I once helped design a sugarcane wine label for a friend in the Philippines.",
      block6:
        "🧒 I have a special place for children in my heart and used to work as a educator. I would love for one day to promote a Coding for Kids curriculum in Australia as I believe that coding is seen in our everyday lives. By using songs, games and play, kids can be equipped with skills they need in a world ruled by technology.",
    },
  ];
  const [selected, setSelected] = useState(0);

  const content =
    "bg-floral-white max-h-0 overflow-hidden transition-all duration-500";
  const contentShow = "h-auto max-h-[9999px] transition-all duration-500";

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
    return true;
  };

  return (
    <div className="pt-44 pb-48 md:pt-36 md:pb-36" id="about-me">
      <div className="flex-col flex flex-wrap mb-12 md:mb-8 text-left md:text-center">
        <p className="text-purple text-3xl md:text-4xl font-bold mb-4 md:mb-1">
          Me, Myself and Dev
        </p>

        <span className="md:text-center">
          <p className="text-md lg:text-lg">
            Get to know a little bit more about me and my journey🚀{" "}
          </p>
        </span>
      </div>
      <div className="wrapper flex justify-center items-center mb-24">
        <div className="accordion w-500">
          {aboutMeData.map((items, i) =>
            items.render === "paragraph" ? (
              <div
                className="item bg-floral-white mb-1 px-10 py-8"
                role="button"
                tabIndex={0}
                onKeyDown={() => toggle(i)}
                onClick={() => toggle(i)}
                key={items.intro}
              >
                <div className="title cursor-pointer text-black flex justify-between items-center">
                  <p className="text-xl md:text-2xl font-bold">{items.title}</p>
                  <span> {`${selected === i ? "-" : "+"}`} </span>
                </div>
                <div className={selected === i ? contentShow : content}>
                  {items.midRender === "true" ? (
                    <>
                      <div className="text-md md:text-xl font-bold pt-4 pb-2 border-t border-dashed">
                        {items.intro}
                      </div>
                      <div className="text-sm md:text-l py-2">
                        {items.block1}
                      </div>
                      <div className="md:grid md:grid-cols-2">
                        <Button2 className="text-sm md:text-l pr-8 pt-6">
                          {items.block2}
                        </Button2>
                        <Button2 className="text-sm md:text-l pr-8 pt-6">
                          {items.block3}
                        </Button2>
                        <Button2 className="text-sm md:text-l pr-8 pt-6">
                          {items.block4}
                        </Button2>
                        <Button2 className="text-sm md:text-l pr-8 pt-6">
                          {items.block5}
                        </Button2>
                      </div>
                      <div className="text-sm md:text-l py-8">
                        {items.block6}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-md md:text-xl text-purple font-bold pt-4 pb-2 border-t border-dashed">
                        {items.intro}
                      </div>
                      <div className="md:flex">
                        <div className="md:flex-1">
                          <div className="text-sm md:text-l py-2">
                            {items.block1}
                          </div>
                          <div className="text-sm md:text-l py-2">
                            {items.block2}
                          </div>
                          <div className="text-sm md:text-l py-4">
                            {items.block3}
                          </div>
                        </div>
                        <img
                          src={`${process.env.PUBLIC_URL}/images/profile-loreli.png`}
                          alt="profile-loreli"
                          className="h-54 w-54 md:h-64 md:w-64 rounded-full md:ml-10 md:mr-12"
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            ) : (
              <div
                className="item bg-floral-white mb-1 px-10 py-8"
                role="button"
                tabIndex={0}
                onKeyDown={() => toggle(i)}
                onClick={() => toggle(i)}
                key={items.intro}
              >
                <div className="title cursor-pointer text-black flex justify-between items-center">
                  <p className="text-xl md:text-2xl font-bold">{items.title}</p>
                  <span> {`${selected === i ? "-" : "+"}`} </span>
                </div>
                <div className={selected === i ? contentShow : content}>
                  <div className="text-md md:text-x font-bold pt-4 pb-2 border-t border-dashed">
                    {items.intro}
                  </div>
                  <div className="md:grid md:grid-cols-2">
                    <Button2 className="text-sm md:text-l pr-8 pt-6">
                      {items.block1}
                    </Button2>
                    <Button2 className="text-sm md:text-l pr-8 pt-6">
                      {items.block2}
                    </Button2>
                    <Button2 className="text-sm md:text-l pr-8 pt-6">
                      {items.block3}
                    </Button2>
                    <Button2 className="text-sm md:text-l pr-8 pt-6">
                      {items.block4}
                    </Button2>
                    <Button2 className="text-sm md:text-l pr-8 pt-6">
                      {items.block5}
                    </Button2>
                    <Button2 className="text-sm md:text-l pr-8 pt-6">
                      {items.block6}
                    </Button2>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <a href="#dev-tools">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 md:w-7 md:h-7 animate-bounce bg-purple/30 rounded-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
