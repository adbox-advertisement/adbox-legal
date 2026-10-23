import { renderInline } from './inline-text';

export function Inline({ text }: { text: string }) {
  return <>{renderInline(text)}</>;
}
