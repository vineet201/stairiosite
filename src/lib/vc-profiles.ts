export type VcProfile = {
  id: string;
  name: string;
  role: string;
};

export const VC_PROFILES: VcProfile[] = [
  { id: "vineet", name: "Vineet Kumar Sinha", role: "COO" },
  {
    id: "shivam",
    name: "Shivam Srivastava",
    role: "Chief Strategic Communications Officer",
  },
  {
    id: "moumita",
    name: "Moumita Ray",
    role: "Chief Strategic Communications Officer",
  },
  { id: "alka", name: "Alka Prasad", role: "Founding Director" },
];

export function getVcProfileById(id: string): VcProfile | undefined {
  return VC_PROFILES.find((profile) => profile.id === id);
}
