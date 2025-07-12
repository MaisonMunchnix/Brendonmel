import logo from './brendonmel_logo.png'
import logo_dark from './logo_dark.svg'
import cross_icon from './cross_icon.svg'
import menu_icon from './menu_icon.svg'
import star_icon from './star_icon.svg'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'
import header_img from './header_img.png'
import brand_img from './brendonmel_brand_img2.png'
import project_img_1 from './project_img_1.jpg'
import project_img_2 from './project_img_2.jpg'
import project_img_3 from './project_img_3.jpg'
import project_img_4 from './project_img_4.jpg'
import project_img_5 from './project_img_5.jpg'
import project_img_6 from './project_img_6.jpg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'

import camber_alignment from './camber_alignment.png'
import wheel_balance from './wheelbalance.jpg'
import change_oil from './change_oil.jpg'
import car_tune_up from './car_tune_up.png'
import brakes from './brakes.png'
import underchassis from './underchassis.png'
import egr from './egr.jpg'
import checkered_l from './checkered_right.jpg'
import checkered_r from './checkered_left.jpg'
import check from './checkered.jpg'
import fb from './facebook.png'

export const assets = {
    logo,
    logo_dark,
    cross_icon,
    menu_icon,
    star_icon,
    header_img,
    brand_img,
    project_img_1,
    project_img_2,
    project_img_3,
    project_img_4,
    left_arrow,
    right_arrow,
    camber_alignment,
    wheel_balance,
    change_oil,
    car_tune_up,
    brakes,
    underchassis,
    egr,
    checkered_l,
    checkered_r,
    check,
    fb
}

export const servicesData = [
  {
    service: "Car Tune Up",
    description: "A general inspection and maintenance of key engine components such as spark plugs, air filter, and fuel system.",
    purpose: "boost performance and fuel efficiency",
    image: car_tune_up
  },
  {
    service: "Camber Alignment",
    description: "Adjusting the angle of the wheels to ensure they are perpendicular to the ground and parallel to each other.",
    purpose: "improve tire wear and handling",
    image: camber_alignment
    
  },
  {
    service: "Wheel Balance",
    description: "Evenly distributing the weight of the wheel and tire assembly to ensure smooth rotation.",
    purpose: "minimize vibrations and tire wear",
    image: wheel_balance
  },
  {
    service: "Change Oil",
    description: "Draining old engine oil and replacing it with fresh oil, along with a new oil filter if necessary.",
    purpose: "protect and smoothen engine performance",
    image: change_oil
  },
  {
    service: "Brake System Check & Clean",
    description: "Cleaning the brake components and adjusting the brake system to restore optimal function.",
    purpose: "ensure safe and responsive braking",
    image: brakes
  },
  {
    service: "Underchassis Repair",
    description: "Inspection and repair of the vehicle's suspension, steering, and frame components underneath the car.",
    purpose: "restore ride quality and control.",
    image: underchassis
  },
  {
    service: "EGR Cleaning",
    description: "Cleaning the Exhaust Gas Recirculation valve and passages to remove carbon buildup.",
    purpose: "lower emissions and improve efficiency",
    image: egr
  }
]


export const projectsData = [
    {
      title: "Skyline Haven",
      price: "$2,50,000",
      location: "California",
      image: project_img_1
    },
    {
      title: "Vista Verde",
      price: "$2,50,000",
      location: "San Francisco",
      image: project_img_2
    },
    {
      title: "Serenity Suites",
      price: "$2,50,000",
      location: "Chicago",
      image: project_img_3
    },
    {
      title: "Central Square",
      price: "$2,50,000",
      location: "Los Angeles",
      image: project_img_4
    },
    {
      title: "Vista Verde",
      price: "$2,50,000",
      location: "San Francisco",
      image: project_img_5
    },
    {
      title: "Serenity Suites",
      price: "$2,50,000",
      location: "Chicago",
      image: project_img_6
    },
    
  ];

  export const testimonialsData = [
    {
        name: "Donald Jackman",
        title: "Marketing Manager",
        image: profile_img_1,
        alt: "Portrait of Donald Jackman",
        rating: 5,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    },
    {
        name: "Richard Nelson",
        title: "UI/UX Designer",
        image: profile_img_2,
        alt: "Portrait of Richard Nelson",
        rating: 4,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    },
    {
        name: "James Washington",
        title: "Co-Founder",
        image: profile_img_3,
        alt: "Portrait of James Washington",
        rating: 5,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    }
];