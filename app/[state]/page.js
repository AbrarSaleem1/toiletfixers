import { redirect } from "next/navigation";
import { getState } from "../../lib/locations";

export default async function StateRedirectPage({ params }) {
  const { state } = await params;
  const stateObj = getState(state);
  if (stateObj) {
    redirect(`/states/${stateObj.slug}/`);
  }
  redirect("/");
}
