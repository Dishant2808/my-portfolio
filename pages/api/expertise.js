const expertise = [
    {
        id: 0,
        title: 'Laravel Development',
        desc: 'Building secure, scalable backends with Laravel: REST APIs, authentication, queues, events, jobs, and performance tuning.'
    },
    {
        id: 1,
        title: 'React / Next.js',
        desc: 'Modern SPAs and SSR/SSG apps with React and Next.js, hooks, routing, state management, and UI libraries.'
    },
    {
        id: 2,
        title: 'Node.js / Express',
        desc: 'Robust Node.js services and APIs using Express, middleware, validation, logging, and production readiness.'
    },
    {
        id: 3,
        title: 'WordPress',
        desc: 'Custom themes and plugins, WooCommerce, and performance optimization tailored to business needs.'
    },
    {
        id: 4,
        title: 'REST API Design',
        desc: 'Standards-driven API design, documentation, versioning, authentication (JWT/OAuth), and integration.'
    },
    {
        id: 5,
        title: 'Databases & Data Stores',
        desc: 'Schema design, indexing, query tuning, migrations, and data modeling across relational and NoSQL stores including MySQL, MongoDB, Firebase, and Supabase.'
    },
    {
        id: 6,
        title: 'Cloud & Deployments',
        desc: 'AWS/VPS hosting, Vercel/Netlify, Nginx, PM2, CI/CD pipelines, environment config, cPanel, FTP/FileZilla, and monitoring.'
    },
    {
        id: 8,
        title: 'Version Control (Git/GitHub)',
        desc: 'Branching strategies, pull requests, code reviews, and workflows that keep teams shipping reliably.'
    },
    {
        id: 9,
        title: 'Open Source Contributor',
        desc: "Weekend contributor to OSS—learning from community best practices and giving back with meaningful PRs."
    },
    {
        id: 11,
        title: 'Automation & Integrations',
        desc: 'Workflow automation with n8n/Zapier; CRM & data automation using Airtable/HubSpot; integrations with Stripe, Twilio, Zoho, Brevo, Google APIs.'
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
