export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  topics: string[];
}

export interface CourseTier {
  id: string;
  courseId: string;
  name: 'Basic' | 'Intermediate' | 'Advanced' | 'Complete Package';
  price: number;
  originalPrice?: number;
  duration: string;
  features: string[];
  popular?: boolean;
  savings?: number;
}

export interface CartItem {
  courseId: string;
  tierId: string;
  courseName: string;
  tierName: string;
  price: number;
  quantity: number;
}

export const COURSES: Course[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Master modern web development with HTML, CSS, JavaScript, React, and more',
    icon: '💻',
    topics: ['Frontend Development', 'Backend APIs', 'Database Design', 'Deployment']
  },
  {
    id: 'data-science',
    title: 'Data Science & Analytics',
    description: 'Learn Python, Machine Learning, Data Visualization, and Statistical Analysis',
    icon: '📊',
    topics: ['Python Programming', 'Machine Learning', 'Data Visualization', 'Statistics']
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing including SEO, Social Media, and PPC',
    icon: '🚀',
    topics: ['SEO Optimization', 'Social Media Marketing', 'Content Strategy', 'Analytics']
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    description: 'Build native and cross-platform mobile applications',
    icon: '📱',
    topics: ['React Native', 'Flutter', 'iOS Development', 'Android Development']
  },
  {
    id: 'cloud-computing',
    title: 'Cloud Computing & DevOps',
    description: 'Master AWS, Docker, Kubernetes, and modern DevOps practices',
    icon: '☁️',
    topics: ['AWS Services', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Infrastructure']
  }
];

export const TIERS: Record<string, CourseTier[]> = {
  'web-development': [
    {
      id: 'basic',
      courseId: 'web-development',
      name: 'Basic',
      price: 15000,
      duration: '2 months',
      features: ['HTML/CSS Fundamentals', 'JavaScript Basics', '3 Projects', 'Community Support']
    },
    {
      id: 'intermediate',
      courseId: 'web-development',
      name: 'Intermediate',
      price: 20000,
      duration: '3 months',
      features: ['React Development', 'API Integration', '5 Projects', 'Mentorship Support']
    },
    {
      id: 'advanced',
      courseId: 'web-development',
      name: 'Advanced',
      price: 20000,
      duration: '3 months',
      features: ['Full-Stack Development', 'Advanced React', '7 Projects', '1-on-1 Mentoring']
    },
    {
      id: 'complete',
      courseId: 'web-development',
      name: 'Complete Package',
      price: 55000,
      originalPrice: 55000,
      duration: '8 months',
      popular: true,
      savings: 0,
      features: ['All Basic + Intermediate + Advanced', 'Lifetime Access', 'Job Placement Support', 'Certificate']
    }
  ],
  'data-science': [
    {
      id: 'basic',
      courseId: 'data-science',
      name: 'Basic',
      price: 15000,
      duration: '2 months',
      features: ['Python Fundamentals', 'Data Analysis Basics', 'Pandas & NumPy', 'Community Support']
    },
    {
      id: 'intermediate',
      courseId: 'data-science',
      name: 'Intermediate',
      price: 20000,
      duration: '3 months',
      features: ['Machine Learning', 'Data Visualization', 'Real Projects', 'Mentorship Support']
    },
    {
      id: 'advanced',
      courseId: 'data-science',
      name: 'Advanced',
      price: 20000,
      duration: '3 months',
      features: ['Deep Learning', 'Advanced ML', 'Industry Projects', '1-on-1 Mentoring']
    },
    {
      id: 'complete',
      courseId: 'data-science',
      name: 'Complete Package',
      price: 55000,
      originalPrice: 55000,
      duration: '8 months',
      popular: true,
      savings: 0,
      features: ['All Basic + Intermediate + Advanced', 'Lifetime Access', 'Job Placement Support', 'Certificate']
    }
  ],
  'digital-marketing': [
    {
      id: 'basic',
      courseId: 'digital-marketing',
      name: 'Basic',
      price: 15000,
      duration: '2 months',
      features: ['SEO Fundamentals', 'Content Marketing', 'Social Media Basics', 'Community Support']
    },
    {
      id: 'intermediate',
      courseId: 'digital-marketing',
      name: 'Intermediate',
      price: 20000,
      duration: '3 months',
      features: ['PPC Campaigns', 'Analytics', 'Campaign Management', 'Mentorship Support']
    },
    {
      id: 'advanced',
      courseId: 'digital-marketing',
      name: 'Advanced',
      price: 20000,
      duration: '3 months',
      features: ['Marketing Automation', 'Advanced Analytics', 'Strategy Development', '1-on-1 Mentoring']
    },
    {
      id: 'complete',
      courseId: 'digital-marketing',
      name: 'Complete Package',
      price: 55000,
      originalPrice: 55000,
      duration: '8 months',
      popular: true,
      savings: 0,
      features: ['All Basic + Intermediate + Advanced', 'Lifetime Access', 'Job Placement Support', 'Certificate']
    }
  ],
  'mobile-app': [
    {
      id: 'basic',
      courseId: 'mobile-app',
      name: 'Basic',
      price: 15000,
      duration: '2 months',
      features: ['Mobile App Fundamentals', 'React Native Basics', '2 Apps', 'Community Support']
    },
    {
      id: 'intermediate',
      courseId: 'mobile-app',
      name: 'Intermediate',
      price: 20000,
      duration: '3 months',
      features: ['Cross-Platform Development', 'Native Features', '4 Apps', 'Mentorship Support']
    },
    {
      id: 'advanced',
      courseId: 'mobile-app',
      name: 'Advanced',
      price: 20000,
      duration: '3 months',
      features: ['Advanced Features', 'App Store Deployment', '6 Apps', '1-on-1 Mentoring']
    },
    {
      id: 'complete',
      courseId: 'mobile-app',
      name: 'Complete Package',
      price: 55000,
      originalPrice: 55000,
      duration: '8 months',
      popular: true,
      savings: 0,
      features: ['All Basic + Intermediate + Advanced', 'Lifetime Access', 'Job Placement Support', 'Certificate']
    }
  ],
  'cloud-computing': [
    {
      id: 'basic',
      courseId: 'cloud-computing',
      name: 'Basic',
      price: 15000,
      duration: '2 months',
      features: ['Cloud Fundamentals', 'AWS Basics', 'Basic Deployment', 'Community Support']
    },
    {
      id: 'intermediate',
      courseId: 'cloud-computing',
      name: 'Intermediate',
      price: 20000,
      duration: '3 months',
      features: ['Docker & Containers', 'CI/CD Pipelines', 'Real Projects', 'Mentorship Support']
    },
    {
      id: 'advanced',
      courseId: 'cloud-computing',
      name: 'Advanced',
      price: 20000,
      duration: '3 months',
      features: ['Kubernetes', 'Advanced DevOps', 'Enterprise Projects', '1-on-1 Mentoring']
    },
    {
      id: 'complete',
      courseId: 'cloud-computing',
      name: 'Complete Package',
      price: 55000,
      originalPrice: 55000,
      duration: '8 months',
      popular: true,
      savings: 0,
      features: ['All Basic + Intermediate + Advanced', 'Lifetime Access', 'Job Placement Support', 'Certificate']
    }
  ]
};