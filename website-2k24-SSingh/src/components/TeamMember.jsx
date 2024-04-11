import React from 'react'
// import { team } from 'src/constants/index'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const TeamMember = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 150,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    // <div className="w-1/3 m-auto">
    //   <div className='mt-20'>
    //   <Slider {...settings}>
    //     {team.map((item) => (
    //       <div className='bg-white h-[450px] text-black rounded-xl'>
    //         <div className='h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center'>
    //           <img src={item.imageUrl} alt='' className='h-44 w-44 rounded-full'/>
    //         </div>

    //         <div className='flex flex-col justify-center items-center gap-4 p-4'>
    //           <h3 className='text-xl font-semibold'>{item.name}</h3>
    //           <h4 className='text-lg'>{item.title.primary}</h4>
    //           <p>{item.title.secondary}</p>
    //           <a href={item.link} className="bg-indigo-600 text-white text-lg px-6 py-2 rounded-xl">Contact</a>
    //         </div>
    //       </div>
    //     ))}
    //   </Slider>
    //   </div>
    // </div>
    <div className="w-full md:w-4/5 lg:w-3/5 xl:w-2/5 mx-auto">
  <div className="mt-12 md:mt-20">
    <Slider {...settings}>
      {team.map((item) => (
        <div key={item.id} className="rounded-xl overflow-hidden shadow-lg">
          <div className="h-80 bg-gradient-to-b from-purple-900 to-black flex justify-center items-center relative">
            <img src={item.imageUrl} alt={item.name} className="h-48 w-48 rounded-full object-cover absolute z-10" />
            <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
          </div>

          <div className="bg-gradient-to-b from-black to-purple-900 p-6 text-center">
            <h3 className="text-3xl font-semibold text-white">{item.name}</h3>
            <h4 className="text-lg text-purple-400">{item.title.primary}</h4>
            <p className="text-gray-300">{item.title.secondary}</p>
            <a href={item.link} className="inline-block mt-4 bg-purple-700 text-white text-lg px-8 py-3 rounded-xl hover:bg-purple-800 transition duration-300 ease-in-out">Contact</a>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</div>

  )
}



export const team = [
  {
    id: "0",
    name: "Dr. Vikram Verma",
    title: {
      primary: "Our faculty incharge",
      secondary:" "
    },
    imageUrl:"https://portfolios.nith.ac.in/uploads/member_details/167.jpg",
    link: "https://portfolios.nith.ac.in/index.php?/nith/dr-vikram-verma354",
  },
  {
    id: "1",
    name: "Priyanshu Sagar",
    title: {
      primary: "Core Coordinator",
      secondary: "Third Year"
    },
    imageUrl: "https://iili.io/JvKAxtI.jpg",
    link: "https://www.linkedin.com/in/priyanshu-sagar-76b645228/"
  },
  {
    id: "2",
    name: "Shubham Aggarwal",
    title: {
      primary: "Former Core Coordinator",
      secondary: "Final Year"
    },
    imageUrl: "https://iili.io/JvKAInt.jpg",
    link: "https://www.instagram.com/ishubu68"
  },
  {
    id: "3",
    name: "Anshika Chakravorty ",
    title: {
      primary: "Former Core Coordinator",
      secondary: "Final Year"
    },
    imageUrl: "https://iili.io/JvKuG3J.jpg",
    link: "https://www.linkedin.com/in/anshika-c-208549230/",
  },
  {
    id: "4",
    name: "Shruti Dhiman ",
    title: {
      primary: "Final Year",
      secondary: ""
    },
    imageUrl: "https://iili.io/JvKAC9R.jpg",
    link: "https://www.instagram.com/shrutii_159"
  },
  {
    id: "5",
    name: "Anvi Bakhsyan",
    title: {
      primary: "Final Year",
      secondary: ""
    },
    imageUrl: "https://iili.io/JkmULFV.jpg",
    link: "https://www.linkedin.com/in/anvi-bakhsyan"
  },
  {
    id: "6",
    name: "Jatothu Navya",
    title: {
      primary: "Final Year",
      secondary: ""
    },
    imageUrl: "https://iili.io/JkmrqgV.jpg",
    link: "https://www.linkedin.com/in/jatothu-navya-689b78231/"
  },
  {
    id: "7",
    name: "Sarthak Rajput",
    title: {
      primary: "Final Year",
      secondary: ""
    },
    imageUrl: "https://iili.io/JvKu6jS.jpg",
    link: "https://www.instagram.com/sarthak_raj_put/"
  },
  {
    id: "8",
    name: "Manish Bajdoliya",
    title: {
      primary: "Final Year",
      secondary: ""
    },
    imageUrl: "https://iili.io/JvKujjI.jpg",
    link: "https://www.linkedin.com/in/manish-bajdoliya-4104711b5/"
  },
  {
    id: "9",
    name: "Tanya Mithaniya",
    title: {
      primary: "Coordinator",
      secondary: "Third Year",
    },
    imageUrl: "https://iili.io/Jkm4H2p.jpg",
    link: "https://www.linkedin.com/in/tanya-mithaniya-0b2a8025a/",
  },
  {
    id: "10",
    name: "Abhishek Singh",
    title: {
      primary: "Coordinator",
      secondary: "Third Year",
    },
    imageUrl: "https://iili.io/Jkm68fj.jpg",
    link: "https://www.linkedin.com/in/abhishek-singh-b32bb6248/",
  },
  {
    id: "11",
    name: "Shivam Singh",
    title: {
      primary: "Executive",
      secondary: "Second Year",
    },
    imageUrl: "https://iili.io/JvKAq8v.jpg",
    link: "https://www.linkedin.com/in/shivam-singh-94ba9a247/",
  },
  {
    id: "12",
    name: "Abhishek Singh",
    title: {
      primary: "Executive",
      secondary: "Second Year",
    },
    imageUrl: "https://iili.io/JvKu0Eg.jpg",
    link: "https://www.instagram.com/abhishek_.singh03",
  },
  {
    id: "13",
    name: "Nischey Karol",
    title: {
      primary: "Executive",
      secondary: "Second Year",
    },
    imageUrl: "https://iili.io/JvKuwQt.jpg",
    link: "https://www.linkedin.com/in/nischey-karol-308640266/",
  },
  {
    id: "14",
    name: "Tanmay Sharma",
    title: {
      primary: "Executive",
      secondary: "Second Year",
    },
    imageUrl: "https://iili.io/JvKARFs.jpg",
    link: "https://www.linkedin.com/in/tanmaysharma2k3/",
  },
  {
    id: "15",
    name: "Kishan Kapoor",
    title: {
      primary: "Executive",
      secondary: "Second Year",
    },
    imageUrl: "https://iili.io/JvKueGn.jpg",
    link: "https://www.instagram.com/kishan.kapor/",
  },
  {
    id: "16",
    name: "Rohit Patel",
    title: {
      primary: "Executive",
      secondary: "Second Year",
    },
    imageUrl: "https://iili.io/JvKuk4s.jpg",
    link: "https://www.instagram.com/rohit_patel_784",
  },
  {
    id: "17",
    name: "Shivam Yadav",
    title: {
      primary: "Executive",
      secondary: "Second Year",
    },
    imageUrl: "https://iili.io/JvKAKFa.jpg",
    link: "https://www.instagram.com/_.03shivam",
  },
  {
    id: "18",
    name: "Amolak Gujjar",
    title: {
      primary: "Executive",
      secondary: "Second Year",
    },
    imageUrl: "https://iili.io/JvKu14a.jpg",
    link: "https://www.instagram.com/gurjar.amolak/",
  },
  {
    id: "19",
    name: "Ayush Verma",
    title: {
      primary: "Volunteer",
      secondary: "First Year",
    },
    imageUrl: "https://iili.io/JvKuVvR.png",
    link: "https://www.instagram.com/amayush__",
  },
  {
    id: "20",
    name: "Sareha",
    title: {
      primary: "Volunteer",
      secondary: "First Year",
    },
    imageUrl: "https://iili.io/JvKu4u2.jpg",
    link: "https://www.instagram.com/sareha_singh",
  },
  {
    id: "21",
    name: "Aryan",
    title: {
      primary: "Volunteer",
      secondary: "First Year",
    },
    imageUrl: "https://iili.io/JvKuPZ7.jpg",
    link: "https://www.instagram.com/ar.y.a.n_09",
  },
  {
    id: "22",
    name: "Devansh Negi",
    title: {
      primary: "Volunteer",
      secondary: "First Year",
    },
    imageUrl: "https://iili.io/JvKuWpp.jpg",
    link: "https://www.linkedin.com/in/devansh-negi-4a2b822a9/",
  },
  {
    id: "23",
    name: "Jyoti Kesharwani",
    title: {
      primary: "Volunteer",
      secondary: "First Year",
    },
    imageUrl: "https://iili.io/JvKuhTN.jpg",
    link: "https://www.instagram.com/kesharigenie",
  },
  {
    id: "24",
    name: "Sarika Yadav",
    title: {
      primary: "Volunteer",
      secondary: "First Year",
    },
    imageUrl: "https://iili.io/JvKugyl.jpg",
    link: "https://www.instagram.com/sarika_yadav18",
  },
  {
    id: "25",
    name: "Tanishq Parashar",
    title: {
      primary: "Volunteer",
      secondary: "First Year",
    },
    imageUrl: "https://iili.io/JvKAowN.jpg",
    link: "https://www.linkedin.com/in/tanishq-parashar-817252292/",
  },
  {
    id: "26",
    name: "Nitin Kumar",
    title: {
      primary: "Volunteer",
      secondary: "First Year",
    },
    imageUrl: "https://iili.io/JvKuSaf.jpg",
    link: "https://www.instagram.com/_raonitin",
  },
  {
    id: "27",
    name: "Arjun Dhania",
    title: {
      primary: "Volunteer",
      secondary: "First Year",
    },
    imageUrl: "https://iili.io/JvKulCF.jpg",
    link: "https://www.instagram.com/arjun___026/",
  },
  {
    id: "28",
    name: "Sagar Baddhan",
    title: {
      primary: "Volunteer",
      secondary: "First Year",
    },
    imageUrl: 'https://iili.io/JvKuUv4.jpg',
    link: "https://www.instagram.com/sagar_baddhan",
  },
];


export default TeamMember