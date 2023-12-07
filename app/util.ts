import { marked } from 'marked'
import * as path from 'path'
import * as fs from 'fs'
import * as url from 'url'

export function getPath(metaUrl: string, _path: string) {
  return path.join(url.fileURLToPath(new URL('.', metaUrl)), _path)
}

const renderer = new marked.Renderer();

renderer.link = function(href, title, text) {
  const link = marked.Renderer.prototype.link.call(this, href, title, text)
  return link.replace('<a','<a target="_blank" ')
}

marked.setOptions({
  renderer: renderer
})

export async function getContentMarkdown(metaUrl: string) {
  const fullPath = getPath(metaUrl, './content.md')
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const htmlContent = marked.parse(fileContents)

  return { htmlContent }
}
