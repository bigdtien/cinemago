import { MdMovieFilter } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { FaFilePen } from "react-icons/fa6";
import { RiEarthFill } from "react-icons/ri";
import { MdChair } from "react-icons/md";
import { MdFastfood } from "react-icons/md";

export const listMenu = [
    {
        id: 1,
        title: "Cast&Crew",
        icon: <RiTeamFill />,
        items: [
            {
                name: "Authors",
                path: "/authors"
            },
            {
                name: "Actors",
                path: "/actors"
            },
            {
                name: "Characters",
                path: "/characters"
            }
        ]
    },
    {
        id: 2,
        title: "Media Management",
        icon: <MdMovieFilter />,
        items: [
            {
                name: "Movie",
                path: "/movie"
            },
            {
                name: "Movie Screening",
                path: "/moviescreening"
            }
        ]
    },
    {
        id: 3,
        title: "Regions",
        icon: <RiEarthFill /> ,
        items: [
            {
                name: "Cinema",
                path: "/cinema"
            },
            {
                name: "Locations",
                path: "/locations"
            },
            {
                name: "Regions",
                path: "/regions"
            }
        ]
    },
    {
        id: 4,
        title: "Seating",
        icon: <MdChair />,
        items: [
            {
                name: "Chairs",
                path: "/chairs"
            },
            {
                name: "Rooms",
                path: "/rooms"
            }
        ]
    },
    {
        id: 5,
        title: "Service",
        icon: <MdFastfood />,
        items: [
            {
                name: "Food",
                path: "/food"
            },
            {
                name: "Order Details",
                path: "/orderdetails"
            },
            {
                name: "Tickets",
                path: "/tickets"
            }
        ]
    }
]