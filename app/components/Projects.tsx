import { workData } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-DMSerif">My portfolio</h4>
      <h2 className="text-center text-5xl font-DMSerif">My latest work</h2>
      <p className="text-center mx-auto max-w-2xl mt-5 mb-12 font-DMSerif">
        From developing large-scale applications to working on smaller solo
        projects, I&apos;ve created a wide range of solutions using the
        technologies mentioned above.
      </p>

      <div className="grid grid-cols-auto gap-5 my-10">
        {workData.map(({ bgImage, title, description }, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${bgImage})` }}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
          >
            <div className="bg-white dark:bg-gray-800 w-8/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-300 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold dark:text-white">{title}</h2>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link
        href="https://github.com/sunshinemoua"
        className="w-max flex items-center justify-center gap-2 text-gray-700 dark:text-white border-[0.5px] border-gray-700 dark:border-white/50 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover dark:hover:bg-gray-800/30 duration-300"
      >
        Show more →
      </Link>
    </div>
  );
};

export default Work;
