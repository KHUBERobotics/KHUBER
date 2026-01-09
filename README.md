# KHUBER Team Page (GitHub Pages)

This repository hosts the KHUBER (Kyung Hee University Biomedical Engineering Robotics) public team website using **MkDocs Material** and **GitHub Pages**.

## Quick start (local)
```bash
pip install mkdocs-material pymdown-extensions
mkdocs serve
```
Open: http://127.0.0.1:8000

## Deploy (GitHub Pages)
1. Push to `main`
2. Repo → Settings → Pages → **Build and deployment** = GitHub Actions
3. The workflow `.github/workflows/pages.yml` deploys automatically.
