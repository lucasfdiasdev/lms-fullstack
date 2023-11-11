import Link from "next/link"

const Logo = () => {
  return (
    <div
      className="w-full text-center py-6"
    >
      <Link
        href={"/"}
        className={`
          text-[25px]
          font-Poppins
          font-[500]
          text-black
          dark:text-white
        `}
      >
        LMS Cursos
      </Link>
    </div>
  )
}

export default Logo