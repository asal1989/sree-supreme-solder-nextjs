// Builds a static export of a temp copy (server-only routes removed) and publishes it
// as a normal (non-force) commit on the gh-pages branch.
import { execSync } from "node:child_process";
import { cpSync, mkdtempSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";

const run = (cmd, cwd) => execSync(cmd, { stdio: "inherit", cwd });
const remote = execSync("git remote get-url origin").toString().trim();
const work = mkdtempSync(join(tmpdir(), "pages-build-"));

const skip = new Set(["node_modules", ".next", "out", ".git", "app/api", "app/admin", "proxy.ts"]);
cpSync(".", work, {
  recursive: true,
  filter: (src) => {
    const rel = src.replace(process.cwd(), "").replaceAll("\\", "/").replace(/^\//, "");
    return !skip.has(rel);
  },
});

run("npm ci --no-audit --no-fund", work);
execSync("npx next build", { stdio: "inherit", cwd: work, env: { ...process.env, GITHUB_PAGES: "true" } });

const site = join(tmpdir(), `pages-site-${Date.now()}`);
const hasBranch = execSync(`git ls-remote --heads ${remote} gh-pages`).toString().trim() !== "";
if (hasBranch) {
  run(`git clone -q --branch gh-pages ${remote} "${site}"`, tmpdir());
  for (const f of readdirSync(site)) if (f !== ".git") rmSync(join(site, f), { recursive: true, force: true });
} else {
  run(`git init -q -b gh-pages "${site}"`, tmpdir());
  run(`git remote add origin ${remote}`, site);
}
cpSync(join(work, "out"), site, { recursive: true });
writeFileSync(join(site, ".nojekyll"), "");
run("git add -A", site);
run('git commit -q -m "Deploy static site to GitHub Pages" --allow-empty', site);
run("git push -u origin gh-pages", site);
rmSync(work, { recursive: true, force: true });
console.log("Published to gh-pages");
