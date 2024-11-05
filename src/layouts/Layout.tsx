import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header.tsx";
import Modal from "../components/Modal.tsx";
import Notification from "../components/Notification.tsx";
import { useAppStore } from "../stores/useAppStore.ts";

const Layout = () => {
  const loadFromStorage = useAppStore((state) => state.loadFromStorage);

  useEffect(() => {
    loadFromStorage();
  }, []);

  return (
    <>
      <Header />
      <main className={"container mx-auto py-16"}>
        <Outlet />
      </main>
      <Modal />
      <Notification />
    </>
  );
};

export default Layout;
