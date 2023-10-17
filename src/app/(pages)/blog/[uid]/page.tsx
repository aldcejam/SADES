import { SliceZone } from '@prismicio/react';
import { createClient } from '@base-project/prismicio';
import { components } from 'slices';

export default async function Page({ params }: any) {
  const client = createClient();

  const page = await client.getByUID('page', params.uid);

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateStaticParams() {
  const client = createClient();

  const pages = await client.getAllByType('page');

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
