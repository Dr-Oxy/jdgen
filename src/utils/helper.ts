import axios from 'axios';

import { AIResponse } from './context';

const maxToken: number = 1000;

export const getJobDescription = async (
  prompt: string,
  key: string | undefined,
): Promise<AIResponse> => {
  try {
    const res = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: prompt },
        ],
        max_tokens: maxToken,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${key}`,
        },
      },
    );

    const data = res.data;
    const response = data?.choices[0]?.message?.content?.trim();

    return { response };
  } catch (error: any) {
    const errorMessage =
      error?.response?.data?.error?.message || error?.message || String(error);
    return {
      error: `(Error StatusCode: ${error?.response?.status}) ${errorMessage}`,
    };
  }
};

// const prompt2 = `Generate a detailed job description for a ${data.jobTitle} with ${data.jobExp.value} years of experience, working ${data.jobType.value}. your responses are HTML formatted for better presentation, do not include ordinary markdown and structured this way:
//     - Job Title (contains experience level based on the years provided, determine if it's a junior, intermediate or senior)
//     - Job Description (make it brief)
//     - Key Responsibilities (presented as a list)
//     - Qualifications
//     - What We Offer
//     `;

const formatJobDescription1 = (description: string) => {
  const formattedDescription = description
    .replace(/\*\*Job Title:\*\*/g, '<h3>Job Title</h3>')
    .replace(/\*\*Job Description:\*\*/g, '<h3>Job Description:</h3>')
    .replace(/\*\*Key Responsibilities:\*\*/g, '<h3>Key Responsibilities:</h3>')
    .replace(/\*\*Qualifications:\*\*/g, '<h3>Qualifications:</h3>')
    .replace(/\*\*What We Offer:\*\*/g, '<h3>What We Offer:</h3>')
    .replace(/-\s/g, '<li>')
    .replace(/(\n|\r)/g, '</li>');

  return formattedDescription;
};

const formatJDasMD1 = (description: string) => {
  const formattedDescription = description
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold text
    .replace(/\*(.*?)\*/g, '<em>$1</em>') // Italics text
    .replace(/^# (.*$)/gim, '<h1>$1</h1>') // H1
    .replace(/^## (.*$)/gim, '<h2>$1</h2>') // H2
    .replace(/^### (.*$)/gim, '<h3>$1</h3>') // H3
    .replace(/^#### (.*$)/gim, '<h4>$1</h4>') // H4
    .replace(/^##### (.*$)/gim, '<h5>$1</h5>') // H5
    .replace(/^###### (.*$)/gim, '<h6>$1</h6>') // H6
    .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>') // Blockquotes
    .replace(/^\*\s(.*)/gim, '<ul><li>$1</li></ul>') // Unordered lists
    .replace(/^\d+\.\s(.*)/gim, '<ol><li>$1</li></ol>') // Ordered lists
    .replace(/-\s/g, '<li>')
    .replace(/(\n|\r)/g, '</li>')
    .replace(/\n$/gim, '<br />') // Line breaks
    .replace(/<\/ul>\s<ul>/gim, '') // Remove extra <ul> tags
    .replace(/<\/ol>\s<ol>/gim, ''); // Remove extra <ol> tags

  return formattedDescription;
};

const formatJobDescription = (description: string) => {
  const formattedDescription = description
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold text
    .replace(/- /g, '<li>') // List items
    .replace(/\n/g, '</li><br />'); // Line breaks and closing list items
  // .replace(/<br \/><li>/g, '<br /><ul><li>'); // Start unordered list
  // .replace(/<\/li><br \/>/, '</li></ul><br />') // End unordered list
  // .replace(/<\/li><br \/>$/, '</li></ul>'); // End unordered list at end

  return formattedDescription;
};

const formatJDasMD = (description: string) => {
  const formattedDescription = description
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold text
    .replace(/\*(.*?)\*/g, '<em>$1</em>') // Italics text
    .replace(/^# (.*$)/gim, '<h1>$1</h1>') // H1
    .replace(/^## (.*$)/gim, '<h2>$1</h2>') // H2
    .replace(/^### (.*$)/gim, '<h3>$1</h3>') // H3
    .replace(/^#### (.*$)/gim, '<h4>$1</h4>') // H4
    .replace(/^##### (.*$)/gim, '<h5>$1</h5>') // H5
    .replace(/^###### (.*$)/gim, '<h6>$1</h6>') // H6
    .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>') // Blockquotes
    .replace(/^\*\s(.*)/gim, '<ul><li>$1</li></ul>') // Unordered lists
    .replace(/^\d+\.\s(.*)/gim, '<ol><li>$1</li></ol>') // Ordered lists
    .replace(/-\s/g, '<li>') // List items
    .replace(/(\n|\r)/g, '</li>') // Line breaks for lists
    .replace(/\n$/gim, '<br />') // Line breaks
    .replace(/<\/ul>\s<ul>/gim, '') // Remove extra <ul> tags
    .replace(/<\/ol>\s<ol>/gim, ''); // Remove extra <ol> tags

  return formattedDescription;
};

const copyToClipboard = (jobDesc: string) => {
  const plainText = jobDesc
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold markdown
    .replace(/- /g, '- ') // Keep list items as plain text
    .replace(/\n/g, '\n'); // Preserve newlines

  const JD = formatJDasMD(jobDesc);

  navigator.clipboard
    .writeText(JD)
    .then(() => {
      alert('Job description copied to clipboard!');
    })
    .catch((err: any) => {
      console.error('Failed to copy text: ', err);
      alert('Failed to copy text');
    });
};

const formatJDasMDs = (description: string) => {
  const formattedDescription = description
    // Bold text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Italics text
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // H1 - H6
    .replace(/^###### (.*$)/gim, '<h6>$1</h6>')
    .replace(/^##### (.*$)/gim, '<h5>$1</h5>')
    .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    // Blockquotes
    .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
    // Unordered lists
    .replace(/^\*\s+(.*)$/gim, '<ul><li>$1</li></ul>')
    .replace(/^\+\s+(.*)$/gim, '<ul><li>$1</li></ul>')
    .replace(/^\-\s+(.*)$/gim, '<ul><li>$1</li></ul>')
    // Ordered lists
    .replace(/^\d+\.\s+(.*)$/gim, '<ol><li>$1</li></ol>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // Code blocks
    .replace(/```([^`]+)```/gim, '<pre><code>$1</code></pre>')
    // Links
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
    // Images
    .replace(/\!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2" />')
    // Line breaks
    .replace(/\n/g, '<br />')
    // Remove any potential <ul> or <ol> tags that may wrap single items
    .replace(/<\/ul><ul>/g, '')
    .replace(/<\/ol><ol>/g, '')
    // Ensure correct closing of <ul> and <ol> tags
    .replace(/<\/li><br \/><li>/g, '</li><li>')
    .replace(/<ul><br \/><li>/g, '<ul><li>')
    .replace(/<\/li><br \/><\/ul>/g, '</li></ul>')
    .replace(/<ol><br \/><li>/g, '<ol><li>')
    .replace(/<\/li><br \/><\/ol>/g, '</li></ol>');

  return formattedDescription;
};
