// Renders a schema.org JSON-LD block. Server component; safe for static export.
const JsonLd: React.FC<{ data: Record<string, unknown> }> = ({ data }) => (
  <script
    type="application/ld+json"
    // JSON.stringify output is safe to inline; no user input flows in.
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

export default JsonLd;
