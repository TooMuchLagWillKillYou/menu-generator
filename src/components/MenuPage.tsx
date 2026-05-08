import { cn } from '@/lib/utils';

interface MenuPageProps {
  children: React.ReactNode;
  className?: string;
}

export function MenuPage({ children, className }: MenuPageProps) {
  return (
    <div
      className={cn(
        'w-full min-h-full font-montserrat text-ink flex flex-col',
        className,
      )}
      style={{ padding: '53px 66px' }}
    >
      {children}
    </div>
  );
}

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  size?: 'lg' | 'sm';
}

export function SectionTitle({
  children,
  className,
  size = 'lg',
}: SectionTitleProps) {
  return (
    <h2
      className={cn(
        'font-brolimo text-center font-light leading-none',
        size === 'lg' ? 'mb-10' : 'mb-6',
        className,
      )}
      style={{ fontSize: size === 'lg' ? '44px' : '36px' }}
    >
      {children}
    </h2>
  );
}

interface MenuItemProps {
  name: string;
  price: string;
  description: string;
  note?: string;
  className?: string;
}

export function MenuItem({
  name,
  price,
  description,
  note,
  className,
}: MenuItemProps) {
  return (
    <div className={cn('mb-10', className)}>
      <div className="flex justify-between items-baseline">
        <span style={{ fontSize: '22px', fontWeight: 400 }}>{name}</span>
        <span style={{ fontSize: '22px', fontWeight: 400 }}>{price}</span>
      </div>
      <p style={{ fontSize: '14px', lineHeight: '1.45', marginTop: '6px' }}>
        {description}
      </p>
      {note && (
        <p style={{ fontSize: '11px', marginTop: '4px', color: '#555' }}>
          {note}
        </p>
      )}
    </div>
  );
}

interface PageFooterProps {
  children: React.ReactNode;
}

export function PageFooter({ children }: PageFooterProps) {
  return (
    <div className="mt-auto">
      <p style={{ fontSize: '11px', letterSpacing: '0.02em' }}>{children}</p>
    </div>
  );
}
