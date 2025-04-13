// import React from 'react';
import Layout from '@/components/Layout';
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { AlertCircle, CheckCircle, Clock, Download, FileText, HelpCircle, Info, } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const RTI = () => {
  const timelineSteps = [
    {
      title: "Application Submission",
      description: "Submit your RTI application with the prescribed fee to the relevant Public Information Officer (PIO)."
    },
    {
      title: "30 Days Response Period",
      description: "The PIO must provide information or reject the request within 30 days from the receipt of application."
    },
    {
      title: "48 Hours for Life & Liberty",
      description: "If the information concerns the life or liberty of a person, it must be provided within 48 hours."
    },
    {
      title: "First Appeal (Optional)",
      description: "If unsatisfied with the response or no response is received, file first appeal within 30 days to the First Appellate Authority."
    },
    {
      title: "30 Days for First Appeal Decision",
      description: "The First Appellate Authority must decide on the appeal within 30 days (extendable to 45 days)."
    },
    {
      title: "Second Appeal (Optional)",
      description: "If still unsatisfied, file second appeal to the Information Commission within 90 days from First Appeal decision."
    }
  ];
  
  const exemptions = [
    {
      title: "National Security",
      description: "Information that would prejudicially affect India's sovereignty, security, strategic interests, or foreign relations."
    },
    {
      title: "Prohibited by Court",
      description: "Information expressly forbidden to be published by any court of law or tribunal."
    },
    {
      title: "Breach of Parliamentary Privilege",
      description: "Information that would cause a breach of privilege of Parliament or State Legislature."
    },
    {
      title: "Commercial Confidence",
      description: "Information including trade secrets, intellectual property that would harm competitive position of a third party."
    },
    {
      title: "Fiduciary Relationship",
      description: "Information available to a person in his fiduciary capacity."
    },
    {
      title: "Foreign Government",
      description: "Information received in confidence from foreign governments."
    },
    {
      title: "Endangering Life",
      description: "Information that would endanger the life or physical safety of any person."
    },
    {
      title: "Investigation Process",
      description: "Information that would impede the process of investigation or apprehension or prosecution of offenders."
    },
    {
      title: "Cabinet Papers",
      description: "Cabinet papers including records of deliberations of Council of Ministers, Secretaries and other officers."
    },
    {
      title: "Personal Privacy",
      description: "Information related to personal information which has no relationship to any public activity or interest."
    }
  ];
  
  const faqs = [
    {
      question: "Who can file an RTI application?",
      answer: "Any citizen of India can file an RTI application. Non-resident Indians (NRIs) holding Indian citizenship can also file RTI applications. However, foreigners and corporate entities cannot file RTI applications."
    },
    {
      question: "What is the fee for filing an RTI application?",
      answer: "The fee for filing an RTI application is ₹10 for central government departments. State governments may prescribe different fees. No fee is required from persons below poverty line (with proper certification)."
    },
    {
      question: "In which language can I file an RTI application?",
      answer: "You can file an RTI application in English, Hindi, or the official language of the area where the application is being filed."
    },
    {
      question: "Can I ask multiple questions in one RTI application?",
      answer: "Yes, you can ask multiple questions in a single RTI application as long as they pertain to one subject matter and are addressed to the same public authority."
    },
    {
      question: "What if the information I seek relates to another public authority?",
      answer: "If the information sought relates to another public authority, the PIO is required to transfer the application to that authority within 5 days and inform you about the transfer."
    },
    {
      question: "Can I get information about private companies through RTI?",
      answer: "Directly, no. However, if a private company is substantially financed by the government or if the information is held by a public authority regarding the private entity, such information may be accessible through RTI."
    }
  ];

  return (
    <Layout>
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 py-16 mx-auto md:py-24">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">Right to Information (RTI)</h1>
          <p className="max-w-3xl mb-8 text-lg">
            The Right to Information Act 2005 empowers every citizen to question, examine, audit, review and assess government acts and decisions to ensure transparency and accountability in governance.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg">
              File RTI Online
            </Button>
            <Button size="lg" variant="outline">
              Download RTI Guide <Download className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
        <div className="h-2 tri-color-gradient"></div>
      </section>

      <section className="py-12 bg-white dark:bg-gray-950">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-2xl font-bold text-center">Key Features of RTI Act</h2>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center w-12 h-12 p-3 mb-4 rounded-full bg-primary/10">
                  <Info className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Universal Access</h3>
                <p className="text-muted-foreground">
                  Every citizen of India has the right to request information from a "public authority" which is required to reply within 30 days.
                </p>
              </CardContent>
            </Card>
            
            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center w-12 h-12 p-3 mb-4 rounded-full bg-primary/10">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Proactive Disclosure</h3>
                <p className="text-muted-foreground">
                  Public authorities must proactively publish key information including their functions, powers, budget, and contact details of PIOs.
                </p>
              </CardContent>
            </Card>
            
            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center w-12 h-12 p-3 mb-4 rounded-full bg-primary/10">
                  <AlertCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Independent Oversight</h3>
                <p className="text-muted-foreground">
                  Information Commissions at central and state levels enforce the law with powers equivalent to civil courts.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-2xl font-bold text-center">How to File an RTI Application</h2>
          
          <Tabs defaultValue="offline" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="offline">Offline Mode</TabsTrigger>
              <TabsTrigger value="online">Online Mode</TabsTrigger>
            </TabsList>
            
            <TabsContent value="offline" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Filing RTI Application Offline</CardTitle>
                  <CardDescription>
                    Traditional method of filing RTI by post or in person
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Step 1: Prepare Your Application</h4>
                    <p className="text-muted-foreground">Write your application in a simple format, clearly mentioning:</p>
                    <ul className="pl-6 list-disc text-muted-foreground">
                      <li>Subject of information sought</li>
                      <li>Period/year to which the information relates</li>
                      <li>Specific details of information required</li>
                      <li>Your personal details (name, address, contact information)</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold">Step 2: Pay the Fee</h4>
                    <p className="text-muted-foreground">Attach fee payment of ₹10 via:</p>
                    <ul className="pl-6 list-disc text-muted-foreground">
                      <li>Indian Postal Order (IPO)</li>
                      <li>Demand Draft</li>
                      <li>Banker's Cheque</li>
                      <li>Court Fee Stamp (in some states)</li>
                      <li>Cash (if delivering in person)</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold">Step 3: Submit the Application</h4>
                    <p className="text-muted-foreground">Send your application to:</p>
                    <ul className="pl-6 list-disc text-muted-foreground">
                      <li>The Public Information Officer (PIO) of the concerned department</li>
                      <li>By registered post/speed post (to have proof of delivery)</li>
                      <li>Or deliver in person and get an acknowledgment receipt</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold">Step 4: Follow Up</h4>
                    <p className="text-muted-foreground">
                      Keep the copy of your application and acknowledgment safe. If no response is received within 30 days, you can file the first appeal.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    Download Sample RTI Application Format <Download className="w-4 h-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="online" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Filing RTI Application Online</CardTitle>
                  <CardDescription>
                    Digital method of filing RTI through the RTI Online Portal
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Step 1: Visit the RTI Online Portal</h4>
                    <p className="text-muted-foreground">
                      Go to <a href="https://rtionline.gov.in" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">rtionline.gov.in</a> for Central Government departments or respective State RTI portals for state departments.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold">Step 2: Register or Login</h4>
                    <p className="text-muted-foreground">Create a new account if you're a first-time user, or login with your credentials if you already have an account.</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold">Step 3: Fill the Online Form</h4>
                    <p className="text-muted-foreground">Complete the online RTI application form with:</p>
                    <ul className="pl-6 list-disc text-muted-foreground">
                      <li>Select the proper ministry/department/authority</li>
                      <li>Enter your personal details</li>
                      <li>Type your RTI request (maximum 3000 characters)</li>
                      <li>Upload supporting documents if needed (optional)</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold">Step 4: Pay the Fee Online</h4>
                    <p className="text-muted-foreground">
                      Pay the ₹10 fee through available online payment methods (net banking, credit/debit card, UPI).
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold">Step 5: Submit and Track</h4>
                    <p className="text-muted-foreground">
                      Submit your application and note down the registration number for future reference and tracking.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    Go to RTI Online Portal
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="max-w-4xl mx-auto mt-8">
            <Alert>
              <HelpCircle className="w-4 h-4" />
              <AlertTitle>Need assistance?</AlertTitle>
              <AlertDescription>
                For help with filing RTI applications, contact the RTI helpline at 1800-11-0001 or email at <a href="mailto:help@rti.gov.in" className="text-primary hover:underline">help@rti.gov.in</a>.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-2xl font-bold text-center">RTI Application Timeline</h2>
          
          <div className="max-w-4xl mx-auto">
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
              {timelineSteps.map((step, index) => (
                <li key={index} className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <Clock className="w-4 h-4 text-blue-800 dark:text-blue-300" />
                  </span>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <h2 className="mb-2 text-2xl font-bold text-center">Information Exempt from Disclosure</h2>
          <p className="mb-12 text-center text-muted-foreground">
            Section 8 and 9 of the RTI Act specify certain categories of information that are exempt from disclosure
          </p>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {exemptions.map((exemption, index) => (
              <Card key={index} className="transition-shadow duration-300 hover:shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{exemption.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{exemption.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="max-w-3xl p-6 mx-auto mt-12 rounded-lg bg-blue-50 dark:bg-gray-800">
            <h3 className="flex items-center mb-4 text-xl font-semibold">
              <Info className="w-5 h-5 mr-2 text-primary" />
              Important Exception to Exemptions
            </h3>
            <p className="text-muted-foreground">
              Despite the exemptions listed above, information can be disclosed if public interest in disclosure outweighs the harm to the protected interests. Additionally, information that cannot be denied to Parliament or State Legislature cannot be denied to any person.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container px-4 mx-auto">
          <h2 className="mb-2 text-2xl font-bold text-center">RTI Success Stories</h2>
          <p className="mb-12 text-center text-muted-foreground">
            Real-life examples of how RTI has been used to bring transparency and accountability
          </p>
          
          <div className="grid max-w-4xl grid-cols-1 gap-8 mx-auto md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Delhi Public Distribution System Reform</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  RTI activists used the Act to expose massive corruption in Delhi's Public Distribution System (PDS) where subsidized food meant for the poor was being diverted to the open market. This led to the implementation of a computerized system and regular social audits.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Adarsh Housing Society Scam</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  RTI applications revealed that a 31-story building in Mumbai, supposedly for war widows and veterans, was given to politicians, bureaucrats, and their relatives. This exposure led to several high-profile resignations and criminal investigations.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>2G Spectrum Allocation Scam</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  RTI played a crucial role in uncovering the 2G spectrum allocation scam. Information obtained through RTI revealed irregularities in how telecom licenses were awarded, leading to one of India's biggest corruption investigations.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>MGNREGA Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  RTI has been widely used to monitor the implementation of the Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA). Citizens have used RTI to track fund utilization, ensure proper wage payments, and identify ghost workers.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <Button>
              Read More Success Stories
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container max-w-4xl px-4 mx-auto">
          <h2 className="mb-2 text-2xl font-bold text-center">Frequently Asked Questions</h2>
          <p className="mb-12 text-center text-muted-foreground">
            Common questions about the Right to Information Act
          </p>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, index) => (
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
        </div>
      </section>
      
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container px-4 mx-auto">
          <h2 className="mb-2 text-2xl font-bold text-center">RTI Resources</h2>
          <p className="mb-12 text-center text-muted-foreground">
            Download useful guides and templates
          </p>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card className="transition-shadow duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle>RTI Act, 2005</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">Complete text of the Right to Information Act, 2005 with all amendments.</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <FileText className="w-4 h-4 mr-2" />
                  <span>PDF Document • 23 Pages</span>
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
                <CardTitle>RTI Application Template</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">Ready-to-use template for filing RTI applications with sample questions.</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <FileText className="w-4 h-4 mr-2" />
                  <span>Word Document • 2 Pages</span>
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
                <CardTitle>First Appeal Template</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">Template for filing your first appeal if your RTI application is rejected or you receive incomplete information.</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <FileText className="w-4 h-4 mr-2" />
                  <span>Word Document • 3 Pages</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Download <Download className="w-4 h-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RTI;
