import { AppConfig } from 'config/types';

export default (config: AppConfig) => ({
  base: '',
  script: '',
  link: [
    ...config.link.map(
      ({ rel, size, type, as, href, crossorigin }) => `
            <link
                rel="${rel}"
                ${size ? `size="${size}"` : ''}
                ${type ? `type="${type}"` : ''}
                ${as ? `as="${as}"` : ''}
                ${crossorigin ? `crossorigin="${crossorigin}"` : ''}
                href="${href}"
                data-react-helmet="true"
               >
        `
    ),
    '<link rel="manifest" href="/manifest.json">',
  ].join('\n'),
  meta: config.meta
    .map(({ name, content }) => `<meta name="${name}" content="${content}">`)
    .join('\n'),
  ogMeta: config.ogMeta
    ? config.ogMeta
        .map(
          ({ property, content }) =>
            `<meta property="${property}" content="${content}">`
        )
        .join('\n')
    : '',
  title: `<title>${config.title}</title>`,
  htmlAttributes: Object.keys(config.htmlAttributes).reduce(
    (acc, key) =>
      `${acc} ${key} = "${
        (config.htmlAttributes as Record<string, string>)[key]
      }"`,
    ''
  ),
});
