import fs from 'node:fs';

// 获取file

/**
 * apply 钩子 
 * 参数 config 当前vite.config中的配置 
 * 参数 options mode(打包环境) command(开发（serve）和构建（build） ) 执行命令 isSsrBuild 是不是服务端渲染  isPreview 预览
 */

const Timestamp = new Date().getTime()
fs.writeFile('public/version.json', '{"version":' + Timestamp + '}\n', function (err) {
    if (err) {
        return console.log(err)
    }
})

export const versionPlugin = () => {
    return {
        name: 'transform-html-file',
        transform(code) {
            console.log('code',code)
        },
        transformIndexHtml(html, ctx) {
            return {
                html,
                tags: [
                    {
                        // <meta name="version" id="BPMVersion" content="<%- title %>" />
                        // 放到 body 末尾，可取值还有`head`|`head-prepend`|`body-prepend`，顾名思义
                        injectTo: 'head',
                        // 标签属性定义
                        attrs: { name: 'version', id: 'module', content: Timestamp },
                        // 标签名
                        tag: 'script',
                    },
                ],
            }
        },
    }
}


