import { createClient } from '@supabase/supabase-js'

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

async function signupUser(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password
  })

  if (error) {
    console.error('Full Supabase Error:', JSON.stringify(error, null, 2))
  } else {
    console.log('Signup successful:', data)
  }
}

signupUser('test@example.com', 'mypassword123')
