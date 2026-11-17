// Source: HPP Website content.pdf - Home page > 8. Testimonials (wording kept exactly as posted by guests)
export type Testimonial = {
    name: string
    rating: string
    text: string[]
    categories: string
    /** extra Google review tags */
    extras?: string[]
}

export const testimonialsIntro = {
    label: 'Guest Experiences',
    headline: 'Experiences Worth Sharing',
    description: 'Every visit is different. Read what guests have to say about their time at Hotel Priya Palace.',
}

export const testimonials: Testimonial[] = [
    {
        name: 'Bishal Roy',
        rating: '5/5',
        text: ['Comfortable room, delicious food, and excellent service. Special thanks to Mr. Manaranjan Deka at reception for his wonderful hospitality. Had a great stay!'],
        categories: 'Rooms 5.0/5 | Service 5.0/5 | Location 4.0/5',
    },
    {
        name: 'Seema Boruah',
        rating: '5/5',
        text: ['Very good behaviour of stuff.safe for women.', 'Mr Manoranjan Deka was in reception,he is very well behaved and supportive.'],
        categories: 'Rooms 5.0/5 | Service 5.0/5 | Location 5.0/5',
    },
    {
        name: 'SANDEEP THAPA',
        rating: '5/5',
        text: ['The room was very neat and tidy and the food was also very taste the staff were very cooperative specially mr manoranjan deka and ms chayanika'],
        categories: 'Rooms 5.0/5 | Service 5.0/5 | Location 5.0/5',
    },
    {
        name: 'S S Syiemlieh',
        rating: '5/5',
        text: ['We are old customers for the last 10 - 15 years. Property is very good, with good food and good services. Best location. Keep it up.'],
        categories: 'Rooms 4.0/5 | Service 4.0/5 | Location 5.0/5',
        extras: ['Rooms: Clean', 'Nearby activities: Very convenient', 'Safety: Safe'],
    },
    {
        name: 'Ritam Banerjee',
        rating: '5/5',
        text: ['A pleasant stay with comfortable rooms, courteous staff, and good service. The location was convenient, and the overall experience was comfortable and hassle-free. Would definitely consider staying here again and again.'],
        categories: 'Rooms 4.0/5 | Service 5.0/5 | Location 5.0/5',
    },
    {
        name: 'Bikram chetri',
        rating: '5/5',
        text: ['That is a very good hotel. The employees are very professional, the hotel is extremely hygienic, and the service is very fast. I really enjoyed staying there and would definitely love to stay there again.'],
        categories: 'Rooms 4.0/5 | Service 4.0/5 | Location 4.0/5',
        extras: ['Hotel highlights: Great value'],
    },
]
