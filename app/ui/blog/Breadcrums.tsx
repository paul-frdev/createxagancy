import { cn } from '@/app/lib/utils';
import Link from 'next/link';

interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
}

type BreadcrumbProps = {
  breadcrumbs: Breadcrumb[];
  Icon?: React.ReactElement;
};

export const Breadcrumbs: React.FC<BreadcrumbProps> = ({ breadcrumbs, Icon }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 block">
      <ol className="flex text-xl md:text-2xl">
        {breadcrumbs.map((breadcrumb, index) => (
          <li className="flex justify-start items-center" key={breadcrumb.href} aria-current={breadcrumb.active}>
            <Link
              href={breadcrumb.href}
              className={cn(
                ` text-base font-lato font-normal flex justify-start items-center text-nowrap`,
                breadcrumb.active ? ' text-primary' : 'text-gray700 hover:text-gray900'
              )}
            >
              {index === 0 ? Icon : null}
              {breadcrumb.label}
            </Link>
            {index < breadcrumbs.length - 1 ? <span className="mx-2 text-gray700 inline-block">|</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
};
