// Shows where an answer came from: the exact markham.ca page when checked, otherwise a sample notice
export const AnswerSource = ({ source, linkClassName = '' }: { source?: string; linkClassName?: string }) =>
  source ? (
    <>
      Checked against markham.ca.{' '}
      <a href={source} target="_blank" rel="noopener noreferrer" className={`underline ${linkClassName}`}>
        View source
      </a>
    </>
  ) : (
    <>
      Sample answer. Confirm details at{' '}
      <a href="https://www.markham.ca" target="_blank" rel="noopener noreferrer" className={`underline ${linkClassName}`}>
        markham.ca
      </a>
      .
    </>
  );
