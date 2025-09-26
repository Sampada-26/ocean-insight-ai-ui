interface MessageContentProps {
  content: string;
}

const MessageContent = ({ content }: MessageContentProps) => {
  // Function to parse and render formatted content
  const renderFormattedContent = (text: string) => {
    const lines = text.split('\n');
    
    return lines.map((line, index) => {
      // Handle headers (# ## ###)
      if (line.startsWith('# ')) {
        return (
          <h1 key={index} className="text-2xl font-bold text-gray-900 mb-4 mt-6 first:mt-0">
            {line.replace('# ', '')}
          </h1>
        );
      }
      
      if (line.startsWith('## ')) {
        return (
          <h2 key={index} className="text-xl font-semibold text-gray-800 mb-3 mt-5 first:mt-0">
            {line.replace('## ', '')}
          </h2>
        );
      }
      
      if (line.startsWith('### ')) {
        return (
          <h3 key={index} className="text-lg font-medium text-gray-700 mb-2 mt-4 first:mt-0">
            {line.replace('### ', '')}
          </h3>
        );
      }
      
      // Handle empty lines (add spacing)
      if (line.trim() === '') {
        return <div key={index} className="h-2"></div>;
      }
      
      // Handle bullet points (• or *)
      if (line.startsWith('• ') || line.startsWith('* ')) {
        return (
          <div key={index} className="flex items-start mb-2">
            <span className="text-blue-600 mr-2 mt-1">•</span>
            <span className="text-gray-700 leading-relaxed">
              {formatInlineText(line.replace(/^[•*] /, ''))}
            </span>
          </div>
        );
      }
      
      // Handle regular paragraphs
      if (line.trim()) {
        return (
          <p key={index} className="text-gray-800 leading-relaxed mb-3">
            {formatInlineText(line)}
          </p>
        );
      }
      
      return null;
    });
  };
  
  // Function to handle inline formatting (**bold**, *italic*, etc.)
  const formatInlineText = (text: string) => {
    const parts = [];
    let currentText = text;
    let key = 0;
    
    while (currentText.length > 0) {
      // Handle **bold** text
      const boldMatch = currentText.match(/\*\*(.*?)\*\*/);
      if (boldMatch) {
        const beforeBold = currentText.substring(0, boldMatch.index);
        const boldText = boldMatch[1];
        
        if (beforeBold) {
          parts.push(<span key={key++}>{beforeBold}</span>);
        }
        
        parts.push(
          <strong key={key++} className="font-semibold text-gray-900">
            {boldText}
          </strong>
        );
        
        currentText = currentText.substring(boldMatch.index! + boldMatch[0].length);
      }
      // Handle *italic* text (single asterisk, but not double)
      else {
        const italicMatch = currentText.match(/(?<!\*)\*(?!\*)([^*]+)\*(?!\*)/);
        if (italicMatch) {
          const beforeItalic = currentText.substring(0, italicMatch.index);
          const italicText = italicMatch[1];
          
          if (beforeItalic) {
            parts.push(<span key={key++}>{beforeItalic}</span>);
          }
          
          parts.push(
            <em key={key++} className="italic text-gray-800">
              {italicText}
            </em>
          );
          
          currentText = currentText.substring(italicMatch.index! + italicMatch[0].length);
        } else {
          // No more formatting, add the rest
          parts.push(<span key={key++}>{currentText}</span>);
          break;
        }
      }
    }
    
    return parts.length > 0 ? parts : text;
  };

  return (
    <div className="prose prose-sm max-w-none">
      {renderFormattedContent(content)}
    </div>
  );
};

export default MessageContent;