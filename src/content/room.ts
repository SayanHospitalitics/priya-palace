// Source: HPP Website content.pdf (Hotel Priya Palace) - Home, Rooms & Suites and Individual Room Details pages
import { corporateRoomImages, executiveRoomImages, queenRoomImages, twinRoomImages } from './images'

export type Amenity = { icon: string; label: string }

export type Room = {
    /** card title, first part (e.g. 'Classic Room –') */
    type: string
    /** card title, second part (e.g. 'Queen Bed'); empty when the room has a single name */
    subType: string
    /** Room Overview > Short Description */
    shortDescription: string
    /** copy on the Home page room card */
    homeDescription: string
    /** copy on the Rooms & Suites page card */
    description: string
    /** key features, shown on cards and in the Room Overview */
    features: string[]
    /** Description of the Room: heading + paragraphs */
    descriptionHeading: string
    descriptionParagraphs: string[]
    /** Room Information */
    area: string
    bedType: string
    occupancy: string
    view: string
    /** Additional Information */
    additionalHeading: string
    additionalInfo: string
    /** Room Facilities */
    amenities: Amenity[]
    /** 'Explore Other Rooms': description of THIS room as shown on the other rooms' pages, keyed by the viewing room's index */
    compareText: Record<number, string>
    /** Room Enquiry Form description */
    enquiryDescription: string
    image: string
    /** photos shown in the gallery on the rooms and room-details screens */
    gallery: string[]
    /** which part of the first photo the page banner shows (CSS background-position); default centre */
    bannerPosition?: string
}

// Every facility named in the PDF (icons are react-icons/fa6 names)
export const amenityTypes: Record<string, Amenity> = {
    kingBed: { icon: 'FaBed', label: 'King Bed' },
    sittingArea: { icon: 'FaCouch', label: 'Sitting Area' },
    separateSittingArea: { icon: 'FaCouch', label: 'Separate Sitting Area' },
    wifi: { icon: 'FaWifi', label: 'Complimentary Wi-Fi' },
    tv: { icon: 'FaTv', label: 'Television' },
    teaCoffee: { icon: 'FaMugHot', label: 'Tea & Coffee Facilities' },
    roomService: { icon: 'FaBellConcierge', label: 'Room Service' },
    laundry: { icon: 'FaShirt', label: 'Laundry Service' },
    lift: { icon: 'FaElevator', label: 'Lift Access' },
    parking: { icon: 'FaSquareParking', label: 'Parking' },
}

const a = amenityTypes
const hotelServices = [a.wifi, a.tv, a.teaCoffee, a.roomService, a.laundry, a.lift, a.parking]
const inRoom = ['Complimentary Wi-Fi', 'Television', 'Tea & Coffee Facilities']

export const roomsList: Room[] = [
    {
        type: 'Classic Room –',
        subType: 'Queen Bed',
        shortDescription: 'A comfortable space to relax and unwind.',
        homeDescription: 'A welcoming room with a queen bed and the essentials for a relaxed stay.',
        description: 'A comfortable room with a queen bed, suited to solo travellers or couples.',
        features: ['Queen Bed', ...inRoom],
        descriptionHeading: 'Your Comfortable Retreat',
        descriptionParagraphs: [
            'Settle into the comfort of our Classic Room with Queen Bed, thoughtfully arranged to make your stay relaxing and convenient. Whether you are visiting Guwahati for business or leisure, this welcoming space offers the essentials you need to unwind after a busy day.',
            'Enjoy complimentary Wi-Fi, television and in-room tea and coffee facilities, making your stay at Hotel Priya Palace comfortable and convenient.',
        ],
        area: 'Not Available',
        bedType: '1 Queen Bed',
        occupancy: 'To Be Confirmed',
        view: 'City View*',
        additionalHeading: 'Additional Information',
        additionalInfo:
            'Enjoy a relaxing stay with convenient in-room amenities and essential hotel services. Whether you are catching up on work, enjoying some quiet time or preparing for another day in the city, everything you need for a comfortable visit is within reach.',
        amenities: hotelServices,
        compareText: {
            1: 'A welcoming room featuring a queen bed and essential in-room amenities.',
            2: 'A comfortable room featuring a queen bed and essential amenities.',
            3: 'A comfortable room with a queen bed for a relaxing stay.',
        },
        enquiryDescription:
            'Planning your stay at Hotel Priya Palace? Share your travel details and requirements. Our team will be happy to assist you with room availability and booking information.',
        image: queenRoomImages[0],
        gallery: queenRoomImages,
    },
    {
        type: 'Classic Room –',
        subType: 'Twin Bed',
        shortDescription: 'Comfort and convenience for travelling together.',
        homeDescription: 'A practical choice for friends, family members or colleagues travelling together.',
        description: 'Two separate beds make this a convenient option for friends, family members or colleagues travelling together.',
        features: ['Twin Beds', ...inRoom],
        descriptionHeading: 'Comfort, Shared Your Way',
        descriptionParagraphs: [
            'Travelling with friends, colleagues or family? Our Classic Room with Twin Beds offers a comfortable arrangement with two separate beds, making it easier to enjoy your stay together while having your own space to relax.',
            'With complimentary Wi-Fi, television and tea and coffee facilities, the room provides the everyday conveniences you need for a pleasant stay in Guwahati.',
        ],
        area: '121 Sq. Ft.',
        bedType: '2 Single Beds',
        occupancy: '3 Persons',
        view: 'City View',
        additionalHeading: 'A Comfortable Stay for Two',
        additionalInfo:
            'Designed for guests travelling together, the Classic Twin Bed Room offers a practical and comfortable accommodation option. Whether you are visiting with a colleague, friend or family member, enjoy a convenient space to rest and recharge during your time in Guwahati.',
        amenities: hotelServices,
        compareText: {
            0: 'A comfortable room with twin beds, ideal for guests travelling together.',
            2: 'A practical accommodation option with two separate beds.',
            3: 'A convenient room with twin beds for guests travelling together.',
        },
        enquiryDescription:
            'Planning a visit with friends, family or colleagues? Get in touch with our team to check the availability of our Twin Bed Room and make arrangements for your stay.',
        image: twinRoomImages[0],
        gallery: twinRoomImages,
    },
    {
        type: 'Executive Room',
        subType: '',
        shortDescription: 'More space to work, relax and unwind.',
        homeDescription: 'Enjoy a king bed and a sitting area, with extra space to settle in.',
        description: 'A king bed and a sitting area provide additional space to work or relax during your stay.',
        features: ['King Bed', 'Sitting Area', ...inRoom],
        descriptionHeading: 'Space to Stretch Out',
        descriptionParagraphs: [
            'Experience a little more room to relax in our Executive Room. Featuring a comfortable king bed and a dedicated sitting area, the room offers a welcoming setting for both business and leisure travellers.',
            'Whether you wish to catch up on work, enjoy a quiet moment or simply unwind after a day in the city, the Executive Room brings together comfort, convenience and space for a more relaxed stay.',
        ],
        area: '168 Sq. Ft.',
        bedType: '1 King Bed',
        occupancy: 'To Be Confirmed',
        view: 'City View',
        additionalHeading: 'Designed Around Your Comfort',
        additionalInfo:
            'Enjoy the flexibility of a comfortable sitting area alongside your sleeping space. Whether you are preparing for a meeting, reading or taking a break between plans, the Executive Room provides a convenient setting to make the most of your stay.',
        amenities: [a.kingBed, a.sittingArea, ...hotelServices],
        compareText: {
            0: 'A spacious room featuring a king bed and a sitting area.',
            1: 'Enjoy additional space with a king bed and a comfortable sitting area.',
            3: 'A comfortable king-bed room featuring a sitting area.',
        },
        enquiryDescription:
            'Looking for a little extra space during your stay? Contact our team to enquire about the Executive Room, check availability and plan your visit to Hotel Priya Palace.',
        image: executiveRoomImages[0],
        gallery: executiveRoomImages,
    },
    {
        type: 'Corporate Suite',
        subType: '',
        shortDescription: 'Space to focus. Comfort to unwind.',
        homeDescription: 'A suite that brings together a king bed and a separate sitting area for work and downtime.',
        description: 'A king bed and a separate sitting area create room for both work and downtime.',
        features: ['King Bed', 'Separate Sitting Area', ...inRoom],
        descriptionHeading: 'Work Well, Rest Better',
        descriptionParagraphs: [
            'Discover a stay that balances productivity and relaxation in our Corporate Suite. Featuring a comfortable king bed and a separate sitting area, the suite offers additional space to work, unwind and enjoy your time at Hotel Priya Palace.',
            'Whether you are visiting Guwahati for business, travelling with family or planning an extended visit, the Corporate Suite provides a welcoming environment with the conveniences you need for a comfortable stay.',
        ],
        area: '144 Sq. Ft.',
        bedType: '1 King Bed',
        occupancy: 'To Be Confirmed',
        view: 'City View',
        additionalHeading: 'A Suite That Gives You More Room',
        additionalInfo:
            'Enjoy the convenience of separate spaces for rest and relaxation. The sitting area provides room to work, read or spend some quiet time, while the comfortable bedroom offers a place to unwind at the end of the day. A thoughtful choice for guests who appreciate additional space during their stay.',
        amenities: [a.kingBed, a.separateSittingArea, ...hotelServices],
        compareText: {
            0: 'A thoughtfully arranged suite with a king bed and a separate sitting area.',
            1: 'A spacious suite with a king bed and a separate sitting area.',
            2: 'A spacious suite with a king bed and a separate sitting area.',
        },
        enquiryDescription:
            'Make your next visit to Guwahati comfortable and convenient. Get in touch with our team to enquire about the Corporate Suite, check availability and discuss your accommodation requirements.',
        image: corporateRoomImages[0],
        gallery: corporateRoomImages,
        bannerPosition: 'bottom',
    },
]

/** Rooms & Suites page: facilities available at the hotel / in the room */
export const hotelFacilities = ['Complimentary Wi-Fi', 'Parking', 'Lift', 'Room Service', 'Laundry']
export const inRoomAmenities = ['Television', 'Tea & Coffee Facilities']
