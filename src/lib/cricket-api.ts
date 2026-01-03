import axios from "axios";

const API_KEY = "af029ec1-433e-4ce9-b49a-0aaa4ecebe65";
const BASE_URL = "https://api.cricapi.com/v1";

// Mock Data for Fallback
const MOCK_MATCHES = [
  {
    id: "mock-1",
    name: "India vs Australia",
    matchType: "T20",
    status: "Live",
    venue: "Melbourne Cricket Ground",
    date: "2025-12-09",
    dateTimeGMT: "2025-12-09T08:00:00",
    teams: ["India", "Australia"],
    score: [
      { r: 185, w: 4, o: 20, inning: "India Inning 1" },
      { r: 142, w: 6, o: 16.4, inning: "Australia Inning 1" }
    ],
    statusText: "Australia need 44 runs in 20 balls"
  },
  {
    id: "mock-2",
    name: "England vs New Zealand",
    matchType: "ODI",
    status: "Upcoming",
    venue: "Lord's, London",
    date: "2025-12-10",
    dateTimeGMT: "2025-12-10T10:00:00",
    teams: ["England", "New Zealand"],
    score: [],
    statusText: "Match starts in 2h 30m"
  },
  {
    id: "mock-3",
    name: "South Africa vs West Indies",
    matchType: "Test",
    status: "Live",
    venue: "Wanderers Stadium",
    date: "2025-12-08",
    dateTimeGMT: "2025-12-08T09:00:00",
    teams: ["South Africa", "West Indies"],
    score: [
      { r: 350, w: 10, o: 95.2, inning: "South Africa Inning 1" },
      { r: 120, w: 3, o: 35.0, inning: "West Indies Inning 1" }
    ],
    statusText: "Day 2: West Indies trail by 230 runs"
  }
];

export interface Match {
  id: string;
  name: string;
  matchType: string;
  status: string;
  venue: string;
  date: string;
  dateTimeGMT: string;
  teams: string[];
  score: { r: number; w: number; o: number; inning: string }[];
  statusText: string;
}

export const fetchLiveMatches = async (): Promise<Match[]> => {
  try {
    // Attempt to fetch from API
    const response = await axios.get(`${BASE_URL}/currentMatches?apikey=${API_KEY}&offset=0`);
    
    if (response.data && response.data.status === "success" && response.data.data) {
      return response.data.data;
    } else {
      console.warn("API returned unsuccessful status, using mock data.");
      return MOCK_MATCHES;
    }
  } catch (error) {
    console.error("Failed to fetch live matches:", error);
    return MOCK_MATCHES;
  }
};

export const fetchMatchScore = async (matchId: string) => {
  try {
    // For mock matches, return the mock object directly
    if (matchId.startsWith("mock-")) {
      return MOCK_MATCHES.find(m => m.id === matchId);
    }

    const response = await axios.get(`${BASE_URL}/match_score?apikey=${API_KEY}&id=${matchId}`);
    
    if (response.data && response.data.status === "success") {
      return response.data.data;
    }
    return null;
  } catch (error) {
    console.error(`Failed to fetch score for match ${matchId}:`, error);
    return null;
  }
};
