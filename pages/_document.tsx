import Document, { DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

// you can read next.js public document
// https://nextjs.org/docs/advanced-features/custom-document#caveats

// 오류가 발생하지만 ssr styled-component가 작동한다 뭔 오륜지 모르겟다.
class ServerSideStyledComponent extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originPage = ctx.renderPage

    try {
      ctx.renderPage = () => originPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
      })

      const initProps = await Document.getInitialProps(ctx)
      
      return {
        ...initProps, styles: (
          <>
            {initProps.styles}
            {sheet.getStyleElement()}
          </>
      )}

    } finally { 
      sheet.seal()
    }
  }
}

export default ServerSideStyledComponent