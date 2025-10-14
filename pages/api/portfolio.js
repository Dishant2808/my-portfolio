const portfolio = [
    {
        id: 0,
        projectName: "Classes CRM",
        url: "https://app.classescrm.com",
        image: "projects/classes/2.png",
        images: ["projects/classes/1.png", "projects/classes/2.png", "projects/classes/3.png" , "projects/classes/4.png" , "projects/classes/5.png"],
        projectDetail: "Restructure your business with JMM ERP’s all-in-one cloud-based ERP. JMM ERP provides a robust, cost-effective online solution with state-of-the-art software to increase business value and enhance customer impact.",
        technologiesUsed: [
            {
                Frontend: "NextJS"
            },
            {
                Backend: "Laravel"
            },
            {
                DB: "MySQL"
            },
        ]
    },
    {
        id: 0,
        projectName: "Background Spain",
        url: "https://background-spain-adminapp.vercel.app",
        image: "projects/bgspain/2.png",
        images: ["projects/bgspain/1.png", "projects/bgspain/2.png", "projects/bgspain/3.png" , "projects/bgspain/4.png" , "projects/bgspain/5.png"],
        projectDetail: "Restructure your business with JMM ERP’s all-in-one cloud-based ERP. JMM ERP provides a robust, cost-effective online solution with state-of-the-art software to increase business value and enhance customer impact.",
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
            },
        ]
    },
    {
        id: 0,
        projectName: "Rue Four",
        url: "https://app.classescrm.com",
        image: "projects/ruefour/1.png",
        images: ["projects/ruefour/1.png", "projects/ruefour/2.png", "projects/ruefour/3.png" , "projects/ruefour/4.png" , "projects/ruefour/5.png"],
        projectDetail: "Restructure your business with JMM ERP’s all-in-one cloud-based ERP. JMM ERP provides a robust, cost-effective online solution with state-of-the-art software to increase business value and enhance customer impact.",
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
