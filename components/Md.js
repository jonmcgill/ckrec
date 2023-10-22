import { marked } from 'marked'

const renderer = new marked.Renderer();

renderer.link = function(href, title, text) {
  const link = marked.Renderer.prototype.link.call(this, href, title, text)
  return link.replace('<a','<a target="_blank" ')
}

marked.setOptions({
  renderer: renderer
})

export default function Md({ children }) {
  return (
    <>
      <div
        className="md-content"
        dangerouslySetInnerHTML={{ __html: marked.parse(children) }}
      />
      <style jsx global>{`
        p,
        ol,
        li {
          text-align: left;
        }
  
        ol {
          margin-left: 40px;
        }
  
        li {
          margin-bottom: 12px;
        }
  
        img {
          float: left;
          margin-right: 18px;
          border-radius: 2px;
          width: 40%;
          max-width: 150px;
        }
      `}</style>
    </>
  )
}