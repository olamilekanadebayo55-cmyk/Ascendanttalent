export type RecordRow = { label: string; value: string };

/**
 * The ruled "record" shown with every listing: classification, source,
 * original posting date, our last-verified date, authorization status.
 * On the homepage it is used as a clearly labelled specimen.
 */
export function ProvenanceRecord({
  title,
  rows,
  caption,
}: {
  title: string;
  rows: RecordRow[];
  caption?: string;
}) {
  return (
    <figure className="record">
      <div className="record-box">
        <div className="record-title">{title}</div>
        <dl>
          {rows.map((r) => (
            <div className="record-row" key={r.label}>
              <dt>{r.label}</dt>
              <dd>{r.value}</dd>
            </div>
          ))}
        </dl>
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
