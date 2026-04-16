# Publish to GitHub (Free Insider)

This folder is a **standalone Git repository** (its own `.git`). It is separate from the parent `NotesGoogleDocsFiles` repo.

## 1. Create an empty repository on GitHub

1. Open [github.com/new](https://github.com/new).
2. **Repository name:** `Free-Insider` (or `free-insider`).
3. Leave **without** README, .gitignore, or license (this repo already has them).
4. Create the repository.

## 2. Add remote and push

From this directory:

```bash
cd /path/to/NotesGoogleDocsFiles/FreeInsider
git remote add origin https://github.com/YOUR_USERNAME/Free-Insider.git
git push -u origin main
```

Use SSH if you prefer:

```bash
git remote add origin git@github.com:YOUR_USERNAME/Free-Insider.git
git push -u origin main
```

## 3. Optional: ignore this folder in the parent repo

If `NotesGoogleDocsFiles` should not track `FreeInsider/`, add to the parent `.gitignore`:

```
# Standalone repo — see FreeInsider/PUBLISH.md
FreeInsider/
```
