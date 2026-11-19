import katex from 'katex';

const render = (math, displayMode) =>
  katex.renderToString(math, { displayMode, throwOnError: false, strict: false });

// optional (French) space + punctuation, e.g. " :" or "،"
const PUNCTUATION = /^[ \u00a0]?[.,:;!?،؛؟]+/;

const InlineMath = ({ math }) => (
  <span
    className="math-inline notranslate"
    translate="no"
    dir="ltr"
    dangerouslySetInnerHTML={{ __html: render(math, false) }}
  />
);

// Renders a string where $...$ segments are inline LaTeX. Punctuation that
// directly follows a formula is kept on the same line as the formula.
export const MathText = ({ text }) => {
  const parts = text.split(/(\$[^$]+\$)/g);
  const out = [];
  for (let i = 0; i < parts.length; i += 1) {
    const part = parts[i];
    if (part.length > 1 && part.startsWith('$') && part.endsWith('$')) {
      const next = parts[i + 1] ?? '';
      const punct = next.match(PUNCTUATION)?.[0] ?? '';
      if (punct) parts[i + 1] = next.slice(punct.length);
      out.push(
        <span key={i} className="math-glue">
          <InlineMath math={part.slice(1, -1)} />
          {punct.replace(' ', '\u00a0')}
        </span>,
      );
    } else if (part) {
      out.push(part);
    }
  }
  return out;
};

export const BlockMath = ({ math }) => (
  <div
    className="math-block notranslate"
    translate="no"
    dir="ltr"
    dangerouslySetInnerHTML={{ __html: render(math, true) }}
  />
);
