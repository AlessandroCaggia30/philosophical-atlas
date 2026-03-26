import { texts } from '@/data/texts';
import ReadTextClient from './ReadTextClient';

export function generateStaticParams() {
  return texts.map(t => ({ id: t.id }));
}

export default async function ReadTextPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <ReadTextClient id={id} />;
}
