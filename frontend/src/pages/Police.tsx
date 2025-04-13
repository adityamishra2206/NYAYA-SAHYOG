// import React from 'react';
import Layout from '@/components/Layout';
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardFooter,
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
import { AlertTriangle, CheckCircle2, FileText, HelpCircle, Info, List, Phone, Shield } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Police = () => {
  const rightsDuringArrest = [
    {
      title: "Right to Know Grounds of Arrest",
      description: "The police must inform you about the grounds of arrest as soon as possible. You have the right to know why you're being arrested."
    },
    {
      title: "Right to Legal Representation",
      description: "You have the right to consult and be defended by a lawyer of your choice. If you cannot afford a lawyer, you're entitled to free legal aid."
    },
    {
      title: "Right to Inform Family/Friends",
      description: "The police must inform a friend, relative, or other person of your arrest and the place where you are being detained."
    },
    {
      title: "Right to Medical Examination",
      description: "You have the right to be medically examined every 48 hours during custody by a doctor appointed by the state government."
    },
    {
      title: "Right Against Self-Incrimination",
      description: "You cannot be compelled to be a witness against yourself. You have the right to remain silent."
    },
    {
      title: "Right to be Presented Before Magistrate",
      description: "You must be produced before a magistrate within 24 hours of arrest (excluding travel time)."
    },
    {
      title: "Right Against Torture",
      description: "You have the right not to be subjected to torture, cruel, inhuman, or degrading treatment."
    },
    {
      title: "Special Rights for Women",
      description: "A female can only be arrested by a female police officer, and cannot be detained in a police station at night (between sunset and sunrise) without special orders."
    }
  ];
  
  const firTypes = [
    {
      title: "Cognizable FIR",
      description: "For serious offenses where police can arrest without a warrant (e.g., murder, rape, theft, robbery). Police must register the FIR and start investigation immediately."
    },
    {
      title: "Non-Cognizable FIR",
      description: "For less serious offenses where police need court permission to investigate or arrest (e.g., defamation, cheating, forgery). Police will issue an NC (Non-Cognizable) report."
    },
    {
      title: "Zero FIR",
      description: "Can be filed at any police station regardless of jurisdiction. The police station will later transfer it to the appropriate police station. Useful in emergency situations or when the crime scene is uncertain."
    }
  ];
  
  const commonFAQs = [
    {
      question: "What is the difference between an FIR and a police complaint?",
      answer: "An FIR (First Information Report) is a formal document prepared by police when they receive information about a cognizable offense. A police complaint is a general reporting of a grievance which may or may not result in an FIR being registered. The FIR initiates the criminal law process and investigation."
    },
    {
      question: "Can a police officer refuse to file my FIR?",
      answer: "No, a police officer cannot refuse to register an FIR for a cognizable offense. If they refuse, you can: 1) Approach the Superintendent of Police with a written complaint, 2) Send your complaint by post to the concerned magistrate, 3) File a private complaint directly with the magistrate, or 4) Contact the State Human Rights Commission or Police Complaints Authority."
    },
    {
      question: "How do I track the status of my FIR?",
      answer: "You can track your FIR by: 1) Visiting the police station and requesting an update from the investigating officer, 2) Using online FIR tracking services provided by some state police departments, 3) Filing an RTI application to get information about the progress of investigation, or 4) Contacting the court if the case has been charge-sheeted."
    },
    {
      question: "Can I get a copy of my FIR?",
      answer: "Yes, you are legally entitled to get a free copy of the FIR. The police are obligated to provide a copy of the FIR to the complainant immediately after registration."
    },
    {
      question: "Can I file an FIR online?",
      answer: "Many state police departments now allow e-FIRs for specific categories of offenses (mostly property-related crimes). However, for serious offenses, you'll need to visit the police station in person. The online FIR is typically verified by physical visit later."
    },
    {
      question: "What happens after an FIR is filed?",
      answer: "After an FIR is filed: 1) A case number is assigned, 2) An investigating officer is appointed, 3) Investigation begins including visiting the crime scene, collecting evidence, and recording statements, 4) Based on the investigation, a charge sheet (final report) is filed in court if evidence supports the allegations, or a closure report is filed if there's insufficient evidence."
    }
  ];

  return (
    <Layout>
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 py-16 mx-auto md:py-24">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">FIR & Police Procedures</h1>
          <p className="max-w-3xl mb-8 text-lg">
            Understanding your rights when dealing with police authorities and the process of filing First Information Reports (FIRs) for reporting crimes in India.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg">
              Find Nearest Police Station
            </Button>
            <Button size="lg" variant="outline">
              Emergency Helplines
            </Button>
          </div>
        </div>
        <div className="h-2 tri-color-gradient"></div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container px-4 mx-auto">
          <h2 className="mb-2 text-2xl font-bold text-center">First Information Report (FIR)</h2>
          <p className="mb-12 text-center text-muted-foreground">
            An FIR is a document prepared by police when they receive information about the commission of a cognizable offense
          </p>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {firTypes.map((type, index) => (
              <Card key={index} className="transition-shadow duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="max-w-4xl mx-auto mt-16">
            <h3 className="mb-6 text-xl font-bold">How to File an FIR</h3>
            
            <Tabs defaultValue="in-person" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="in-person">In-Person Filing</TabsTrigger>
                <TabsTrigger value="online">Online Filing</TabsTrigger>
              </TabsList>
              
              <TabsContent value="in-person" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Filing an FIR in Person</CardTitle>
                    <CardDescription>
                      Traditional method of filing an FIR by visiting a police station
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Step 1: Visit the Appropriate Police Station</h4>
                      <p className="text-muted-foreground">Go to the police station under whose jurisdiction the incident took place. In emergencies, you can file at any police station (Zero FIR).</p>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold">Step 2: Meet the Station House Officer (SHO)</h4>
                      <p className="text-muted-foreground">Ask to meet the SHO or the officer in charge to report the crime. Explain the incident clearly and concisely.</p>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold">Step 3: Provide Your Statement</h4>
                      <p className="text-muted-foreground">Give all details of the incident including:</p>
                      <ul className="pl-6 list-disc text-muted-foreground">
                        <li>Date, time, and location of the incident</li>
                        <li>Names and descriptions of persons involved</li>
                        <li>Description of what happened</li>
                        <li>List of stolen/damaged items (if applicable)</li>
                        <li>Names and contact details of witnesses (if any)</li>
                      </ul>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold">Step 4: Review and Sign the FIR</h4>
                      <p className="text-muted-foreground">The officer will record your statement in the FIR. Read it carefully before signing to ensure all details are correctly mentioned.</p>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold">Step 5: Collect Your Copy</h4>
                      <p className="text-muted-foreground">Get a free copy of the FIR, which will include the FIR number. This is important for future reference and tracking the case.</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="online" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Filing an FIR Online</CardTitle>
                    <CardDescription>
                      Modern method of filing an FIR through police department websites
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <Alert className="mb-6 bg-amber-50 text-amber-900 border-amber-300 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-800">
                      <AlertTriangle className="w-4 h-4" />
                      <AlertTitle>Important Note</AlertTitle>
                      <AlertDescription>
                        Online FIR filing is currently limited to specific categories of offenses (typically property-related crimes) and is not available in all states. For serious offenses, you must visit a police station in person.
                      </AlertDescription>
                    </Alert>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold">Step 1: Visit the Official Website</h4>
                      <p className="text-muted-foreground">Go to the official website of the state police department where the incident occurred.</p>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold">Step 2: Locate the Online FIR/Complaint Section</h4>
                      <p className="text-muted-foreground">Find and click on the "Online FIR" or "E-FIR" or "Online Complaint" section on the website.</p>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold">Step 3: Register/Login</h4>
                      <p className="text-muted-foreground">Create an account or login with your credentials (usually requires mobile number verification).</p>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold">Step 4: Fill the Online Form</h4>
                      <p className="text-muted-foreground">Complete the online complaint form with all required details about the incident and your personal information.</p>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold">Step 5: Upload Supporting Documents</h4>
                      <p className="text-muted-foreground">Attach any relevant documents, photos, or evidence to support your complaint.</p>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold">Step 6: Submit and Track</h4>
                      <p className="text-muted-foreground">Submit the form, note down the reference/tracking number, and follow up by visiting the police station when called for verification.</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            
            <div className="p-6 mt-8 rounded-lg bg-blue-50 dark:bg-gray-800">
              <div className="flex items-start">
                <div className="mr-4">
                  <Info className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-semibold">If the Police Refuse to File Your FIR</h4>
                  <p className="mb-4 text-muted-foreground">
                    If a police officer refuses to register your FIR for a cognizable offense, you have the following options:
                  </p>
                  <ol className="space-y-2 list-decimal list-inside text-muted-foreground">
                    <li>Approach the Superintendent of Police or other higher police officials with a written complaint</li>
                    <li>Send your complaint by registered post to the concerned Judicial Magistrate</li>
                    <li>File a private complaint under Section 156(3) of CrPC before the Magistrate</li>
                    <li>Approach the State Human Rights Commission or Police Complaints Authority</li>
                    <li>File a writ petition before the High Court or Supreme Court</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <h2 className="mb-2 text-2xl font-bold text-center">Know Your Rights During Police Interaction</h2>
          <p className="mb-12 text-center text-muted-foreground">
            Understanding your legal rights when dealing with law enforcement
          </p>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {rightsDuringArrest.map((right, index) => (
              <Card key={index} className="transition-shadow duration-300 hover:shadow-lg">
                <CardHeader className="pb-3">
                  <div className="mb-2 text-primary">
                    <Shield className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg">{right.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{right.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="max-w-3xl p-6 mx-auto mt-12 bg-white border rounded-lg shadow-sm dark:bg-gray-800">
            <h3 className="mb-4 text-xl font-semibold">DK Basu Guidelines</h3>
            <p className="mb-4 text-muted-foreground">
              The Supreme Court of India in the landmark case of D.K. Basu v. State of West Bengal (1997) laid down specific guidelines that police and other agencies must follow during arrest and detention:
            </p>
            <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
              <li>Police officers carrying out arrest must wear clear identification and name tags</li>
              <li>A memo of arrest must be prepared, witnessed by a family member or respectable person from the locality</li>
              <li>The arrested person has the right to inform a relative or friend about the arrest</li>
              <li>The time, place of arrest, and venue of custody must be notified to a friend/relative within 8-12 hours</li>
              <li>The arrested person must be informed of their right to inform someone about the arrest</li>
              <li>An entry must be made in the diary at the place of detention regarding the arrest</li>
              <li>The arrested person should be medically examined upon request</li>
              <li>Copies of all documents must be sent to the magistrate</li>
              <li>The arrested person is entitled to meet their lawyer during interrogation</li>
            </ul>
            <div className="mt-4">
              <p className="text-sm italic text-muted-foreground">
                These guidelines have now been incorporated into Section 41B, 41C, and 41D of the Criminal Procedure Code (CrPC).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-2xl font-bold text-center">Emergency Police Contacts</h2>
          
          <div className="grid max-w-5xl grid-cols-1 gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-red-200 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 dark:border-red-800/50">
              <CardHeader>
                <div className="mb-2">
                  <Phone className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <CardTitle>Police Emergency</CardTitle>
                <CardDescription className="text-red-700 dark:text-red-300">
                  For reporting crimes, emergencies, or requesting immediate police assistance
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-3xl font-bold text-red-600 dark:text-red-400">100</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 border-amber-200 dark:border-amber-800/50">
              <CardHeader>
                <div className="mb-2">
                  <Phone className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                </div>
                <CardTitle>Women's Helpline</CardTitle>
                <CardDescription className="text-amber-700 dark:text-amber-300">
                  For women facing harassment, domestic violence, or any safety concerns
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-3xl font-bold text-amber-600 dark:text-amber-400">1091</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 border-emerald-200 dark:border-emerald-800/50">
              <CardHeader>
                <div className="mb-2">
                  <Phone className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <CardTitle>Child Helpline</CardTitle>
                <CardDescription className="text-emerald-700 dark:text-emerald-300">
                  For reporting child abuse, child labor, or children in distress
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">1098</p>
              </CardContent>
            </Card>
            
            <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 dark:border-blue-800/50">
              <CardHeader>
                <div className="mb-2">
                  <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle>Emergency Services</CardTitle>
                <CardDescription className="text-blue-700 dark:text-blue-300">
                  Unified emergency number for police, fire, and medical emergencies
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">112</p>
              </CardContent>
            </Card>
            
            <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 dark:border-purple-800/50">
              <CardHeader>
                <div className="mb-2">
                  <Phone className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle>Cyber Crime Helpline</CardTitle>
                <CardDescription className="text-purple-700 dark:text-purple-300">
                  For reporting online frauds, harassment, and other cyber crimes
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">1930</p>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/40 dark:to-gray-700/40 dark:border-gray-700">
              <CardHeader>
                <div className="mb-2">
                  <Phone className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                </div>
                <CardTitle>Senior Citizen Helpline</CardTitle>
                <CardDescription className="text-gray-700 dark:text-gray-300">
                  For elderly citizens requiring police assistance or facing abuse
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-3xl font-bold text-gray-600 dark:text-gray-400">14567</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="max-w-3xl mx-auto mt-12">
            <Alert>
              <HelpCircle className="w-4 h-4" />
              <AlertTitle>Tip</AlertTitle>
              <AlertDescription>
                Save these emergency numbers in your phone for quick access in case of emergencies. Most of these helplines are operational 24x7 across India.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-2xl font-bold text-center">What To Do If...</h2>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-medium text-left">
                  What to do if you are wrongfully detained?
                </AccordionTrigger>
                <AccordionContent>
                  <ol className="space-y-2 list-decimal list-inside text-muted-foreground">
                    <li>Remain calm and cooperative to avoid escalation</li>
                    <li>Ask clearly about the reason for detention</li>
                    <li>Request to contact your lawyer or family member</li>
                    <li>Inform the police that you know your rights under Article 22 of the Constitution</li>
                    <li>Do not resist physically as it may lead to additional charges</li>
                    <li>Note the name and badge number of the officers involved</li>
                    <li>If produced before a magistrate, inform about wrongful detention</li>
                    <li>File a habeas corpus petition through your lawyer</li>
                    <li>File a complaint with the State Human Rights Commission or Police Complaints Authority</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="font-medium text-left">
                  What to do if police refuse to file your FIR?
                </AccordionTrigger>
                <AccordionContent>
                  <ol className="space-y-2 list-decimal list-inside text-muted-foreground">
                    <li>Ask for the reason for refusal and request to speak with a senior officer</li>
                    <li>Submit your complaint in writing and ask for a receipt</li>
                    <li>Approach the Superintendent of Police or Commissioner with a written complaint</li>
                    <li>Send your complaint by registered post to the concerned Judicial Magistrate under Section 156(3) of CrPC</li>
                    <li>File a private complaint before the Magistrate under Section 200 of CrPC</li>
                    <li>Approach the State Human Rights Commission or Police Complaints Authority</li>
                    <li>File a writ petition before the High Court if other measures fail</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="font-medium text-left">
                  What to do if you face police harassment or brutality?
                </AccordionTrigger>
                <AccordionContent>
                  <ol className="space-y-2 list-decimal list-inside text-muted-foreground">
                    <li>Document the incident: note down time, place, names of officers, and witness details</li>
                    <li>If injured, seek immediate medical attention and request a medical report</li>
                    <li>File a written complaint to the senior police officer in charge</li>
                    <li>File a complaint with the State Police Complaints Authority</li>
                    <li>Approach the National or State Human Rights Commission</li>
                    <li>File a complaint before the Judicial Magistrate under Section 200 of CrPC</li>
                    <li>Consider filing a writ petition in the High Court</li>
                    <li>If applicable, file a suit for damages against the police officers involved</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="font-medium text-left">
                  What to do if you witness a crime?
                </AccordionTrigger>
                <AccordionContent>
                  <ol className="space-y-2 list-decimal list-inside text-muted-foreground">
                    <li>Ensure your own safety first</li>
                    <li>Call the police emergency number (100 or 112) immediately</li>
                    <li>Provide clear and concise information about the incident</li>
                    <li>If safe to do so, help victims with first aid or by calling for medical help</li>
                    <li>Note down important details like time, location, and description of individuals</li>
                    <li>If possible and safe, document evidence through photos or videos</li>
                    <li>Stay at the scene until police arrive, if it's safe to do so</li>
                    <li>Provide your statement to the police when they arrive</li>
                    <li>Follow up with the police to provide formal witness testimony if required</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="font-medium text-left">
                  What to do if you are asked to pay a bribe?
                </AccordionTrigger>
                <AccordionContent>
                  <ol className="space-y-2 list-decimal list-inside text-muted-foreground">
                    <li>Refuse firmly but politely</li>
                    <li>Ask for a receipt for any official payment</li>
                    <li>Record the conversation if possible (audio or video)</li>
                    <li>Note down the officer's name, badge number, and details of the incident</li>
                    <li>Report the incident to the senior official or the department head</li>
                    <li>File a complaint with the Anti-Corruption Bureau or vigilance department</li>
                    <li>Report on government anti-corruption portals or helplines</li>
                    <li>File a complaint with the Central Vigilance Commission for central government employees</li>
                    <li>Consider reporting through whistleblower platforms or NGOs working on anti-corruption</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container max-w-4xl px-4 mx-auto">
          <h2 className="mb-2 text-2xl font-bold text-center">Frequently Asked Questions</h2>
          <p className="mb-12 text-center text-muted-foreground">
            Common questions about FIR and police procedures
          </p>
          
          <Accordion type="single" collapsible className="w-full">
            {commonFAQs.map((item, index) => (
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

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <h2 className="mb-2 text-2xl font-bold text-center">Helpful Resources</h2>
          <p className="mb-12 text-center text-muted-foreground">
            Download useful templates and guides related to police procedures
          </p>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="transition-shadow duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle>Sample FIR Template</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">A ready-to-use format for drafting your FIR complaint with all necessary sections.</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <FileText className="w-4 h-4 mr-2" />
                  <span>Word Document • 2 Pages</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button variant="outline">
                  Download Template
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="transition-shadow duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle>Know Your Rights Pocket Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">A comprehensive pocket guide explaining your rights during arrest, detention and police interactions.</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <FileText className="w-4 h-4 mr-2" />
                  <span>PDF Document • 10 Pages</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button variant="outline">
                  Download Guide
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="transition-shadow duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle>Police Station Directory</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">A comprehensive directory of police stations across India with contact details and jurisdictions.</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <List className="w-4 h-4 mr-2" />
                  <span>Excel Document • Updated Monthly</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button variant="outline">
                  Download Directory
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="max-w-3xl p-6 mx-auto mt-12 rounded-lg bg-blue-50 dark:bg-blue-900/20">
            <div className="flex items-center mb-4">
              <CheckCircle2 className="w-6 h-6 mr-2 text-green-600 dark:text-green-400" />
              <h3 className="text-xl font-semibold">Legal Aid for Police Matters</h3>
            </div>
            <p className="mb-4 text-muted-foreground">
              If you're facing issues with police procedures or need legal assistance regarding an FIR, you can get free legal help through the National Legal Services Authority (NALSA) if you qualify under their criteria.
            </p>
            <Button>
              Find Legal Aid Center
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Police;
