import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { FloatingChat } from "@/components/ui/floating-chat";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import { ChatProvider } from "@/contexts/chat-context";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChatProvider>
        <Router />
        <FloatingChat />
        <Toaster />
      </ChatProvider>
    </QueryClientProvider>
  );
}

export default App;
