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
            width={250} // updated size
            height={250} // updated size
            className="rounded-lg"
            alt="Profile Image"
          />
        </div>
      </div>

      <div className="w-full sm:w-3/4 text-left sm:text-left flex flex-wrap justify-end">
        {aboutMe.map((bio) => (
          <p
            className="text-left sm:text-left mb-4 ml-12 sm:ml-0 text-ternary-dark dark:text-ternary-light text-base sm:text-lg w-full md:w-full lg:w-1/2 "
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
