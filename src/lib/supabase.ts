import { AppState, Platform } from 'react-native'
import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient, processLock } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://dftbblwfjmhormxpnrju.supabase.co' 
const SUPABASE_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmdGJibHdmam1ob3JteHBucmp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUxMDk5MDUsImV4cCI6MjA3MDY4NTkwNX0.UzT18qdu3u-aa9FF6fs8qbMQOCrIq2Dtv9uAzZQlf9s'


export const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY, {
  auth: {
    ...(Platform.OS !== "web" ? { storage: AsyncStorage } : {}),
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
    lock: processLock,
  },
})

// Tells Supabase Auth to continuously refresh the session automatically
// if the app is in the foreground. When this is added, you will continue
// to receive `onAuthStateChange` events with the `TOKEN_REFRESHED` or
// `SIGNED_OUT` event if the user's session is terminated. This should
// only be registered once.
if (Platform.OS !== "web") {
  AppState.addEventListener('change', (state) => {
    if (state === 'active') {
      supabase.auth.startAutoRefresh()
    } else {
      supabase.auth.stopAutoRefresh()
    }
  })
}
