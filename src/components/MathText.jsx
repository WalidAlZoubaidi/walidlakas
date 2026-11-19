import katex from 'katex';

const render = (math, displayMode) =>
  katex.renderToString(math, { displayMode, throwOnError: false, strict: false });

// Renders a string where $...$ segments are inline LaTeX.
export const MathText = ({ text }) =>
  text.split(/(\$[^$]+\$)/g).map((part, i) =>
    part.length > 1 && part.startsWith('$') && part.endsWith('$') ? (
      <span
        key={i}
        className="notranslate"
        translate="no"
        dir="ltr"
        dangerouslySetInnerHTML={{ __html: render(part.slice(1, -1), false) }}
      />
    ) : (
      part
    ),
  );

export const BlockMath = ({ math }) => (
  <div
    className="math-block notranslate"
    translate="no"
    dir="ltr"
    dangerouslySetInnerHTML={{ __html: render(math, true) }}
  />
);
