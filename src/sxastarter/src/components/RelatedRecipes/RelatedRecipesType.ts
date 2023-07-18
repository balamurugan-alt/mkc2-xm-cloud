import { ComponentProps } from 'lib/component-props';
import { Field, ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';

export type RelatedRecipesProps = ComponentProps & {
  fields: {
    items: {
      fields: {
        Title: Field<string>;
        Link: LinkField;
        Image: ImageField;
      };
    }[];
  };
};
