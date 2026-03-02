const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Lovely Professional University',
                degree: 'MBA IT',
                detail: "Master's degree in Information Technology from LPU.",
                year: '2022-2024'
            },
            {
                id: 1,
                title: 'Chandigarh University',
                degree: 'B.E. CSE',
                detail: "Bachelor's degree in Computer Science and Engineering from CU.",
                year: '2018-2022'
            },
            {
                id: 2,
                title: 'Blue Star Public Senior Secondary School',
                degree: 'Non-Medical',
                detail: "Senior Secondary (12th) from BSP Senior Secondary School.",
                year: '2017-2018'
            },
            {
                id: 3,
                title: 'Blue Star Public Senior Secondary School',
                degree: 'Matriculation',
                detail: "Secondary (10th) from BSP Senior Secondary School.",
                year: '2015-2016'
            }
        ]
               
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Hash Software',
                role: 'Team Leader',
                url: 'https://www.hashsoftware.com/',
                desc: 'Leading the development team, guiding technical decisions, and ensuring delivery of high-quality web solutions. I mentor developers, coordinate projects, and drive best practices across the stack while continuing to contribute to architecture and key features.',
                year: 'Feb 2026 - Present',
                location: 'Mohali'
            },
            {
                id: 2,
                title: 'Hash Software',
                role: 'Full-Stack Developer',
                url: 'https://www.hashsoftware.com/',
                desc: 'Built robust and scalable web applications using PHP, Laravel, WordPress, and Node.js on the backend, and React and Next.js on the frontend. Focused on creating efficient, maintainable, and high-performance solutions.',
                year: 'March 2023 - Feb 2026',
                location: 'Mohali'
            },
            {
                id: 3,
                title: 'Solitaire Infosystems Pvt. Ltd.',
                role: 'PHP Developer',
                url: 'https://solitaireinfosystems.com/',
                desc: "As a PHP developer, I gained hands-on experience in building web applications, performing CRUD operations, and integrating Firebase services.",
                year: 'Apr 2022 - Feb 2023',
                location: 'Mohali'
            }
        ]
        
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
