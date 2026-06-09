// connects to our database and exports a supabase object

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://uhfnmbpflwliruspgeob.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_QHn5Uq-QgUFn1s1vFA2eeg_PyyQLH24";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);