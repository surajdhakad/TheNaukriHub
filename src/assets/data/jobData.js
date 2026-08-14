const jobData = [
  {
    id: 1,
    bank: "HDFC Bank",
    title: "Assistant Manager Job at HDFC Bank",
    role: "Assistant Manager",
    experience: "Fresher",
    location: ["All India"],
    salary: "3.25 LPA + PLP",
    logo: "/src/assets/Images/banks-logo/hdfc.webp",
    description:
      "HDFC Bank is hiring freshers for the Assistant Manager position. Candidates will be responsible for customer handling, sales and banking operations.",
    eligibility:
      "Graduation from a recognized university. Freshers can apply.",
    responsibilities: [
      "Handle customer requirements",
      "Support branch banking operations",
      "Generate new business opportunities",
      "Maintain customer relationships",
    ],
  },

  {
    id: 2,
    bank: "ICICI Bank",
    title: "Relationship Manager Job at ICICI Bank",
    role: "Relationship Manager",
    experience: "Fresher",
    location: ["Delhi", "Gujarat", "Haryana", "Madhya Pradesh"],
    salary: "3.25 LPA + PLP",
    logo: "/src/assets/Images/banks-logo/icic.webp",
    description:
      "ICICI Bank is looking for Relationship Managers to manage customer relationships and generate business.",
    eligibility:
      "Graduate candidates with good communication skills can apply.",
    responsibilities: [
      "Manage customer relationships",
      "Generate leads",
      "Cross-sell banking products",
      "Achieve monthly targets",
    ],
  },

  {
    id: 3,
    bank: "Kotak Mahindra Bank",
    title: "Customer Assistance Manager - HAU at Kotak Mahindra Bank",
    role: "Customer Assistance Manager - HAU",
    experience: "Fresher",
    location: ["All India"],
    salary: "4.50 LPA + PLP",
    logo: "/src/assets/Images/banks-logo/kotak.webp",
    description:
      "Kotak Mahindra Bank is hiring candidates for Customer Assistance Manager positions.",
    eligibility:
      "Graduation with good communication and customer handling skills.",
    responsibilities: [
      "Assist customers",
      "Resolve customer queries",
      "Maintain customer records",
      "Support branch operations",
    ],
  },

  {
    id: 4,
    bank: "Axis Bank",
    title: "Job at Axis Bank of Sales Manager",
    role: "Sales Manager",
    experience: "Fresher",
    location: ["Delhi"],
    salary: "4.40 LPA",
    logo: "/src/assets/Images/banks-logo/asix.webp",
    description:
      "Axis Bank is hiring Sales Managers for its banking sales team.",
    eligibility:
      "Graduation with good communication and sales skills.",
    responsibilities: [
      "Generate new customers",
      "Sell banking products",
      "Achieve sales targets",
      "Maintain customer relationships",
    ],
  },

  {
    id: 5,
    bank: "AU Small Finance Bank",
    title: "Sales Officer at AU Bank",
    role: "Sales Officer",
    experience: "Fresher",
    location: ["All India"],
    salary: "2.65 LPA + PLP",
    logo: "/src/assets/Images/banks-logo/au.webp",
    description:
      "AU Small Finance Bank is hiring Sales Officers for different locations.",
    eligibility:
      "Graduates with good communication and sales skills can apply.",
    responsibilities: [
      "Generate sales",
      "Acquire new customers",
      "Cross-sell banking products",
      "Meet assigned targets",
    ],
  },

  {
    id: 6,
    bank: "IDFC FIRST Bank",
    title: "Acquisition Relationship Manager at IDFC Bank",
    role: "Acquisition Relationship Manager",
    experience: "Fresher",
    location: ["All India"],
    salary: "6 LPA + PLP",
    logo: "/src/assets/Images/banks-logo/idfc.webp",
    description:
      "IDFC FIRST Bank is hiring Acquisition Relationship Managers for customer acquisition.",
    eligibility:
      "Graduate candidates with strong communication skills.",
    responsibilities: [
      "Acquire new customers",
      "Generate leads",
      "Build customer relationships",
      "Achieve business targets",
    ],
  },

  {
    id: 7,
    bank: "HDFC Bank",
    title: "Deputy Branch Manager at HDFC Bank",
    role: "Deputy Branch Manager (DBM)",
    experience: "Fresher",
    location: [
      "Bihar",
      "Delhi",
      "Gujarat",
      "Haryana",
      "Madhya Pradesh",
      "Punjab",
      "Rajasthan",
      "Uttar Pradesh",
    ],
    salary: "5.59 LPA",
    logo: "/src/assets/Images/banks-logo/hdfc.webp",
    description:
      "HDFC Bank is hiring candidates for Deputy Branch Manager positions.",
    eligibility:
      "Graduation with banking or sales experience preferred.",
    responsibilities: [
      "Manage branch operations",
      "Handle customer relationships",
      "Monitor sales performance",
      "Support branch manager",
    ],
  },

  {
    id: 8,
    bank: "ICICI Bank",
    title: "Job at ICICI Bank of Relationship Manager",
    role: "Relationship Manager",
    experience: "Fresher",
    location: [
      "Delhi",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Jharkhand",
      "Madhya Pradesh",
      "Uttar Pradesh",
      "Uttarakhand",
    ],
    salary: "2.20 LPA to 2.80 LPA",
    logo: "/src/assets/Images/banks-logo/icic.webp",
    description:
      "ICICI Bank is looking for Relationship Managers across multiple states.",
    eligibility:
      "Graduation from a recognized university.",
    responsibilities: [
      "Manage customer portfolio",
      "Generate business",
      "Cross-sell financial products",
      "Maintain customer satisfaction",
    ],
  },

  {
    id: 9,
    bank: "AU Small Finance Bank",
    title: "Bank Officer at AU Bank",
    role: "Bank Officer",
    experience: "Fresher",
    location: ["All India"],
    salary: "3.5 LPA + PLP",
    logo: "/src/assets/Images/banks-logo/au.webp",
    description:
      "AU Small Finance Bank is hiring Bank Officers for its banking operations.",
    eligibility:
      "Graduate candidates can apply.",
    responsibilities: [
      "Handle branch operations",
      "Assist customers",
      "Process banking transactions",
      "Maintain records",
    ],
  },

  {
    id: 10,
    bank: "AU Small Finance Bank",
    title: "Relationship Officer at AU Bank",
    role: "Relationship Officer",
    experience: "Fresher",
    location: ["All India"],
    salary: "2.65 LPA + PLP",
    logo: "/src/assets/Images/banks-logo/au.webp",
    description:
      "AU Small Finance Bank is hiring Relationship Officers.",
    eligibility:
      "Graduates with good communication skills.",
    responsibilities: [
      "Customer acquisition",
      "Customer relationship management",
      "Generate business",
      "Meet sales targets",
    ],
  },

  {
    id: 11,
    bank: "Kotak Mahindra Bank",
    title: "Assistant Manager at Kotak Mahindra Bank",
    role: "Assistant Manager (Operation)",
    experience: "Fresher",
    location: ["All India"],
    salary: "3.5 LPA + PLP",
    logo: "/src/assets/Images/banks-logo/kotak.webp",
    description:
      "Kotak Mahindra Bank is hiring Assistant Managers for banking operations.",
    eligibility:
      "Graduation from a recognized university.",
    responsibilities: [
      "Manage daily operations",
      "Customer support",
      "Maintain documentation",
      "Assist branch team",
    ],
  },

  {
    id: 12,
    bank: "Axis Bank",
    title: "Job at Axis Bank of Assistant Manager",
    role: "Axis Assistant Manager",
    experience: "Fresher",
    location: [
      "Delhi",
      "Gujarat",
      "Haryana",
      "Jammu and Kashmir",
      "Madhya Pradesh",
      "Punjab",
      "Rajasthan",
      "Uttar Pradesh",
      "Uttarakhand",
    ],
    salary: "4.42 LPA",
    logo: "/src/assets/Images/banks-logo/asix.webp",
    description:
      "Axis Bank is hiring Assistant Managers across multiple states.",
    eligibility:
      "Graduation from a recognized university.",
    responsibilities: [
      "Manage customer relationships",
      "Handle branch operations",
      "Generate business",
      "Support sales activities",
    ],
  },

  {
    id: 13,
    bank: "HDFC Life",
    title: "Corp. Agency Manager at HDFC Life",
    role: "Corp. Agency Manager at HDFC Life",
    experience: "Fresher",
    location: ["All India"],
    salary: "4.0 LPA",
    logo: "/src/assets/Images/banks-logo/hdfc.webp",
    description:
      "HDFC Life is hiring candidates for Corporate Agency Manager positions.",
    eligibility:
      "Graduation with good communication skills.",
    responsibilities: [
      "Manage corporate agency relationships",
      "Generate business",
      "Handle sales activities",
      "Achieve business targets",
    ],
  },

  {
    id: 14,
    bank: "Kotak Mahindra Bank",
    title: "Job at Kotak Bank of Deputy Branch Manager",
    role: "Deputy Branch Manager (DBM)",
    experience: "Fresher",
    location: ["All India"],
    salary: "5.0 LPA",
    logo: "/src/assets/Images/banks-logo/kotak.webp",
    description:
      "Kotak Mahindra Bank is hiring Deputy Branch Managers.",
    eligibility:
      "Graduate candidates with good leadership skills.",
    responsibilities: [
      "Manage branch activities",
      "Monitor sales",
      "Handle customer relationships",
      "Support branch manager",
    ],
  },

  {
    id: 15,
    bank: "Axis Bank",
    title: "Job at Axis Bank of Asst. Manager (Operation Role)",
    role: "Assistant Manager (Operation) - Female Only",
    experience: "Fresher",
    location: ["All India"],
    salary: "4.40 LPA",
    logo: "/src/assets/Images/banks-logo/asix.webp",
    description:
      "Axis Bank is hiring Assistant Managers for operations.",
    eligibility:
      "Female graduates can apply.",
    responsibilities: [
      "Manage operational activities",
      "Customer support",
      "Maintain branch records",
      "Support branch operations",
    ],
  },

  {
    id: 16,
    bank: "AU Small Finance Bank",
    title: "Bank Officer at AU Bank",
    role: "Bank Officer",
    experience: "Fresher",
    location: ["All India"],
    salary: "3.5 LPA + PLP",
    logo: "/src/assets/Images/banks-logo/au.webp",
    description:
      "AU Small Finance Bank is hiring Bank Officers.",
    eligibility:
      "Graduation from a recognized university.",
    responsibilities: [
      "Handle customers",
      "Support banking operations",
      "Maintain records",
      "Generate business",
    ],
  },

  {
    id: 17,
    bank: "IDFC FIRST Bank",
    title: "Relationship Manager at IDFC FIRST Bank",
    role: "Relationship Manager",
    experience: "Fresher",
    location: ["All India"],
    salary: "5.5 LPA + PLP",
    logo: "/src/assets/Images/banks-logo/idfc.webp",
    description:
      "IDFC FIRST Bank is looking for Relationship Managers.",
    eligibility:
      "Graduate candidates with good communication skills.",
    responsibilities: [
      "Manage customer portfolio",
      "Generate leads",
      "Cross-sell banking products",
      "Achieve sales targets",
    ],
  },

  {
    id: 18,
    bank: "ICICI Bank",
    title: "Relationship Manager Job at ICICI Bank",
    role: "Relationship Manager",
    experience: "Fresher",
    location: ["All India"],
    salary: "3.25 LPA + PLP",
    logo: "/src/assets/Images/banks-logo/icic.webp",
    description:
      "ICICI Bank is hiring Relationship Managers for different locations.",
    eligibility:
      "Graduation from a recognized university.",
    responsibilities: [
      "Manage customers",
      "Generate new business",
      "Sell banking products",
      "Achieve monthly targets",
    ],
  },
];

export default jobData;