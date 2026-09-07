export type Education = {
    degree: string
    institution: string
    period?: string
    details?: string
}

export type Experience = {
    position: string
    organization?: string
    period?: string
    description?: string
}

export type Member = {
    slug: string
    name: string
    shortName: string
    title: string
    location: string
    email: string
    linkedin?: string
    summary: string
    interests: string[]
    skills: string[]
    education: Education[]
    experience: Experience[]
    certifications?: string[]
    personalPage?: string
}

export const members: Member[] = [
    {
        slug: "jorge-correa",
        name: "Jorge Israel Correa Justiniano",
        shortName: "Jorge Correa",
        title: "Civil Engineer and AI Researcher",
        location: "Miami, Florida · Open to relocation",
        email: "jisraelcorrea@live.com",
        linkedin: "https://www.linkedin.com/in/cmjic",
        personalPage: "/portfolio/jorge-correa",


        summary:
            "Civil engineer specializing in construction engineering, BIM automation, and artificial intelligence. His work focuses on applying computer vision and advanced computational technologies to improve construction inspection, infrastructure management, and engineering decision-making.",

        interests: [
            "Artificial Intelligence",
            "Computer Vision",
            "Construction Engineering",
            "BIM Automation",
            "Infrastructure Inspection",
            "Digital Construction",
        ],

        skills: [
            "Python",
            "C#",
            "Computer Vision",
            "Machine Learning",
            "Revit API",
            "AutoCAD",
            "Autodesk Revit",
            "Civil 3D",
            "Navisworks Manage",
            "Bentley SYNCHRO 4D Pro",
            "Primavera P6",
            "On-Screen Takeoff",
            "CYPECAD",
            "PTC Mathcad",
        ],

        education: [
            {
                degree: "Master of Science in Civil Engineering",
                institution: "University of Alabama at Birmingham",
                period: "August 2024 – August 2026",
                details: "GPA: 4.00/4.00",
            },
            {
                degree: "Bachelor of Engineering in Civil Engineering",
                institution: "Escuela Militar de Ingeniería",
                period: "October 2019 – October 2023",
                details: "Santa Cruz, Bolivia",
            },
        ],

        experience: [
            {
                position: "C# and Revit API Instructor – BIM Automation",
                period: "February 2024 – July 2024",
                description:
                    "Delivered instruction focused on C#, Revit API development, and the automation of BIM workflows.",
            },
            {
                position: "Construction Engineering Intern",
                organization: "Las Loritas Building Project",
                period: "February 2022 – November 2023",
                description:
                    "Supported construction engineering, project coordination, quantity control, and field-related activities.",
            },
            {
                position: "Undergraduate Teaching Assistant",
                organization:
                    "Department of Civil Engineering, Escuela Militar de Ingeniería",
                period: "February 2020 – November 2023",
                description:
                    "Supported civil engineering courses and assisted students with technical and academic activities.",
            },
        ],

        certifications: [
            "Tau Beta Pi Engineering Honor Society",
            "Omega Nu Lambda National Honor Society",
            "The National Society of Leadership and Success",
        ],
    },

    {
        slug: "diego-arrieta",
        name: "Diego Antonio Arrieta Calle",
        shortName: "Diego Arrieta",
        title: "Civil Engineer and BIM/GIS Specialist",
        location: "Piura, Peru · Available nationwide",
        email: "diego.arrietacalle@outlook.com",

        summary:
            "Civil engineering professional with experience in road infrastructure, sanitation, and urban drainage projects. His interests include BIM and GIS integration, project management, hydraulic infrastructure, software development, and the automation of engineering workflows.",

        interests: [
            "BIM",
            "Geographic Information Systems",
            "Road Infrastructure",
            "Water and Sanitation",
            "Urban Drainage",
            "Engineering Automation",
            "Software Development",
        ],

        skills: [
            "Dynamo",
            "Python",
            "C#",
            "Revit",
            "Revit API",
            "Civil 3D",
            "Civil 3D API",
            "Navisworks",
            "InfraWorks",
            "ArcGIS Pro",
            "QGIS",
            "WaterGEMS",
            "SewerGEMS",
            "InfoWorks ICM",
            "HEC-RAS",
            "Iber",
            "Microsoft Excel",
            "VBA",
            "Web Development",
        ],

        education: [
            {
                degree: "Bachelor’s Degree in Civil Engineering",
                institution: "Universidad Nacional de Piura",
            },
            {
                degree: "BIM Specialization",
                institution: "Universidad Continental",
            },
            {
                degree: "Master’s Degree in Software Engineering",
                institution: "In progress",
            },
        ],

        experience: [
            {
                position: "BIM Management Analyst",
            },
            {
                position: "BIM Coordinator",
            },
            {
                position: "BIM Modeler for Urban Drainage Infrastructure",
            },
            {
                position: "BIM CAD Technician for Sanitary Infrastructure",
            },
            {
                position: "CAD/GIS Interference Analyst",
            },
        ],

        certifications: [
            "Hydraulic and Sanitation BIM",
            "Autodesk Civil 3D Expert",
            "InfoWorks ICM 2025",
            "Advance Your Skills in GIS",
            "Mobile and Web Application Development Specialization",
        ],
    },
    {
        slug: "gilmar-guzman",
        name: "Gilmar Guzmán Dávila",
        shortName: "Gilmar Guzmán",
        title: "Architect, BIM Manager and Digital Construction Specialist",
        location: "Peru · Available nationwide",
        email: "ggd3000@hotmail.com",
        linkedin:
            "https://www.linkedin.com/in/arq-acp-gilmar-guzmán-dávila-1a1573138",

        summary:
            "Architect and Autodesk Certified Professional with extensive experience in BIM management, project coordination and construction technology. He specializes in implementing digital processes for planning, multidisciplinary coordination and construction control. He also leads the development of Sweb, a BIM ERP platform that integrates technical, administrative and field information for construction projects.",

        interests: [
            "BIM Management",
            "Digital Construction",
            "Construction Management",
            "Data Analytics",
            "Digital Twins",
            "BIM 4D and 5D",
            "Software Development",
        ],

        skills: [
            "Autodesk Revit",
            "Civil 3D",
            "Autodesk Construction Cloud",
            "ArcGIS",
            "Power BI",
            "Microsoft Office",
            "Dynamo",
            "C#",
            "Grasshopper",
            "Python",
            "FastAPI",
            "React",
            "SharePoint",
            "n8n",
            "BIM Coordination",
            "ISO 19650",
        ],

        education: [
            {
                degree: "Master of Business Administration",
                institution: "Universidad del Pacífico – Pacífico Business School",
                period: "June 2025 – Present",
            },
            {
                degree: "Master’s Degree in Economics – Investment Projects",
                institution:
                    "Universidad Nacional de San Antonio Abad del Cusco",
                period: "August 2023 – Present",
            },
            {
                degree: "Master’s Degree in Construction Management",
                institution:
                    "Universidad Nacional de San Antonio Abad del Cusco",
                period: "December 2020 – December 2022",
                details: "Pending thesis defense date",
            },
            {
                degree: "Professional Degree in Architecture",
                institution:
                    "Universidad Nacional de San Antonio Abad del Cusco",
                period: "2010 – 2018",
            },
            {
                degree: "Interior Design",
                institution: "SENCICO",
                period: "January 2002 – December 2006",
            },
        ],

        experience: [
            {
                position: "BIM Manager",
                organization: "Consorcio Ríos del Norte",
                period: "May 2022 – Present",
            },
            {
                position: "Official Autodesk Partner",
                organization: "Autodesk",
                period: "April 2021 – 2024",
            },
            {
                position: "Official Autodesk Instructor",
                organization: "Autodesk",
                period: "April 2021 – 2022",
            },
            {
                position: "Business Partner",
                organization: "Konstruedu.com",
                period: "April 2021 – 2024",
            },
            {
                position: "Official Certiport Partner",
                organization: "Certiport Latinoamérica",
                period: "April 2017 – 2023",
            },
            {
                position: "General Manager",
                organization: "3DCON E.I.R.L.",
                period: "August 2018 – 2024",
            },
            {
                position: "BIM Coordinator",
                organization: "Consorcio Ríos del Norte",
                period: "July 2021 – February 2022",
            },
            {
                position: "Autodesk Instructor",
                organization: "Fietzen Ingenieros",
                period: "May 2018 – February 2022",
            },
            {
                position: "Lead BIM Modeler",
                organization: "China Gezhouba Group Company Perú",
                period: "November 2020 – July 2021",
            },
            {
                position: "Lead BIM Modeler",
                organization: "Grupo 5 Constructora Inmobiliaria",
                period: "February 2018 – May 2019",
            },
            {
                position: "Autodesk Course Instructor",
                organization: "Corporación SEIC",
                period: "June 2016 – June 2018",
            },
            {
                position: "BIM Coordinator",
                organization: "Constructora MECH SRL",
                period: "December 2017 – May 2018",
                description:
                    "Development and management of 3D models for data extraction according to LOD 400–500.",
            },
            {
                position: "Professional CAD Technician",
                organization: "Marco Contratistas",
                period: "January 2005 – November 2015",
            },
        ],

        certifications: [
            "Autodesk Certified Professional: Revit Architecture",
            "Autodesk Certified Professional: Revit MEP Mechanical",
            "Autodesk Certified Professional: Revit Structure",
            "Autodesk Certified Instructor",
            "BIM ISO 19650-2: Project Delivery",
            "BIM ISO 19650-3: Operational Phase Information Management",
            "BIM ISO 19650-4: Information Exchange",
            "Visual Programming Specialist with Dynamo, C# and Grasshopper",
        ],
    },
    {
        slug: "kevin-meza",
        name: "Kevin Anthony Meza Mallma",
        shortName: "Kevin Meza",
        title: "BIM Specialist, BIM Developer and Civil Engineer",
        location: "Lima, Peru",
        email: "k.meza.civil@gmail.com",

        summary:
            "Licensed civil engineer from the Pontificia Universidad Católica del Perú with more than five years of experience leading BIM implementation and supervision for major infrastructure and building projects. He specializes in process automation using C# with the Revit and AutoCAD Civil 3D APIs, AI integrations, AI agent development, Power BI and collaborative information environments. He is also the founder of DJP SAC, an AEC digital transformation consultancy.",

        interests: [
            "BIM Management",
            "BIM Development",
            "Digital Transformation",
            "Artificial Intelligence",
            "AI Agents",
            "Business Intelligence",
            "Infrastructure Delivery",
            "Engineering Automation",
            "Photogrammetry and Drones",
        ],

        skills: [
            "C#",
            "Python",
            "Dynamo",
            "VBA",
            "Revit API",
            "AutoCAD Civil 3D API",
            "Autodesk Revit",
            "AutoCAD Civil 3D",
            "Navisworks",
            "Autodesk Construction Cloud",
            "BIM 360",
            "InfraWorks",
            "BIMCollab Zoom",
            "Archicad",
            "Trimble Connect",
            "Power BI",
            "SQL Server",
            "Microsoft Excel",
            "Pix4D",
            "Global Mapper",
            "ArcGIS",
            "QGIS",
            "Autodesk ReCap",
            "Dronelink",
            "ISO 19650",
            "NEC Contracts",
            "Microsoft Project",
            "S10",
            "Delphin Express",
            "Claude Code",
        ],

        education: [
            {
                degree: "Master’s Degree in Business Digital Transformation",
                institution:
                    "Universidad Peruana de Ciencias Aplicadas",
                period: "2024 – Present",
                details: "Currently completing the final academic cycle",
            },
            {
                degree: "Professional Degree in Civil Engineering",
                institution:
                    "Pontificia Universidad Católica del Perú",
                period: "2013 – 2020",
                details:
                    "Degree obtained through thesis in May 2024 · Licensed Civil Engineer CIP 347239",
            },
        ],

        experience: [
            {
                position: "BIM Coordinator and BIM Developer",
                organization: "OHLA Peru",
                period: "May 2026 – Present",
                description:
                    "BIM execution planning, Power BI progress reporting, automated Revit and Civil 3D workflows, drone photogrammetry and development of an AI agent for controlling engineering software through natural language.",
            },
            {
                position: "BIM Supervisor and BIM Developer",
                organization: "720 BIM",
                period: "August 2025 – April 2026",
                description:
                    "BIM supervision for the Bicentennial Schools Package 02, including execution planning, process standardization, Power BI reporting, automation and technical closeout strategy.",
            },
            {
                position: "BIM Specialist and BIM Developer",
                organization: "Consorcio Sinohydro – Flesan",
                period: "December 2024 – June 2025",
                description:
                    "Updated the BIM Execution Plan and 4D/5D guidelines for the Quebrada Cansas project. Developed Power BI dashboards, augmented-reality tools and automated Revit and Civil 3D workflows.",
            },
            {
                position: "BIM Specialist and BIM Developer",
                organization: "DVC – Grupo Flesan",
                period: "April 2024 – November 2024",
                description:
                    "Led the production of as-built models and drawings for the Matagente River Defense project, including Power BI reporting, BIM 360 management, 4D modeling and point-cloud processing.",
            },
            {
                position: "Founder and BIM Consultant",
                organization: "DJP SAC – Digital Jump Peru",
                period: "2024 – Present",
                description:
                    "Provides BIM automation and digital transformation consulting for the AEC sector. Developed Property Sets Management, a commercial Civil 3D add-in with Supabase and Stripe integration, and delivered C# API training for civil engineers.",
            },
            {
                position: "BIM Coordinator and BIM Developer",
                organization: "Benito Roggio e Hijos S.A.",
                period: "January 2024 – April 2024",
                description:
                    "Prepared the BIM Execution Plan and coordinated model auditing, Autodesk Construction Cloud information containers, clash detection and federated InfraWorks models for the Sullana-Bellavista drainage project.",
            },
            {
                position: "Construction BIM Coordinator",
                organization: "Obrascón Huarte Lain",
                period: "May 2023 – January 2024",
                description:
                    "Managed BIM coordination, construction KPIs, contractual documentation under NEC 3 and the integration of BIM models, point clouds and GIS data for river defense projects.",
            },
            {
                position: "Construction BIM Coordinator",
                organization:
                    "SICE – Sociedad Ibérica de Construcciones Eléctricas",
                period: "April 2022 – March 2023",
                description:
                    "Led multidisciplinary BIM coordination, model auditing, production metrics, quantity extraction, as-built supervision and drone photogrammetry for the COAR Ancash project.",
            },
            {
                position: "BIM Coordinator and Modeler",
                organization: "HYQ Ingenieros",
                period: "December 2021 – February 2022",
                description:
                    "Reviewed healthcare facility models, coordinated disciplines, quantified materials, created LOD 400 families and exported IFC models with COBie parameters.",
            },
            {
                position: "BIM Engineering Assistant",
                organization: "Provías Nacional",
                period: "May 2021 – December 2021",
                description:
                    "Modeled roadway structures and drainage works using Revit and Civil 3D. Developed Dynamo automations, parametric families, InfraWorks federations and GIS integrations.",
            },
            {
                position: "BIM Coordinator and Modeler",
                organization: "DYET Tecnología y Construcción",
                period: "October 2020 – February 2021",
                description:
                    "Modeled structural, architectural and building-service systems, performed multidisciplinary coordination and 4D simulation, and managed client information through BIM 360.",
            },
            {
                position: "BIM Coordinator",
                organization: "ENMACON S.A.C.",
                period: "November 2019 – October 2020",
                description:
                    "Coordinated and modeled multiple disciplines, managed information according to ISO 19650 and organized Integrated Concurrent Engineering sessions.",
            },
        ],

        certifications: [
            "buildingSMART International – Professional Certification OpenBIM, BIM Fundamentals",
            "CIP Lima – BIM Project Coordinator, 200 hours",
            "Lambda Ingeniería e Innovación – Revit API Process Automation",
            "Autodesk ATC – Navisworks Manage Project Coordinator",
            "PlanBIM Chile, BID and CORFO – Introduction to BIM Methodology",
            "Autodesk and ITCADPERU – BIM Coordination, BEP Development and Dynamo Automation",
            "Innovum Corp – BIM Management Specialization",
            "VICSAN and BIM Latam – Exchange Information Requirements Review",
        ],
    },
]

