import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: { category: string; items: FAQItem[] }[] = [
  {
    category: "Getting Started",
    items: [
      {
        question: "What is DAYHAAT?",
        answer: "DAYHAAT is India's premier free-to-play fantasy cricket platform. We provide a 100% skill-based gaming environment where users can create virtual cricket teams, compete in contests, and climb leaderboards—all without spending a single rupee. Our platform is designed for education and entertainment, not gambling."
      },
      {
        question: "Is it really free? How do you make money?",
        answer: "Yes, it is completely free. We do not charge entry fees, subscription costs, or hidden charges. DAYHAAT is funded by private investors who believe in fantasy sports as an educational tool. We do not operate on a profit-maximization model. Our goal is to create a safe space for cricket fans to learn and compete."
      },
      {
        question: "Do I need to be 18+ to play?",
        answer: "Yes. According to Indian law and our Terms of Service, all users must be at least 18 years old to register and participate. We may request age verification documents if necessary."
      },
      {
        question: "Which states are restricted?",
        answer: "Due to government compliance requirements, DAYHAAT is NOT available to residents of: Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana. Users from these states cannot register or participate in contests."
      }
    ]
  },
  {
    category: "Gameplay",
    items: [
      {
        question: "How do I create a team?",
        answer: "Navigate to the 'Tournaments' page, select an upcoming match, and click 'Create Team'. You will be given a 100-point budget to select 11 players from both teams. Your squad must include 1-4 Wicket Keepers, 3-6 Batsmen, 1-4 All-Rounders, and 3-6 Bowlers. You can select a maximum of 7 players from one team."
      },
      {
        question: "What is the role of Captain and Vice-Captain?",
        answer: "The Captain earns 2x points, and the Vice-Captain earns 1.5x points. This multiplier applies to all points earned by those players during the match. Choosing the right captain is the most critical strategic decision in fantasy cricket."
      },
      {
        question: "Can I edit my team after submitting?",
        answer: "Yes, you can edit your team until the match starts. Once the first ball is bowled, your team is locked and cannot be changed. Make sure to monitor team news and last-minute lineup changes before the match begins."
      },
      {
        question: "How are points calculated?",
        answer: "Points are awarded based on real-life player performance. Batsmen earn points for runs, boundaries, and strike rate. Bowlers earn points for wickets, economy rate, and maidens. Fielders earn points for catches, run-outs, and stumpings. For a detailed breakdown, visit our 'Point System' page."
      }
    ]
  },
  {
    category: "Contests & Leaderboards",
    items: [
      {
        question: "What types of contests are available?",
        answer: "We offer three types of contests: (1) Mega Leagues - Compete against thousands of users. Top 10% win badges. (2) Head-to-Head - Challenge a single opponent directly. (3) Private Leagues - Create custom contests for your friends or cricket club."
      },
      {
        question: "What do winners receive?",
        answer: "Winners receive digital badges, leaderboard rankings, and bragging rights. We do NOT offer cash prizes, real money rewards, or any form of monetary compensation. DAYHAAT is purely for entertainment and skill development."
      },
      {
        question: "How does the leaderboard work?",
        answer: "We maintain three leaderboards: Weekly, Monthly, and All-Time. Your position is determined by the total fantasy points you accumulate across all contests. The leaderboard resets every week/month, giving everyone a fresh chance to compete."
      },
      {
        question: "Can I create private leagues?",
        answer: "Yes. Navigate to 'Create League', set a custom name and entry code, and share it with your friends. Private leagues are perfect for office tournaments or cricket club competitions."
      }
    ]
  },
  {
    category: "Account & Security",
    items: [
      {
        question: "How do I register?",
        answer: "Click 'Register' in the top navigation, provide your email, create a password, and verify your age. You will also need to confirm that you are NOT a resident of any restricted state (Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, Telangana)."
      },
      {
        question: "Is my data safe?",
        answer: "Yes. We use industry-standard encryption (SSL/TLS) to protect your data. We do not sell user information to third parties. For full details, read our Privacy Policy."
      },
      {
        question: "What if I forget my password?",
        answer: "Click 'Forgot Password' on the login page. Enter your registered email, and we will send you a password reset link. The link expires in 24 hours for security reasons."
      },
      {
        question: "Can I delete my account?",
        answer: "Yes. Go to 'Settings' > 'Account' > 'Delete Account'. This action is permanent and cannot be undone. All your teams, contest history, and leaderboard rankings will be erased."
      }
    ]
  },
  {
    category: "Legal & Compliance",
    items: [
      {
        question: "Is fantasy cricket legal in India?",
        answer: "Yes. Fantasy cricket is classified as a 'Game of Skill' under Indian law, as recognized by multiple court rulings. However, it must NOT involve real money wagering. DAYHAAT operates in full compliance with the Public Gambling Act, 1867, and state-specific regulations."
      },
      {
        question: "Who owns DAYHAAT?",
        answer: "DAYHAAT is owned and operated by DAYHAAT PRIVATE LIMITED, a legally registered Indian private limited company based in New Delhi, Delhi."
      },
      {
        question: "Do you have a Fair Play Policy?",
        answer: "Yes. We have a zero-tolerance policy for cheating, bot usage, multiple accounts, and collusion. Violators are permanently banned. Read our full Fair Play Policy for details."
      },
      {
        question: "What if I have a complaint or dispute?",
        answer: "Contact our support team at support@elitesquadsports.in with your registered email and a detailed description of the issue. We aim to respond within 48 hours."
      }
    ]
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (key: string) => {
    const newSet = new Set(openItems);
    if (newSet.has(key)) {
      newSet.delete(key);
    } else {
      newSet.add(key);
    }
    setOpenItems(newSet);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container text-center">
          <HelpCircle className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
          <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Everything you need to know about DAYHAAT, answered with complete transparency.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="container max-w-4xl">
          {faqs.map((category, catIndex) => (
            <div key={catIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-yellow-500">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => {
                  const key = `${catIndex}-${itemIndex}`;
                  const isOpen = openItems.has(key);
                  return (
                    <div key={key} className="bg-white rounded-lg border border-slate-200 overflow-hidden">
                      <button
                        onClick={() => toggleItem(key)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                      >
                        <span className="font-semibold text-slate-900 pr-4">{item.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4 text-slate-700 leading-relaxed border-t border-slate-100 pt-4">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Still Have Questions?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Our support team is here to help. We typically respond within 48 hours.
          </p>
          <a
            href="mailto:support@elitesquadsports.in"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold px-8 py-3 rounded-full transition-colors"
          >
            Contact Support
          </a>
        </div>
      </section>
    </div>
  );
}
