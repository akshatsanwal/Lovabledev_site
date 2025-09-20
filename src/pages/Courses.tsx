import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock, Users, Award, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';
import { COURSES } from '@/types/course';
import { Link } from 'react-router-dom';

const Courses = () => {
  const courseDetails = {
    'genai': {
      duration: '240+ Hours',
      students: '500+',
      projects: '15+',
      modules: [
        {
          title: 'AI/ML Fundamentals',
          duration: '60 hours',
          topics: ['Machine Learning Basics', 'Deep Learning Introduction', 'Neural Networks', 'Python for AI', 'Data Preprocessing']
        },
        {
          title: 'Large Language Models',
          duration: '80 hours',
          topics: ['LLM Architecture', 'Transformer Models', 'Fine-tuning Techniques', 'RAG Implementation', 'Vector Databases']
        },
        {
          title: 'Prompt Engineering',
          duration: '50 hours',
          topics: ['Prompt Design Patterns', 'Chain of Thought', 'Few-shot Learning', 'Prompt Optimization', 'Advanced Techniques']
        },
        {
          title: 'AI Applications',
          duration: '50 hours',
          topics: ['Chatbot Development', 'Image Generation', 'Code Generation', 'AI Agents', 'Production Deployment']
        }
      ],
      prerequisites: ['Basic Python Knowledge', 'Mathematical Foundation', 'Programming Experience'],
      outcomes: ['Build AI-powered applications', 'Implement LLM solutions', 'Master prompt engineering', 'Deploy AI systems']
    },
    'blockchain': {
      duration: '220+ Hours',
      students: '300+',
      projects: '12+',
      modules: [
        {
          title: 'Blockchain Fundamentals',
          duration: '50 hours',
          topics: ['Blockchain Basics', 'Cryptography', 'Consensus Mechanisms', 'Bitcoin & Ethereum', 'Mining & Validation']
        },
        {
          title: 'Smart Contract Development',
          duration: '70 hours',
          topics: ['Solidity Programming', 'Contract Design Patterns', 'Security Best Practices', 'Testing & Debugging', 'Gas Optimization']
        },
        {
          title: 'DApp Development',
          duration: '60 hours',
          topics: ['Web3.js Integration', 'Frontend Development', 'MetaMask Integration', 'IPFS Storage', 'User Experience']
        },
        {
          title: 'DeFi & Advanced Topics',
          duration: '40 hours',
          topics: ['DeFi Protocols', 'DEX Development', 'Yield Farming', 'NFT Development', 'Cross-chain Solutions']
        }
      ],
      prerequisites: ['JavaScript Knowledge', 'Web Development Basics', 'Programming Fundamentals'],
      outcomes: ['Build blockchain applications', 'Develop smart contracts', 'Create DeFi protocols', 'Launch NFT projects']
    },
    'data-science': {
      duration: '260+ Hours',
      students: '800+',
      projects: '20+',
      modules: [
        {
          title: 'Python & Data Analysis',
          duration: '70 hours',
          topics: ['Python Programming', 'NumPy & Pandas', 'Data Cleaning', 'Exploratory Data Analysis', 'Statistical Analysis']
        },
        {
          title: 'Machine Learning',
          duration: '80 hours',
          topics: ['Supervised Learning', 'Unsupervised Learning', 'Model Evaluation', 'Feature Engineering', 'Ensemble Methods']
        },
        {
          title: 'Deep Learning',
          duration: '60 hours',
          topics: ['Neural Networks', 'CNN & RNN', 'Transfer Learning', 'TensorFlow & PyTorch', 'Computer Vision']
        },
        {
          title: 'Data Visualization & Deployment',
          duration: '50 hours',
          topics: ['Matplotlib & Seaborn', 'Plotly & Dash', 'Tableau Integration', 'Model Deployment', 'MLOps Basics']
        }
      ],
      prerequisites: ['Basic Mathematics', 'Programming Fundamentals', 'Statistics Knowledge'],
      outcomes: ['Analyze complex datasets', 'Build ML models', 'Create data visualizations', 'Deploy ML solutions']
    },
    'devops': {
      duration: '200+ Hours',
      students: '600+',
      projects: '18+',
      modules: [
        {
          title: 'DevOps Fundamentals',
          duration: '50 hours',
          topics: ['DevOps Culture', 'Version Control', 'Linux Administration', 'Scripting & Automation', 'Infrastructure Basics']
        },
        {
          title: 'CI/CD & Containerization',
          duration: '60 hours',
          topics: ['Jenkins & GitHub Actions', 'Docker Fundamentals', 'Container Orchestration', 'Pipeline Design', 'Testing Automation']
        },
        {
          title: 'Cloud & Kubernetes',
          duration: '50 hours',
          topics: ['AWS/Azure Basics', 'Kubernetes Deployment', 'Service Mesh', 'Monitoring & Logging', 'Security Practices']
        },
        {
          title: 'Infrastructure as Code',
          duration: '40 hours',
          topics: ['Terraform', 'Ansible', 'Configuration Management', 'Cloud Architecture', 'Cost Optimization']
        }
      ],
      prerequisites: ['Linux Basics', 'Programming Knowledge', 'System Administration'],
      outcomes: ['Implement CI/CD pipelines', 'Manage containerized applications', 'Automate infrastructure', 'Optimize cloud deployments']
    },
    'microservices': {
      duration: '180+ Hours',
      students: '400+',
      projects: '16+',
      modules: [
        {
          title: 'Architecture Fundamentals',
          duration: '45 hours',
          topics: ['Microservices Patterns', 'Service Decomposition', 'API Design', 'Communication Patterns', 'Data Management']
        },
        {
          title: 'Implementation & Integration',
          duration: '55 hours',
          topics: ['Service Development', 'API Gateway', 'Service Discovery', 'Load Balancing', 'Event-Driven Architecture']
        },
        {
          title: 'Observability & Security',
          duration: '40 hours',
          topics: ['Distributed Tracing', 'Monitoring & Metrics', 'Security Patterns', 'Authentication', 'Authorization']
        },
        {
          title: 'Advanced Patterns',
          duration: '40 hours',
          topics: ['Circuit Breaker', 'Saga Pattern', 'CQRS', 'Performance Optimization', 'Scaling Strategies']
        }
      ],
      prerequisites: ['Backend Development', 'Database Knowledge', 'API Development'],
      outcomes: ['Design microservices architecture', 'Implement distributed systems', 'Handle service communication', 'Optimize system performance']
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-gradient-accent text-accent-foreground shadow-glow">
              <BookOpen className="w-4 h-4 mr-2" />
              Comprehensive Course Catalog
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-6">
              Master Future Technologies
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Dive deep into cutting-edge technologies with our comprehensive training programs. 
              Each course is designed with detailed curriculum and hands-on projects.
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Users className="w-5 h-5 text-primary" />
                <span>2000+ Students Trained</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Award className="w-5 h-5 text-primary" />
                <span>Industry Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Clock className="w-5 h-5 text-primary" />
                <span>Flexible Learning</span>
              </div>
            </div>

            <Link to="/pricing">
              <Button size="lg" className="bg-gradient-primary hover:bg-gradient-hero text-primary-foreground shadow-elegant hover:shadow-glow">
                Know the Price
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Course Details */}
      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue={COURSES[0].id} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
            {COURSES.map((course) => (
              <TabsTrigger key={course.id} value={course.id} className="text-xs lg:text-sm">
                {course.icon} {course.title.split(' ')[0]}
              </TabsTrigger>
            ))}
          </TabsList>

          {COURSES.map((course) => (
            <TabsContent key={course.id} value={course.id} className="space-y-8">
              {/* Course Overview */}
              <Card className="bg-gradient-card backdrop-blur-sm border-border/50 shadow-elegant">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{course.icon}</div>
                    <div>
                      <CardTitle className="text-2xl text-foreground">{course.title}</CardTitle>
                      <CardDescription className="text-lg">{course.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-4 bg-primary/5 rounded-lg">
                      <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="font-semibold text-foreground">{courseDetails[course.id as keyof typeof courseDetails].duration}</div>
                      <div className="text-sm text-muted-foreground">Total Duration</div>
                    </div>
                    <div className="text-center p-4 bg-accent/5 rounded-lg">
                      <Users className="w-6 h-6 text-accent mx-auto mb-2" />
                      <div className="font-semibold text-foreground">{courseDetails[course.id as keyof typeof courseDetails].students}</div>
                      <div className="text-sm text-muted-foreground">Students Trained</div>
                    </div>
                    <div className="text-center p-4 bg-success/5 rounded-lg">
                      <BookOpen className="w-6 h-6 text-success mx-auto mb-2" />
                      <div className="font-semibold text-foreground">{courseDetails[course.id as keyof typeof courseDetails].projects}</div>
                      <div className="text-sm text-muted-foreground">Hands-on Projects</div>
                    </div>
                    <div className="text-center p-4 bg-secondary/5 rounded-lg">
                      <Award className="w-6 h-6 text-secondary mx-auto mb-2" />
                      <div className="font-semibold text-foreground">Certificate</div>
                      <div className="text-sm text-muted-foreground">Upon Completion</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Course Modules */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-gradient-card backdrop-blur-sm border-border/50 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-foreground">Course Modules</CardTitle>
                    <CardDescription>Detailed curriculum breakdown</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {courseDetails[course.id as keyof typeof courseDetails].modules.map((module, index) => (
                        <div key={index} className="border-l-2 border-primary/20 pl-4 pb-4">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-semibold text-foreground">{module.title}</h4>
                            <Badge variant="outline" className="text-xs">{module.duration}</Badge>
                          </div>
                          <ul className="space-y-1">
                            {module.topics.map((topic, topicIndex) => (
                              <li key={topicIndex} className="flex items-center text-sm text-muted-foreground">
                                <CheckCircle className="w-3 h-3 text-success mr-2 flex-shrink-0" />
                                {topic}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  {/* Prerequisites */}
                  <Card className="bg-gradient-card backdrop-blur-sm border-border/50 shadow-card">
                    <CardHeader>
                      <CardTitle className="text-foreground">Prerequisites</CardTitle>
                      <CardDescription>What you need to know before starting</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {courseDetails[course.id as keyof typeof courseDetails].prerequisites.map((prereq, index) => (
                          <li key={index} className="flex items-center text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                            {prereq}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Learning Outcomes */}
                  <Card className="bg-gradient-card backdrop-blur-sm border-border/50 shadow-card">
                    <CardHeader>
                      <CardTitle className="text-foreground">Learning Outcomes</CardTitle>
                      <CardDescription>What you'll achieve after completion</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {courseDetails[course.id as keyof typeof courseDetails].outcomes.map((outcome, index) => (
                          <li key={index} className="flex items-center text-muted-foreground">
                            <Award className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* CTA Section */}
              <Card className="bg-gradient-primary text-primary-foreground border-0 shadow-glow">
                <CardContent className="text-center p-8">
                  <h3 className="text-2xl font-bold mb-4">Ready to Start Learning?</h3>
                  <p className="mb-6 opacity-90">
                    Choose from flexible pricing options that fit your learning goals and budget.
                  </p>
                  <Link to="/pricing">
                    <Button size="lg" variant="secondary" className="shadow-elegant">
                      View Pricing Options
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Courses;