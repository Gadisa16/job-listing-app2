'use client';

import {FadeLoader} from 'react-spinners';
import Image from 'next/image';
import image1 from "../../../public/images/image1.png";
import image2 from "../../../public/images/image2.png";
import image3 from "../../../public/images/image3.png";
import image4 from "../../../public/images/image4.png";
import Link from 'next/link';

import { useEffect, useState } from 'react';

const images = [image1, image2, image3, image4];

interface Job {
  id: string;
  title: string;
  description: string;
  responsibilities: string;
  requirements: string;
  idealCandidate: string;
  categories: string[];
  opType: string;
  startDate: string;
  endDate: string;
  deadline: string;
  location: string[];
  requiredSkills: string[];
  whenAndWhere: string;
  orgID: string;
  datePosted: string;
  status: string;
  applicantsCount: number;
  viewsCount: number;
  orgName: string;
  logoUrl: string;
  isBookmarked: boolean;
  isRolling: boolean;
  questions: string[] | null;
  perksAndBenefits: string[] | null;
  createdAt: string;
  updatedAt: string;
  orgPrimaryPhone: string;
  orgEmail: string;
  average_rating: number;
  total_reviews: number;
}

interface JobsResponse {
  success: boolean;
  message: string;
  data: Job[];
}


function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}


function Card(){
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Replace with your API endpoint
    fetch('https://akil-backend.onrender.com/opportunities/search')
      .then(response => response.json())
      .then(data => setJobs(data.data)) // Assuming the data is in `data.data`
      .catch(error => console.error('Error fetching jobs:', error));

      setIsLoading(false);
  }, []);
  
  // console.log(jobs);

  if (isLoading){
    return <FadeLoader
      color="#26A4FF"
      cssOverride={{margin:"13% auto"}}
    />;
  }


  return (
    <div className='w-[98%] md:w-[100%] mx-auto'>
      {jobs.map((job, index) => {
        const image = getRandomImage();
        return (
          <Link
            href={{
              pathname: '/Description',
              query: { id: job.id }
            }}
            key={job.id}
            className="w-[95%] md:w-[80%] md:mx-auto my-10 py-6 rounded-[30px] md:border-[1px] border-customGray md:flex justify-around">
            <div>
              {job.logoUrl ? (
                <img src={job.logoUrl} alt="Random" className="w-[66px] h-[59px]" />
              ) : (
                <Image src={image} alt="Random" className="w-[66px] h-[59px]" />
              )}
            </div>


            <div className="mb-[70px] md:mb-0 md:w-[755px]">
              <p className="text-[#25324B] h-[24px] font-epilogue text-[24px] font-semibold leading-[24px] text-left">
                {job.title}
              </p>

              <p className="w-[454px] h-[27px] text-[#7C8493] font-light text-lg my-2">
                <span className="leading-[25.6px] text-left">{job.orgName}</span>{' '}
                <span>• {job.location}</span>
              </p>

              <p className="font-epilogue text-base font-normal leading-[25.6px] text-left">
                {job.description}
              </p>

              <div className="sm:w-[246px] h-[35px] flex grid-cols-3 gap-2 mt-3">
                <div className="border-r-2 ">
                  <div className="text-[12px] leading-[19.2px] h-full p-[6px_10px] bg-purposeBg text-pupose btn mr-2">
                    {job.opType}
                  </div>
                </div>
                <div className="text-[12px] leading-[19.2px] h-full p-[6px_10px] text-education border border-education btn">
                  Education
                </div>
                <div className="text-[12px] leading-[19.2px] h-full p-[6px_10px] text-IT border border-IT btn rounded-[2px] w-14">
                  IT
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Card;
