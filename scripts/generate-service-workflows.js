const path = require('path')
const fs = require('fs')

const servicesDir = path.join(__dirname, '..', 'services')
const workflowDir = path.join(__dirname, '..', '.github', 'workflows')
const template = fs.readFileSync(path.join(__dirname, 'service.template.yml'), 'utf8')
const services = fs.readdirSync(servicesDir, 'utf8')

ensureWorkflowDirectoryExists()

for (const service of services) {
  if (workflowExists(service)) continue
  const workflow = template.replace(/{{SERVICE}}/g, service)
  fs.writeFileSync(path.join(workflowDir, `${service}.yml`), workflow)
  console.log(`Generated workflow for ${service}`)
}

function ensureWorkflowDirectoryExists() {
  if (!fs.existsSync(workflowDir)) fs.mkdirSync(workflowDir, { recursive: true })
}

function workflowExists(service) {
  return fs.existsSync(path.join(workflowDir, service + '.yml'))
}
