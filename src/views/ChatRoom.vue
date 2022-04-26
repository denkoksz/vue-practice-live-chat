<template>
  <div class="container">
    <Navbar/>
    <ChatWindow/>
    <NewChatForm/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import NewChatForm from "@/components/NewChatForm";
import ChatWindow from "@/components/ChatWindow";

export default {
  components: {ChatWindow, NewChatForm, Navbar}
}
</script>

