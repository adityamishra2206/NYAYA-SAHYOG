import  { useState } from 'react';
import { Search,  Star, MapPin, Phone, Mail, } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';


interface Lawyer {
  id: number;
  name: string;
  photo: string;
  specialization: string;
  experience: number;
  location: string;
  phone: string;
  email: string;
  bio: string;
  rating: number;
  consultationFee: number;
  languages: string[];
  availability: string;
  expertise: string[];
}

const Lawyers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('all');
  const [selectedExperience, setSelectedExperience] = useState('all');
  const [view, setView] = useState('grid');
 

  const lawyers: Lawyer[] = [
    {
      id: 1,
      name: "Priya Sharma",
      photo: "https://img.freepik.com/free-photo/businesswoman-executive-professional-success-concept_53876-137644.jpg",
      specialization: "Criminal Law",
      experience: 12,
      location: "New Delhi",
      phone: "+91 98765 43210",
      email: "priya.sharma@example.com",
      bio: "Specializes in criminal defense with 12 years of experience handling high-profile cases. Former public prosecutor with expertise in violent crime cases.",
      rating: 4.8,
      consultationFee: 2500,
      languages: ["English", "Hindi", "Punjabi"],
      availability: "Mon-Fri, 9am-6pm",
      expertise: ["Criminal Defense", "White Collar Crime", "NDPS Cases"]
    },
    {
      id: 2,
      name: "Rajiv Mehta",
      photo: "https://img.freepik.com/free-photo/close-up-confident-male-employee-white-collar-shirt-smiling-camera-standing-self-assured-against-studio-background_1258-26761.jpg",
      specialization: "Corporate Law",
      experience: 15,
      location: "Mumbai",
      phone: "+91 87654 32109",
      email: "rajiv.mehta@example.com",
      bio: "Corporate law expert advising multinational companies on mergers, acquisitions, and corporate governance. Previously worked with one of the Big Four consulting firms.",
      rating: 4.9,
      consultationFee: 3500,
      languages: ["English", "Hindi", "Gujarati"],
      availability: "Mon-Sat, 10am-7pm",
      expertise: ["M&A", "Corporate Restructuring", "Joint Ventures"]
    },
    {
      id: 3,
      name: "Aisha Khan",
      photo: "https://img.freepik.com/free-photo/young-asia-businesswoman-using-computer-laptop-happy-smiling-with-positive-expression-casual-clothing-house-studio_7861-3000.jpg",
      specialization: "Family Law",
      experience: 8,
      location: "Bangalore",
      phone: "+91 76543 21098",
      email: "aisha.khan@example.com",
      bio: "Family law practitioner focusing on divorce, child custody, and matrimonial disputes. Known for compassionate approach to sensitive family matters.",
      rating: 4.7,
      consultationFee: 2000,
      languages: ["English", "Hindi", "Urdu", "Kannada"],
      availability: "Mon-Fri, 9am-5pm",
      expertise: ["Divorce", "Child Custody", "Maintenance"]
    },
    {
      id: 4,
      name: "Suresh Iyengar",
      photo: "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg",
      specialization: "Intellectual Property",
      experience: 10,
      location: "Chennai",
      phone: "+91 65432 10987",
      email: "suresh.iyengar@example.com",
      bio: "IP specialist handling patents, trademarks, and copyright cases for technology companies. Formerly worked in the tech industry as an engineer.",
      rating: 4.6,
      consultationFee: 3000,
      languages: ["English", "Tamil", "Hindi"],
      availability: "Mon-Fri, 10am-6pm",
      expertise: ["Patents", "Trademarks", "Copyright"]
    },
    {
      id: 5,
      name: "Meera Reddy",
      photo: "https://img.freepik.com/free-photo/young-beautiful-woman-warm-sweater-natural-look-smiling_176420-9656.jpg",
      specialization: "Real Estate Law",
      experience: 14,
      location: "Hyderabad",
      phone: "+91 54321 09876",
      email: "meera.reddy@example.com",
      bio: "Real estate law expert handling property disputes, land acquisition cases, and real estate transactions with 14 years of experience.",
      rating: 4.7,
      consultationFee: 2800,
      languages: ["English", "Telugu", "Hindi"],
      availability: "Mon-Sat, 9am-6pm",
      expertise: ["Property Disputes", "Land Acquisition", "Real Estate Transactions"]
    },
    {
      id: 6,
      name: "Anjali Singh",
      photo: "https://img.freepik.com/free-photo/handsome-corporate-man-real-estate-agent-assistant-smiling-looking-happy-professional-space_1258-104435.jpg",
      specialization: "Labor Law",
      experience: 9,
      location: "Kolkata",
      phone: "+91 43210 98765",
      email: "arjun.singh@example.com",
      bio: "Labor lawyer advocating for employee rights, workplace harassment cases, and helping with employment contracts and negotiations.",
      rating: 4.5,
      consultationFee: 1800,
      languages: ["English", "Bengali", "Hindi"],
      availability: "Mon-Fri, 9:30am-5:30pm",
      expertise: ["Employee Rights", "Workplace Harassment", "Labor Disputes"]
    },
    {
      id: 7,
      name: "Deepika Joshi",
      photo: "https://img.freepik.com/free-photo/portrait-smiling-young-indian-woman-student-holding-books-studying-standing-isolated-white-background_1258-89195.jpg",
      specialization: "Constitutional Law",
      experience: 18,
      location: "New Delhi",
      phone: "+91 32109 87654",
      email: "deepika.joshi@example.com",
      bio: "Constitutional law expert with experience in public interest litigation. Has argued several landmark cases before the Supreme Court of India.",
      rating: 4.9,
      consultationFee: 4000,
      languages: ["English", "Hindi", "Sanskrit"],
      availability: "Mon-Fri, 10am-5pm",
      expertise: ["Constitutional Rights", "Public Interest Litigation", "Fundamental Rights"]
    },
    {
      id: 8,
      name: "Farhan Ahmed",
      photo: "https://img.freepik.com/free-photo/portrait-smiling-young-man_171337-11976.jpg",
      specialization: "Criminal Law",
      experience: 7,
      location: "Mumbai",
      phone: "+91 21098 76543",
      email: "farhan.ahmed@example.com",
      bio: "Criminal defense attorney focusing on cybercrime and digital forensic evidence. Previously worked with the cybercrime division of law enforcement.",
      rating: 4.6,
      consultationFee: 2200,
      languages: ["English", "Hindi", "Marathi"],
      availability: "Mon-Sat, 9am-7pm",
      expertise: ["Cybercrime", "Digital Forensics", "Criminal Defense"]
    },
    {
      id: 9,
      name: "Rekha Nair",
      photo: "https://img.freepik.com/free-photo/portrait-beautiful-young-woman-standing-grey-wall_231208-10760.jpg",
      specialization: "Environmental Law",
      experience: 11,
      location: "Kochi",
      phone: "+91 10987 65432",
      email: "rekha.nair@example.com",
      bio: "Environmental lawyer working on conservation cases, pollution control, and sustainable development projects. Active in climate litigation.",
      rating: 4.7,
      consultationFee: 2700,
      languages: ["English", "Malayalam", "Tamil", "Hindi"],
      availability: "Mon-Fri, 10am-6pm",
      expertise: ["Environmental Protection", "Pollution Control", "Climate Litigation"]
    },
    {
      id: 10,
      name: "Vikram Malhotra",
      photo: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
      specialization: "Tax Law",
      experience: 13,
      location: "Chandigarh",
      phone: "+91 09876 54321",
      email: "vikram.malhotra@example.com",
      bio: "Tax law specialist advising individuals and businesses on tax planning, compliance, and tax dispute resolution. Former tax consultant at a major accounting firm.",
      rating: 4.8,
      consultationFee: 3200,
      languages: ["English", "Hindi", "Punjabi"],
      availability: "Mon-Fri, 9am-6pm",
      expertise: ["Tax Planning", "GST", "Income Tax Disputes"]
    },
    {
      id: 11,
      name: "Arjun Verma",
      photo: "https://img.freepik.com/free-photo/cheerful-indian-businesswoman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg",
      specialization: "Immigration Law",
      experience: 9,
      location: "Bangalore",
      phone: "+91 98765 01234",
      email: "anjali.verma@example.com",
      bio: "Immigration law expert helping clients with visa applications, residency issues, and citizenship cases. Has worked with international clients across the globe.",
      rating: 4.5,
      consultationFee: 2500,
      languages: ["English", "Hindi", "Kannada", "French"],
      availability: "Mon-Sat, 10am-6pm",
      expertise: ["Visa Applications", "Residency", "International Migration"]
    },
    {
      id: 12,
      name: "Karan Kapoor",
      photo: "https://img.freepik.com/free-photo/man-wearing-waistcoat_1368-6976.jpg",
      specialization: "Banking Law",
      experience: 16,
      location: "Mumbai",
      phone: "+91 87654 09876",
      email: "karan.kapoor@example.com",
      bio: "Banking and finance lawyer specializing in financial regulations, banking disputes, and securities law. Previously worked as in-house counsel for a major bank.",
      rating: 4.8,
      consultationFee: 3500,
      languages: ["English", "Hindi", "Gujarati"],
      availability: "Mon-Fri, 9am-7pm",
      expertise: ["Banking Regulations", "Securities Law", "Financial Disputes"]
    },
    {
      id: 13,
      name: "Sunita Patel",
      photo: "https://img.freepik.com/free-photo/young-beautiful-woman-smart-casual-wear-holding-digital-tablet-looking-camera-smiling_274679-20224.jpg",
      specialization: "Medical Law",
      experience: 12,
      location: "Ahmedabad",
      phone: "+91 76543 09876",
      email: "sunita.patel@example.com",
      bio: "Medical law practitioner focusing on medical negligence, malpractice, and healthcare regulations. Previously worked as legal counsel for a hospital group.",
      rating: 4.7,
      consultationFee: 2800,
      languages: ["English", "Hindi", "Gujarati"],
      availability: "Mon-Fri, 10am-5pm",
      expertise: ["Medical Negligence", "Healthcare Regulations", "Insurance Claims"]
    },
    {
      id: 14,
      name: "Rahul Desai",
      photo: "https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg",
      specialization: "Contract Law",
      experience: 10,
      location: "Pune",
      phone: "+91 65432 09876",
      email: "rahul.desai@example.com",
      bio: "Contract law specialist handling commercial agreements, breach of contract disputes, and negotiation of complex contractual terms.",
      rating: 4.6,
      consultationFee: 2400,
      languages: ["English", "Hindi", "Marathi"],
      availability: "Mon-Sat, 9am-6pm",
      expertise: ["Contract Drafting", "Commercial Agreements", "Dispute Resolution"]
    },
    {
      id: 15,
      name: "Lakshmi Krishnan",
      photo: "https://img.freepik.com/free-photo/close-up-portrait-cheerful-glamour-girl-with-cute-make-up-smiling-white-teeth-looking-happy-camera_176420-9693.jpg",
      specialization: "Women's Rights",
      experience: 14,
      location: "Chennai",
      phone: "+91 54321 09876",
      email: "lakshmi.krishnan@example.com",
      bio: "Advocate for women's rights handling cases related to domestic violence, sexual harassment, and gender discrimination. Founder of a legal aid center for women.",
      rating: 4.9,
      consultationFee: 2000,
      languages: ["English", "Tamil", "Malayalam", "Hindi"],
      availability: "Mon-Fri, 9am-5pm",
      expertise: ["Domestic Violence", "Sexual Harassment", "Gender Discrimination"]
    }
  ];

  const specializations = [...new Set(lawyers.map(lawyer => lawyer.specialization))];
  
  const filteredLawyers = lawyers.filter(lawyer => {
    const matchesSearch = lawyer.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          lawyer.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          lawyer.bio.toLowerCase().includes(searchTerm.toLowerCase());
                          
    const matchesSpecialization = selectedSpecialization === 'all' || lawyer.specialization === selectedSpecialization;
    
    const matchesExperience = selectedExperience === 'all' || 
                             (selectedExperience === '0-5' && lawyer.experience <= 5) ||
                             (selectedExperience === '5-10' && lawyer.experience > 5 && lawyer.experience <= 10) ||
                             (selectedExperience === '10+' && lawyer.experience > 10);
                             
    return matchesSearch && matchesSpecialization && matchesExperience;
  });


  return (
    <Layout>
      <div className="container px-4 py-8 mx-auto">
        <h1 className="mb-6 text-3xl font-bold">Find a Lawyer</h1>
        
        
        <div className="p-6 mb-8 rounded-lg shadow-sm bg-card">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <div className="col-span-1 md:col-span-2">
              <div className="relative">
                <Search className="absolute transform -translate-y-1/2 left-3 top-1/2 text-muted-foreground" size={18} />
                <Input 
                  placeholder="Search for lawyers by name, specialization, or keywords..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div>
              <Select onValueChange={setSelectedSpecialization} defaultValue={selectedSpecialization}>
                <SelectTrigger>
                  <SelectValue placeholder="Specialization" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Specializations</SelectItem>
                  {specializations.map((spec) => (
                    <SelectItem key={spec} value={spec}>{spec}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Select onValueChange={setSelectedExperience} defaultValue={selectedExperience}>
                <SelectTrigger>
                  <SelectValue placeholder="Experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Experience</SelectItem>
                  <SelectItem value="0-5">0-5 years</SelectItem>
                  <SelectItem value="5-10">5-10 years</SelectItem>
                  <SelectItem value="10+">10+ years</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-4">
            <div>
              <span className="text-sm text-muted-foreground">
                {filteredLawyers.length} lawyers found
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">View:</span>
              <Tabs value={view} onValueChange={setView} className="h-8">
                <TabsList className="h-8">
                  <TabsTrigger value="grid" className="h-8 px-3">Grid</TabsTrigger>
                  <TabsTrigger value="list" className="h-8 px-3">List</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>
        
        
        <Tabs value={view} className="mt-0">
          
          <TabsContent value="grid">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredLawyers.map((lawyer) => (
                <Card key={lawyer.id} className="overflow-hidden">
                  <div className="w-full overflow-hidden aspect-video">
                    <img 
                      src={lawyer.photo} 
                      alt={lawyer.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>{lawyer.name}</CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <Badge variant="secondary" className="mr-2">{lawyer.specialization}</Badge>
                          <span className="flex items-center text-sm">
                            <Star className="w-4 h-4 mr-1 fill-yellow-400 stroke-yellow-400" />
                            {lawyer.rating}
                          </span>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center mb-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-1" />
                      {lawyer.location}
                    </div>
                    <div className="flex items-center mb-2 text-sm text-muted-foreground">
                      <span className="font-medium">Experience:</span>
                      <span className="ml-1">{lawyer.experience} years</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span className="font-medium">Consultation Fee:</span>
                      <span className="ml-1">₹{lawyer.consultationFee}</span>
                    </div>
                    <div className="mt-3">
                      <p className="text-sm line-clamp-2">{lawyer.bio}</p>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Button className="w-full">
                      Hire Lawyer
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          
          <TabsContent value="list">
            <div className="space-y-4">
              {filteredLawyers.map((lawyer) => (
                <Card key={lawyer.id}>
                  <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0 h-48 md:w-48">
                      <img 
                        src={lawyer.photo} 
                        alt={lawyer.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex-grow p-6">
                      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-start">
                        <div>
                          <h3 className="text-xl font-bold">{lawyer.name}</h3>
                          <div className="flex items-center mt-1 mb-3">
                            <Badge variant="secondary" className="mr-2">{lawyer.specialization}</Badge>
                            <span className="flex items-center text-sm">
                              <Star className="w-4 h-4 mr-1 fill-yellow-400 stroke-yellow-400" />
                              {lawyer.rating}
                            </span>
                          </div>
                          <div className="flex items-center mb-1 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4 mr-1" />
                            {lawyer.location}
                          </div>
                          <div className="flex items-center mb-1 text-sm text-muted-foreground">
                            <span className="font-medium">Experience:</span>
                            <span className="ml-1">{lawyer.experience} years</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <span className="font-medium">Consultation Fee:</span>
                            <span className="ml-1">₹{lawyer.consultationFee}</span>
                          </div>
                          <p className="mt-3 text-sm">{lawyer.bio}</p>
                        </div>
                        <div className="space-y-3 md:text-right">
                          <div className="flex items-center text-sm md:justify-end">
                            <Phone className="w-4 h-4 mr-1" />
                            {lawyer.phone}
                          </div>
                          <div className="flex items-center text-sm md:justify-end">
                            <Mail className="w-4 h-4 mr-1" />
                            {lawyer.email}
                          </div>
                          <Button className="w-full md:w-auto">
                            Hire Lawyer
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Lawyers;