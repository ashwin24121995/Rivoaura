-- Rivoaura Fantasy Cricket Platform
-- PostgreSQL Database Schema

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- USERS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(255),
    mobile VARCHAR(20),
    date_of_birth DATE,
    state VARCHAR(100),
    is_verified BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP WITH TIME ZONE
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_created_at ON users(created_at);

-- ============================================
-- USER PROFILES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS user_profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID UNIQUE NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    avatar_url TEXT,
    bio TEXT,
    favorite_team VARCHAR(100),
    total_points INTEGER DEFAULT 0,
    rank INTEGER,
    badges JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_user_profiles_user_id ON user_profiles(user_id);
CREATE INDEX idx_user_profiles_rank ON user_profiles(rank);

-- ============================================
-- TEAMS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS teams (
    id SERIAL PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    match_id VARCHAR(100) NOT NULL,
    players JSONB NOT NULL, -- Array of player IDs
    captain INTEGER NOT NULL,
    vice_captain INTEGER NOT NULL,
    total_credits DECIMAL(5,2) NOT NULL,
    total_points INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_teams_user_id ON teams(user_id);
CREATE INDEX idx_teams_match_id ON teams(match_id);
CREATE INDEX idx_teams_created_at ON teams(created_at);

-- ============================================
-- CONTESTS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS contests (
    id SERIAL PRIMARY KEY,
    match_id VARCHAR(100) NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    max_participants INTEGER,
    current_participants INTEGER DEFAULT 0,
    entry_fee INTEGER DEFAULT 0,
    prize_pool INTEGER DEFAULT 0,
    status VARCHAR(50) DEFAULT 'upcoming', -- upcoming, live, completed, cancelled
    start_time TIMESTAMP WITH TIME ZONE,
    end_time TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_contests_match_id ON contests(match_id);
CREATE INDEX idx_contests_status ON contests(status);
CREATE INDEX idx_contests_start_time ON contests(start_time);

-- ============================================
-- CONTEST ENTRIES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS contest_entries (
    id SERIAL PRIMARY KEY,
    contest_id INTEGER NOT NULL REFERENCES contests(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    team_id INTEGER NOT NULL REFERENCES teams(id) ON DELETE CASCADE,
    points INTEGER DEFAULT 0,
    rank INTEGER,
    prize_amount INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(contest_id, user_id, team_id)
);

CREATE INDEX idx_contest_entries_contest_id ON contest_entries(contest_id);
CREATE INDEX idx_contest_entries_user_id ON contest_entries(user_id);
CREATE INDEX idx_contest_entries_points ON contest_entries(points DESC);

-- ============================================
-- MATCHES TABLE (Cached from Cricket API)
-- ============================================
CREATE TABLE IF NOT EXISTS matches (
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    match_type VARCHAR(20) NOT NULL, -- t20, odi, test
    status VARCHAR(100),
    venue TEXT,
    date_time_gmt TIMESTAMP WITH TIME ZONE,
    teams JSONB NOT NULL, -- Array of team names
    team_info JSONB, -- Detailed team information
    score JSONB, -- Live scores
    series_id VARCHAR(100),
    fantasy_enabled BOOLEAN DEFAULT TRUE,
    match_started BOOLEAN DEFAULT FALSE,
    match_ended BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_matches_date_time ON matches(date_time_gmt);
CREATE INDEX idx_matches_status ON matches(status);
CREATE INDEX idx_matches_match_type ON matches(match_type);

-- ============================================
-- PLAYERS TABLE (Cached from Cricket API)
-- ============================================
CREATE TABLE IF NOT EXISTS players (
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(100), -- Batsman, Bowler, All-rounder, Wicket-keeper
    batting_style VARCHAR(100),
    bowling_style VARCHAR(100),
    country VARCHAR(100),
    player_img TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_players_name ON players(name);
CREATE INDEX idx_players_role ON players(role);
CREATE INDEX idx_players_country ON players(country);

-- ============================================
-- PLAYER PERFORMANCE TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS player_performance (
    id SERIAL PRIMARY KEY,
    match_id VARCHAR(100) NOT NULL REFERENCES matches(id) ON DELETE CASCADE,
    player_id VARCHAR(100) NOT NULL REFERENCES players(id) ON DELETE CASCADE,
    runs INTEGER DEFAULT 0,
    wickets INTEGER DEFAULT 0,
    catches INTEGER DEFAULT 0,
    stumpings INTEGER DEFAULT 0,
    run_outs INTEGER DEFAULT 0,
    fantasy_points DECIMAL(10,2) DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(match_id, player_id)
);

CREATE INDEX idx_player_performance_match_id ON player_performance(match_id);
CREATE INDEX idx_player_performance_player_id ON player_performance(player_id);
CREATE INDEX idx_player_performance_points ON player_performance(fantasy_points DESC);

-- ============================================
-- LEADERBOARD TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS leaderboard (
    id SERIAL PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    total_points INTEGER DEFAULT 0,
    rank INTEGER,
    contests_played INTEGER DEFAULT 0,
    contests_won INTEGER DEFAULT 0,
    win_rate DECIMAL(5,2) DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id)
);

CREATE INDEX idx_leaderboard_rank ON leaderboard(rank);
CREATE INDEX idx_leaderboard_total_points ON leaderboard(total_points DESC);

-- ============================================
-- COMMUNITY POSTS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS community_posts (
    id SERIAL PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    category VARCHAR(100), -- strategy, discussion, news, tips
    likes_count INTEGER DEFAULT 0,
    comments_count INTEGER DEFAULT 0,
    is_pinned BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_community_posts_user_id ON community_posts(user_id);
CREATE INDEX idx_community_posts_category ON community_posts(category);
CREATE INDEX idx_community_posts_created_at ON community_posts(created_at DESC);

-- ============================================
-- COMMUNITY COMMENTS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS community_comments (
    id SERIAL PRIMARY KEY,
    post_id INTEGER NOT NULL REFERENCES community_posts(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    likes_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_community_comments_post_id ON community_comments(post_id);
CREATE INDEX idx_community_comments_user_id ON community_comments(user_id);

-- ============================================
-- NOTIFICATIONS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS notifications (
    id SERIAL PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    type VARCHAR(50), -- match_start, contest_result, achievement, system
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_notifications_user_id ON notifications(user_id);
CREATE INDEX idx_notifications_is_read ON notifications(is_read);
CREATE INDEX idx_notifications_created_at ON notifications(created_at DESC);

-- ============================================
-- ACHIEVEMENTS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS achievements (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    description TEXT,
    icon_url TEXT,
    points INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- USER ACHIEVEMENTS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS user_achievements (
    id SERIAL PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    achievement_id INTEGER NOT NULL REFERENCES achievements(id) ON DELETE CASCADE,
    earned_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, achievement_id)
);

CREATE INDEX idx_user_achievements_user_id ON user_achievements(user_id);

-- ============================================
-- AUDIT LOG TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS audit_log (
    id SERIAL PRIMARY KEY,
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    action VARCHAR(100) NOT NULL,
    entity_type VARCHAR(100),
    entity_id VARCHAR(100),
    details JSONB,
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_audit_log_user_id ON audit_log(user_id);
CREATE INDEX idx_audit_log_action ON audit_log(action);
CREATE INDEX idx_audit_log_created_at ON audit_log(created_at DESC);

-- ============================================
-- TRIGGERS FOR UPDATED_AT
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply updated_at trigger to all relevant tables
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_profiles_updated_at BEFORE UPDATE ON user_profiles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_teams_updated_at BEFORE UPDATE ON teams
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_contests_updated_at BEFORE UPDATE ON contests
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_matches_updated_at BEFORE UPDATE ON matches
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_players_updated_at BEFORE UPDATE ON players
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_player_performance_updated_at BEFORE UPDATE ON player_performance
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_leaderboard_updated_at BEFORE UPDATE ON leaderboard
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_community_posts_updated_at BEFORE UPDATE ON community_posts
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_community_comments_updated_at BEFORE UPDATE ON community_comments
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- SEED DATA FOR ACHIEVEMENTS
-- ============================================
INSERT INTO achievements (name, description, icon_url, points) VALUES
('First Team', 'Created your first fantasy team', '/badges/first-team.png', 10),
('Contest Winner', 'Won your first contest', '/badges/winner.png', 50),
('Top 10', 'Reached top 10 in leaderboard', '/badges/top-10.png', 100),
('Century', 'Scored 100+ points in a single match', '/badges/century.png', 30),
('Strategist', 'Created 10 different teams', '/badges/strategist.png', 25),
('Community Star', 'Received 100+ likes on community posts', '/badges/community.png', 40),
('Loyal Player', 'Played for 30 consecutive days', '/badges/loyal.png', 75)
ON CONFLICT (name) DO NOTHING;

-- ============================================
-- COMMENTS
-- ============================================
COMMENT ON TABLE users IS 'Core user authentication and profile data';
COMMENT ON TABLE teams IS 'User-created fantasy cricket teams';
COMMENT ON TABLE contests IS 'Fantasy cricket contests/tournaments';
COMMENT ON TABLE matches IS 'Cached cricket match data from API';
COMMENT ON TABLE players IS 'Cached player data from Cricket API';
COMMENT ON TABLE leaderboard IS 'Global leaderboard rankings';
COMMENT ON TABLE community_posts IS 'User-generated community discussions';
COMMENT ON TABLE notifications IS 'User notifications and alerts';
COMMENT ON TABLE audit_log IS 'System audit trail for security and debugging';
