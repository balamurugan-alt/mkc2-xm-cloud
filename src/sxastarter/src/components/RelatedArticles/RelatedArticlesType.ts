import { Field, ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

export type RelatedArticlesProps = ComponentProps & {
  fields: {
    items: {
      fields: {
        Title: Field<string>;
        Details: Field<string>;
        Link: LinkField;
        Image: ImageField;
      };
    }[];
  };
};
