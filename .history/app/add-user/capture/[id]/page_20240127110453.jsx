"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";


export default function UserPage() {
  const router = useRouter();
  const { id } = router.query;
  const supabase = createClientComponentClient();

  useEffect(() => {
    if (id) {
      fetchUserDetails();
    }
  }, [id]);

  const fetchUserDetails = async () => {
    try {
      // Fetch user details from Supabase using the ID
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        throw new Error(error.message);
      }

      // Insert the data into the "users" table
      const { data: insertedData, error: insertError } = await supabase
        .from('users')
        .insert(data);

      if (insertError) {
        throw new Error(insertError.message);
      }

      // Update the "users" table
      const { data: updatedData, error: updateError } = await supabase
        .from('users')
        .update({ ...data, ...insertedData })
        .eq('id', id);

      if (updateError) {
        throw new Error(updateError.message);
      }

      console.log('User details updated:', updatedData);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return <div>User Page</div>;
}
