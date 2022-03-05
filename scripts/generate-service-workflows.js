const path = require('path')
const fs = require('fs')

const template = fs.readFileSync(path.join(__dirname, 'service.template.yml'), 'utf8')
const services = fs.readdirSync(path.join(__dirname, '..', 'services'), 'utf8')

const workflowDir = path.join(__dirname, '..', '.github', 'workflows')

if (!fs.existsSync(workflowDir)) fs.mkdirSync(workflowDir, { recursive: true })

for (const service of services) {
  console.log(`Generating workflow for ${service}`)
  const workflow = template.replace(/{{SERVICE}}/g, service)
  fs.writeFileSync(path.join(workflowDir, `${service}.yml`), workflow)
}
