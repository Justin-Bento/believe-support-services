export const appbar_navigation = [
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Events", href: "/events" },
  { name: "Questions", href: "/questions" },
  { name: "Contact", href: "/contact" },
];

export const footer_navigation = {
  solutions: [
    { name: "Day Program", href: "/programs/day-program" },
    { name: "Residential", href: "/programs/residential-program" },
    { name: "Fitness & Health", href: "/programs/fitness-and-health" },
    { name: "Life Skills", href: "/programs/life-skills" },
  ],
  support: [
    { name: "Pricing", href: "#" },
    { name: "Documentation", href: "#" },
    { name: 'FAQ"s', href: "#" },
    { name: "Other", href: "#" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Jobs", href: "/jobs" },
    { name: "Press", href: "/press" },
    { name: "Partners", href: "/partners" },
  ],
  legal: [
    { name: "Claim", href: "/legal/claim" },
    { name: "Privacy", href: "/legal/privacy-notice" },
    { name: "Terms", href: "/legal/terms-of-service" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "#",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "#",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export const testimonials = [
  {
    body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
    author: {
      name: "Leslie Alexander",
      handle: "lesliealexander",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More testimonials...
];
export const app_programs = [
  {
    id: 1,
    title: "Day Program",
    subtitle:
      "M.O.V.E for individuals with complex needs, provides programming developed to empower and encourage self growth. If you are looking for a fun way to learn and create new memories   with old and new friends, this program is for you.",
    content: [],
  },
  {
    id: 1,
    title: "Fitness & Health Program",
    subtitle:
      "M.O.V.E for individuals with complex needs, provides programming developed to empower and encourage self growth. If you are looking for a fun way to learn and create new memories   with old and new friends, this program is for you.",
    content: [],
  },
  {
    id: 1,
    title: "Residential Program",
    subtitle:
      "M.O.V.E for individuals with complex needs, provides programming developed to empower and encourage self growth. If you are looking for a fun way to learn and create new memories   with old and new friends, this program is for you.",
    content: [],
  },
  {
    id: 1,
    title: "After School & Weekend",
    subtitle:
      "M.O.V.E for individuals with complex needs, provides programming developed to empower and encourage self growth. If you are looking for a fun way to learn and create new memories   with old and new friends, this program is for you.",
    content: [],
  },
  {
    id: 1,
    title: "Social Groups",
    subtitle:
      "M.O.V.E for individuals with complex needs, provides programming developed to empower and encourage self growth. If you are looking for a fun way to learn and create new memories   with old and new friends, this program is for you.",
    content: [],
  },
  {
    id: 1,
    title: "Life Skills",
    subtitle:
      "M.O.V.E for individuals with complex needs, provides programming developed to empower and encourage self growth. If you are looking for a fun way to learn and create new memories   with old and new friends, this program is for you.",
    content: [],
  },
  {
    id: 1,
    title: "Vocational Program",
    subtitle:
      "M.O.V.E for individuals with complex needs, provides programming developed to empower and encourage self growth. If you are looking for a fun way to learn and create new memories   with old and new friends, this program is for you.",
    content: [],
  },
  {
    id: 1,
    title: "Basketball Program",
    subtitle:
      "M.O.V.E for individuals with complex needs, provides programming developed to empower and encourage self growth. If you are looking for a fun way to learn and create new memories   with old and new friends, this program is for you.",
    content: [],
  },
];

export const frequently_asked_questions = [
  {
    question:
      "Can parents/caregivers observe individuals in the program or see the program space?",
    answer:
      "Parents are not permitted to enter the program space during program times to ensure confidentiality and maintain compliance with COVID-19 policies and protocols.",
  },
  {
    question:
      "How often can a family or program reserve a spot for you program?",
    answer:
      " The program provides support for as much time as an individual requires it.",
  },
  {
    question: "How do you select who is eligible for a spot at the program?",
    answer: " The program is done on a first come first served basis.",
  },
  {
    question: " Will the program be going on excursions?",
    answer:
      "Our program provides excursions for members, however it is not included in your fee. It is an extra fee to participate in excursions.",
  },
  {
    question: "Are excursions available every weekend?",
    answer: "Excursions are not provided every weekend.",
  },
  {
    question: "What do registered members bring to the program upon arrival?",
    answer:
      " Please send along all meals, drinks, and snacks that your child will need for the duration of the program. Please also send any communication devices or tools. If required, please send any necessary toileting items (diapers, wipes, spare clothes, etc.).",
  },
  {
    question:
      "What are some of the activities that individuals participate in?",
    answer:
      " Karaoke, arts and crafts, puzzles and board games, recreation Lego tower building, sensory activities, and life skills.",
  },
  {
    question: "Does the respite program provide transportation services?",
    answer:
      "Yes, we provide transportation services for individuals that require pick up and drop off. There is additional cost for this service being provided.",
  },
  {
    question: " Do you provide respite services during the week?",
    answer: " Our program provides Respite Support 24/7.",
  },
];

export const CompanyValues = [
  {
    name: "Be world-class",
    description:
      "Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.",
  },
  {
    name: "Share everything you know",
    description:
      "Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime adipisci illo id molestiae. Cumque cum ut minus rerum architecto magnam consequatur. Quia quaerat minima.",
  },
  {
    name: "Always learning",
    description:
      "Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam.",
  },
  {
    name: "Be supportive",
    description:
      "Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.",
  },
  {
    name: "Take responsibility",
    description:
      "Sit minus expedita quam in ullam molestiae dignissimos in harum. Tenetur dolorem iure. Non nesciunt dolorem veniam necessitatibus laboriosam voluptas perspiciatis error.",
  },
  {
    name: "Enjoy downtime",
    description:
      "Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum dicta ut quia eius. Possimus reprehenderit iste aspernatur ut est velit consequatur distinctio.",
  },
];

export const programs_info = [
  {
    title: "Recreation and Leisure",
    description:
      "Our Recreation and Leisure programs offer a range of engaging activities that promote physical fitness, creative expression, and social interaction. Participants can explore new interests, make friends, and experience the joy of shared experiences.",
  },
  {
    title: "Group Living",
    description:
      "From effective communication and problem-solving to time management and personal care, our comprehensive curriculum equips participants with the skills necessary to navigate life's challenges.",
  },
  {
    title: "Residential Program",
    description:
      "In the digital age, having strong technology skills is crucial. Our Technology and Digital Literacy program helps individuals navigate the digital world with confidence. Participants learn essential computer skills, online safety practices, and how to utilize technology to enhance their communication, learning, and daily activities.",
  },
  {
    title: "Respite Support",
    description:
      "Wellness and Mindfulness programs focus on promoting mental and emotional well-being, providing participants with tools to manage stress, anxiety, and emotional challenges. Through meditation, mindfulness practices, and psychoeducation, individuals can develop resilience and cultivate a positive sense of self.",
  },
  {
    title: "Vocational Camp",
    description:
      "Our Vocational Training and Employment program is designed to equip individuals with the skills and confidence needed to enter the workforce with pride and purpose. Through a combination of skill-building workshops, career exploration, and hands-on training, participants can develop valuable vocational skills that lead to meaningful employment opportunities.",
  },
  {
    title: "Social Group Engagement",
    description:
      "Building meaningful connections is at the core of our Social Group Engagement programs. We provide inclusive spaces where individuals can connect with peers who share similar interests and experiences. Through group discussions, collaborative activities, and shared experiences, participants can develop lasting friendships and strengthen their social skills..",
  },
];
