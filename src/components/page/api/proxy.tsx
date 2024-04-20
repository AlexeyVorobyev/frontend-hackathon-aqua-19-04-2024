
  
  import { parse } from 'node-html-parser';

  export default async function handler(req, res) {
    const { url } = req.query;
  
    try {
      const response = await fetch(url);
      const html = await response.text();
      
      // Parse the HTML
      const root = parse(html);
      // Extract text from specific elements
      const paragraphs = root.querySelectorAll('p');
      const textContent = paragraphs.map(p => p.text).join('\n');
  
      res.status(200).json({ text: textContent });
    } catch (error) {
      console.error('Failed to fetch content:', error);
      res.status(500).json({ error: 'Failed to fetch content' });
    }
  }