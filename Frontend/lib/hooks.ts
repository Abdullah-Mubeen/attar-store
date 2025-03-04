import { useState, useEffect } from 'react';

// Hook to persist form data in localStorage
export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  // Function to read value from localStorage or return the initial value if not available
  const readValue = (): T => {
    if (typeof window === 'undefined') {
      return initialValue; // In SSR or non-browser environments, return initialValue
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  };

  // State to store the value
  const [storedValue, setStoredValue] = useState<T>(readValue);

  // Function to set value and persist it in localStorage
  const setValue = (value: T) => {
    try {
      // Allow value to be a function so we have the same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;

      // Save state
      setStoredValue(valueToStore);

      // Save to localStorage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  };

  // Effect to read value from localStorage on mount
  useEffect(() => {
    setStoredValue(readValue());
  }, [key]); // Re-run when the key changes (use case for dynamic keys)

  return [storedValue, setValue];
}
