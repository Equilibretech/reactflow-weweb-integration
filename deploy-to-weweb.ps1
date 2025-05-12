# 🔧 CONFIGURATION
$projectPath = "C:\Users\Shadow\reactflow-weweb-integration"
$repoUrl = "https://github.com/Equilibretech/reactflow-weweb-integration.git"
$commitMessage = "✅ Build + weweb.config.json pour intégration WeWeb"

# 🚀 SCRIPT
Write-Host "📁 Navigation dans le dossier projet..."
cd $projectPath

# 🧹 Réinitialiser git si besoin
if (-not (Test-Path ".git")) {
    Write-Host "🧱 Initialisation Git..."
    git init
    git remote add origin $repoUrl
    git branch -M main
}

# 📝 Génération du fichier weweb.config.json
@"
{
  "name": "React Flow Synoptic",
  "version": "1.0.0",
  "description": "Composant React Flow pour visualisation de graph Xano",
  "main": "build/static/js/main.js",
  "weweb": {
    "type": "component",
    "props": [
      {
        "name": "roomId",
        "label": "Room ID",
        "type": "string",
        "default": ""
      }
    ]
  }
}
"@ | Out-File -Encoding utf8 weweb.config.json
Write-Host "✅ Fichier weweb.config.json généré."

# 🛠️ Création ou mise à jour du .gitignore
$gitignore = @"
node_modules
# build ← temporairement désactivé pour push
weweb-zip
*.zip
.DS_Store
.env
"@
$gitignore | Out-File -Encoding utf8 .gitignore
Write-Host "✅ .gitignore mis à jour."

# 📦 Build du projet
Write-Host "📦 Installation des dépendances..."
npm install

Write-Host "🏗️ Génération du build..."
npm run build

# ⏫ Commit et push
git add .
git commit -m "$commitMessage"
git push -u origin main --force
Write-Host "🚀 Déploiement terminé. Retourne dans WeWeb pour importer le composant."
