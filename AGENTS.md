# AGENTS.md

## Git workflow (MANDATORY)

After completing any task, ALWAYS run:

```bash
git remote add origin https://github.com/AaronHsiehIsCute/prompt-generate.git || git remote set-url origin https://github.com/AaronHsiehIsCute/prompt-generate.git
git fetch origin --prune
git checkout -B work origin/master
git add .
git commit -m "auto: update project by codex" || echo "nothing to commit"
git push -u origin work