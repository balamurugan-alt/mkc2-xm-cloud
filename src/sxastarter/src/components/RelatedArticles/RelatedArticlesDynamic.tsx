import dynamic from 'next/dynamic';
import { RelatedArticlesProps } from './RelatedArticlesType.ts';

const RelatedArticlesDynamicNoSSR = dynamic(
  () => import('./RelatedArticles.tsx').then((module) => module.default),
  { ssr: false }
);

const RelatedArticlesDynamic = (props: RelatedArticlesProps) => {
  return (
    <div>
      <RelatedArticlesDynamicNoSSR {...props} />
    </div>
  );
};

export default RelatedArticlesDynamic;
