import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Download, Phone, MapPin, Info, FileText, Clock, Users, ArrowRight } from 'lucide-react';

const LegalAid = () => {
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");
  
  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
    "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", 
    "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", 
    "Uttarakhand", "West Bengal", "Delhi", "Jammu and Kashmir", "Ladakh"
  ];
  
  const getDistricts = (state: string) => {
    
    const districtMap: Record<string, string[]> = {
      "Delhi": ["Central Delhi", "East Delhi", "New Delhi", "North Delhi", "South Delhi", "West Delhi"],
      "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik", "Aurangabad"],
      "Karnataka": ["Bengaluru", "Mysuru", "Mangaluru", "Hubballi-Dharwad", "Belagavi", "Kalaburagi"],
    };
    
    return districtMap[state] || [];
  };
  
  const eligibilityCriteria = [
    {
      category: "Income Criteria",
      details: "Persons with annual income less than Rs. 3 lakhs (may vary by state) are eligible for free legal services."
    },
    {
      category: "Women and Children",
      details: "All women and children are eligible for free legal services, regardless of their income."
    },
    {
      category: "SC/ST Communities",
      details: "Members of Scheduled Castes and Scheduled Tribes are eligible regardless of income."
    },
    {
      category: "Victims of Trafficking",
      details: "Victims of human trafficking or begar (forced labor) are eligible."
    },
    {
      category: "Persons with Disabilities",
      details: "Persons with disabilities as defined in the Rights of Persons with Disabilities Act, 2016."
    },
    {
      category: "Industrial Workmen",
      details: "Industrial workmen are eligible for legal services."
    },
    {
      category: "Victims of Mass Disaster, Violence, Flood, Drought, etc.",
      details: "Victims of natural or man-made disasters are eligible."
    },
    {
      category: "Persons in Custody",
      details: "Persons in custody, including under-trial prisoners, are eligible."
    }
  ];
  
  const services = [
    {
      title: "Legal Representation",
      description: "Free legal representation in courts by empanelled lawyers."
    },
    {
      title: "Legal Advice and Consultation",
      description: "Free legal advice through panel advocates and legal aid clinics."
    },
    {
      title: "Lok Adalats",
      description: "Alternative dispute resolution through Lok Adalats for quick settlement."
    },
    {
      title: "Legal Awareness",
      description: "Legal literacy and awareness programs in communities."
    },
    {
      title: "Pre-Litigation Mediation",
      description: "Resolving disputes before they reach the courts."
    },
    {
      title: "Legal Aid Clinics",
      description: "Clinics in villages, law schools, and other institutions for accessible legal services."
    }
  ];
  
  const faqItems = [
    {
      question: "What is legal aid?",
      answer: "Legal aid refers to the provision of assistance to people who are unable to afford legal representation and access to the court system. It ensures that no citizen is denied justice due to economic or other disabilities."
    },
    {
      question: "How can I apply for legal aid?",
      answer: "You can apply for legal aid by submitting an application form along with an affidavit/self-certificate of income to the nearest Legal Services Authority/Committee. Forms are available at Legal Services Authorities, District Courts, Taluka/Sub-divisional Courts, and can also be downloaded from NALSA and SLSA websites."
    },
    {
      question: "Is legal aid completely free?",
      answer: "Yes, if you fall under the eligible categories as mentioned in Section 12 of the Legal Services Authorities Act, 1987, all legal services will be provided completely free of cost."
    },
    {
      question: "What types of cases are covered under legal aid?",
      answer: "Legal aid covers a wide range of cases including civil, criminal, family matters, property disputes, labor issues, public interest litigation, and more. However, certain limitations may apply based on the nature of the case and the discretion of the Legal Services Authority."
    },
    {
      question: "How long does it take to get legal aid?",
      answer: "The time taken to process legal aid applications varies. In urgent matters, legal aid can be provided immediately. In regular cases, it may take a few days to a few weeks, depending on verification procedures and the complexity of the matter."
    }
  ];

  return (
    <Layout>
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 py-16 mx-auto md:py-24">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">Legal Aid in India</h1>
          <p className="max-w-3xl mb-8 text-lg">
            Legal aid ensures that constitutional pledges of equal justice under law are fulfilled. The Legal Services Authorities Act, 1987 provides a framework for delivering free and competent legal services to the disadvantaged sections.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg">
              Download Legal Aid Guide <Download className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
        <div className="h-2 tri-color-gradient"></div>
      </section>

      <section className="py-12 bg-white dark:bg-gray-950">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-2xl font-bold text-center">Find a Legal Aid Center Near You</h2>
          
          <div className="max-w-3xl p-6 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Select State</label>
                <Select value={selectedState} onValueChange={setSelectedState}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a state" />
                  </SelectTrigger>
                  <SelectContent>
                    {states.map((state) => (
                      <SelectItem key={state} value={state}>{state}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Select District</label>
                <Select value={selectedDistrict} onValueChange={setSelectedDistrict} disabled={!selectedState}>
                  <SelectTrigger>
                    <SelectValue placeholder={selectedState ? "Choose a district" : "Select a state first"} />
                  </SelectTrigger>
                  <SelectContent>
                    {getDistricts(selectedState).map((district) => (
                      <SelectItem key={district} value={district}>{district}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Button className="w-full" disabled={!selectedState || !selectedDistrict}>
              Find Legal Aid Centers
            </Button>
          </div>
          
          <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>National Legal Services Authority (NALSA)</CardTitle>
                <CardDescription>Apex body constituted to lay down policies and principles for legal services</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 text-primary" />
                    <p>NALSA Building, 12/11, Jam Nagar House, Shahjahan Road, New Delhi - 110011</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-primary" />
                    <p>011-23386176, 23382778</p>
                  </div>
                  <div className="flex items-center">
                    <Info className="w-5 h-5 mr-3 text-primary" />
                    <a href="https://nalsa.gov.in" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                      nalsa.gov.in
                    </a>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View Full Contact Directory</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>State Legal Services Authorities</CardTitle>
                <CardDescription>Bodies constituted in every State to implement legal aid programs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-3 text-primary" />
                    <p>SLSAs are located in the High Court complex of each State</p>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-3 text-primary" />
                    <p>Working hours: Monday to Friday, 10:00 AM to 5:00 PM</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-primary" />
                    <p>National Legal Helpline: 15100 (Toll-Free)</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View All SLSAs</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <h2 className="mb-2 text-2xl font-bold text-center">Eligibility for Free Legal Services</h2>
          <p className="mb-12 text-center text-muted-foreground">
            Under Section 12 of the Legal Services Authorities Act, 1987, the following categories of persons are eligible for free legal services:
          </p>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {eligibilityCriteria.map((criteria, index) => (
              <Card key={index} className="transition-shadow duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">{criteria.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{criteria.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="max-w-3xl p-6 mx-auto mt-12 rounded-lg bg-blue-50 dark:bg-gray-800">
            <h3 className="mb-4 text-xl font-semibold">How to Apply for Legal Aid</h3>
            <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">Get Application Form: </span>
                Obtain from Legal Services Authority office or download from NALSA website
              </li>
              <li>
                <span className="font-medium text-foreground">Fill the Form: </span>
                Complete the application form with all required information
              </li>
              <li>
                <span className="font-medium text-foreground">Income Certificate: </span>
                Attach an income certificate or self-declaration of income
              </li>
              <li>
                <span className="font-medium text-foreground">Submit Form: </span>
                Submit to the nearest Legal Services Authority/Committee
              </li>
              <li>
                <span className="font-medium text-foreground">Follow-up: </span>
                Track your application status and respond to any queries
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container px-4 mx-auto">
          <h2 className="mb-2 text-2xl font-bold text-center">Services Provided Under Legal Aid</h2>
          <p className="mb-12 text-center text-muted-foreground">
            The Legal Services Authorities provide various services to ensure access to justice for all citizens
          </p>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700">
                <h3 className="mb-3 text-lg font-bold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container max-w-4xl px-4 mx-auto">
          <h2 className="mb-2 text-2xl font-bold text-center">Frequently Asked Questions</h2>
          <p className="mb-12 text-center text-muted-foreground">
            Common questions about legal aid services in India
          </p>
          
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="font-medium text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 text-center">
            <p className="mb-4">Couldn't find what you're looking for?</p>
            <Button variant="outline">Contact Legal Aid Helpline</Button>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container px-4 mx-auto">
          <h2 className="mb-2 text-2xl font-bold text-center">Legal Aid Resources</h2>
          <p className="mb-12 text-center text-muted-foreground">
            Download useful guides and documents
          </p>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="transition-shadow duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle>Legal Aid Application Form</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">Standard form to apply for free legal services under the Legal Services Authorities Act, 1987.</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <FileText className="w-4 h-4 mr-2" />
                  <span>PDF Document • 2 Pages</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Download <Download className="w-4 h-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="transition-shadow duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle>Know Your Rights Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">Comprehensive guide explaining fundamental rights and legal aid provisions for citizens in simple language.</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <FileText className="w-4 h-4 mr-2" />
                  <span>PDF Document • 24 Pages</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Download <Download className="w-4 h-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="transition-shadow duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle>Legal Services Authorities Act</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">Full text of the Legal Services Authorities Act, 1987, which establishes the legal framework for providing free legal aid.</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <FileText className="w-4 h-4 mr-2" />
                  <span>PDF Document • 32 Pages</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Download <Download className="w-4 h-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <Button>
              View All Resources <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LegalAid;
