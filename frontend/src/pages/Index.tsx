// import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Scale, 
  FileText, 
  BookOpen, 
  Gavel, 
  Users, 
  Globe,
  ChevronRight,
  AlertTriangle,
  Search,
  HelpCircle
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from '@/components/Layout';

const Index = () => {
  const categories = [
    {
      title: "Fundamental Rights",
      icon: <Shield className="w-6 h-6 text-nyaya-blue" />,
      description: "Learn about the basic rights guaranteed to every Indian citizen by the Constitution.",
      link: "/fundamental-rights"
    },
    {
      title: "Legal Aid",
      icon: <Scale className="w-6 h-6 text-nyaya-blue" />,
      description: "Discover how to access free legal services if you can't afford a lawyer.",
      link: "/legal-aid"
    },
    {
      title: "RTI",
      icon: <FileText className="w-6 h-6 text-nyaya-blue" />,
      description: "Know how to use the Right to Information Act to get information from the government.",
      link: "/rti"
    },
    {
      title: "FIR & Police",
      icon: <AlertTriangle className="w-6 h-6 text-nyaya-blue" />,
      description: "Learn about filing a police complaint and your rights during police procedures.",
      link: "/police"
    },
    {
      title: "Court System",
      icon: <Gavel className="w-6 h-6 text-nyaya-blue" />,
      description: "Understand the Indian court hierarchy and how to navigate the justice system.",
      link: "/courts"
    },
    {
      title: "Women & Child Rights",
      icon: <Users className="w-6 h-6 text-nyaya-blue" />,
      description: "Special laws protecting women and children in India.",
      link: "/women-child-rights"
    },
    {
      title: "Cyber Law",
      icon: <Globe className="w-6 h-6 text-nyaya-blue" />,
      description: "Digital justice, online safety, and protection against cyber crimes.",
      link: "/cyber-law"
    },
    {
      title: "Resources",
      icon: <BookOpen className="w-6 h-6 text-nyaya-blue" />,
      description: "Helpful templates, contacts, and additional legal resources.",
      link: "/resources"
    }
  ];

  const featuredRights = [
    {
      title: "Right to Equality",
      article: "Article 14",
      description: "Equality before law and equal protection of laws within the territory of India."
    },
    {
      title: "Right to Freedom",
      article: "Article 19",
      description: "Freedom of speech, expression, assembly, association, movement, residence and profession."
    },
    {
      title: "Right to Life",
      article: "Article 21",
      description: "Protection of life and personal liberty - No person shall be deprived of his life or personal liberty except procedure established by law."
    }
  ];

  return (
    <Layout>
      <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 py-16 mx-auto md:py-24">
          <div className="flex flex-col items-center md:flex-row">
            <div className="mb-10 md:w-1/2 md:mb-0 md:pr-8">
              <h1 className="mb-6 text-3xl font-bold md:text-5xl text-nyaya-darkBlue">
                Know Your Rights, <br />
                <span className="text-nyaya-blue">Access Justice</span>
              </h1>
              <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
                Empowering every Indian citizen with legal knowledge and resources to understand their rights and navigate the justice system effectively.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/fundamental-rights">Explore Your Rights</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/resources">Find Legal Help</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://assets.telegraphindia.com/telegraph/2022/Nov/1668464304_new-project-2022-11-15t034804-823.jpg" 
                alt="Justice illustration" 
                className="w-full h-auto shadow-lg rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-2 tri-color-gradient"></div>
      </section>

      <section className="py-12 bg-white dark:bg-gray-950">
        <div className="container px-4 mx-auto">
          <div className="relative max-w-3xl mx-auto">
            <div className="flex items-center overflow-hidden border rounded-full shadow-sm focus-within:shadow-md focus-within:border-primary">
              <div className="pl-4">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <input 
                type="text" 
                placeholder="Search for legal information, rights, or resources..." 
                className="flex-grow p-4 text-sm bg-transparent outline-none"
              />
              <Button className="rounded-l-none">Search</Button>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mt-3 text-sm text-muted-foreground">
              <span>Popular:</span>
              <a href="#" className="hover:text-primary">RTI Filing</a>
              <a href="#" className="hover:text-primary">Domestic Violence</a>
              <a href="#" className="hover:text-primary">Consumer Rights</a>
              <a href="#" className="hover:text-primary">Cyber Complaint</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <h2 className="mb-2 text-2xl font-bold text-center md:text-3xl">Legal Knowledge Categories</h2>
          <p className="mb-12 text-center text-muted-foreground">Explore different areas of law and rights</p>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <Card key={index} className="overflow-hidden border card-hover border-border">
                <CardContent className="p-0">
                  <Link to={category.link} className="block p-6">
                    <div className="mb-4">
                      {category.icon}
                    </div>
                    <h3 className="mb-2 text-lg font-bold">{category.title}</h3>
                    <p className="mb-4 text-sm text-muted-foreground">{category.description}</p>
                    <div className="flex items-center text-sm font-medium text-primary">
                      Learn more <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container px-4 mx-auto">
          <h2 className="mb-2 text-2xl font-bold text-center md:text-3xl">Key Fundamental Rights</h2>
          <p className="mb-12 text-center text-muted-foreground">Essential rights guaranteed by the Constitution of India</p>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {featuredRights.map((right, index) => (
              <div 
                key={index} 
                className="p-6 rounded-lg shadow-sm bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700"
              >
                <span className="inline-block px-3 py-1 mb-4 text-sm rounded-full bg-primary/10 text-primary">
                  {right.article}
                </span>
                <h3 className="mb-3 text-xl font-bold">{right.title}</h3>
                <p className="text-muted-foreground">{right.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/fundamental-rights">
                View All Fundamental Rights <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container px-4 mx-auto">
          <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">Need Immediate Legal Help?</h2>
              <p className="mb-6">
                We understand that legal issues can be urgent and overwhelming. 
                If you're facing a legal emergency or need assistance, there are several resources available.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-3">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Legal Aid Helpline</h3>
                    <p className="text-primary-foreground/80">Call 1516 - National Legal Services Authority</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-3">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Women's Helpline</h3>
                    <p className="text-primary-foreground/80">Call 1091 - 24-hour assistance for women</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-3">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Police Emergency</h3>
                    <p className="text-primary-foreground/80">Call 100 - For immediate police assistance</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-bold">Find a Legal Aid Center</h3>
              <div className="space-y-4">
                <div>
                  <label className="block mb-2 text-sm">State</label>
                  <select className="w-full p-2 border rounded bg-white/20 backdrop-blur-sm border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50">
                    <option>Select your state</option>
                    <option>Delhi</option>
                    <option>Maharashtra</option>
                    <option>Karnataka</option>
                    <option>Tamil Nadu</option>
                    <option>Uttar Pradesh</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-sm">District</label>
                  <select className="w-full p-2 border rounded bg-white/20 backdrop-blur-sm border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50">
                    <option>Select your district</option>
                  </select>
                </div>
                <Button className="w-full bg-white text-primary hover:bg-white/90 hover:text-primary">Find Centers</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <h2 className="mb-2 text-2xl font-bold text-center md:text-3xl">Recent Legal Updates</h2>
          <p className="mb-12 text-center text-muted-foreground">Stay informed with the latest developments in Indian law</p>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card className="card-hover">
              <CardContent className="p-6">
                <span className="text-xs text-muted-foreground">April 2, 2023</span>
                <h3 className="mt-2 mb-3 text-lg font-bold">Supreme Court ruling on Privacy Rights</h3>
                <p className="text-sm text-muted-foreground">The Supreme Court of India has delivered a landmark judgment reinforcing the right to privacy as a fundamental right under the Indian Constitution.</p>
                <Button variant="link" className="p-0 mt-4">Read More</Button>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="p-6">
                <span className="text-xs text-muted-foreground">March 15, 2023</span>
                <h3 className="mt-2 mb-3 text-lg font-bold">New amendments to Cyber Security Laws</h3>
                <p className="text-sm text-muted-foreground">The Parliament has passed new amendments to strengthen cyber security laws, imposing stricter penalties for data breaches and cyber crimes.</p>
                <Button variant="link" className="p-0 mt-4">Read More</Button>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="p-6">
                <span className="text-xs text-muted-foreground">February 28, 2023</span>
                <h3 className="mt-2 mb-3 text-lg font-bold">Digital Personal Data Protection Bill</h3>
                <p className="text-sm text-muted-foreground">The new bill aims to protect the personal data of Indian citizens while establishing a framework for data processing by public and private entities.</p>
                <Button variant="link" className="p-0 mt-4">Read More</Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-10 text-center">
            <Button variant="outline">View All Updates</Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;