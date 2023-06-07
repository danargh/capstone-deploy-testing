import { atom, useAtom } from 'jotai';

export const sidebarAtom = atom(false);

const useSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useAtom(sidebarAtom);

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prev) => !prev);
 };

  return {
    isSidebarOpen,
    handleSidebarToggle,
  };
};

export default useSidebar;