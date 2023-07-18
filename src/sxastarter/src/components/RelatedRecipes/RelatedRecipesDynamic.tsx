import dynamic from 'next/dynamic';
import { RelatedRecipesProps } from './RelatedRecipesType.ts';

const RelatedRecipesDynamicNoSSR = dynamic(
  () => import('./RelatedRecipes.tsx').then((module) => module.default),
  { ssr: false }
);

const RelatedRecipesDynamic = (props: RelatedRecipesProps) => {
  return (
    <div>
      <RelatedRecipesDynamicNoSSR {...props} />
    </div>
  );
};

export default RelatedRecipesDynamic;
