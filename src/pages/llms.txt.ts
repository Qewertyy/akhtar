import { cal, certs, domains, email, experience, github, projects, side, tools } from "../data/portfolio";

const site = "https://akhtark.dev";

export function GET() {
  const body = [
    "# Akhtar Khan",
    "",
    `> Founding backend engineer at Ryvn (ZanEvra Inc.), based in Mumbai, India. 4+ years building distributed services, AI agents and real-time systems in Go, TypeScript and Python, down to native iOS/Android when needed. Open to early-stage startup roles. Contact: ${email}.`,
    "",
    "## Work",
    "",
    ...projects.flatMap((p) => [
      `### ${p.name} (${p.kind})`,
      "",
      `Role: ${p.role}. ${p.intro}`,
      "",
      ...p.did.map((d) => `- ${d}`),
      `- Stack: ${p.stack.join(", ")}`,
      `- Page: ${site}/work/${p.slug}/`,
      "",
    ]),
    "## Experience",
    "",
    ...experience.flatMap((e) => [`### ${e.role}, ${e.company} (${e.period.endsWith("—") ? e.period.replace("—", "– present") : e.period.replace("—", "–")})`, "", ...e.points.map((x) => `- ${x}`), ""]),
    "## Domains",
    "",
    ...domains.map((d) => `- ${d.name}: ${d.tags}`),
    "",
    "## Languages & tools",
    "",
    ...tools.map((t) => `- ${t.group}: ${t.items}`),
    "",
    "## Education & certifications",
    "",
    ...certs.map((c) => `- ${c}`),
    "",
    "## Links",
    "",
    `- [Resume (PDF)](${site}/resume/akhtar-khan-resume.pdf)`,
    `- [GitHub](${github})`,
    `- [Email](mailto:${email})`,
    `- [Book a 15-min call](${cal})`,
    "",
    "## Optional",
    "",
    ...side.map((s) => `- [${s.name}](${s.href}): ${s.desc}`),
    "",
  ].join("\n");

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
