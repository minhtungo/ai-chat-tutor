import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_app/profile/billing')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_app/profile/billing"!</div>;
}
