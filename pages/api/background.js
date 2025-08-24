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
                role: 'Full-Stack Developer',
                url: 'https://www.hashsoftware.com/',
                desc: 'As a Full-Stack Developer, I build robust and scalable web applications using PHP, Laravel, WordPress, and Node.js on the backend, and React and Next.js on the frontend. I focus on creating efficient, maintainable, and high-performance solutions.',
                year: '20/03/2023 - Present',
                location: 'Mohali'
            },                       
            {
                id: 2,
                title: 'Solitaire Infosystems Pvt. Ltd.',
                role: 'PHP Developer',
                url: 'https://solitaireinfosystems.com/',
                desc: "As a PHP developer, I gained hands-on experience in building web applications, performing CRUD operations, and integrating Firebase services.",
                year: '04/04/2022 - 28/02/2023',
                location: 'Mohali'
            }
        ]
        
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
