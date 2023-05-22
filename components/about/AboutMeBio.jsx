import Image from 'next/image';
import { useState } from 'react';
import { aboutMeData } from '../../data/aboutMeData';

function AboutMeBio() {
	const [aboutMe, setAboutMe] = useState(aboutMeData);
	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
  <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
    <Image
      src="/images/profile.jpeg"
      width={250} // updated size
      height={250} // updated size
      className="rounded-lg"
      alt="Profile Image"
    />
  </div>

  <div className="w-full sm:w-3/4 text-left flex flex-wrap">
    {aboutMe.map((bio) => (
      <p
        className="mb-4 text-ternary-dark dark:text-ternary-light text-lg w-1/2 font-regular"
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
