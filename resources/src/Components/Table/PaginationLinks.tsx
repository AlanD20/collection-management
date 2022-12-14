import React from 'react';
import { DefProps } from '@/@types/Global';
import { MetaPaginator } from '@/@types/Response';
import { Link, usePage } from '@inertiajs/inertia-react';

interface Props extends DefProps {
  meta: MetaPaginator;
}

const PaginationLinks = ({ meta, className }: Props) => {
  const $ = usePage();

  return (
    <div
      className={`w-full flex flex-col sm:flex-row gap-4 justify-between items-center px-8 ${className}`}
    >
      <div>
        <span>
          {__('pagination.result', {
            from: meta.from,
            to: meta.to,
            total: meta.total,
          })}
        </span>
      </div>
      <div className="flex gap-2 btn-group flex-col sm:flex-row">
        {meta?.links &&
          meta.links.map((link, i) => (
            <Link
              key={i}
              disabled={!link.url}
              href={link.url as string}
              className={`btn ${link.active ? 'btn-success' : 'btn-outline'}`}
              dangerouslySetInnerHTML={{
                __html: link.label,
              }}
            />
          ))}
      </div>
    </div>
  );
};

export default PaginationLinks;
