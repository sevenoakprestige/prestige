const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { marked } = require('marked');
const { htmlToBlocks } = require('@portabletext/block-tools');
const { JSDOM } = require('jsdom');

const postsDirectory = path.join(__dirname, 'articles');
const fileNames = fs.readdirSync(postsDirectory);

// A minimal block content type definition for htmlToBlocks
const blockContentType = {
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'}
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Number', value: 'number'}
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Code', value: 'code'}
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'URL',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url'
              }
            ]
          }
        ]
      }
    },
    { type: 'image' }
  ]
};

const documents = [];

for (const fileName of fileNames) {
  if (!fileName.endsWith('.md')) continue;
  
  const slug = fileName.replace(/\.md$/, '');
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  const matterResult = matter(fileContents);
  const htmlString = marked(matterResult.content);
  
  const blocks = htmlToBlocks(htmlString, blockContentType, {
    parseHtml: html => new JSDOM(html).window.document,
  });

  // We are skipping uploading the hero image to Sanity for now, 
  // as per the discussion we'll just store the string path (or we can use it as a reference if we upload it).
  // Wait, if we keep the local string path, we can't use 'image' type which expects an asset reference.
  // Actually, we could change heroImage type to string in the schema if we keep local, 
  // but let's just stick to the schema and we can manually fix the images later or modify the schema.
  
  const doc = {
    _type: 'post',
    title: matterResult.data.title,
    slug: { _type: 'slug', current: slug },
    excerpt: matterResult.data.excerpt,
    author: matterResult.data.author || 'Seven Oak Prestige',
    date: matterResult.data.date,
    tags: matterResult.data.tags || [],
    keywords: matterResult.data.keywords || [],
    body: blocks
  };

  documents.push(doc);
}

fs.writeFileSync('posts.json', JSON.stringify(documents, null, 2));
console.log('Successfully generated posts.json');
