// import React from 'react';
import Layout from '@/components/Layout';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Card, 
  CardContent, 
  CardDescription, 
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
import { 
  Archive, 
  Clock, 
  FileText, 
  Gavel, 
  Layers, 
  Scale, 
  Search, 
  Award,
  Building,
  Users,
  Info,
  BookOpen
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Courts = () => {
  const courtTypes = [
    {
      name: "Supreme Court of India",
      icon: <Scale className="w-8 h-8 text-nyaya-blue" />,
      description: "Apex court and final court of appeal in India. Located in New Delhi, it has original, appellate, and advisory jurisdiction.",
      composition: "Chief Justice of India and 33 other judges appointed by the President of India.",
      jurisdiction: "Constitutional matters, disputes between states and central government, appeal cases from High Courts.",
      landmark: "Kesavananda Bharati v. State of Kerala (1973), established the Basic Structure Doctrine."
    },
    {
      name: "High Courts",
      icon: <Building className="w-8 h-8 text-nyaya-blue" />,
      description: "Highest courts in states/union territories. Each state has a High Court, some covering multiple states/UTs.",
      composition: "Chief Justice and other judges appointed by the President in consultation with CJI and state Governor.",
      jurisdiction: "Original jurisdiction for fundamental rights enforcement, supervision of subordinate courts, appeals from district courts.",
      landmark: "Vishaka v. State of Rajasthan (1997), established guidelines against sexual harassment at workplace."
    },
    {
      name: "District Courts",
      icon: <Gavel className="w-8 h-8 text-nyaya-blue" />,
      description: "Principal civil courts of original jurisdiction. Present in each district and administered by the High Court.",
      composition: "District Judge and additional district judges appointed by the state government.",
      jurisdiction: "Civil and criminal cases originating in the district, appeals from lower courts.",
      landmark: "Deals with most civil disputes, property matters, and serious criminal offenses."
    },
    {
      name: "Specialized Courts & Tribunals",
      icon: <Award className="w-8 h-8 text-nyaya-blue" />,
      description: "Courts established to handle specific types of cases like family disputes, consumer complaints, etc.",
      composition: "Specialized judges or experts in the particular field appointed as per specific acts.",
      jurisdiction: "Family Courts (family disputes), Consumer Forums (consumer complaints), NCLT (company matters), etc.",
      landmark: "Fast-track resolution for specialized disputes, reducing burden on regular courts."
    },
    {
      name: "Lok Adalats",
      icon: <Users className="w-8 h-8 text-nyaya-blue" />,
      description: "People's Court for alternative dispute resolution. Provides a platform for consensual settlement of disputes.",
      composition: "Judicial officers, lawyers, social workers, and other persons of repute.",
      jurisdiction: "Any case pending before any court, cases in pre-litigation stage, and matters of public utility services.",
      landmark: "Provides inexpensive, speedy justice through compromise and settlement."
    },
    {
      name: "Gram Nyayalayas",
      icon: <BookOpen className="w-8 h-8 text-nyaya-blue" />,
      description: "Village courts established under the Gram Nyayalayas Act, 2008 for rural areas at the Panchayat level.",
      composition: "Nyayadhikari (equivalent to Judicial Magistrate First Class) appointed by the state government.",
      jurisdiction: "Both civil and criminal cases at the grassroots level with simplified procedures.",
      landmark: "Brings justice to the doorsteps of rural citizens, making it more accessible and affordable."
    }
  ];

  const courtProcessFAQs = [
    {
      question: "How do I file a case in court?",
      answer: "Filing a case involves: 1) Consulting a lawyer to draft a plaint/petition, 2) Paying court fees, 3) Filing the case with the court registry, 4) Getting a case number and hearing date. The specific process varies based on the type of case (civil/criminal) and the court where it's being filed. It's advisable to hire a lawyer to navigate the legal procedures correctly."
    },
    {
      question: "How long does a court case typically take in India?",
      answer: "The duration varies greatly depending on the type of case, its complexity, the court's workload, and procedural factors. Simple cases may resolve in months, while complex cases can take several years. According to data, the average civil case takes 3-5 years, while criminal cases typically take 5-8 years. Fast-track courts and alternative dispute resolution methods are being promoted to reduce pendency."
    },
    {
      question: "What are the costs involved in filing a court case?",
      answer: "Costs include: 1) Court fees (varies based on the case value and type), 2) Lawyer fees (varies based on experience and case complexity), 3) Documentation costs, 4) Witness expenses, 5) Miscellaneous expenses. For those who cannot afford legal representation, free legal aid is available through Legal Services Authorities if they meet the eligibility criteria."
    },
    {
      question: "Can I represent myself in court without a lawyer?",
      answer: "Yes, you can appear 'in person' or as a 'party in person' without hiring a lawyer. However, it's generally not advisable unless you have good knowledge of legal procedures, as courts follow specific rules, procedures, and legal language that might be challenging for non-lawyers. If you cannot afford a lawyer, you can seek free legal aid from Legal Services Authorities."
    },
    {
      question: "What is the appeal process if I am not satisfied with the court's decision?",
      answer: "If you're dissatisfied with a court's decision, you can appeal to a higher court within the specified time limit (usually 30-90 days depending on the case type). The hierarchy is: District Court → High Court → Supreme Court. Appeals must be based on points of law, not merely disagreement with the judgment. Each appeal requires fresh court fees and possibly new legal representation."
    },
    {
      question: "What is a Public Interest Litigation (PIL)?",
      answer: "A Public Interest Litigation (PIL) is a petition filed in a court seeking judicial remedy for a matter of public interest, such as environmental protection, human rights violations, or administrative malpractice. Unlike regular litigation, PIL can be initiated by any public-spirited individual or organization on behalf of disadvantaged sections of society, not just by the aggrieved party. It has simplified procedures and often involves broader social issues."
    }
  ];
  
  return (
    <Layout>
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 py-16 mx-auto md:py-24">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">Indian Court System</h1>
          <p className="max-w-3xl mb-8 text-lg">
            Understanding the structure, jurisdiction, and functioning of the Indian judicial system, from the Supreme Court to the District Courts.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg">
              Track Your Case
            </Button>
            <Button size="lg" variant="outline">
              Court Procedure Guide
            </Button>
          </div>
        </div>
        <div className="h-2 tri-color-gradient"></div>
      </section>

      <section className="py-12 bg-white dark:bg-gray-950">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-2xl font-bold text-center">Track Your Court Case</h2>
          
          <div className="max-w-3xl p-6 mx-auto bg-white border rounded-lg shadow-md dark:bg-gray-800">
            <div className="space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Select Court Type</label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose court type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="supreme">Supreme Court of India</SelectItem>
                    <SelectItem value="high">High Courts</SelectItem>
                    <SelectItem value="district">District & Sessions Courts</SelectItem>
                    <SelectItem value="tribunal">Tribunals</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Case Number</label>
                  <Input placeholder="e.g., 1234/2023" />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Year</label>
                  <Input placeholder="e.g., 2023" />
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="mb-2 text-sm font-semibold">OR</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Party Name</label>
                  <Input placeholder="e.g., Sharma" />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Advocate Name</label>
                  <Input placeholder="e.g., Adv. Patel" />
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="mb-2 text-sm font-semibold">OR</h3>
              </div>
              
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">CNR (Case Number Record) Number</label>
                <div className="flex gap-2">
                  <Input placeholder="e.g., DLST010001112023" />
                  <Button type="submit" className="flex-shrink-0">
                    <Search className="w-4 h-4" />
                  </Button>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  The CNR is a unique 16-digit identification number assigned to each case across all courts in India.
                </p>
              </div>
              
              <Button className="w-full">
                Search Case
              </Button>
            </div>
            
            <div className="pt-6 mt-6 border-t">
              <h3 className="mb-2 text-lg font-semibold">Quick Tips for Case Tracking</h3>
              <ul className="pl-5 space-y-1 text-sm list-disc text-muted-foreground">
                <li>For Supreme Court cases, use the Year-Case Type-Case Number format (e.g., 2023/SC/12345)</li>
                <li>For High Court cases, select the specific High Court before entering the case number</li>
                <li>The CNR number provides the most accurate search results</li>
                <li>Party name searches show all cases involving that party</li>
                <li>You can also track cases through the e-Courts mobile app</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <h2 className="mb-2 text-2xl font-bold text-center">Structure of the Indian Judiciary</h2>
          <p className="mb-12 text-center text-muted-foreground">
            The Indian judicial system follows a hierarchical structure with the Supreme Court at the apex
          </p>
          
          <div className="space-y-8">
            {courtTypes.map((court, index) => (
              <Card key={index} className="transition-shadow duration-300 hover:shadow-lg">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    {court.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl">{court.name}</CardTitle>
                    <CardDescription>{court.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-3">
                    <div>
                      <h4 className="mb-2 text-sm font-semibold uppercase text-muted-foreground">Composition</h4>
                      <p className="text-sm">{court.composition}</p>
                    </div>
                    <div>
                      <h4 className="mb-2 text-sm font-semibold uppercase text-muted-foreground">Jurisdiction</h4>
                      <p className="text-sm">{court.jurisdiction}</p>
                    </div>
                    <div>
                      <h4 className="mb-2 text-sm font-semibold uppercase text-muted-foreground">Notable Feature</h4>
                      <p className="text-sm">{court.landmark}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container px-4 mx-auto">
          <h2 className="mb-2 text-2xl font-bold text-center">Understanding the Court Process</h2>
          <p className="mb-12 text-center text-muted-foreground">
            A general overview of how cases proceed through the Indian court system
          </p>
          
          <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="p-4 mb-4 rounded-full bg-primary/10">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">1. Filing the Case</h3>
              <p className="text-sm text-muted-foreground">
                Preparing the necessary documents, paying court fees, and officially filing the case with the court registry.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="p-4 mb-4 rounded-full bg-primary/10">
                <Scale className="w-8 h-8 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">2. Preliminary Hearing</h3>
              <p className="text-sm text-muted-foreground">
                Initial court appearance where the judge reviews the case, issues notices, and may refer for mediation.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="p-4 mb-4 rounded-full bg-primary/10">
                <Layers className="w-8 h-8 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">3. Trial Process</h3>
              <p className="text-sm text-muted-foreground">
                Evidence presentation, witness examination, arguments from both sides, and cross-examinations.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="p-4 mb-4 rounded-full bg-primary/10">
                <Gavel className="w-8 h-8 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">4. Judgment & Appeals</h3>
              <p className="text-sm text-muted-foreground">
                Final decision by the judge, followed by potential appeals to higher courts if parties are dissatisfied.
              </p>
            </div>
          </div>
          
          <div className="max-w-4xl p-6 mx-auto border rounded-lg bg-gray-50 dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-amber-500" />
              <h3 className="text-xl font-semibold">Timeline Expectations</h3>
            </div>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <h4 className="mb-2 font-semibold">Civil Cases</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>Filing to First Hearing:</span>
                    <span className="font-medium">1-6 months</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Evidence Stage:</span>
                    <span className="font-medium">6-24 months</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Arguments:</span>
                    <span className="font-medium">3-12 months</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Judgment:</span>
                    <span className="font-medium">1-6 months</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Total Average Duration:</span>
                    <span className="font-medium">2-5 years</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="mb-2 font-semibold">Criminal Cases</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>Filing to Charge Sheet:</span>
                    <span className="font-medium">2-6 months</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Trial Proceedings:</span>
                    <span className="font-medium">1-3 years</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Final Arguments:</span>
                    <span className="font-medium">3-12 months</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Judgment:</span>
                    <span className="font-medium">1-6 months</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Total Average Duration:</span>
                    <span className="font-medium">2-7 years</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <Alert className="mt-6 text-blue-800 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-300">
              <Archive className="w-4 h-4" />
              <AlertTitle>Note:</AlertTitle>
              <AlertDescription>
                These are general timelines and may vary significantly based on case complexity, court workload, and procedural factors. Fast-track courts and alternative dispute resolution mechanisms may offer quicker resolution.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <h2 className="mb-2 text-2xl font-bold text-center">Alternative Dispute Resolution</h2>
          <p className="mb-12 text-center text-muted-foreground">
            Methods to resolve disputes outside of the traditional court system
          </p>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card className="transition-shadow duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle>Mediation</CardTitle>
                <CardDescription>A voluntary, confidential process where a neutral third party helps disputing parties reach a mutually acceptable resolution.</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="mb-2 text-sm font-semibold">Key Features:</h4>
                <ul className="pl-5 space-y-1 text-sm list-disc text-muted-foreground">
                  <li>Voluntary and non-binding</li>
                  <li>Confidential proceedings</li>
                  <li>Informal and flexible process</li>
                  <li>Faster than court litigation</li>
                  <li>Focus on interests rather than legal rights</li>
                  <li>Parties maintain control over the outcome</li>
                </ul>
                <h4 className="mt-4 mb-2 text-sm font-semibold">Best For:</h4>
                <p className="text-sm text-muted-foreground">
                  Family disputes, business relationships, community issues, and cases where maintaining relationships is important.
                </p>
              </CardContent>
            </Card>
            
            <Card className="transition-shadow duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle>Arbitration</CardTitle>
                <CardDescription>A private process where disputing parties agree that one or more persons (arbitrators) can make a binding decision on the dispute.</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="mb-2 text-sm font-semibold">Key Features:</h4>
                <ul className="pl-5 space-y-1 text-sm list-disc text-muted-foreground">
                  <li>Decision is binding and enforceable</li>
                  <li>Formal but less rigid than court proceedings</li>
                  <li>Arbitrators can be selected for expertise</li>
                  <li>Generally faster than litigation</li>
                  <li>Limited appeal options</li>
                  <li>Governed by the Arbitration and Conciliation Act, 1996</li>
                </ul>
                <h4 className="mt-4 mb-2 text-sm font-semibold">Best For:</h4>
                <p className="text-sm text-muted-foreground">
                  Commercial disputes, international transactions, technical matters requiring specialized knowledge, and contractual disagreements.
                </p>
              </CardContent>
            </Card>
            
            <Card className="transition-shadow duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle>Lok Adalat</CardTitle>
                <CardDescription>A forum where pending or pre-litigation cases are settled amicably. Literally translates to "People's Court".</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="mb-2 text-sm font-semibold">Key Features:</h4>
                <ul className="pl-5 space-y-1 text-sm list-disc text-muted-foreground">
                  <li>No court fees and refund if already paid</li>
                  <li>Simple, speedy proceedings</li>
                  <li>Decisions have status of civil court decree</li>
                  <li>No appeal against the award</li>
                  <li>Flexible and informal atmosphere</li>
                  <li>Organized regularly by Legal Services Authorities</li>
                </ul>
                <h4 className="mt-4 mb-2 text-sm font-semibold">Best For:</h4>
                <p className="text-sm text-muted-foreground">
                  Motor accident claims, family disputes, labor issues, public utility services, minor criminal cases, and any matter pending before courts.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container px-4 mx-auto">
          <h2 className="mb-2 text-2xl font-bold text-center">Common Court Documents</h2>
          <p className="mb-12 text-center text-muted-foreground">
            Essential legal documents used in the Indian court system
          </p>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="transition-shadow duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Plaint</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  The initial document filed by the plaintiff (person filing the case) in a civil case, stating the facts, legal grounds, and the relief sought.
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold">Key Components:</span> Parties' details, jurisdiction statement, facts of the case, cause of action, relief sought, and verification.
                </p>
              </CardContent>
            </Card>
            
            <Card className="transition-shadow duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Written Statement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  The response document filed by the defendant in a civil case, answering the allegations in the plaint.
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold">Key Components:</span> Preliminary objections, response to each paragraph of the plaint, additional facts, legal defenses, and verification.
                </p>
              </CardContent>
            </Card>
            
            <Card className="transition-shadow duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">FIR (Criminal Cases)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  First Information Report - the document that initiates the criminal process, filed with the police.
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold">Key Components:</span> Complainant's details, incident details, names of accused (if known), description of the offense, and list of witnesses.
                </p>
              </CardContent>
            </Card>
            
            <Card className="transition-shadow duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Charge Sheet</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  Filed by the police after investigation in criminal cases, this document formally charges the accused with specific offenses.
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold">Key Components:</span> Names of accused, nature of charges, list of witnesses, list of documents/evidence, and brief facts of the case.
                </p>
              </CardContent>
            </Card>
            
            <Card className="transition-shadow duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Affidavit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  A sworn statement made in writing and confirmed by oath or affirmation, used to support various legal applications.
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold">Key Components:</span> Deponent's details, numbered paragraphs containing facts, verification clause, and notary/oath commissioner's attestation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="transition-shadow duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Judgment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  The final decision of the court after hearing all evidence and arguments in a case.
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold">Key Components:</span> Case details, brief facts, issues for consideration, parties' arguments, analysis of evidence, applicable laws, reasoning, and final order/decree.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container max-w-4xl px-4 mx-auto">
          <h2 className="mb-2 text-2xl font-bold text-center">Frequently Asked Questions</h2>
          <p className="mb-12 text-center text-muted-foreground">
            Common questions about the Indian court system and legal procedures
          </p>
          
          <Accordion type="single" collapsible className="w-full">
            {courtProcessFAQs.map((item, index) => (
              <AccordionItem key={index} value={'item-${index}'}>
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
          <h2 className="mb-2 text-2xl font-bold text-center">Legal Resources</h2>
          <p className="mb-12 text-center text-muted-foreground">
            Useful guides and links related to the Indian judicial system
          </p>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card className="transition-shadow duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle>Court Websites</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <a href="https://main.sci.gov.in" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                  <Scale className="w-4 h-4 mr-2" />
                  Supreme Court of India
                </a>
                <a href="https://ecourts.gov.in/ecourts_home/" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                  <Gavel className="w-4 h-4 mr-2" />
                  eCourts Services
                </a>
                <a href="https://drt.gov.in/" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                  <Building className="w-4 h-4 mr-2" />
                  Debt Recovery Tribunal
                </a>
                <a href="https://www.ncdrc.nic.in/" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                  <Users className="w-4 h-4 mr-2" />
                  National Consumer Disputes Redressal Commission
                </a>
                <a href="https://www.greentribunal.gov.in/" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                  <BookOpen className="w-4 h-4 mr-2" />
                  National Green Tribunal
                </a>
              </CardContent>
            </Card>
            
            <Card className="transition-shadow duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle>Legal Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <a href="https://nalsa.gov.in/" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                  <Scale className="w-4 h-4 mr-2" />
                  National Legal Services Authority
                </a>
                <a href="https://nyayaband.hu/" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                  <Users className="w-4 h-4 mr-2" />
                  Nyaya Bandhu (Pro Bono Legal Services)
                </a>
                <a href="https://legaladvisor.in/" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                  <Gavel className="w-4 h-4 mr-2" />
                  Legal Advisor Directory
                </a>
                <a href="https://www.lawguru.org/law-library/legal-aid" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Legal Aid Resources
                </a>
                <a href="https://vikaspedia.in/social-welfare/women-and-child-development/women-development-1/policies-and-acts-1" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                  <FileText className="w-4 h-4 mr-2" />
                  Women and Child Legal Resources
                </a>
              </CardContent>
            </Card>
            
            <Card className="transition-shadow duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle>Legal Databases</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <a href="https://indiankanoon.org/" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                  <Search className="w-4 h-4 mr-2" />
                  Indian Kanoon (Case Law Database)
                </a>
                <a href="https://www.scconline.com/" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                  <Layers className="w-4 h-4 mr-2" />
                  SCC Online
                </a>
                <a href="https://www.manupatrafast.com/" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Manupatra
                </a>
                <a href="https://legislative.gov.in/bare-acts/" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                  <FileText className="w-4 h-4 mr-2" />
                  Bare Acts of India
                </a>
                <a href="https://www.livelaw.in/" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                  <Clock className="w-4 h-4 mr-2" />
                  Live Law (Legal News and Updates)
                </a>
              </CardContent>
            </Card>
          </div>
          
          <div className="max-w-3xl mx-auto mt-12">
            <Alert className="bg-primary/10 border-primary/30">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-primary" />
                <AlertTitle>Need Legal Assistance?</AlertTitle>
              </div>
              <AlertDescription>
                If you need help navigating the court system or require legal assistance, you can contact the National Legal Services Authority (NALSA) helpline at 1516 or visit your nearest District Legal Services Authority.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Courts;