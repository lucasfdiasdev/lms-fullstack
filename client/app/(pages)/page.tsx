'use client';

import Heading from "@/app/utils/heading";

interface Props {

}

const Home: React.FC<Props> = ({

}) => {
  return (
    <div>
      <Heading
        title="LMS Cursos"
        description="LMS é uma plataforma de cursos on-line e gratuito para os estudantes de programação"
        keywords="Programação, MERN, Redux, Machine Learning"
      />
      <div>ola</div>
    </div>
  )
}

export default Home;