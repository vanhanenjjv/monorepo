const path = require('path')
const fs = require('fs')

const template = fs.readFileSync(path.join(__dirname, 'service.template.yaml'), 'utf8')
const services = fs.readdirSync(path.join(__dirname, '..', 'services'), 'utf8')

const githubDir = path.join(__dirname, '..', '.github')

if (!fs.existsSync(githubDir)) fs.mkdirSync(githubDir)

for (const service of services) {
  console.log(`Generating workflow for ${service}`)
  const workflow = template.replace(/{{SERVICE}}/g, service)
  fs.writeFileSync(path.join(githubDir, `${service}.yaml`), workflow)
}
