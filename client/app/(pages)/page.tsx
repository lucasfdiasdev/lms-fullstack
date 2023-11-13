'use client';

import Heading from "@/app/utils/heading";

const Home = () => {
  return (
    <div>
      <Heading
        title="LMS Cursos"
        description="LMS é uma plataforma de cursos on-line e gratuito para os estudantes de programação"
        keywords="Programação, MERN, Redux, Machine Learning"
      />
      <div className="h-[100vh] w-full">
        Content home page
      </div>
      
    </div>
  )
}

export default Home;