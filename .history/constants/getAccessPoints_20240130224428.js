const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase client
const supabase = createClient('YOUR_SUPABASE_URL', 'YOUR_SUPABASE_API_KEY');

// Function to get access points
async function getAccessPoints() {
    try {
        // Query the access points table
        const { data, error } = await supabase.from('access_points').select('*');

        if (error) {
            throw new Error(error.message);
        }

        return data;
    } catch (error) {
        console.error('Error retrieving access points:', error);
        throw error;
    }
}

module.exports = getAccessPoints;
