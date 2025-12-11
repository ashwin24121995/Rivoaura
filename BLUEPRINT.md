# Elite Squad Sports - Development Blueprint

## 1. Project Overview
**Elite Squad Sports** is a premium, free-to-play fantasy cricket community platform designed for the Indian market. It differentiates itself through a "Broadcast Professional" aesthetic, strict legal compliance (no real money), and deep community engagement features.

**Core Philosophy:**
*   **100% Free-to-Play:** No deposits, no withdrawals, no financial risk.
*   **Skill-Based:** Success is determined by cricket knowledge and strategy.
*   **Community-First:** Focus on social interaction, leaderboards, and bragging rights.

## 2. Technical Architecture

### Tech Stack
*   **Frontend Framework:** React 19 (Modern, Component-Based)
*   **Styling:** Tailwind CSS 4 (Utility-First) + Shadcn UI (Accessible Components)
*   **Routing:** Wouter (Lightweight, Client-Side Routing)
*   **Icons:** Lucide React (Consistent Iconography)
*   **Data Fetching:** Custom API Service (`cricket-api.ts`)
*   **State Management:** React Hooks (`useState`, `useEffect`, `useContext`)

### Data Flow
1.  **External Data Source:** `CricketData.org` API provides live match data (Scores, Teams, Status).
2.  **API Service Layer:** `lib/cricket-api.ts` handles fetching, caching, and error handling. It includes a "Mock Fallback" system to ensure the site never looks empty.
3.  **Frontend Components:** Pages consume data via hooks and render UI updates in real-time (e.g., Match Ticker, Scorecards).

## 3. Feature Breakdown

### A. Core Experience
| Feature | Description | Status |
| :--- | :--- | :--- |
| **Match Lobby** | Lists live and upcoming matches with series details and countdowns. | ✅ Complete |
| **Team Builder** | Interactive 11-player selector with credit logic (100 credits) and role filters (WK, BAT, AR, BOWL). | ✅ Complete |
| **Contest Center** | Variety of free leagues (Mega, Head-to-Head, Practice) with "Join" functionality. | ✅ Complete |
| **Live Ticker** | Real-time scrolling ticker on the homepage showing live scores. | ✅ Complete |

### B. Community & Engagement
| Feature | Description | Status |
| :--- | :--- | :--- |
| **Leaderboards** | Global rankings based on fantasy points accumulated. | 🚧 In Progress |
| **User Profiles** | Public profiles displaying "Trophy Cabinet" and match history. | 📅 Planned |
| **Forums** | Discussion boards for match predictions and tips. | 📅 Planned |

### C. Trust & Compliance
| Feature | Description | Status |
| :--- | :--- | :--- |
| **Legal Pages** | Terms & Conditions, Privacy Policy, Fair Play Policy. | ✅ Complete |
| **Responsible Gaming** | Dedicated page with "Screen Time" tools and self-exclusion info. | ✅ Complete |
| **No-Money Guarantee** | All terminology sanitized (Points vs. Rupees) to ensure Google Ads compliance. | ✅ Complete |

## 4. Design System ("Broadcast Professional")

### Color Palette
*   **Primary:** Deep Royal Blue (`#1e3a8a`) - Trust, Professionalism.
*   **Secondary:** Turf Green (`#22c55e`) - Action, Success, Cricket Field.
*   **Accent:** Cricket White (`#ffffff`) - Cleanliness, Clarity.
*   **Background:** Slate Grays (`#f8fafc`) - Modern, Neutral canvas.

### Typography
*   **Headings:** Bold, Sans-Serif (Modern, Impactful).
*   **Body:** Clean, Readable Sans-Serif (High legibility for stats).

## 5. Compliance Strategy
To ensure 100% safety and Google Ads approval:
1.  **Zero Real Money:** No payment gateways, no wallet deposits.
2.  **Age Gating:** Strict 18+ policy mentioned on all landing pages.
3.  **State Restrictions:** Disclaimer regarding states with specific gaming laws (even for free games, as a best practice).
4.  **Transparent Scoring:** Detailed "Point System" page explaining exactly how points are calculated.

## 6. Future Roadmap (Summary)
*   **Phase 1:** Launch Core Community Features (Leaderboards, Profiles).
*   **Phase 2:** Mobile App (PWA) & Social Sharing.
*   **Phase 3:** Real-time WebSockets for instant score updates.
