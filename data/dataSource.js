var portfolioDataOnServer = fetchData();

function fetchData() {
    let data = JSON.parse(`{
        "info": {
            "title": "Full stack .NET Web developer",
            "name": "Chi Nguyen",
            "email": "ichinm@gmail.com",
            "skype": "chi-nm"
        },
        
        "description": {
            "title": "What I Do",
            "content": "After years of working in .NET world I can get involved in any .NET web development position.",
            "sub_blocks": [
                {"title": "Front-end: HTML, CSS, JS", "icon": "fa-code"},
                {"title": "Back-end: Web Form, MVC.NET, Web API", "icon": "fa-hashtag"},
                {"title": "Database: Oracle, MS SQL", "icon": "fa-database"},
                {"title": "CD/CI: Teamcity, Cruise Control, Application Release Automation", "icon": "fa-cogs"}
            ]
        },

        "strengths": [
            {
                "title": "Writing Clean Code",
                "icon": "fa-code",
                "content": "Code can be easily maintained and changed. No redundancy, less problem. And more..." 
            },
            {
                "title": "Learning New Things",
                "icon": "fa-book",
                "content": "Technology, methodology, tool... anything that related to my works." 
            },
            {
                "title": "Unit Testing",
                "icon": "fa-check-circle",
                "content": "With right approach of Unit Testing we are fearless in refactoring, safe to adding new feature." 
            },
            {
                "title": "Do The Right Thing",
                "icon": "fa-diamond",
                "content": "Stick with core business values of the product, even in the 'Worse is better' way!" 
            }
        ],
        
        "projects": [
            {
                "id": "this",
                "name": "React Portfolio",
                "link": "portfolio.html",
                "category": "demo",
                "title": "My portfolio",
                "sub_title": "This portfolio page",
                "image": "img/portfolio/thumbnails/this.jpg",
                "big_image": "img/portfolio/fullsize/this.jpg",
                "description": {"title":"The time to learn something new", "content": "In recent years, I was working primarily as a back-end developer. So, I create this portfoilio page to demonstrate how I learn a new thing and how I work as a front-end developer."},
                "technologies": {
                    "title": "Let see what was used",
                    "content": "At the first, I get layout from startbootstrap.com and then break it into React components. All contents are come from a single Json object(as the result from a API call) and are bound to the UI using React-Redux.",
                    "sub_blocks": [
                        {"title": "jQuery: Some simple effects"},
                        {"title": "Bootstrap: CSS responsive layout"},
                        {"title": "React: Yeah, the super star in this demo"},
                        {"title": "React-router: Routing in a single page"},
                        {"title": "React-redux: A 'Single source of truth'"},
                        {"title": "Babel: React-JSX compiler"}
                    ]
                },
                "resources": [
                    {"title": "'Creative' - Bootstrap template", "target": "_blank", "link": "https://startbootstrap.com/template-overviews/creative/"}
                ]
            },
            {
                "id": "ara",
                "name": "Application Release Automation",
                "category": "dev-opt",
                "title": "Application Release Automation",
                "sub_title": "Continuous delivery tool",
                "image": "img/portfolio/thumbnails/ara.jpg",
                "big_image": "img/portfolio/fullsize/ara.jpg",
                "description": { "content": "In the DevOpt field, Application Release Automation(ARA) is a powerful tool. Applications can be deployed automatically to existing environments or to newly provisioned environments by it-self. It is reliable, scale able and platform independent. Being used by Walmart, Bet365..."},
                "technologies": {
                    "content": "In this project, I have been working as a back-end developer. Fulfil the ARA's functionalities/APIs in technical aspect during both designing and implementing period. Maintain released versions of ARA, also take care of CD (using ARA) and CI (Teamcity) systems.",
                    "sub_blocks": [
                        {"title": "Web/Rest APIs"},
                        {"title": "ASP.NET"},
                        {"title": "PowerShell"},
                        {"title": "Git, Teamcity, Automation test"}
                    ]
                },
                "resources": [
                    {"title": "Application Release Automation", "target": "_blank", "link": "https://automic.com/products/application-release-automation"}
                ]
            },
            {
                "id": "epi",
                "name": "Episerver",
                "link": "http://www.episerver.com/",
                "category": "cms",
                "title": "Episerver",
                "sub_title": "A .NET CMS",
                "image": "img/portfolio/thumbnails/epi.jpg",
                "big_image": "img/portfolio/fullsize/epi.jpg",
                "description": { "content": "Except Evasolo and Stark, all other projects that based on Episerver I worked as a back-end developer. My tasks are to develop page/block types (they are kind of strong-typed page/block template), design dynamic properties structure for pages/blocks, integrate with other systems..."},
                "technologies": {
                    "sub_blocks": [
                        {"title": "CSS, HTML, Bootstrap"},
                        {"title": "jQuery, Knockout"},
                        {"title": "Episerver"},
                        {"title": "ASP.NET"}
                    ]
                },
                "resources": [
                    {"title": "Episerver", "target": "_blank", "link": "http://www.episerver.com/"}
                ]
            },
            {
                "id": "eva",
                "name": "evasolo",
                "link": "http://www.evasolo.com/en/",
                "category": "cms",
                "title": "Evasolo",
                "sub_title": "Modern, innovative kitchen equipment",
                "image": "img/portfolio/thumbnails/eva.jpg",
                "big_image": "img/portfolio/fullsize/eva.jpg",
                "description": {"content": "We built the website for Evasolo from the beginning, based on Episerver (a .NET CMS). Our team developed both back-end and front-end while the designers were in Denmark."},
                "technologies": {
                    "sub_blocks": [
                        {"title": "CSS3, HTML5, Bootstrap"},
                        {"title": "jQuery, Knockout"},
                        {"title": "Episerver version 7"},
                        {"title": "ASP.NET MVC"}
                    ]
                },
                "resources": [
                    {"title": "evasolo.com", "target": "_blank", "link": "http://www.evasolo.com/en/"}
                ]
            },
            {
                "id": "stark",
                "name": "Stark.dk",
                "link": "https://www.stark.dk/",
                "category": "cms",
                "title": "Stark.dk",
                "sub_title": "Tools, materials, services for construction", 
                "image": "img/portfolio/thumbnails/stark.jpg",
                "big_image": "img/portfolio/fullsize/stark.jpg",
                "description": { "content": "Same as Evasolo this site was also built from Episerver(older version). I did all development aspects of this site: implement new features(map integration, customer service functionalities...), support administration tasks, deploy new version..."},
                "technologies": {
                    "sub_blocks": [
                        {"title": "CSS, HTML"},
                        {"title": "jQuery"},
                        {"title": "Google Map"},
                        {"title": "Episerver version 6"},
                        {"title": "ASP.NET WebForm"},
                        {"title": "CruiseControl"}
                    ]
                },
                "resources": [
                    {"title": "stark.dk", "target": "_blank", "link": "https://www.stark.dk/"}
                ]
            },
            {
                "id": "arp",
                "name": "Automic Release Planner",
                "category": "dev-opt",
                "title": "Automic Release Planner",
                "sub_title": "Upcoming dev-opt tool",
                "image": "img/portfolio/thumbnails/arp.jpg",
                "big_image": "img/portfolio/fullsize/arp.jpg",
                "description": { "content": "Basically, it is a plan tool, but deeply integrated with Application Release Automation(ARA), Automation Engine (AE - a core application of Automic, it can automate every task you can imagine in the IT industry) and more in future. It will raise the DevOpt to a higher level of automation."},
                "technologies": {
                    "content": "Same as ARA, in this project I also working as a back-end developer.",
                    "sub_blocks": [
                        {"title": "Web/Rest APIs"},
                        {"title": "ASP.NET"},
                        {"title": "Powershell"},
                        {"title": "Git, Teamcity, Automation test"}
                    ]
                }
            }
        ]
    }`);

    return new PortfolioData().fromJson(data);
}
