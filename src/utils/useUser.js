import { useState, useEffect } from 'react';

// Mock user data for static site
const mockUser = {
  id: 'mock-user-123',
  name: 'John Doe',
  email: 'john.doe@example.com',
  // Add other relevant user properties if needed
};

export default function useUser() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // Simulate fetching user data
    const timer = setTimeout(() => {
      // In a static site, we can directly return the mock user
      setUser(mockUser);
      setIsLoading(false);
    }, 100); // Small delay to simulate async fetch

    return () => clearTimeout(timer);
  }, []);

  return { user, isLoading, isError, isAuthenticated: !!user };
}
