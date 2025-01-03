"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "../../../../supabase/utils/server";

export async function login(formData: FormData) {
  try {
    const supabase = await createClient();

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };
    console.log(data);

    const { error } = await supabase.auth.signInWithPassword(data);

    if (error) {
      console.log(error);
      return;
      // redirect("/error");
    }
  } catch (error) {
    console.log(error);
  } finally {
    revalidatePath("/", "layout");
    redirect("/");
  }
}

export async function signup(formData: FormData) {
  try {
    const supabase = await createClient();

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const { error } = await supabase.auth.signUp(data);

    if (error) {
      console.log(error);
      return;
      //redirect("/error");
    }

    //revalidatePath("/", "layout");
    // redirect("/");
  } catch (error) {
    console.log(error);
  } finally {
    revalidatePath("/", "layout");
    redirect("/");
  }
}

export async function signOut() {
  try {
    const supabase = await createClient();

    await supabase.auth.signOut();

    redirect("/login");
  } catch (error) {
    console.log(error);
  }
}
