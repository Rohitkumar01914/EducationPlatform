import CourseSlider from "@app/Components/CourseSlider"
import { ChevronRightIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

const Course = () => {
  return (
    <div className="bg-gray-200">

<h1 className="text-center text-4xl font-semibold pt-20">OUR <span className="text-blue-600">COURSES</span></h1>

<div className="flex items-center justify-between  border-b-2 border-blue-400 ">
    <span className="lg:text-xl md:text-xl text-xs font-semibold text-gray-600 m-4 mr-4">Explore Our Popular Courses</span>
   
   <Link href="#" ><span className="lg:text-xl md:text-xl text-xs hover:text-blue-500 delay-75 ">All Category <ChevronRightIcon className="lg:size-6 md:size-4 size-3 inline" /></span>
   </Link>
</div>

      <CourseSlider />  
    </div>
  )
}

export default Course