import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User as SupabaseUser } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

interface User {
  id: string;
  email: string;
  type: 'seeker' | 'owner';
  name?: string;
  phone?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, type?: 'seeker' | 'owner') => Promise<void>;
  signup: (email: string, password: string, type: 'seeker' | 'owner', name?: string, phone?: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        await fetchUserProfile(session.user);
      }
      setLoading(false);
    };

    getInitialSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        await fetchUserProfile(session.user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchUserProfile = async (supabaseUser: SupabaseUser) => {
    try {
      const { data: profile, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', supabaseUser.id)
        .single();

      if (error) {
        console.error('Error fetching profile:', error);
        return;
      }

      if (profile) {
        setUser({
          id: profile.id,
          email: profile.email,
          type: profile.user_type,
          name: profile.name || undefined,
          phone: profile.phone || undefined,
        });
      }
    } catch (error) {
      console.error('Error in fetchUserProfile:', error);
    }
  };

  const login = async (email: string, password: string, type?: 'seeker' | 'owner') => {
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        // Provide more user-friendly error messages
        if (error.message === 'Invalid login credentials') {
          throw new Error('Invalid email or password. Please check your credentials and try again.');
        } else if (error.message.includes('Email not confirmed')) {
          throw new Error('Please check your email and click the confirmation link before logging in.');
        } else {
          throw new Error(error.message || 'Login failed');
        }
      }

      if (data.user) {
        await fetchUserProfile(data.user);
      }
    } catch (error: any) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signup = async (email: string, password: string, type: 'seeker' | 'owner', name?: string, phone?: string) => {
    setLoading(true);
    try {
      // Clean and prepare user data
      const cleanName = name && name.trim() ? name.trim() : null;
      const cleanPhone = phone && phone.trim() ? phone.trim() : null;
      
      // Sign up the user with properly formatted metadata
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
            name: cleanName,
            phone: cleanPhone,

      // Manually create the profile since trigger might be failing
      if (data.user) {
        try {
          // Create profile manually
          const { error: profileError } = await supabase
            .from('profiles')
            .insert({
              id: data.user.id,
              email: data.user.email || email,
              user_type: type,
              name: name && name.trim() ? name.trim() : null,
              phone: phone && phone.trim() ? phone.trim() : null,
            });

          if (profileError) {
            console.error('Profile creation error:', profileError);
            // Don't throw here - user account was created successfully
          }

          // Fetch the created profile
        // Handle specific Supabase errors
        if (error.message.includes('Database error saving new user')) {
          throw new Error('There was an issue creating your account. Please try again or contact support if the problem persists.');
        } else if (error.message.includes('User already registered')) {
          throw new Error('An account with this email already exists. Please try logging in instead.');
        } else {
          throw new Error(error.message || 'Signup failed');
        }
        } catch (profileError) {
          console.error('Error creating profile:', profileError);
      // Wait a moment for the trigger to complete, then fetch profile
          captchaToken: undefined
        await new Promise(resolve => setTimeout(resolve, 500));
        }
      }
    } catch (error: any) {
      console.error('Signup error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        throw error;
      }
      setUser(null);
    } catch (error: any) {
      console.error('Logout error:', error);
      throw new Error(error.message || 'Logout failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};