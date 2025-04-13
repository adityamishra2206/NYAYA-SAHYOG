// import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Layout from '@/components/Layout';
import { ArrowRight, Download } from 'lucide-react';


const FundamentalRights = () => {
  const rights = [
    {
      title: "Right to Equality (Articles 14-18)",
      icon: "⚖️",
      description: "The Right to Equality ensures that every person is equal before the law and has equal protection of the laws within the territory of India. It prohibits discrimination on grounds of religion, race, caste, sex, or place of birth.",
      articles: [
        {
          number: "Article 14",
          title: "Equality before law",
          content: "The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India."
        },
        {
          number: "Article 15",
          title: "Prohibition of discrimination",
          content: "The State shall not discriminate against any citizen on grounds only of religion, race, caste, sex, place of birth or any of them. No citizen shall, on grounds only of religion, race, caste, sex, place of birth or any of them, be subject to any disability, liability, restriction or condition."
        },
        {
          number: "Article 16",
          title: "Equality of opportunity in public employment",
          content: "There shall be equality of opportunity for all citizens in matters relating to employment or appointment to any office under the State. No citizen shall, on grounds only of religion, race, caste, sex, descent, place of birth, residence or any of them, be ineligible for, or discriminated against in respect of, any employment or office under the State."
        },
        {
          number: "Article 17",
          title: "Abolition of Untouchability",
          content: "Untouchability is abolished and its practice in any form is forbidden. The enforcement of any disability arising out of Untouchability shall be an offence punishable in accordance with law."
        },
        {
          number: "Article 18",
          title: "Abolition of titles",
          content: "No title, not being a military or academic distinction, shall be conferred by the State. No citizen of India shall accept any title from any foreign State."
        }
      ]
    },
    {
      title: "Right to Freedom (Articles 19-22)",
      icon: "🗣️",
      description: "The Right to Freedom guarantees civil liberties to all citizens of India, allowing them to live their lives in peace and harmony as citizens of India. These include freedom of speech, expression, assembly, association, movement, residence, and the right to practice any profession.",
      articles: [
        {
          number: "Article 19",
          title: "Protection of certain rights regarding freedom of speech, etc.",
          content: "All citizens shall have the right to freedom of speech and expression, to assemble peaceably and without arms, to form associations or unions, to move freely throughout the territory of India, to reside and settle in any part of the territory of India, and to practice any profession or to carry on any occupation, trade or business."
        },
        {
          number: "Article 20",
          title: "Protection in respect of conviction for offenses",
          content: "No person shall be convicted of any offense except for violation of a law in force at the time of the commission of the Act, nor be subjected to a penalty greater than that which might have been inflicted under the law in force at the time of the commission of the offense. No person shall be prosecuted and punished for the same offense more than once. No person accused of any offense shall be compelled to be a witness against himself."
        },
        {
          number: "Article 21",
          title: "Protection of life and personal liberty",
          content: "No person shall be deprived of his life or personal liberty except according to procedure established by law."
        },
        {
          number: "Article 21A",
          title: "Right to education",
          content: "The State shall provide free and compulsory education to all children of the age of six to fourteen years in such manner as the State may, by law, determine."
        },
        {
          number: "Article 22",
          title: "Protection against arrest and detention in certain cases",
          content: "No person who is arrested shall be detained in custody without being informed, as soon as may be, of the grounds for such arrest nor shall he be denied the right to consult, and to be defended by, a legal practitioner of his choice."
        }
      ]
    },
    {
      title: "Right against Exploitation (Articles 23-24)",
      icon: "🚫",
      description: "The Right against Exploitation prohibits all forms of forced labor, child labor and human trafficking. It ensures personal freedom and dignity.",
      articles: [
        {
          number: "Article 23",
          title: "Prohibition of traffic in human beings and forced labor",
          content: "Traffic in human beings and forced labor are prohibited and any contravention of this provision shall be an offense punishable in accordance with law."
        },
        {
          number: "Article 24",
          title: "Prohibition of employment of children in factories, etc.",
          content: "No child below the age of fourteen years shall be employed to work in any factory or mine or engaged in any other hazardous employment."
        }
      ]
    },
    {
      title: "Right to Freedom of Religion (Articles 25-28)",
      icon: "🕉️",
      description: "The Right to Freedom of Religion guarantees religious freedom and ensures secular nature of the state. All persons are equally entitled to freedom of conscience and the right to freely profess, practice, and propagate their religion.",
      articles: [
        {
          number: "Article 25",
          title: "Freedom of conscience and free profession, practice and propagation of religion",
          content: "Subject to public order, morality and health, all persons are equally entitled to freedom of conscience and the right freely to profess, practice and propagate religion."
        },
        {
          number: "Article 26",
          title: "Freedom to manage religious affairs",
          content: "Subject to public order, morality and health, every religious denomination or any section thereof shall have the right to establish and maintain institutions for religious and charitable purposes; to manage its own affairs in matters of religion; to own and acquire movable and immovable property; and to administer such property in accordance with law."
        },
        {
          number: "Article 27",
          title: "Freedom as to payment of taxes for promotion of any particular religion",
          content: "No person shall be compelled to pay any taxes, the proceeds of which are specifically appropriated in payment of expenses for the promotion or maintenance of any particular religion or religious denomination."
        },
        {
          number: "Article 28",
          title: "Freedom as to attendance at religious instruction or religious worship in certain educational institutions",
          content: "No religious instruction shall be provided in any educational institution wholly maintained out of State funds."
        }
      ]
    },
    {
      title: "Cultural and Educational Rights (Articles 29-30)",
      icon: "📚",
      description: "Cultural and Educational Rights protect the rights of cultural, religious and linguistic minorities by enabling them to conserve their heritage and ensuring them equal rights in educational spheres.",
      articles: [
        {
          number: "Article 29",
          title: "Protection of interests of minorities",
          content: "Any section of the citizens residing in the territory of India or any part thereof having a distinct language, script or culture of its own shall have the right to conserve the same."
        },
        {
          number: "Article 30",
          title: "Right of minorities to establish and administer educational institutions",
          content: "All minorities, whether based on religion or language, shall have the right to establish and administer educational institutions of their choice."
        }
      ]
    },
    {
      title: "Right to Constitutional Remedies (Article 32)",
      icon: "⚖️",
      description: "The Right to Constitutional Remedies enables citizens to approach the Supreme Court directly for the enforcement of their Fundamental Rights. Dr. B.R. Ambedkar called it 'the heart and soul of the Constitution'.",
      articles: [
        {
          number: "Article 32",
          title: "Remedies for enforcement of rights conferred by this Part",
          content: "The right to move the Supreme Court by appropriate proceedings for the enforcement of the rights conferred by this Part is guaranteed. The Supreme Court shall have power to issue directions or orders or writs, including writs in the nature of habeas corpus, mandamus, prohibition, quo warranto and certiorari, whichever may be appropriate, for the enforcement of any of the rights conferred by this Part."
        }
      ]
    }
  ];

  const caseLaws = [
    {
      name: "Kesavananda Bharati v. State of Kerala (1973)",
      significance: "Established the 'Basic Structure Doctrine', which limits Parliament's power to amend the Constitution by stating that no amendment can destroy the basic structure of the Constitution."
    },
    {
      name: "Maneka Gandhi v. Union of India (1978)",
      significance: "Expanded the interpretation of Article 21 (Right to Life) to include the right to live with human dignity and not mere animal existence."
    },
    {
      name: "Vishaka v. State of Rajasthan (1997)",
      significance: "Laid down guidelines to prevent sexual harassment of women at the workplace, which later led to the Sexual Harassment of Women at Workplace Act."
    }
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 py-16 mx-auto md:py-24">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">Fundamental Rights</h1>
          <p className="max-w-3xl mb-8 text-lg">
            Fundamental Rights are the basic human rights enshrined in the Constitution of India which are guaranteed to all citizens. They are enforceable by the courts, subject to specific restrictions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg">
              Download PDF Guide <Download className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
        <div className="h-2 tri-color-gradient"></div>
      </div>

      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="mb-6 text-2xl font-bold">Understanding Your Fundamental Rights</h2>
            
            <div className="mb-12">
              {rights.map((right, index) => (
                <div key={index} className="mb-8">
                  <h3 className="flex items-center mb-4 text-xl font-bold">
                    <span className="mr-2">{right.icon}</span>
                    {right.title}
                  </h3>
                  <p className="mb-4 text-muted-foreground">{right.description}</p>
                  
                  <Accordion type="single" collapsible className="border rounded-lg">
                    {right.articles.map((article, idx) => (
                      <AccordionItem key={idx} value={article.number}>
                        <AccordionTrigger className="px-4 py-3 hover:bg-muted/50">
                          <span className="font-semibold">{article.number}: {article.title}</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4">
                          <p>{article.content}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>

            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold">Landmark Judgments</h2>
              <div className="space-y-6">
                {caseLaws.map((case_, index) => (
                  <div key={index} className="p-6 border rounded-lg bg-muted/20">
                    <h3 className="mb-2 text-lg font-bold">{case_.name}</h3>
                    <p>{case_.significance}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="sticky p-6 border rounded-lg bg-muted/20 top-24">
              <h3 className="mb-4 text-lg font-bold">Quick Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="flex items-center text-primary hover:underline">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    How to file a Writ Petition
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-primary hover:underline">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    PIL Guidelines
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-primary hover:underline">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Supreme Court Rules
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-primary hover:underline">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Recent Supreme Court Judgments
                  </a>
                </li>
              </ul>
              
              <div className="mt-8">
                <h3 className="mb-4 text-lg font-bold">Need Legal Assistance?</h3>
                <p className="mb-4 text-sm">If your fundamental rights have been violated, you can seek legal assistance.</p>
                <Button className="w-full">Find Legal Aid</Button>
              </div>
              
              <div className="p-4 mt-8 rounded-lg bg-primary/10">
                <h4 className="mb-2 font-medium">Did you know?</h4>
                <p className="text-sm">
                  Dr. B.R. Ambedkar called Article 32 (Right to Constitutional Remedies) the "heart and soul" of the Constitution as it provides for direct access to the Supreme Court for enforcement of Fundamental Rights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  );
};

export default FundamentalRights;