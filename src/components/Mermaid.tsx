'use client';

import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

interface MermaidProps {
  chart: string;
}

mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  themeVariables: {
    primaryColor: '#1a1a2e',
    primaryTextColor: '#fff',
    primaryBorderColor: '#533483',
    lineColor: '#e94560',
    secondaryColor: '#16213e',
    tertiaryColor: '#0f3460',
    background: '#0a0a0a',
    mainBkg: '#1a1a2e',
    nodeBorder: '#533483',
    clusterBkg: '#16213e',
    clusterBorder: '#533483',
    titleColor: '#fff',
    edgeLabelBackground: '#1a1a2e',
  },
  flowchart: {
    htmlLabels: true,
    curve: 'basis',
  },
});

export default function Mermaid({ chart }: MermaidProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const renderChart = async () => {
      if (!chart || !containerRef.current) return;

      try {
        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
        const { svg } = await mermaid.render(id, chart);
        setSvg(svg);
        setError('');
      } catch (err) {
        console.error('Mermaid error:', err);
        setError('Failed to render diagram');
      }
    };

    renderChart();
  }, [chart]);

  if (error) {
    return (
      <div className="my-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
        {error}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="my-6 w-full overflow-x-auto flex justify-center"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
