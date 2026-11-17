// Source: HPP Website content.pdf (Hotel Priya Palace) - Banquets (seating layouts: HPP BROCHURE.pdf)
import luit1 from '../assets/images/banquets/luit-1.jpg'
import luit2 from '../assets/images/banquets/luit-2.jpg'
import luit3 from '../assets/images/banquets/luit-3.jpg'
import luit4 from '../assets/images/banquets/luit-4.jpg'
import kareng1 from '../assets/images/banquets/kareng-1.jpg'
import kareng2 from '../assets/images/banquets/kareng-2.jpg'
import kareng3 from '../assets/images/banquets/kareng-3.jpg'
import kareng4 from '../assets/images/banquets/kareng-4.jpg'

export type SeatingArrangement = { layout: string; capacity: string }

export type Banquet = {
    /** e.g. 'Luit Banquet Hall' */
    name: string
    headline: string
    tagline: string
    description: string
    highlights: string[]
    /** seating layouts, from the brochure (the website copy does not list capacities) */
    seating: SeatingArrangement[]
    images: string[]
}

export const banquetsIntro = {
    label: 'Meetings & Celebrations',
    headline: 'A Setting for Every Gathering',
    description:
        'From business meetings and formal gatherings to family celebrations and wedding receptions, Hotel Priya Palace offers two banquet spaces: Luit and Kareng. Tell us about your occasion, guest count and preferred arrangements. Our team will help you understand the available options.',
    occasions: ['Meetings & Conferences', 'Family Gatherings', 'Wedding Receptions', 'Birthday Celebrations', 'Corporate Events', 'Special Occasions'],
}

export const banquetEnquiry = {
    label: 'Plan Your Event',
    headline: 'Tell Us What You Have in Mind',
    description:
        'Share your preferred date, type of event, expected number of guests and any special arrangements you may need. Our team will get in touch to discuss availability and the next steps.',
    button: 'Send an Event Enquiry',
}

export const banquets: Banquet[] = [
    {
        name: 'Luit Banquet Hall',
        headline: 'A Thoughtful Setting to Meet and Gather',
        tagline: 'An elegant space for meetings, gatherings and occasions.',
        description:
            'Luit Banquet Hall features a well-lit interior, warm wood-panelled pillars and soft drapes. Its chair-and-head-table arrangement can provide a suitable setting for a meeting, presentation or gathering. Contact our team to discuss the layout and arrangements that may work for your event.',
        highlights: ['Elegant interiors', 'Seating arrangements can be discussed', 'Suitable for meetings and gatherings'],
        seating: [
            { layout: 'THEATRE', capacity: '40 PAX' },
            { layout: 'CLASSROOM', capacity: '40 PAX' },
            { layout: 'U-SHAPE', capacity: '20 PAX' },
        ],
        images: [luit1, luit2, luit3, luit4],
    },
    {
        name: 'Kareng Banquet Hall',
        headline: 'Bring Everyone Together',
        tagline: 'A spacious setting for celebrations and events.',
        description:
            'Kareng Banquet Hall offers an open event space that can be arranged to suit the nature of your occasion. Depending on availability and event requirements, discuss options such as banquet-style tables, theatre-style seating or a mixed layout with our team. Catering support and audio-visual facilities are listed for this hall; please confirm the specific requirements when enquiring.',
        highlights: ['Spacious hall', 'Flexible layout options', 'Catering support', 'Audio-visual facilities'],
        seating: [
            { layout: 'THEATRE', capacity: '200-250 PAX*' },
            { layout: 'CLASSROOM', capacity: '200-250 PAX*' },
            { layout: 'BANQUET', capacity: '300-350 PAX*' },
        ],
        images: [kareng1, kareng2, kareng3, kareng4],
    },
]
