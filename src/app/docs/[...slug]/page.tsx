import { allDocs } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { Mdx } from '@/components/mdx-components';
import Breadcrumb from '@/components/bread-crumb';
import AutoToc from '@/components/auto-toc';
import EditThisPage from '@/components/edit-this-page';
import PrevNextNav from '@/components/prev-next-nav';
import { format, parseISO } from 'date-fns';

type tParams = Promise<{ slug: string[] }>;

/**
 * This route catches old-style unversioned URLs like /docs/getting-started/intro
 * and redirects them to the new versioned route /docs/current/getting-started/intro
 * for consistency with the new routing structure.
 */
export const generateStaticParams = async () => {
  return [];
};

const DocsPage = async ({ params }: { params: tParams }) => {
  const awaitedParams = await params;
  // Join the slug array back into a path string
  const path = awaitedParams.slug.join('/');
  const doc = allDocs.find((doc) => doc._raw.flattenedPath === path);

  if (!doc) notFound();
  return (
    <div className={`grid xl:grid xl:grid-cols-[1fr_270px]`}>
      <article className="overflow-auto">
        <div className="mb-8 text-center">
          <Breadcrumb path={doc.url} />
          {doc.date && (
            <time
              dateTime={doc.date}
              className="mt-2 block text-sm text-muted-foreground"
            >
              Last updated: {format(parseISO(doc.date), 'LLLL d, yyyy')}
            </time>
          )}
        </div>
        <Mdx code={doc.body.code} />
        <div className="mt-12 pt-6 border-t border-[var(--color-border)]">
          <EditThisPage filePath={doc._raw.flattenedPath} />
        </div>
        <PrevNextNav currentPath={doc.url} />
      </article>

      <AutoToc />
    </div>
  );
};

export default DocsPage;
