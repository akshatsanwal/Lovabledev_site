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
      levels: {
        beginner: {
          title: 'Beginner Level',
          duration: '80 Hours',
          topics: [
            {
              title: 'Introduction to Artificial Intelligence',
              subtopics: ['What is AI?', 'Types of AI', 'AI vs ML vs DL', 'History and Evolution', 'Current Applications']
            },
            {
              title: 'Python for AI',
              subtopics: ['Python Basics', 'Libraries (NumPy, Pandas)', 'Data Structures', 'File Handling', 'Basic Algorithms']
            },
            {
              title: 'Mathematics for AI',
              subtopics: ['Linear Algebra', 'Statistics', 'Probability', 'Calculus Basics', 'Matrix Operations']
            },
            {
              title: 'Machine Learning Fundamentals',
              subtopics: ['Supervised Learning', 'Unsupervised Learning', 'Basic Algorithms', 'Data Preprocessing', 'Model Evaluation']
            }
          ]
        },
        intermediate: {
          title: 'Intermediate Level',
          duration: '80 Hours',
          topics: [
            {
              title: 'Deep Learning Foundations',
              subtopics: ['Neural Networks', 'Activation Functions', 'Backpropagation', 'Gradient Descent', 'Overfitting Solutions']
            },
            {
              title: 'Natural Language Processing',
              subtopics: ['Text Processing', 'Tokenization', 'Word Embeddings', 'Sentiment Analysis', 'Language Models']
            },
            {
              title: 'Computer Vision',
              subtopics: ['Image Processing', 'CNNs', 'Image Classification', 'Object Detection', 'Transfer Learning']
            },
            {
              title: 'Model Development',
              subtopics: ['Framework Selection', 'Model Architecture', 'Training Strategies', 'Hyperparameter Tuning', 'Performance Metrics']
            }
          ]
        },
        advanced: {
          title: 'Advanced Level',
          duration: '80 Hours',
          topics: [
            {
              title: 'Large Language Models',
              subtopics: ['Transformer Architecture', 'BERT/GPT Models', 'Fine-tuning Techniques', 'Prompt Engineering', 'RAG Implementation']
            },
            {
              title: 'Generative AI',
              subtopics: ['GANs', 'Diffusion Models', 'Image Generation', 'Text Generation', 'Multimodal Models']
            },
            {
              title: 'Production AI Systems',
              subtopics: ['Model Deployment', 'API Development', 'Scaling Solutions', 'Monitoring', 'MLOps Practices']
            },
            {
              title: 'AI Ethics & Business',
              subtopics: ['Ethical AI', 'Bias Detection', 'Responsible AI', 'AI Strategy', 'ROI Measurement']
            }
          ]
        }
      },
      prerequisites: ['Basic Programming', 'Mathematical Foundation', 'Analytical Thinking'],
      outcomes: ['Build AI-powered applications', 'Implement LLM solutions', 'Master prompt engineering', 'Deploy AI systems']
    },
    'blockchain': {
      duration: '220+ Hours',
      students: '300+',
      projects: '12+',
      levels: {
        beginner: {
          title: 'Beginner Level',
          duration: '75 Hours',
          topics: [
            {
              title: 'Blockchain Fundamentals',
              subtopics: ['What is Blockchain?', 'Distributed Ledger', 'Cryptographic Hashing', 'Digital Signatures', 'Consensus Basics']
            },
            {
              title: 'Cryptocurrency Basics',
              subtopics: ['Bitcoin Overview', 'Ethereum Introduction', 'Wallets & Keys', 'Transactions', 'Mining Concepts']
            },
            {
              title: 'Blockchain Architecture',
              subtopics: ['Blocks & Chains', 'Merkle Trees', 'Network Types', 'Nodes & Validation', 'Immutability']
            },
            {
              title: 'Development Environment',
              subtopics: ['Setting up Tools', 'Test Networks', 'Blockchain Explorers', 'Basic Transactions', 'Wallet Integration']
            }
          ]
        },
        intermediate: {
          title: 'Intermediate Level',
          duration: '75 Hours',
          topics: [
            {
              title: 'Smart Contract Development',
              subtopics: ['Solidity Basics', 'Contract Structure', 'Data Types', 'Functions & Modifiers', 'Events & Logs']
            },
            {
              title: 'Web3 Development',
              subtopics: ['Web3.js Library', 'Ethereum API', 'Contract Interaction', 'Frontend Integration', 'MetaMask Connection']
            },
            {
              title: 'DApp Architecture',
              subtopics: ['Frontend Design', 'Backend Services', 'IPFS Storage', 'User Experience', 'Testing Strategies']
            },
            {
              title: 'Token Development',
              subtopics: ['ERC-20 Tokens', 'ERC-721 NFTs', 'Token Economics', 'ICO/IDO Concepts', 'Token Standards']
            }
          ]
        },
        advanced: {
          title: 'Advanced Level',
          duration: '70 Hours',
          topics: [
            {
              title: 'DeFi Development',
              subtopics: ['DEX Protocols', 'Liquidity Pools', 'Yield Farming', 'Flash Loans', 'Governance Tokens']
            },
            {
              title: 'Advanced Smart Contracts',
              subtopics: ['Design Patterns', 'Security Auditing', 'Gas Optimization', 'Upgradeable Contracts', 'Cross-chain']
            },
            {
              title: 'Enterprise Blockchain',
              subtopics: ['Private Networks', 'Hyperledger', 'Supply Chain', 'Identity Management', 'Consortium Chains']
            },
            {
              title: 'Emerging Technologies',
              subtopics: ['Layer 2 Solutions', 'Interoperability', 'Quantum Resistance', 'Green Blockchain', 'Future Trends']
            }
          ]
        }
      },
      prerequisites: ['Programming Basics', 'Web Development', 'Cryptography Concepts'],
      outcomes: ['Build blockchain applications', 'Develop smart contracts', 'Create DeFi protocols', 'Launch NFT projects']
    },
    'data-science': {
      duration: '260+ Hours',
      students: '800+',
      projects: '20+',
      levels: {
        beginner: {
          title: 'Beginner Level',
          duration: '85 Hours',
          topics: [
            {
              title: 'Python Programming',
              subtopics: ['Python Syntax', 'Data Structures', 'Control Flow', 'Functions', 'Object-Oriented Programming']
            },
            {
              title: 'Data Analysis Basics',
              subtopics: ['NumPy Arrays', 'Pandas DataFrames', 'Data Cleaning', 'Data Transformation', 'File Handling']
            },
            {
              title: 'Statistics Foundation',
              subtopics: ['Descriptive Statistics', 'Probability', 'Distributions', 'Hypothesis Testing', 'Correlation']
            },
            {
              title: 'Data Visualization',
              subtopics: ['Matplotlib Basics', 'Seaborn Plots', 'Chart Types', 'Color Theory', 'Storytelling with Data']
            }
          ]
        },
        intermediate: {
          title: 'Intermediate Level',
          duration: '90 Hours',
          topics: [
            {
              title: 'Machine Learning Algorithms',
              subtopics: ['Linear Regression', 'Classification', 'Clustering', 'Decision Trees', 'Random Forest']
            },
            {
              title: 'Feature Engineering',
              subtopics: ['Feature Selection', 'Scaling & Normalization', 'Encoding Techniques', 'Dimensionality Reduction', 'PCA']
            },
            {
              title: 'Model Evaluation',
              subtopics: ['Cross Validation', 'Performance Metrics', 'Confusion Matrix', 'ROC Curves', 'Overfitting']
            },
            {
              title: 'Advanced Analytics',
              subtopics: ['Time Series Analysis', 'Text Mining', 'Web Scraping', 'A/B Testing', 'Business Intelligence']
            }
          ]
        },
        advanced: {
          title: 'Advanced Level',
          duration: '85 Hours',
          topics: [
            {
              title: 'Deep Learning',
              subtopics: ['Neural Networks', 'CNNs', 'RNNs', 'Transfer Learning', 'TensorFlow/PyTorch']
            },
            {
              title: 'Big Data Technologies',
              subtopics: ['Apache Spark', 'Hadoop Ecosystem', 'NoSQL Databases', 'Data Pipelines', 'Cloud Platforms']
            },
            {
              title: 'MLOps & Deployment',
              subtopics: ['Model Versioning', 'CI/CD for ML', 'Containerization', 'API Development', 'Monitoring']
            },
            {
              title: 'Specialized Applications',
              subtopics: ['Computer Vision', 'NLP Applications', 'Recommender Systems', 'Forecasting', 'Optimization']
            }
          ]
        }
      },
      prerequisites: ['Basic Mathematics', 'Programming Concepts', 'Statistical Thinking'],
      outcomes: ['Analyze complex datasets', 'Build ML models', 'Create data visualizations', 'Deploy ML solutions']
    },
    'devops': {
      duration: '200+ Hours',
      students: '600+',
      projects: '18+',
      levels: {
        beginner: {
          title: 'Beginner Level',
          duration: '65 Hours',
          topics: [
            {
              title: 'DevOps Fundamentals',
              subtopics: ['DevOps Culture', 'Agile Methodology', 'Version Control (Git)', 'Linux Basics', 'Command Line']
            },
            {
              title: 'System Administration',
              subtopics: ['Linux Administration', 'Shell Scripting', 'Process Management', 'File Systems', 'Network Basics']
            },
            {
              title: 'Version Control',
              subtopics: ['Git Fundamentals', 'Branching Strategies', 'Merge Conflicts', 'GitHub/GitLab', 'Code Reviews']
            },
            {
              title: 'Basic Automation',
              subtopics: ['Scripting Languages', 'Task Automation', 'Cron Jobs', 'Log Management', 'Basic Monitoring']
            }
          ]
        },
        intermediate: {
          title: 'Intermediate Level',
          duration: '70 Hours',
          topics: [
            {
              title: 'CI/CD Pipelines',
              subtopics: ['Jenkins Setup', 'GitHub Actions', 'Build Automation', 'Testing Integration', 'Deployment Strategies']
            },
            {
              title: 'Containerization',
              subtopics: ['Docker Fundamentals', 'Container Images', 'Docker Compose', 'Registry Management', 'Best Practices']
            },
            {
              title: 'Cloud Platforms',
              subtopics: ['AWS/Azure Basics', 'Virtual Machines', 'Storage Services', 'Networking', 'Security Groups']
            },
            {
              title: 'Configuration Management',
              subtopics: ['Ansible Basics', 'Playbooks', 'Infrastructure Automation', 'Server Configuration', 'Package Management']
            }
          ]
        },
        advanced: {
          title: 'Advanced Level',
          duration: '65 Hours',
          topics: [
            {
              title: 'Kubernetes Orchestration',
              subtopics: ['K8s Architecture', 'Pods & Services', 'Deployments', 'ConfigMaps', 'Helm Charts']
            },
            {
              title: 'Infrastructure as Code',
              subtopics: ['Terraform', 'CloudFormation', 'State Management', 'Multi-environment', 'Best Practices']
            },
            {
              title: 'Monitoring & Observability',
              subtopics: ['Prometheus', 'Grafana', 'ELK Stack', 'Distributed Tracing', 'Alerting']
            },
            {
              title: 'Advanced Practices',
              subtopics: ['GitOps', 'Service Mesh', 'Security Scanning', 'Cost Optimization', 'Disaster Recovery']
            }
          ]
        }
      },
      prerequisites: ['Linux Knowledge', 'Programming Skills', 'Networking Basics'],
      outcomes: ['Implement CI/CD pipelines', 'Manage containerized applications', 'Automate infrastructure', 'Optimize cloud deployments']
    },
    'microservices': {
      duration: '180+ Hours',
      students: '400+',
      projects: '16+',
      levels: {
        beginner: {
          title: 'Beginner Level',
          duration: '60 Hours',
          topics: [
            {
              title: 'Microservices Introduction',
              subtopics: ['Monolith vs Microservices', 'Benefits & Challenges', 'When to Use', 'Service Boundaries', 'Design Principles']
            },
            {
              title: 'API Development',
              subtopics: ['RESTful APIs', 'HTTP Methods', 'Status Codes', 'JSON/XML', 'API Documentation']
            },
            {
              title: 'Service Communication',
              subtopics: ['Synchronous Communication', 'HTTP/REST', 'Request/Response', 'Error Handling', 'Timeouts']
            },
            {
              title: 'Basic Architecture',
              subtopics: ['Service Design', 'Data Storage', 'Stateless Services', 'Configuration', 'Environment Setup']
            }
          ]
        },
        intermediate: {
          title: 'Intermediate Level',
          duration: '60 Hours',
          topics: [
            {
              title: 'Advanced Communication',
              subtopics: ['Message Queues', 'Event-Driven Architecture', 'Async Messaging', 'Message Brokers', 'Pub/Sub Patterns']
            },
            {
              title: 'Service Integration',
              subtopics: ['API Gateway', 'Service Discovery', 'Load Balancing', 'Circuit Breaker', 'Retry Patterns']
            },
            {
              title: 'Data Management',
              subtopics: ['Database per Service', 'Data Consistency', 'Distributed Transactions', 'Event Sourcing', 'CQRS']
            },
            {
              title: 'Testing Strategies',
              subtopics: ['Unit Testing', 'Integration Testing', 'Contract Testing', 'End-to-End Testing', 'Test Automation']
            }
          ]
        },
        advanced: {
          title: 'Advanced Level',
          duration: '60 Hours',
          topics: [
            {
              title: 'Distributed Systems',
              subtopics: ['CAP Theorem', 'Eventual Consistency', 'Distributed Consensus', 'Partition Tolerance', 'Fault Tolerance']
            },
            {
              title: 'Observability',
              subtopics: ['Distributed Tracing', 'Centralized Logging', 'Metrics Collection', 'Health Checks', 'Alerting']
            },
            {
              title: 'Security & Governance',
              subtopics: ['Service-to-Service Auth', 'OAuth/JWT', 'API Security', 'Data Encryption', 'Compliance']
            },
            {
              title: 'Performance & Scaling',
              subtopics: ['Horizontal Scaling', 'Caching Strategies', 'Database Optimization', 'Performance Tuning', 'Capacity Planning']
            }
          ]
        }
      },
      prerequisites: ['Backend Development', 'Database Design', 'API Knowledge'],
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
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 mb-8 h-auto p-2 bg-muted/50">
            {COURSES.map((course) => (
              <TabsTrigger 
                key={course.id} 
                value={course.id} 
                className="flex-col h-auto p-3 text-xs lg:text-sm whitespace-normal text-center data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <div className="text-lg mb-1">{course.icon}</div>
                <div className="font-medium">{course.title.split(' ')[0]}</div>
                <div className="text-xs opacity-75 hidden lg:block">{course.title.split(' ').slice(1).join(' ')}</div>
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

              {/* Course Agenda by Levels */}
              <div className="space-y-6">
                {/* Beginner Level */}
                <Card className="bg-gradient-card backdrop-blur-sm border-border/50 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-foreground flex items-center">
                      <Badge className="mr-3 bg-success text-success-foreground">Beginner</Badge>
                      {courseDetails[course.id as keyof typeof courseDetails].levels.beginner.title}
                    </CardTitle>
                    <CardDescription>
                      Duration: {courseDetails[course.id as keyof typeof courseDetails].levels.beginner.duration} | Foundation Level Training
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {courseDetails[course.id as keyof typeof courseDetails].levels.beginner.topics.map((topic, index) => (
                        <div key={index} className="p-4 bg-muted/30 rounded-lg">
                          <h4 className="font-semibold text-foreground mb-3">{topic.title}</h4>
                          <ul className="space-y-1">
                            {topic.subtopics.map((subtopic, subIndex) => (
                              <li key={subIndex} className="flex items-start text-xs text-muted-foreground">
                                <div className="w-1 h-1 bg-success rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                {subtopic}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Intermediate Level */}
                <Card className="bg-gradient-card backdrop-blur-sm border-border/50 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-foreground flex items-center">
                      <Badge className="mr-3 bg-primary text-primary-foreground">Intermediate</Badge>
                      {courseDetails[course.id as keyof typeof courseDetails].levels.intermediate.title}
                    </CardTitle>
                    <CardDescription>
                      Duration: {courseDetails[course.id as keyof typeof courseDetails].levels.intermediate.duration} | Practical Implementation
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {courseDetails[course.id as keyof typeof courseDetails].levels.intermediate.topics.map((topic, index) => (
                        <div key={index} className="p-4 bg-muted/30 rounded-lg">
                          <h4 className="font-semibold text-foreground mb-3">{topic.title}</h4>
                          <ul className="space-y-1">
                            {topic.subtopics.map((subtopic, subIndex) => (
                              <li key={subIndex} className="flex items-start text-xs text-muted-foreground">
                                <div className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                {subtopic}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Advanced Level */}
                <Card className="bg-gradient-card backdrop-blur-sm border-border/50 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-foreground flex items-center">
                      <Badge className="mr-3 bg-accent text-accent-foreground">Advanced</Badge>
                      {courseDetails[course.id as keyof typeof courseDetails].levels.advanced.title}
                    </CardTitle>
                    <CardDescription>
                      Duration: {courseDetails[course.id as keyof typeof courseDetails].levels.advanced.duration} | Expert Level Mastery
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {courseDetails[course.id as keyof typeof courseDetails].levels.advanced.topics.map((topic, index) => (
                        <div key={index} className="p-4 bg-muted/30 rounded-lg">
                          <h4 className="font-semibold text-foreground mb-3">{topic.title}</h4>
                          <ul className="space-y-1">
                            {topic.subtopics.map((subtopic, subIndex) => (
                              <li key={subIndex} className="flex items-start text-xs text-muted-foreground">
                                <div className="w-1 h-1 bg-accent rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                {subtopic}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Prerequisites & Outcomes Sidebar */}
              <div className="space-y-6">
                <Card className="bg-gradient-card backdrop-blur-sm border-border/50 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-foreground">Prerequisites</CardTitle>
                    <CardDescription>Foundation knowledge required</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {courseDetails[course.id as keyof typeof courseDetails].prerequisites.map((prereq, index) => (
                        <li key={index} className="flex items-center text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                          <span className="text-sm">{prereq}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card backdrop-blur-sm border-border/50 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-foreground">Learning Outcomes</CardTitle>
                    <CardDescription>Skills you'll master</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {courseDetails[course.id as keyof typeof courseDetails].outcomes.map((outcome, index) => (
                        <li key={index} className="flex items-center text-muted-foreground">
                          <Award className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                          <span className="text-sm">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <Card className="bg-gradient-primary text-primary-foreground border-0">
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold mb-2">{courseDetails[course.id as keyof typeof courseDetails].duration}</div>
                    <div className="text-sm opacity-90 mb-4">Total Training Duration</div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-semibold">{courseDetails[course.id as keyof typeof courseDetails].students}</div>
                        <div className="opacity-75">Students</div>
                      </div>
                      <div>
                        <div className="font-semibold">{courseDetails[course.id as keyof typeof courseDetails].projects}</div>
                        <div className="opacity-75">Projects</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* CTA Section */}
              <Card className="bg-gradient-primary text-primary-foreground border-0 shadow-glow mt-8">
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