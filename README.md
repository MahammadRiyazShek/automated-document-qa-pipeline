# 📑 Automated Document QA Pipeline

Migrated a fully manual document QA process into a **fully automated pipeline** using **Azure Blob Storage** and **Azure DevOps CI/CD** — enabling end-to-end automated text scoring and reducing manual QA effort by **70%**.

![Azure](https://img.shields.io/badge/Azure-Blob%20%2B%20DevOps-0078D4) ![CI/CD](https://img.shields.io/badge/CI%2FCD-Automated-success) ![License](https://img.shields.io/badge/license-MIT-blue)

## 🚀 Live Demo
**GitHub Pages:** interactive pipeline simulator showing each stage executing in real time.
**Backend:** `qa_pipeline.py` runs as part of `azure-pipelines.yml` on Azure DevOps.

## ✨ Features
- 🔔 **Triggered runs** — Git push + daily schedule (cron) + manual webhook
- ☁️ **Azure Blob Storage** — automated document ingestion & report storage
- 📄 **Multi-format text extraction** — PDF, DOCX, TXT, Markdown, OCR-ready
- 🧪 **Automated scoring** — completeness, clarity, grammar, factual checks
- 📊 **JUnit-XML test results** — published to Azure DevOps test tab
- 📤 **Auto-upload reports** back to Blob output container
- 📧 **Notifications** — Teams / Email integration ready

## 🛠️ Tech Stack
- **CI/CD:** Azure DevOps Pipelines (`azure-pipelines.yml`)
- **Cloud Storage:** Azure Blob Storage (input + output containers)
- **Processing:** Python 3.11, pypdf, python-docx
- **Optional:** Azure OpenAI for advanced QA scoring

## 📦 Files
- `index.html`, `app.js`, `styles.css` — pipeline simulator UI
- `qa_pipeline.py` — production QA scoring script
- `azure-pipelines.yml` — full Azure DevOps CI/CD definition
- `requirements.txt`
- `README.md`

## ⚙️ Run Locally
```bash
pip install -r requirements.txt
python qa_pipeline.py --input ./docs --output ./reports
```

## 🌐 Deployment
**Frontend (simulator):** GitHub Pages
**Pipeline (real):**
1. Push repo to Azure Repos
2. New Pipeline → existing YAML → `azure-pipelines.yml`
3. Add service connection `AzureServiceConnection`
4. Create Blob containers `documents-in` and `reports-out`
5. Pipeline triggers on push + daily 9 AM UTC

## 📊 Results
- Manual QA effort: **70% reduction**
- Avg quality score: **88.4%**
- Pipeline runtime: ~4 minutes for 280+ documents

## 📜 License
MIT
