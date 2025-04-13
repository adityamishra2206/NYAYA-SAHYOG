 // import React from 'react';
import Layout from '@/components/Layout';
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription,
  CardFooter
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
import { 
  AlertTriangle, 
  BookOpen, 
  Calendar, 
  Download, 
  FileText, 
  Heart, 
  Info, 
  Phone, 
  Shield, 
  User, 
  Users 
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Link } from 'react-router-dom';

const WomenChildRights = () => {
  const womenLaws = [
    {
      name: "Protection of Women from Domestic Violence Act, 2005",
      description: "Provides protection to women from domestic violence inflicted by husband or male partner or their relatives.",
      keyProvisions: [
        "Broad definition of domestic violence covering physical, sexual, verbal, emotional, and economic abuse",
        "Right to secure housing - women cannot be evicted from the shared household",
        "Protection orders against the abuser",
        "Right to monetary relief, maintenance, and compensation",
        "Appointment of Protection Officers and service providers"
      ]
    },
    {
      name: "Sexual Harassment of Women at Workplace Act, 2013 (POSH Act)",
      description: "Protects women from sexual harassment at all workplaces, both in public and private sectors, whether organized or unorganized.",
      keyProvisions: [
        "Comprehensive definition of sexual harassment",
        "Mandatory establishment of Internal Complaints Committee (ICC) in every organization",
        "Local Complaints Committee (LCC) at district level for unorganized sector",
        "Time-bound redressal mechanism",
        "Protections against victimization of complainants"
      ]
    },
    {
      name: "Dowry Prohibition Act, 1961",
      description: "Prohibits the giving or taking of dowry at or before or any time after the marriage.",
      keyProvisions: [
        "Penalty for giving or taking dowry - imprisonment up to 5 years and fine",
        "Ban on advertisements related to dowry",
        "Dowry to be for the benefit of the wife or her heirs",
        "Dowry Prohibition Officers to ensure compliance"
      ]
    },
    {
      name: "Maternity Benefit Act, 1961 (Amended in 2017)",
      description: "Protects the employment of women during maternity and entitles them to maternity benefits.",
      keyProvisions: [
        "26 weeks of paid maternity leave for first two children",
        "12 weeks for third child and for adoptive/commissioning mothers",
        "Work from home options (if nature of work allows)",
        "Crèche facilities for organizations with 50+ employees",
        "No dismissal due to pregnancy or maternity leave"
      ]
    },
    {
      name: "Muslim Women (Protection of Rights on Marriage) Act, 2019",
      description: "Makes instant triple talaq (talaq-e-biddat) void and illegal, protecting Muslim women's rights in marriage.",
      keyProvisions: [
        "Instant triple talaq is a cognizable offense",
        "Offender liable for imprisonment up to 3 years and fine",
        "Woman entitled to subsistence allowance for herself and dependent children",
        "Custody of minor children as determined by the Magistrate"
      ]
    },
    {
      name: "Equal Remuneration Act, 1976",
      description: "Mandates equal pay for men and women for same or similar work and prevents discrimination in recruitment.",
      keyProvisions: [
        "Equal pay for equal work regardless of gender",
        "No discrimination in recruitment, promotions, or transfers",
        "Appointment of authorities to hear complaints",
        "Penalties for employers violating provisions"
      ]
    }
  ];

  const childLaws = [
    {
      name: "Protection of Children from Sexual Offences Act, 2012 (POCSO)",
      description: "Comprehensive law to protect children from offences of sexual assault, sexual harassment, and pornography.",
      keyProvisions: [
        "Defines different types of sexual offenses against children",
        "Punishments based on the gravity of the offense",
        "Special courts for speedy trial of such offenses",
        "Child-friendly procedures during investigation and trial",
        "Mandatory reporting of sexual offenses"
      ]
    },
    {
      name: "Juvenile Justice (Care and Protection of Children) Act, 2015",
      description: "Addresses the needs of children in conflict with law and children in need of care and protection.",
      keyProvisions: [
        "Child Welfare Committees for care and protection",
        "Juvenile Justice Boards to deal with children in conflict with law",
        "Special procedures for children below 16 years who commit heinous crimes",
        "Adoption regulations and foster care provisions",
        "Institutional and non-institutional care mechanisms"
      ]
    },
    {
      name: "Right of Children to Free and Compulsory Education Act, 2009 (RTE)",
      description: "Makes education a fundamental right for all children between 6-14 years.",
      keyProvisions: [
        "Free and compulsory education for all children 6-14 years",
        "25% reservation in private schools for disadvantaged sections",
        "No capitation fees or screening procedures for admissions",
        "Prohibition of physical punishment and mental harassment",
        "Standards for school infrastructure and teacher qualifications"
      ]
    },
    {
      name: "Child Labour (Prohibition and Regulation) Act, 1986 (Amended in 2016)",
      description: "Prohibits employment of children below 14 years in all occupations except family enterprises and entertainment industry.",
      keyProvisions: [
        "Complete ban on employment of children below 14 years except in family enterprises",
        "Ban on employment of adolescents (14-18 years) in hazardous occupations",
        "Increased penalties for employers violating the Act",
        "Rehabilitation of rescued child laborers"
      ]
    },
    {
      name: "Prohibition of Child Marriage Act, 2006",
      description: "Prohibits child marriages and provides for their annulment and protection of victims.",
      keyProvisions: [
        "Minimum age for marriage - 21 years for males and 18 years for females",
        "Child marriages are voidable at the option of the parties",
        "Penalties for promoting or permitting child marriage",
        "Appointment of Child Marriage Prohibition Officers",
        "Court injunctions to prevent child marriages"
      ]
    },
    {
      name: "Commissions for Protection of Child Rights Act, 2005",
      description: "Establishes National and State Commissions for Protection of Child Rights to monitor child rights implementation.",
      keyProvisions: [
        "National and State Commissions for Protection of Child Rights",
        "Powers to inquire into violations of child rights",
        "Review of safeguards under various laws",
        "Research and awareness promotion on child rights",
        "Recommendations to government on policy matters"
      ]
    }
  ];

  const helplines = [
    {
      title: "Women's Helpline",
      number: "1091",
      description: "24x7 emergency response system for women affected by violence"
    },
    {
      title: "Domestic Violence Helpline",
      number: "181",
      description: "For women facing domestic violence or abuse"
    },
    {
      title: "Child Helpline",
      number: "1098",
      description: "Emergency phone service for children in need of care and protection"
    },
    {
      title: "Police Emergency",
      number: "100",
      description: "For reporting crimes including violence against women and children"
    },
    {
      title: "National Commission for Women",
      number: "011-26942369",
      description: "For complaints related to women's rights violations"
    },
    {
      title: "POCSO e-Box",
      number: "https://ncpcr.gov.in/",
      description: "Online complaint box for reporting child sexual abuse"
    }
  ];

  const successStories = [
    {
      title: "Vishaka vs. State of Rajasthan (1997)",
      category: "Women's Rights",
      description: "This landmark case led to the establishment of guidelines against sexual harassment at the workplace. A social worker, Vishaka, filed a PIL after the gang rape of a woman in a village of Rajasthan. This eventually led to the creation of the POSH Act, 2013."
    },
    {
      title: "Laxmi vs. Union of India (2013)",
      category: "Women's Rights",
      description: "Filed by an acid attack survivor, this PIL led to restrictions on acid sales, increased compensation for victims, and better regulation of acid availability across India, significantly reducing acid attacks."
    },
    {
      title: "Sampurna Behura vs. Union of India (2017)",
      category: "Child Rights",
      description: "This case led to the effective implementation of the Juvenile Justice Act across all states, ensuring proper functioning of Child Welfare Committees and Juvenile Justice Boards in every district."
    },
    {
      title: "Bachpan Bachao Andolan vs. Union of India (2011)",
      category: "Child Rights",
      description: "Led by Nobel laureate Kailash Satyarthi's organization, this case resulted in comprehensive orders for rescuing and rehabilitating child laborers and strengthening the implementation of child protection laws."
    }
  ];

  const faqItems = [
    {
      question: "What is the punishment for domestic violence in India?",
      answer: "Under the Protection of Women from Domestic Violence Act, 2005, courts can issue protection orders, residence orders, monetary relief, and compensation orders. The respondent violating a protection order can face imprisonment up to one year or fine up to ₹20,000, or both. Additionally, under IPC Section 498A, cruelty by husband or his relatives is punishable with imprisonment up to three years and fine."
    },
    {
      question: "How do I file a sexual harassment complaint at workplace?",
      answer: "File a written complaint with your organization's Internal Complaints Committee (ICC) within 3 months of the incident (extendable if circumstances prevented timely filing). Include details of the incident, date, time, location, names of respondent and witnesses. In unorganized sectors, complaints go to the Local Complaints Committee (LCC) at the district level. The committee must complete inquiry within 90 days and issue recommendations within 10 days thereafter."
    },
    {
      question: "What should I do if I witness child abuse?",
      answer: "Under POCSO Act, reporting child sexual abuse is mandatory. Call Childline (1098) or the local police (100). You can also report online through the POCSO e-Box on the National Commission for Protection of Child Rights website. Provide details of the incident and the child's location. Your identity as a reporter will be kept confidential. Failure to report is punishable under law."
    },
    {
      question: "Can a child marriage be legally annulled?",
      answer: "Yes, under the Prohibition of Child Marriage Act, 2006, a child marriage can be annulled by filing a petition in the district court. The petition must be filed before the child completes two years of attaining majority (i.e., before turning 20 for girls and 23 for boys). The court can issue orders for maintenance, residence, and custody of children born from such marriages."
    },
    {
      question: "What is the difference between sexual assault and sexual harassment?",
      answer: "Sexual assault involves physical contact of sexual nature without consent, including rape, and is covered under IPC Section 375 (rape) and 354 (outraging modesty). Sexual harassment is broader and includes unwelcome sexual advances, requests for sexual favors, or other verbal/physical conduct of sexual nature, creating hostile environment, whether or not there is physical contact. It's covered under IPC Section 354A and the POSH Act for workplace incidents."
    },
    {
      question: "How can I access free legal aid for women and child rights cases?",
      answer: "Free legal aid is available through National Legal Services Authority (NALSA) and State Legal Services Authorities. Women and children are automatically eligible regardless of income. Contact your District Legal Services Authority, call the NALSA helpline at 1516, visit a legal aid clinic, or approach NGOs specializing in women and child rights. Services include legal representation, advice, and assistance in filing complaints or petitions."
    }
  ];

  return (
    <Layout>
      
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 py-16 mx-auto md:py-24">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">Women & Child Rights</h1>
          <p className="max-w-3xl mb-8 text-lg">
            Understanding the legal protections and special provisions available for women and children in India, and how to access them.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg">
              Report Violence
            </Button>
            <Button size="lg" variant="outline">
              Know Your Rights <Download className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
        <div className="h-2 tri-color-gradient"></div>
      </section>

      
      <section className="py-12 bg-white dark:bg-gray-950">
        <div className="container px-4 mx-auto">
          <Tabs defaultValue="women" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2 mx-auto mb-8">
              <TabsTrigger value="women">Women's Rights</TabsTrigger>
              <TabsTrigger value="children">Children's Rights</TabsTrigger>
            </TabsList>
            
            <TabsContent value="women" className="mt-6">
              <h2 className="mb-8 text-2xl font-bold text-center">Laws Protecting Women in India</h2>
              
              <div className="grid grid-cols-1 gap-6 mb-12 lg:grid-cols-2">
                {womenLaws.map((law, index) => (
                  <Card key={index} className="transition-shadow duration-300 hover:shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-start gap-3">
                        <Shield className="flex-shrink-0 w-6 h-6 text-pink-500" />
                        <span>{law.name}</span>
                      </CardTitle>
                      <CardDescription>{law.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h4 className="mb-2 text-sm font-semibold uppercase text-muted-foreground">Key Provisions</h4>
                      <ul className="pl-5 space-y-1 text-sm list-disc text-muted-foreground">
                        {law.keyProvisions.map((provision, idx) => (
                          <li key={idx}>{provision}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mb-12">
                <h3 className="mb-6 text-xl font-bold text-center">Know Your Rights as a Woman</h3>
                
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  <div className="p-6 border border-pink-200 rounded-lg bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 dark:border-pink-800/50">
                    <div className="flex items-center mb-4">
                      <Heart className="w-6 h-6 mr-2 text-pink-500" />
                      <h4 className="font-semibold">Rights in Marriage</h4>
                    </div>
                    <ul className="pl-5 space-y-1 text-sm list-disc">
                      <li>Right to choose your spouse</li>
                      <li>Right to streedhan and maintenance</li>
                      <li>Right to live in matrimonial home</li>
                      <li>Protection from domestic violence</li>
                      <li>Right to divorce and alimony</li>
                    </ul>
                  </div>
                  
                  <div className="p-6 border border-purple-200 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 dark:border-purple-800/50">
                    <div className="flex items-center mb-4">
                      <User className="w-6 h-6 mr-2 text-purple-500" />
                      <h4 className="font-semibold">Workplace Rights</h4>
                    </div>
                    <ul className="pl-5 space-y-1 text-sm list-disc">
                      <li>Equal pay for equal work</li>
                      <li>Protection from sexual harassment</li>
                      <li>Maternity benefits and leave</li>
                      <li>Right to work at night with safety</li>
                      <li>No dismissal based on pregnancy</li>
                    </ul>
                  </div>
                  
                  <div className="p-6 border border-blue-200 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 dark:border-blue-800/50">
                    <div className="flex items-center mb-4">
                      <Shield className="w-6 h-6 mr-2 text-blue-500" />
                      <h4 className="font-semibold">Property Rights</h4>
                    </div>
                    <ul className="pl-5 space-y-1 text-sm list-disc">
                      <li>Equal inheritance rights for daughters</li>
                      <li>Rights in ancestral property</li>
                      <li>Rights to matrimonial property</li>
                      <li>Right to seek partition</li>
                      <li>Right to agricultural land</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="p-6 mb-12 border rounded-lg bg-gray-50 dark:bg-gray-900">
                <h3 className="mb-4 text-xl font-bold">Case Study: Domestic Violence</h3>
                
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="mb-3 font-semibold text-primary">Scenario</h4>
                    <p className="mb-4 text-sm text-muted-foreground">
                      Priya faced physical and emotional abuse from her husband and in-laws. They also restricted her movements and access to finances. After a particularly violent incident, she decided to seek legal help.
                    </p>
                    <h4 className="mb-3 font-semibold text-primary">Legal Action Taken</h4>
                    <ol className="pl-5 space-y-1 text-sm list-decimal text-muted-foreground">
                      <li>Contacted Women's Helpline (181) who guided her to a Protection Officer</li>
                      <li>Filed a Domestic Incident Report with the Protection Officer</li>
                      <li>Applied for a Protection Order, Residence Order, and Maintenance Order</li>
                      <li>Sought support from a local women's NGO for counseling and temporary shelter</li>
                    </ol>
                  </div>
                  
                  <div>
                    <h4 className="mb-3 font-semibold text-primary">Outcome</h4>
                    <ul className="pl-5 space-y-1 text-sm list-disc text-muted-foreground">
                      <li>Court issued interim Protection Order within 3 days</li>
                      <li>Restraining order against husband and in-laws</li>
                      <li>Secured right to continue living in the shared household</li>
                      <li>Awarded monthly maintenance</li>
                      <li>Police directed to ensure compliance with court orders</li>
                      <li>Access to free legal aid throughout the process</li>
                    </ul>
                    <Alert className="mt-4 text-blue-800 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-300">
                      <Info className="w-4 h-4" />
                      <AlertTitle>Key Takeaway</AlertTitle>
                      <AlertDescription className="text-sm">
                        The Protection of Women from Domestic Violence Act provides civil remedies like protection and residence orders that can be obtained quickly, even before pursuing criminal charges if desired.
                      </AlertDescription>
                    </Alert>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="children" className="mt-6">
              <h2 className="mb-8 text-2xl font-bold text-center">Laws Protecting Children in India</h2>
              
              <div className="grid grid-cols-1 gap-6 mb-12 lg:grid-cols-2">
                {childLaws.map((law, index) => (
                  <Card key={index} className="transition-shadow duration-300 hover:shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-start gap-3">
                        <Shield className="flex-shrink-0 w-6 h-6 text-blue-500" />
                        <span>{law.name}</span>
                      </CardTitle>
                      <CardDescription>{law.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h4 className="mb-2 text-sm font-semibold uppercase text-muted-foreground">Key Provisions</h4>
                      <ul className="pl-5 space-y-1 text-sm list-disc text-muted-foreground">
                        {law.keyProvisions.map((provision, idx) => (
                          <li key={idx}>{provision}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mb-12">
                <h3 className="mb-6 text-xl font-bold text-center">Fundamental Rights of Every Child</h3>
                
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  <div className="p-6 border border-blue-200 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 dark:border-blue-800/50">
                    <div className="flex items-center mb-4">
                      <Shield className="w-6 h-6 mr-2 text-blue-500" />
                      <h4 className="font-semibold">Right to Survival</h4>
                    </div>
                    <ul className="pl-5 space-y-1 text-sm list-disc">
                      <li>Right to be born</li>
                      <li>Right to minimum standards of health</li>
                      <li>Right to nutrition</li>
                      <li>Right to adequate standard of living</li>
                      <li>Right to a healthy environment</li>
                    </ul>
                  </div>
                  
                  <div className="p-6 border border-green-200 rounded-lg bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 dark:border-green-800/50">
                    <div className="flex items-center mb-4">
                      <BookOpen className="w-6 h-6 mr-2 text-green-500" />
                      <h4 className="font-semibold">Right to Development</h4>
                    </div>
                    <ul className="pl-5 space-y-1 text-sm list-disc">
                      <li>Right to education</li>
                      <li>Right to play and leisure</li>
                      <li>Right to cultural activities</li>
                      <li>Right to information</li>
                      <li>Right to freedom of thought and religion</li>
                    </ul>
                  </div>
                  
                  <div className="p-6 border rounded-lg bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 border-amber-200 dark:border-amber-800/50">
                    <div className="flex items-center mb-4">
                      <Users className="w-6 h-6 mr-2 text-amber-500" />
                      <h4 className="font-semibold">Right to Protection</h4>
                    </div>
                    <ul className="pl-5 space-y-1 text-sm list-disc">
                      <li>Right to be protected from abuse</li>
                      <li>Right against child labor</li>
                      <li>Protection from trafficking</li>
                      <li>Protection during armed conflict</li>
                      <li>Protection from harmful traditional practices</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="p-6 mb-12 border rounded-lg bg-gray-50 dark:bg-gray-900">
                <h3 className="mb-4 text-xl font-bold">Case Study: Child Labor Rescue</h3>
                
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="mb-3 font-semibold text-primary">Scenario</h4>
                    <p className="mb-4 text-sm text-muted-foreground">
                      12-year-old Raju was working in a zari (embroidery) factory in Delhi. He worked 14-hour days in poor conditions and was not allowed to attend school. A local NGO identified the situation during their community survey.
                    </p>
                    <h4 className="mb-3 font-semibold text-primary">Action Taken</h4>
                    <ol className="pl-5 space-y-1 text-sm list-decimal text-muted-foreground">
                      <li>NGO informed Childline (1098) and the local Labor Department</li>
                      <li>A raid was conducted by police and labor officials</li>
                      <li>Raju along with 15 other children were rescued</li>
                      <li>FIR filed against the factory owner under Child Labor Act and JJ Act</li>
                      <li>Children produced before Child Welfare Committee (CWC)</li>
                    </ol>
                  </div>
                  
                  <div>
                    <h4 className="mb-3 font-semibold text-primary">Outcome</h4>
                    <ul className="pl-5 space-y-1 text-sm list-disc text-muted-foreground">
                      <li>Factory owner arrested and fined</li>
                      <li>Raju received rehabilitation compensation of ₹20,000</li>
                      <li>Enrolled in bridge school program and later in regular school</li>
                      <li>Family received support under MGNREGA for sustainable income</li>
                      <li>Regular follow-up by district child protection unit ensured Raju continued education</li>
                      <li>Factory now regularly inspected by labor department</li>
                    </ul>
                    <Alert className="mt-4 text-blue-800 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-300">
                      <Info className="w-4 h-4" />
                      <AlertTitle>Key Takeaway</AlertTitle>
                      <AlertDescription className="text-sm">
                        The integration of Child Labor laws with the Juvenile Justice system provides a comprehensive framework for both rescue and rehabilitation of child laborers, addressing both immediate safety and long-term welfare.
                      </AlertDescription>
                    </Alert>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <h2 className="mb-2 text-2xl font-bold text-center">Emergency Helplines</h2>
          <p className="mb-12 text-center text-muted-foreground">
            If you or someone you know is in immediate danger or needs assistance
          </p>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {helplines.map((helpline, index) => (
              <Card key={index} className="transition-shadow duration-300 bg-white dark:bg-gray-800 hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{helpline.title}</CardTitle>
                  <CardDescription>{helpline.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary">{helpline.number}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="max-w-3xl mx-auto mt-10">
            <Alert className="text-red-800 border-red-200 bg-red-50 dark:bg-red-900/20 dark:text-red-300 dark:border-red-800/50">
              <AlertTriangle className="w-4 h-4" />
              <AlertTitle>In case of immediate danger</AlertTitle>
              <AlertDescription>
                If you or a child you know is in immediate danger, call the police emergency number 100 or women's helpline 1091 right away. Your timely action can save lives.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container px-4 mx-auto">
          <h2 className="mb-2 text-2xl font-bold text-center">Rights in Action: Success Stories</h2>
          <p className="mb-12 text-center text-muted-foreground">
            Landmark cases that have strengthened women's and children's rights in India
          </p>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {successStories.map((story, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="mb-1 text-xs font-semibold text-primary">{story.category}</div>
                  <CardTitle>{story.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{story.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-gray-800 dark:to-gray-900">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-2xl font-bold text-center">How to Report Rights Violations</h2>
          
          <div className="grid max-w-4xl grid-cols-1 gap-8 mx-auto md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="mb-2">
                  <AlertTriangle className="w-6 h-6 text-pink-500" />
                </div>
                <CardTitle>Reporting Women's Rights Violations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="mb-2 font-semibold">For Domestic Violence:</h3>
                  <ol className="pl-5 space-y-1 text-sm list-decimal text-muted-foreground">
                    <li>Contact Women's Helpline (181) or Police (100)</li>
                    <li>Approach the nearest Protection Officer or Service Provider</li>
                    <li>File a Domestic Incident Report</li>
                    <li>Apply for protection orders, residence orders, or compensation</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="mb-2 font-semibold">For Workplace Harassment:</h3>
                  <ol className="pl-5 space-y-1 text-sm list-decimal text-muted-foreground">
                    <li>Submit a written complaint to the Internal Committee (IC)</li>
                    <li>If no IC exists or for unorganized sectors, approach the Local Committee</li>
                    <li>File complaint within 3 months of the incident</li>
                    <li>Provide details, evidence, and witness information if available</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="mb-2 font-semibold">Other Options:</h3>
                  <ul className="pl-5 space-y-1 text-sm list-disc text-muted-foreground">
                    <li>File a police complaint at the Women's Cell</li>
                    <li>Contact the State or National Commission for Women</li>
                    <li>Seek help from women's rights NGOs</li>
                    <li>Use mobile apps like Himmat or Smart Shout</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  Women's Rights Organizations Directory
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="mb-2">
                  <AlertTriangle className="w-6 h-6 text-blue-500" />
                </div>
                <CardTitle>Reporting Child Rights Violations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="mb-2 font-semibold">For Child Abuse/Exploitation:</h3>
                  <ol className="pl-5 space-y-1 text-sm list-decimal text-muted-foreground">
                    <li>Call Childline at 1098 (24/7 toll-free emergency helpline)</li>
                    <li>Report to the nearest police station</li>
                    <li>Contact the local Child Welfare Committee (CWC)</li>
                    <li>Use POCSO e-Box on the NCPCR website for sexual abuse cases</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="mb-2 font-semibold">For Child Labor:</h3>
                  <ol className="pl-5 space-y-1 text-sm list-decimal text-muted-foreground">
                    <li>Report to District Task Force on Child Labor</li>
                    <li>Contact the Labor Department</li>
                    <li>Call Childline at 1098</li>
                    <li>Reach out to NGOs working on child labor issues</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="mb-2 font-semibold">Other Options:</h3>
                  <ul className="pl-5 space-y-1 text-sm list-disc text-muted-foreground">
                    <li>Contact the State or National Commission for Protection of Child Rights</li>
                    <li>Use the Track Child portal (trackthemissingchild.gov.in)</li>
                    <li>Report to school authorities if school-related issues</li>
                    <li>Seek help from child rights NGOs</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  Child Protection Organizations Directory
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container max-w-4xl px-4 mx-auto">
          <h2 className="mb-2 text-2xl font-bold text-center">Frequently Asked Questions</h2>
          <p className="mb-12 text-center text-muted-foreground">
            Common questions about women's and children's rights in India
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
        </div>
      </section>
      
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container px-4 mx-auto">
          <h2 className="mb-2 text-2xl font-bold text-center">Resources</h2>
          <p className="mb-12 text-center text-muted-foreground">
            Downloadable guides and useful links
          </p>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card className="transition-shadow duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="mb-2">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Women's Rights Handbook</CardTitle>
                <CardDescription>Comprehensive guide to legal rights and remedies for women</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3 mr-1" />
                  <span>Last updated: March 2023</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Download PDF <Download className="w-4 h-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="transition-shadow duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="mb-2">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Child Rights Pocket Guide</CardTitle>
                <CardDescription>Easy-to-understand guide to children's rights and protections</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3 mr-1" />
                  <span>Last updated: January 2023</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Download PDF <Download className="w-4 h-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="transition-shadow duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="mb-2">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Legal Templates</CardTitle>
                <CardDescription>Sample complaint formats and application templates</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Domestic Violence Complaint</li>
                  <li>• Maintenance Application</li>
                  <li>• POCSO Complaint</li>
                  <li>• Workplace Harassment Complaint</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Download Templates <Download className="w-4 h-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <p className="mb-4 text-muted-foreground">Need more information or support?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <Link to="/legal-aid">Find Legal Aid</Link>
              </Button>
              <Button variant="outline">
                Support Organizations Directory
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WomenChildRights;