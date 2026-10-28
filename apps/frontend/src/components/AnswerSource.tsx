// Names the official site an answer was checked against and links to the exact page
export const AnswerSource = ({ source, linkClassName = '' }: { source: string; linkClassName?: string }) => (
  <>
    Checked against {new URL(source).hostname.replace(/^www\./, '')}.{' '}
    <a href={source} target="_blank" rel="noopener noreferrer" className={`underline ${linkClassName}`}>
      View source
    </a>
  </>
);
