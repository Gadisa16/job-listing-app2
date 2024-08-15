'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
// import data from '../../../public/jobs.json';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import MoreTimeOutlinedIcon from '@mui/icons-material/MoreTimeOutlined';
import TimerOffOutlinedIcon from '@mui/icons-material/TimerOffOutlined';
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import { FadeLoader } from 'react-spinners';

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


function Description() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  
  const [job, setJob] = useState<Job | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`https://akil-backend.onrender.com/opportunities/${id}`)
        .then(response => response.json())
        .then(data => setJob(data.data)) // Assuming the job data is in `data.data`
        .catch(error => console.error('Error fetching job:', error));
    }
  }, [id]);

  if (!job) {
    return <FadeLoader
  color="#26A4FF"
  cssOverride={{margin:"13% auto"}}
/>;
  }

  return (
    <div className='pt-2 md:pt-10 pl-3 md:pl-10 block md:flex'>
      {/* Left-part of div
      ......Description */}
      <div className="w-[100%] md-w-[80%] p-[46px_0px]">
        <div>
          <p className="text-[#25324B] font-poppins text-[24px] font-black leading-[28.8px] text-left pb-5">Description</p>
          <p className="text-[#25324B] font-epilogue text-[16px] font-normal leading-[25.6px] text-left">{job.description}</p>
        </div>

        {/* responsibilities */}
        <div className='my-10'>
          <p className="text-[#25324B] font-poppins text-[24px] font-black leading-[28.8px] text-left pb-5">Responsibilities</p>
          <ul className="text-[#25324B] font-epilogue text-[16px] font-normal leading-[28px] text-left">
            <li><AddTaskOutlinedIcon className="w-[16px] mr-2 text-[#56CDAD]"/>{job.responsibilities}</li>
          </ul>
        </div>

        {/* ideal candidate */}
        <div className="mb-10">
          <p className="text-[#25324B] font-poppins text-[24px] font-black leading-[28.8px] text-left pb-5">Ideal Candidate We Want</p>

          <ul className="list-disc ml-4 font-epilogue text-[16px] font-[550] leading-[25.6px] text-left">
            {/* <li>In range of {job?.ideal_candidate?.age} age {job.ideal_candidate.gender} gender, {job.title} </li> */}

            <li>{job.idealCandidate}</li>
          </ul>
          </div>

        {/* when and where */}
        <div className="mt-10">
          <p className="text-[#25324B] font-poppins text-[24px] font-black leading-[28.8px] text-left pb-5">When and Where</p>
          <p className="text-[#25324B] font-epilogue text-[16px] font-normal leading-[25.6px] text-left"><FmdGoodOutlinedIcon className='w-[45px] h-[45px] p-[1px] rounded-[50px] border mr-3 text-[#26A4FF]'/>{job.whenAndWhere}</p>
        </div>
        
        
      </div>


      {/* right part */}
      <div className="mt-[50px] md:mt-0 md:ml-8">
        <p className="text-[#25324B] font-poppins text-[24px] font-black leading-[28.8px] text-left mb-7">About</p>
        
        {/* 1#icons and date */}
        <div className='flex'>
          <p><MoreTimeOutlinedIcon className='p-[1px] rounded-[50px] border mr-3 text-[#26A4FF]'/></p>

          <div className=''>
            <p className="font-epilogue text-[16px] font-normal leading-[25.6px] text-left text-[#515B6F]">Posted on</p>
            <p className="text-[#25324B] font-epilogue text-[16px] font-semibold leading-[25.6px] text-left">{job.datePosted}</p>
          </div>
        </div>

        {/* 2#icons and date */}
        <div className='flex my-4'>
          <p><TimerOffOutlinedIcon className='p-[1px] rounded-[50px] border mr-3 text-[#26A4FF]'/></p>

          <div className=''>
            <p className="font-epilogue text-[16px] font-normal leading-[25.6px] text-left text-[#515B6F]">Deadline</p>
            <p className="text-[#25324B] font-epilogue text-[16px] font-semibold leading-[25.6px] text-left">{job.deadline}</p>
          </div>
        </div>

        {/* 3#icons and date */}
        <div className='flex mb-7'>
          <p><FmdGoodOutlinedIcon className='p-[1px] rounded-[50px] border mr-3 text-[#26A4FF]'/></p>

          <div className=''>
            <p className="font-epilogue text-[16px] font-normal leading-[25.6px] text-left text-[#515B6F]">Location</p>
            <p className="text-[#25324B] font-epilogue text-[13px] font-semibold text-left">{job.location}</p>
          </div>
        </div>

        {/* 4#icons and date */}
        <div className='flex my-4'>
          <p><TodayOutlinedIcon className='w-[45px] h-[45px] p-[1px] rounded-[50px] border mr-3 text-[#26A4FF]'/></p>

          <div className=''>
            <p className="font-epilogue text-[16px] font-normal leading-[25.6px] text-left text-[#515B6F]">Start Date</p>
            <p className="text-[#25324B] font-epilogue text-[16px] font-semibold leading-[25.6px] text-left">{job.startDate}</p>
          </div>
        </div>

        {/* 5#icons and date */}
        <div className='flex'>
          <p><EventAvailableOutlinedIcon className='w-[45px] h-[45px] p-[1px] rounded-[50px] border mr-3 text-[#26A4FF]'/></p>

          <div className=''>
            <p className="font-epilogue text-[16px] font-normal leading-[25.6px] text-left text-[#515B6F]">End Date</p>
            <p className="text-[#25324B] font-epilogue text-[16px] font-semibold leading-[25.6px] text-left">{job.endDate}</p>
          </div>
        </div>

        <hr className='my-6 w-[85%] border text-[#D6DDEB]'/>

        <div className='w-[60%]'>
            <p className="text-[#25324B] font-poppins text-[24px] font-black leading-[28.8px] text-left mb-5">Categories</p>
            <div className="flex flex-wrap gap-3">
              <ul className="flex flex-wrap gap-3 list-none p-0 m-0">
                {job.categories.map((cat, index) => (
                  <li
                    key={index}
                    className="text-[12px] px-3 py-1 bg-[#EB85331A] text-[#FFB836] border border-purpose rounded btn"
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </div>
        </div>

        <hr className='my-6 w-[85%] border text-[#D6DDEB]'/>

        <div className='w-[95%] h-[121px]'>
            <p className="text-[#25324B] font-poppins text-[24px] font-black leading-[28.8px] text-left mb-5">Required Skills</p>
            <div className="flex flex-wrap gap-3">
              <ul className="flex flex-wrap gap-3 list-none p-0 m-0">
                {job.requiredSkills.map((skill, index) => (
                  <li
                    key={index}
                    className="text-[12px] px-3 py-1 bg-[#F8F8FD] text-[#4640DE] border border-purpose rounded btn"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
        </div>
        
      </div>
    </div>
  );
}

export default Description;
