# 🛠️ CONFIGURATION
$projectPath = "C:\Users\Shadow\reactflow-weweb-integration"
$repoUrl = "https://github.com/Equilibretech/reactflow-weweb-integration.git"
$commitMessage = "🚀 Déploiement complet du composant React Flow pour WeWeb"

# 🚀 ÉTAPES
Write-Host "🔁 Suppression du dossier .git existant (si présent)..."
Remove-Item -Recurse -Force "$projectPath\.git" -ErrorAction SilentlyContinue

Write-Host "📁 Navigation dans le projet..."
cd $projectPath

Write-Host "🧱 Initialisation Git..."
git init
git remote add origin $repoUrl
git branch -M main

Write-Host "📝 Création ou mise à jour du .gitignore..."
@"
node_modules
build
weweb-zip
*.zip
.DS_Store
.env
"@ | Out-File -Encoding utf8 .gitignore

Write-Host "📦 Installation des dépendances..."
npm install

Write-Host "🏗️ Build du projet..."
npm run build

Write-Host "🗃️ Ajout des fichiers au commit..."
git add .
git commit -m "$commitMessage"

Write-Host "🚀 Push vers GitHub..."
git push -u origin main

Write-Host "✅ Déploiement terminé avec succès ! Va sur WeWeb pour importer ton composant."
