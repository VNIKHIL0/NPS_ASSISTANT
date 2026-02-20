"use client";

import dynamic from 'next/dynamic';

const ChatInterface = dynamic(
    () => import('@/components/ChatInterface').then((mod) => mod.ChatInterface),
    { ssr: false }
);

export default function ChatPage() {
    return <ChatInterface />;
}
