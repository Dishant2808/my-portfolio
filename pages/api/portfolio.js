const portfolio = [
    {
        id: 0,
        projectName: "Classes CRM",
        url: "https://app.classescrm.com",
        image: "projects/classes/2.png",
        images: ["projects/classes/1.png", "projects/classes/2.png", "projects/classes/3.png" , "projects/classes/4.png" , "projects/classes/5.png"],
        projectDetail: "CRM Platform that enables businesses (e.g., Coaching centers, Gym, Classes, Events) to manage sessions, booking, and client interactions based on locations. The platform provides real-time booking.",
        technologiesUsed: [
            {
                Frontend: "NextJS"
            }
    
        ]
    },
    {
        id: 0,
        projectName: "Background Spain",
        url: "https://background-spain-adminapp.vercel.app",
        image: "projects/bgspain/2.png",
        images: ["projects/bgspain/1.png", "projects/bgspain/2.png", "projects/bgspain/3.png" , "projects/bgspain/4.png" , "projects/bgspain/5.png"],
        projectDetail: "Employee Background Verification Platform provides businesses with automated tools to verify the employment history, educational qualifications, criminal records, and other background details of job applicants and employees.",
        technologiesUsed: [
            {
                Frontend: "ReactJS & Laravel"
            }
        ]
    },
    {
        id: 0,
        projectName: "Behaviour Link",
        url: "http://behaviour-link.hsdevbox.com",
        image: "projects/behaviour-link/1.png",
        images: ["projects/behaviour-link/1.png", "projects/behaviour-link/2.png", "projects/behaviour-link/3.png" , "projects/behaviour-link/4.png" , "projects/behaviour-link/5.png"],
        projectDetail: "Restructure your business with JMM ERP’s all-in-one cloud-based ERP. JMM ERP provides a robust, cost-effective online solution with state-of-the-art software to increase business value and enhance customer impact.",
        technologiesUsed: [
            {
                Frontend: "Laravel"
            }
        ]
    },
    {
        id: 0,
        projectName: "Rue Four",
        url: "https://app.classescrm.com",
        image: "projects/rue-four/1.jpg",
        images: ["projects/rue-four/1.jpg", "projects/rue-four/2.jpg", "projects/rue-four/3.jpg" , "projects/rue-four/4.jpg" , "projects/rue-four/5.jpg"],
        projectDetail: "E-commerce platform that connects clinicians and patients with healthcare, skincare, and wellness products from multiple brands. The platform streamlines product management, order fulfillment, and personalized recommendations for patients.",
        technologiesUsed: [
            {
                Frontend: "NextJS & Laravel"
            }
        ]
    },
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
