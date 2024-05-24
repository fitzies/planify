export function formatText(text: string): JSX.Element {
  // Split the text by * and \n and keep track of whether the part should be bold
  const parts = text.split(/(\*|\n|#{1,4}[^#]*#{1,4})/);
  const result = [];

  let bold = false;

  for (const part of parts) {
    if (part.startsWith("#")) {
      // Handle header tags
      const match = part.match(/^#+/);
      const hashCount = match ? match[0].length : 0;
      const strippedPart = part.replace(/^#+|#+$/g, ""); // Remove leading and trailing #
      let element;
      switch (hashCount) {
        case 1:
          element = (
            <h1 key={result.length} className="text-2xl font-bold">
              {strippedPart}
            </h1>
          );
          break;
        case 2:
          element = (
            <h2 key={result.length} className="text-xl font-semibold">
              {strippedPart}
            </h2>
          );
          break;
        case 3:
          element = (
            <h3 key={result.length} className="text-lg font-medium">
              {strippedPart}
            </h3>
          );
          break;
        default:
          element = <span key={result.length}>{part}</span>;
      }
      result.push(element);
    } else if (part === "*") {
      bold = !bold; // Toggle bold
    } else if (part === "\n") {
      result.push(<br key={result.length} />);
    } else if (bold) {
      result.push(<strong key={result.length}>{part}</strong>);
    } else {
      result.push(<span key={result.length}>{part}</span>);
    }
  }

  return <>{result}</>;
}
