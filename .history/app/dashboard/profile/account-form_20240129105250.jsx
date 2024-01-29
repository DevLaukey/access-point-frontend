"use client";
import { useCallback, useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Avatar from "./avatar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AccountForm({ user }) {
  const supabase = createClientComponentClient();
  const [loading, setLoading] = useState(true);
  const [fullname, setFullname] = useState(null);
  const [username, setUsername] = useState(null);
  const [website, setWebsite] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);

  // const getProfile = useCallback(async () => {
  //   try {
  //     setLoading(true);

  //     const { data, error, status } = await supabase
  //       .from("users")
  //       .select("*")
  //       .eq("id", user?.id);

  //     if (error && status !== 406) {
  //       throw error;
  //     }
  //     console.log(data);
  //   } catch (error) {
  //     toast.error("Error loading user data!");
  //   } finally {
  //     setLoading(false);
  //   }
  // }, [user, supabase]);

  // useEffect(() => {
  //   getProfile();
  // }, [user, getProfile]);

  console.log("User", user);
  async function updateProfile({ username, website, avatar_url }) {
    try {
      setLoading(true);

      const { error } = await supabase.from("profiles").upsert({
        id: user?.id,
        full_name: fullname,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      });
      if (error) throw error;
      alert("Profile updated!");
    } catch (error) {
      alert("Error updating the data!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <ToastContainer />
      <div className=" bg-myBG min-h-screen py-5 ">
        <div className="container max-w-screen-md mx-auto md:px-0 px-4 flex justify-center items-center h-[85vh]">
          <div className="mt-5 bg-white  border-2 border-b-8 border-black rounded-xl grid grid-cols-12  justify-between duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100 ">
            <div className="col-span-12 md:col-span-8 sm:pt-10 sm:px-8 p-5 flex ">
              <div className="col-span-4 m-auto hidden md:inline ">
                <img
                  alt="avatar"
                  width="255"
                  height="255"
                  src={user?.user_metadata.picture}
                />
              </div>
              <div className="flex flex-col">

              <h1 className="font-bold sm:text-4xl text-2xl  text-black">
                {user?.user_metadata.full_name}
              </h1>
              <h2 className="font-semibold sm:text-2xl text-xl text-black">
                {user?.email}
              </h2>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div className="form-widget">
        <Avatar
          uid={user.id}
          url={avatar_url}
          size={150}
          onUpload={(url) => {
            setAvatarUrl(url);
            updateProfile({ fullname, username, website, avatar_url: url });
          }}
        />
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="text" value={user?.email} disabled />
        </div>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            type="text"
            value={fullname || ""}
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username || ""}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <button
            className="button primary block"
            onClick={() =>
              updateProfile({ fullname, username, website, avatar_url })
            }
            disabled={loading}
          >
            {loading ? "Loading ..." : "Update"}
          </button>
        </div>

        <div>
          <form action="/auth/signout" method="post">
            <button className="button block" type="submit">
              Sign out
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
