export function MenuPage({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        padding: '10mm 17mm 5mm',
        fontFamily: 'var(--font-montserrat)',
        display: 'flex',
        flexDirection: 'column',
        color: 'var(--color-ink)', // todo: place --color-ink into index.css
      }}
    >
      {children}
    </div>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(var(--spacing) * 25)', // todo: place --spacing into index.css
      }}
    >
      <h2 style={{ fontFamily: 'var(--font-brolimo)', fontSize: '30pt' }}>
        {children}
      </h2>
    </div>
  );
}

export function MenuItemsContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        padding: '5mm 0mm',
      }}
    >
      {children}
    </div>
  );
}

export function MenuItem({
  name,
  price,
  description,
  note,
}: {
  name: string;
  price: string;
  description: string;
  note?: string;
}) {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-brolimo)',
            fontSize: '22px',
            fontWeight: 400,
          }}
        >
          {name}
        </span>
        <span
          style={{
            width: 'calc(var(--spacing) * 8)',
            fontFamily: 'var(--font-brolimo)',
            fontSize: '14pt',
          }}
        >
          {price}
        </span>
      </div>
      <p style={{ fontSize: '12pt', lineHeight: '1.25' }}>{description}</p>
      {note && (
        <p style={{ fontSize: '11px', marginTop: '4px', color: '#555' }}>
          {note}
        </p>
      )}
    </div>
  );
}

export function PageFooter({ children }: { children?: React.ReactNode }) {
  return (
    <div
      style={{
        height: 'calc(var(--spacing) * 10)',
      }}
    >
      <p
        style={{
          display: 'flex',
          alignItems: 'end',
          height: '100%',
          fontSize: '11px',
          letterSpacing: '0.02em',
        }}
      >
        {children}
      </p>
    </div>
  );
}
