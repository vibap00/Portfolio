import Image from 'next/image';
import { useState } from 'react';
import { aboutMeData } from '../../data/aboutMeData';

function AboutMeBio() {
  const [aboutMe, setAboutMe] = useState(aboutMeData);
  return (
    <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
      <div className="flex justify-center sm:justify-start w-full md:w-1/2 lg:w-1/4 mb-10 sm:mb-0">
        <div className="md:m-start lg:m-start">
          <Image
            src="/images/profile.jpeg"
            width={280}
            height={280}
            className="rounded-lg h-[260px] w-[200px] lg:h-[280px] lg:w-[280px]"
            alt="Profile Image"
          />
        </div>
      </div>

      <div className="w-full sm:w-3/4 text-left sm:text-left flex flex-wrap justify-end">
        {aboutMe.map((bio) => (
          <p
            className="text-left sm:text-left mb-4 ml-8 s10:ml-2 s20:ml-8 sm:ml-0 text-ternary-dark dark:text-ternary-light text-base s20:text-base md:text-base lg:text-lg w-full md:w-full lg:w-1/2 "
            key={bio.id}
          >
            &bull; {bio.bio}
          </p>
        ))}
      </div>

    </div>
  );
}

export default AboutMeBio;
