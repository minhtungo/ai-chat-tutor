import {
  getChatHistory,
  getChatHistoryQueryOptions,
  useChatHistory,
} from '@/api/chat/chat-history';
import { ChatHistory } from '@/features/chat/components/chat-history';
import { NewChat } from '@/features/chat/components/new-chat';
import { useChat, useChatActions } from '@/store/chat';
import { createFileRoute } from '@tanstack/react-router';
import { useEffect } from 'react';

export const Route = createFileRoute('/_app/chat/$id')({
  component: RouteComponent,
  beforeLoad: async ({ context, params }) => {
    await context.queryClient.prefetchInfiniteQuery({
      queryKey: getChatHistoryQueryOptions(params.id).queryKey,
      initialPageParam: 0,
      queryFn: ({ pageParam }) =>
        getChatHistory({ pageParam, chatId: params.id }),
    });
  },
});

function RouteComponent() {
  const { id } = Route.useParams();
  const { clearMessages } = useChatActions();
  const { messages } = useChat();

  useEffect(() => {
    clearMessages();
  }, [id]);

  const { data: chatHistory } = useChatHistory(id);

  const allMessages = [
    ...(chatHistory?.pages.flatMap((page) => page.messages) ?? []),
    ...messages,
  ];

  if (allMessages.length === 0) {
    return <NewChat />;
  }

  return <ChatHistory messages={allMessages} />;
}
