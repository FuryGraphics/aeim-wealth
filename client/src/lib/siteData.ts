// AEIM Wealth Management — Central site data
// All business info, services, locations, FAQs, and testimonials

export const BUSINESS = {
  name: "AEIM Wealth Management",
  owner: "Bryan M. Uselding",
  phone: "(630) 534-2346",
  phoneRaw: "6305342346",
  email: "buselidng@aeimwealth.com",
  address: "650 Warrenville Rd, Suite 100, Lisle, IL 60532",
  addressShort: "650 Warrenville Rd, Suite 100",
  city: "Lisle",
  state: "IL",
  zip: "60532",
  domain: "aeimwealth.com",
  primaryCity: "Naperville",
  primaryState: "Illinois",
  experience: "17+",
  hours: [
    { day: "Monday", time: "8:00 AM - 6:00 PM" },
    { day: "Tuesday", time: "8:00 AM - 6:00 PM" },
    { day: "Wednesday", time: "8:00 AM - 6:00 PM" },
    { day: "Thursday", time: "8:00 AM - 6:00 PM" },
    { day: "Friday", time: "8:00 AM - 6:00 PM" },
    { day: "Saturday", time: "By Appointment" },
    { day: "Sunday", time: "Closed" },
  ],
  trustBadges: [
    "Independent",
    "Fiduciary",
    "Transparent",
    "17+ Years",
    "Fee Transparency",
  ],
};

export const SERVICES = [
  {
    slug: "wealth-management",
    title: "Wealth Management",
    short: "Comprehensive wealth management services for individuals and families across DuPage County.",
    image: "/manus-storage/service-wealth_c01d934d.jpg",
    subServices: [
      { title: "Retirement Planning", slug: "retirement-planning" },
      { title: "Estate & Legacy Planning", slug: "estate-legacy-planning" },
      { title: "Investment Strategies", slug: "investment-strategies" },
      { title: "Tax Reduction", slug: "tax-reduction" },
      { title: "Family Financial Planning", slug: "family-financial-planning" },
    ],
    intro:
      "Our wealth management services bring together every piece of your financial life under one coordinated strategy. From investment selection to tax efficiency, estate planning to retirement income, we build a plan that evolves with you.",
    whatWeHandle: [
      "Comprehensive financial plan development",
      "Investment portfolio construction and management",
      "Tax-efficient withdrawal strategies",
      "Coordination with CPAs and estate attorneys",
      "Annual and semi-annual plan reviews",
      "Multi-generational wealth transfer planning",
    ],
    process: [
      { step: "01", title: "Discovery", desc: "We meet to understand your full financial picture, goals, and concerns." },
      { step: "02", title: "Analysis", desc: "We review your investments, taxes, estate documents, and insurance coverage." },
      { step: "03", title: "Strategy", desc: "We build a custom wealth management plan with clear recommendations." },
      { step: "04", title: "Ongoing Management", desc: "We monitor, adjust, and review your plan on an annual or semi-annual basis." },
    ],
    faqs: [
      { q: "What does a wealth manager do?", a: "A wealth manager coordinates all aspects of your financial life, including investments, taxes, estate planning, retirement, and insurance, into one unified strategy." },
      { q: "How are you different from a broker?", a: "As an independent fiduciary, we are legally obligated to act in your best interest. We do not earn commissions on product sales, so our recommendations are unbiased." },
      { q: "Do you have account minimums?", a: "We work with clients at various wealth levels. The first consultation is always free, and we will let you know if our services are a good fit." },
      { q: "How often do we meet?", a: "We schedule annual or semi-annual reviews at minimum, and are available anytime for questions, life changes, or market concerns." },
    ],
  },
  {
    slug: "retirement-planning",
    title: "Retirement Planning",
    short: "Retirement income planning, Social Security optimization, and pension analysis for a confident retirement.",
    image: "/manus-storage/service-retirement_43a7fe62.jpg",
    parent: "wealth-management",
    intro:
      "Retirement planning is about more than a number on a statement. It is about creating a reliable income stream that lasts your lifetime, optimizing Social Security, managing taxes in retirement, and making sure your lifestyle is sustainable for decades.",
    whatWeHandle: [
      "Retirement income projection and gap analysis",
      "Social Security claiming strategy optimization",
      "Pension and annuity evaluation",
      "Tax-efficient withdrawal sequencing",
      "401(k) and IRA rollover guidance",
      "Required Minimum Distribution (RMD) planning",
    ],
    process: [
      { step: "01", title: "Income Assessment", desc: "We map out all your retirement income sources and project your needs." },
      { step: "02", title: "Optimization", desc: "We determine the best Social Security claiming strategy and withdrawal sequence." },
      { step: "03", title: "Implementation", desc: "We set up your retirement income plan and monitor it through market cycles." },
    ],
    faqs: [
      { q: "When should I start retirement planning?", a: "The earlier the better, but even if you are within five years of retirement, a plan can make a significant difference in your outcomes." },
      { q: "How do you optimize Social Security?", a: "We analyze your earnings record, full retirement age, and spousal benefits to determine the claiming strategy that maximizes your lifetime income." },
      { q: "What about taxes in retirement?", a: "We build tax-efficient withdrawal strategies that consider which accounts to draw from and when, to minimize your lifetime tax burden." },
      { q: "Can you help with my 401(k) rollover?", a: "Yes. We evaluate whether a rollover makes sense for your situation and handle the process if it does." },
      { q: "Do you charge for the first meeting?", a: "No. Your initial consultation is always free and comes with no obligation." },
      { q: "What if I already have a retirement plan?", a: "We can review your existing plan, identify gaps, and suggest improvements. A second opinion is always valuable." },
    ],
  },
  {
    slug: "estate-legacy-planning",
    title: "Estate & Legacy Planning",
    short: "Family legacy planning and estate tax elimination strategies to protect what you have built.",
    image: "/manus-storage/service-estate_192aef49.jpg",
    parent: "wealth-management",
    intro:
      "Estate and legacy planning ensures that the wealth you have built passes to the people and causes you care about efficiently. We focus on estate tax elimination strategies, beneficiary coordination, and multi-generational planning that preserves your legacy.",
    whatWeHandle: [
      "Estate tax elimination strategies",
      "Trust structure review and coordination",
      "Beneficiary designation audit",
      "Charitable giving and legacy planning",
      "Multi-generational wealth transfer",
      "Coordination with estate planning attorneys",
    ],
    process: [
      { step: "01", title: "Estate Review", desc: "We review your current estate documents, beneficiary designations, and asset titling." },
      { step: "02", title: "Strategy Design", desc: "We identify estate tax exposure and design elimination strategies tailored to your family." },
      { step: "03", title: "Implementation", desc: "We coordinate with your attorney to implement the plan and keep it updated over time." },
    ],
    faqs: [
      { q: "What is estate tax elimination?", a: "It is the use of legal strategies, such as trusts, gifting, and life insurance, to reduce or eliminate estate taxes so more of your wealth passes to your heirs." },
      { q: "Do I need a trust?", a: "Not everyone needs a trust, but many families benefit from one. We help you understand whether a trust makes sense for your situation." },
      { q: "Can you work with my attorney?", a: "Yes. We coordinate with your estate planning attorney to ensure your financial plan and legal documents are aligned." },
      { q: "What is a beneficiary audit?", a: "We review all your accounts and policies to make sure beneficiary designations are current and consistent with your wishes." },
      { q: "How often should my estate plan be reviewed?", a: "We recommend reviewing your estate plan every 3 to 5 years, or whenever there is a major life event." },
      { q: "What is multi-generational planning?", a: "It is planning that looks beyond your lifetime to how wealth transfers to your children and grandchildren in the most efficient way possible." },
    ],
  },
  {
    slug: "investment-strategies",
    title: "Investment Strategies",
    short: "Custom investment portfolios built on evidence, not speculation. Low-cost, tax-efficient, and diversified.",
    image: "/manus-storage/service-investment_0c2b05bf.jpg",
    parent: "wealth-management",
    intro:
      "Our investment strategies are built on academic research, not market predictions. We construct diversified, low-cost, tax-efficient portfolios tailored to your goals and risk tolerance. As an independent fiduciary, we select investments with no product quotas or company pressure.",
    whatWeHandle: [
      "Custom portfolio construction",
      "Asset allocation based on goals and risk tolerance",
      "Tax-loss harvesting and tax-efficient investing",
      "Low-cost index and factor-based strategies",
      "Rebalancing and ongoing monitoring",
      "Alternative investment evaluation",
    ],
    process: [
      { step: "01", title: "Risk Assessment", desc: "We assess your risk tolerance, time horizon, and financial goals." },
      { step: "02", title: "Portfolio Design", desc: "We build a custom, diversified portfolio using low-cost, evidence-based strategies." },
      { step: "03", title: "Ongoing Management", desc: "We monitor, rebalance, and tax-optimize your portfolio through market cycles." },
    ],
    faqs: [
      { q: "What investment philosophy do you follow?", a: "We use evidence-based investing grounded in academic research, focusing on diversification, low costs, and long-term discipline rather than market timing." },
      { q: "Do you earn commissions on investments?", a: "No. As an independent fiduciary, we do not earn commissions on product sales. Our recommendations are based solely on what is best for you." },
      { q: "What does tax-efficient investing mean?", a: "It means structuring your portfolio to minimize taxes through strategies like tax-loss harvesting, asset location, and using tax-advantaged accounts." },
      { q: "How often is my portfolio rebalanced?", a: "We monitor your portfolio continuously and rebalance when allocations drift beyond set thresholds, typically 1 to 2 times per year." },
      { q: "Can you manage my existing 401(k) or IRA?", a: "We can manage IRAs directly. For 401(k) plans, we provide guidance on investment selection within your plan options." },
      { q: "What are your investment fees?", a: "Fees are discussed transparently during your free consultation. We believe in full fee transparency with no hidden costs." },
    ],
  },
  {
    slug: "tax-reduction",
    title: "Tax Reduction",
    short: "Proactive tax reduction strategies that keep more of what you earn, year after year.",
    image: "/manus-storage/service-tax_2140ffa3.jpg",
    parent: "wealth-management",
    intro:
      "Taxes can be one of the largest drains on your wealth over time. Our tax reduction strategies are designed to minimize your tax burden legally and proactively, from investment tax efficiency to retirement withdrawal planning and estate tax elimination.",
    whatWeHandle: [
      "Tax-loss harvesting",
      "Asset location optimization",
      "Tax-efficient withdrawal strategies",
      "Roth conversion planning",
      "Charitable giving tax strategies",
      "Estate tax elimination",
    ],
    process: [
      { step: "01", title: "Tax Review", desc: "We review your recent tax returns and investment accounts for tax efficiency." },
      { step: "02", title: "Strategy", desc: "We identify specific tax reduction opportunities and build a year-round strategy." },
      { step: "03", title: "Execution", desc: "We implement the strategies and coordinate with your CPA for filing." },
    ],
    faqs: [
      { q: "What is tax-loss harvesting?", a: "It is the practice of selling investments at a loss to offset capital gains, reducing your tax bill while maintaining your portfolio strategy." },
      { q: "Are you a CPA?", a: "No, we are financial advisors. We focus on proactive tax strategy and coordinate with your CPA or tax preparer for implementation and filing." },
      { q: "What is a Roth conversion?", a: "A Roth conversion moves funds from a traditional IRA to a Roth IRA, paying taxes now so future growth and withdrawals are tax-free." },
      { q: "How much can tax planning save me?", a: "It depends on your situation, but proactive tax strategy can save many clients thousands per year and significantly more over a lifetime." },
      { q: "Do you do tax preparation?", a: "We do not prepare tax returns, but we coordinate closely with your tax preparer to ensure our strategies are implemented correctly." },
      { q: "Is tax reduction legal?", a: "Absolutely. We use IRS-approved strategies within the tax code to minimize your tax burden legally and ethically." },
    ],
  },
  {
    slug: "family-financial-planning",
    title: "Family Financial Planning",
    short: "Multi-generational financial planning that protects your family now and for decades to come.",
    image: "/manus-storage/service-family_3450d6f1.jpg",
    parent: "wealth-management",
    intro:
      "Family financial planning goes beyond your own balance sheet. We help you plan for your children's education, your parents' long-term care, and the smooth transfer of wealth across generations. Our goal is to build long-term, multi-generational client-advisor relationships.",
    whatWeHandle: [
      "College funding and 529 planning",
      "Long-term care planning",
      "Life insurance needs analysis",
      "Multi-generational wealth transfer",
      "Family meeting facilitation",
      "Financial education for children and heirs",
    ],
    process: [
      { step: "01", title: "Family Assessment", desc: "We assess your family's financial needs across generations." },
      { step: "02", title: "Plan Creation", desc: "We build a comprehensive family financial plan covering education, care, and legacy." },
      { step: "03", title: "Ongoing Support", desc: "We update the plan as your family grows and circumstances change." },
    ],
    faqs: [
      { q: "What is multi-generational planning?", a: "It is planning that considers the financial needs of your parents, yourself, and your children, ensuring wealth is managed and transferred efficiently across generations." },
      { q: "Can you help with college planning?", a: "Yes. We help with 529 plan setup, college funding strategies, and financial aid considerations." },
      { q: "Do you offer financial education for children?", a: "Yes. We can facilitate family meetings and provide financial education resources for your children and heirs." },
      { q: "What about long-term care planning?", a: "We help you understand long-term care costs and evaluate insurance options to protect your family from catastrophic care expenses." },
      { q: "How long do client relationships typically last?", a: "We build relationships designed to last decades, often working with multiple generations of the same family." },
      { q: "Do you charge for family meetings?", a: "Family meetings are included as part of our ongoing client relationship. Initial consultations are always free." },
    ],
  },
];

export const LOCATIONS = [
  {
    slug: "naperville",
    name: "Naperville",
    state: "IL",
    primary: true,
    nearby: ["Lisle", "Bolingbrook", "Plainfield", "Oswego"],
    intro:
      "As a fiduciary financial advisor serving Naperville, IL, we help families and individuals across the western suburbs of Chicago build, protect, and transfer wealth with confidence. Our independent, fee-transparent approach means you get unbiased advice tailored to your goals.",
    localContext:
      "Naperville is one of the largest cities in DuPage County, with a strong professional community and many families planning for retirement, college funding, and multi-generational wealth transfer. Our office in nearby Lisle makes us easily accessible to Naperville residents.",
  },
  {
    slug: "lisle",
    name: "Lisle",
    state: "IL",
    primary: false,
    nearby: ["Naperville", "Wheaton", "Downers Grove", "Woodridge"],
    intro:
      "Our office is located in Lisle, IL, making us a convenient choice for families throughout DuPage County. We provide comprehensive wealth management, retirement planning, and estate planning services to Lisle residents and the surrounding communities.",
    localContext:
      "Lisle is a village in DuPage County, conveniently located near I-88 and I-355. Our office at 650 Warrenville Rd, Suite 100, is easily accessible from Naperville, Wheaton, Downers Grove, and the entire western suburbs of Chicago.",
  },
  {
    slug: "wheaton",
    name: "Wheaton",
    state: "IL",
    primary: false,
    nearby: ["Glen Ellyn", "Carol Stream", "Winfield", "Warrenville"],
    intro:
      "We provide fiduciary wealth management and financial planning services to families and individuals in Wheaton, IL. As an independent advisor, we offer unbiased advice on retirement planning, investments, tax reduction, and estate planning.",
    localContext:
      "Wheaton is the county seat of DuPage County, known for its strong community and family-oriented neighborhoods. Many Wheaton residents are professionals planning for retirement and multi-generational wealth transfer.",
  },
  {
    slug: "aurora",
    name: "Aurora",
    state: "IL",
    primary: false,
    nearby: ["Naperville", "Oswego", "Plainfield", "Montgomery"],
    intro:
      "Families in Aurora, IL trust AEIM Wealth Management for independent, fiduciary financial advice. We help Aurora residents with retirement planning, investment strategies, tax reduction, and estate planning.",
    localContext:
      "Aurora is the second-largest city in Illinois, spanning both DuPage and Kane Counties. Its diverse population includes many families and professionals who benefit from comprehensive wealth management services.",
  },
  {
    slug: "st-charles",
    name: "St. Charles",
    state: "IL",
    primary: false,
    nearby: ["Geneva", "Batavia", "West Chicago", "South Elgin"],
    intro:
      "We serve families in St. Charles, IL with fiduciary wealth management, retirement planning, and estate planning services. Our independent approach ensures you receive advice that is always in your best interest.",
    localContext:
      "St. Charles is located in Kane County, part of the Tri-Cities area along with Geneva and Batavia. The community has a strong professional base with many families planning for retirement and legacy transfer.",
  },
];

export const ALL_CITIES = [
  "Wheaton", "Aurora", "Batavia", "Geneva", "Naperville",
  "Bolingbrook", "Lisle", "Plainfield", "St. Charles", "Oswego",
  "North Aurora", "Carol Stream",
];

export const HOMEPAGE_FAQS = [
  {
    q: "What does fiduciary mean?",
    a: "A fiduciary is legally obligated to act in your best interest at all times. Unlike some advisors who may recommend products that pay them commissions, a fiduciary must put your needs first.",
  },
  {
    q: "How are your fees structured?",
    a: "We believe in full fee transparency. Fees are discussed openly during your free consultation. We do not earn commissions on product sales, so our recommendations are unbiased.",
  },
  {
    q: "Do you have account minimums?",
    a: "We work with clients at various wealth levels. The first consultation is always free, and we will let you know if our services are a good fit for your situation.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Naperville, Lisle, Wheaton, Aurora, St. Charles, and communities throughout DuPage and Kane Counties. We also work with clients remotely across Illinois.",
  },
  {
    q: "What happens at the first meeting?",
    a: "The first meeting is a free, no-obligation consultation. We learn about your financial situation, goals, and concerns, and explain how we can help. You leave with clarity, whether or not you choose to work with us.",
  },
  {
    q: "What is the difference between an independent and a captive advisor?",
    a: "An independent advisor is not tied to any single company's products, so they can recommend what is truly best for you. A captive advisor works for one company and may be limited to that company's offerings.",
  },
];

export const TESTIMONIALS = [
  {
    text: "Bryan took the time to understand our entire financial picture and built a plan that gave us confidence in our retirement. His independent, fiduciary approach means we trust the advice completely.",
    author: "Client testimonial",
    source: "Naperville, IL",
  },
  {
    text: "We were nervous about estate planning, but AEIM made it straightforward. The tax reduction strategies alone have saved us more than we expected. Highly recommend.",
    author: "Client testimonial",
    source: "Wheaton, IL",
  },
  {
    text: "After years with a big-name firm, switching to an independent advisor was the best financial decision we made. The personalized attention and transparent fees are night and day.",
    author: "Client testimonial",
    source: "Lisle, IL",
  },
  {
    text: "Bryan has been our family's advisor for over a decade. He guided my parents through retirement and now helps my generation plan for the future. Truly a multi-generational relationship.",
    author: "Client testimonial",
    source: "Aurora, IL",
  },
  {
    text: "The free consultation was genuinely helpful with no pressure. Bryan reviewed our investments and pointed out several things our previous advisor had missed.",
    author: "Client testimonial",
    source: "St. Charles, IL",
  },
];

export const BLOG_POSTS = [
  {
    slug: "fiduciary-vs-captive-advisor",
    title: "Fiduciary vs. Captive Advisor: Why Independence Matters",
    excerpt: "Understanding the critical difference between a fiduciary advisor who must act in your best interest and a captive advisor limited to one company's products.",
    date: "2025-06-15",
    category: "Financial Planning",
  },
  {
    slug: "retirement-income-strategies",
    title: "Building a Retirement Income Strategy That Lasts",
    excerpt: "How to create a reliable income stream in retirement using Social Security optimization, tax-efficient withdrawals, and proper asset allocation.",
    date: "2025-05-22",
    category: "Retirement Planning",
  },
  {
    slug: "estate-tax-elimination",
    title: "Estate Tax Elimination: Strategies for Illinois Families",
    excerpt: "Illinois has one of the lowest estate tax exemption thresholds in the country. Learn strategies to protect your legacy from unnecessary taxation.",
    date: "2025-04-10",
    category: "Estate Planning",
  },
  {
    slug: "tax-loss-harvesting",
    title: "Tax-Loss Harvesting: Turning Market Dips into Tax Savings",
    excerpt: "How strategic selling of investments at a loss can offset gains and reduce your tax bill while keeping your portfolio on track.",
    date: "2025-03-05",
    category: "Tax Planning",
  },
  {
    slug: "roth-conversion-strategy",
    title: "When a Roth Conversion Makes Sense",
    excerpt: "Converting traditional IRA funds to a Roth IRA can provide tax-free growth, but timing matters. Here is how to evaluate whether it is right for you.",
    date: "2025-02-18",
    category: "Tax Planning",
  },
  {
    slug: "family-financial-meetings",
    title: "Why Family Financial Meetings Matter",
    excerpt: "Multi-generational financial planning works best when the whole family understands the plan. Here is how to facilitate productive family money conversations.",
    date: "2025-01-12",
    category: "Family Planning",
  },
];
