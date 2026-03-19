import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { createServerSupabaseClient } from "@/lib/supabase-server";
import type { Case } from "@/types/case";

/**
 * Standalone client zonder cookies — veilig voor build-time functies
 * zoals generateStaticParams.
 */
function createBuildClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

export async function getCases(): Promise<Case[]> {
  const supabase = await createServerSupabaseClient();
  const { data } = await supabase
    .from("cases")
    .select("*")
    .order("published_at", { ascending: false });

  return (data as Case[]) ?? [];
}

export async function getCaseBySlug(slug: string): Promise<Case | null> {
  const supabase = await createServerSupabaseClient();
  const { data } = await supabase
    .from("cases")
    .select("*")
    .eq("slug", slug)
    .single();

  return (data as Case) ?? null;
}

export async function getAllSlugs(): Promise<string[]> {
  const supabase = createBuildClient();
  const { data } = await supabase.from("cases").select("slug");

  return (data ?? []).map((row) => (row as { slug: string }).slug);
}
