import { useState, useEffect } from 'react';

const FAVORITES_KEY = 'dayhaat_favorite_teams';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(FAVORITES_KEY);
    if (stored) {
      try {
        setFavorites(JSON.parse(stored));
      } catch (error) {
        console.error('Failed to parse favorites:', error);
        setFavorites([]);
      }
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (teamName: string) => {
    setFavorites((prev) => {
      if (prev.includes(teamName)) {
        return prev;
      }
      return [...prev, teamName];
    });
  };

  const removeFavorite = (teamName: string) => {
    setFavorites((prev) => prev.filter((name) => name !== teamName));
  };

  const toggleFavorite = (teamName: string) => {
    if (favorites.includes(teamName)) {
      removeFavorite(teamName);
    } else {
      addFavorite(teamName);
    }
  };

  const isFavorite = (teamName: string) => {
    return favorites.includes(teamName);
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
  };
}
