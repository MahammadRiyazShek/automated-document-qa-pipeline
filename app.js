const STAGES = [
  { name:'Trigger',          msgs:['🔔 Webhook received from Azure DevOps','📅 Scheduled run #1248 started','✅ Permissions verified'] },
  { name:'Blob Ingest',      msgs:['☁️ Connecting to docqastorage.blob.core.windows.net','📥 Pulling 287 documents from input container','✅ Downloaded 287/287 files (142.3 MB)'] },
  { name:'Extract Text',     msgs:['📄 Parsing PDFs with PyPDF2 (124 files)','📝 DOCX via python-docx (98 files)','🖼️ OCR via Tesseract (65 images)','✅ Extracted 1,847,392 tokens'] },
  { name:'Automated Scoring',msgs:['🧪 Running NLP quality scorer','📐 Checking: completeness, clarity, grammar, factual consistency','🤖 Azure OpenAI verification on 50 samples','✅ 287 docs scored. Avg quality: 88.4%'] },
  { name:'Generate Report',  msgs:['📊 Building JSON aggregate report','📈 Generating per-document score breakdown','📝 Creating test-results.xml','✅ Report ready: 287_qa_report_20260601.json'] },
  { name:'Upload Results',   msgs:['☁️ Uploading to reports-out container','📤 Uploaded report (3.2 MB)','📧 Notifying QA team via Teams webhook','✅ Pipeline complete: 4m 18s'] },
];

const logEl = document.getElementById('logContent');
const stages = document.querySelectorAll('.stage');
let running = false;

function log(msg){
  logEl.textContent += msg + '\n';
  logEl.scrollTop = logEl.scrollHeight;
}

async function sleep(ms){ return new Promise(r=>setTimeout(r, ms)); }

async function runPipeline(){
  if(running) return;
  running = true;
  resetPipeline();
  logEl.textContent = `[$(new Date().toLocaleString())] Pipeline build #1248 starting...\n`.replace('$(new Date().toLocaleString())', new Date().toLocaleString());

  for(let i=0; i<STAGES.length; i++){
    const stage = stages[i];
    stage.querySelector('.state').textContent = '⚙️ Running...';
    stage.classList.add('running');
    log(`\n━━━ Stage ${i+1}: ${STAGES[i].name} ━━━`);
    for(const m of STAGES[i].msgs){
      await sleep(450);
      log(m);
    }
    stage.querySelector('.state').textContent = '✅ Success';
    stage.classList.remove('running');
    stage.classList.add('done');
    await sleep(200);
  }
  log('\n🎉 Pipeline finished successfully.\n📊 Avg quality score: 88.4%\n⏱️ Total duration: 4m 18s');
  running = false;
}

function resetPipeline(){
  stages.forEach(s => {
    s.classList.remove('done','running');
    s.querySelector('.state').textContent = '⏳ Pending';
  });
  logEl.textContent = 'Click "Run Pipeline" to start...';
}
